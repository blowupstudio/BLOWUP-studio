import os
from datetime import datetime, timezone
from pathlib import Path
from typing import Annotated, Any, List, Optional

from bson import ObjectId
from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, BeforeValidator, ConfigDict, Field

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]


def to_str_id(v: Any) -> Any:
    if isinstance(v, ObjectId):
        return str(v)
    return v


PyObjectId = Annotated[str, BeforeValidator(to_str_id)]


class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    topic: str = "Booking"
    message: str


class Contact(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    id: Optional[PyObjectId] = Field(default=None, alias="_id")
    name: str
    email: str
    phone: Optional[str] = ""
    topic: str
    message: str
    created_at: str


app = FastAPI(title="BLOWUP studio API")
api = APIRouter(prefix="/api")


@api.get("/health")
async def health():
    return {"status": "ok", "service": "blowup-studio"}


@api.post("/contact")
async def create_contact(payload: ContactCreate):
    doc = payload.model_dump()
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.contacts.insert_one(doc)
    return {"success": True, "id": str(result.inserted_id)}


@api.get("/contacts", response_model=List[Contact], response_model_by_alias=False)
async def list_contacts():
    docs = await db.contacts.find().sort("created_at", -1).to_list(200)
    return [Contact.model_validate(d) for d in docs]


app.include_router(api)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
