"""Backend API tests for BLOWUP studio."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read from frontend/.env
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


@pytest.fixture(scope="module")
def created_contact(session):
    """Create one contact once and share it across the contact tests."""
    payload = {
        "name": "TEST_Patrick QA",
        "email": "test_qa_blowup@example.com",
        "phone": "+4500000000",
        "topic": "Booking",
        "message": "TEST_message_blowup_studio_pytest",
    }
    r = session.post(f"{API}/contact", json=payload, timeout=20)
    assert r.status_code == 200, r.text
    body = r.json()
    return {"id": body.get("id"), "payload": payload, "body": body}


# --- Health ---
class TestHealth:
    def test_health_ok(self, session):
        r = session.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "service" in data


# --- Contact create + list (split into single-behaviour tests) ---
class TestContact:
    def test_create_returns_success_and_id(self, created_contact):
        body = created_contact["body"]
        assert body.get("success") == True
        assert isinstance(body.get("id"), str) and len(body["id"]) > 0

    def test_list_exposes_id_not_underscore(self, session):
        r = session.get(f"{API}/contacts", timeout=20)
        assert r.status_code == 200
        contacts = r.json()
        assert isinstance(contacts, list)
        for c in contacts:
            assert "_id" not in c, f"Response should NOT contain `_id`, got: {c}"
            assert isinstance(c.get("id"), str) and len(c["id"]) > 0

    def test_created_contact_appears_in_list(self, session, created_contact):
        r = session.get(f"{API}/contacts", timeout=20)
        assert r.status_code == 200
        contacts = r.json()
        match = [c for c in contacts if c.get("id") == created_contact["id"]]
        assert len(match) == 1, f"Created contact not found (id={created_contact['id']})"
        c = match[0]
        p = created_contact["payload"]
        assert c["name"] == p["name"]
        assert c["email"] == p["email"]
        assert c["topic"] == p["topic"]
        assert c["message"] == p["message"]
        assert c.get("created_at")

    def test_create_contact_minimal_defaults(self, session):
        payload = {
            "name": "TEST_minimal",
            "email": "minimal@test.dk",
            "message": "TEST_minimal_msg",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200
        assert r.json().get("success") == True

    def test_create_contact_invalid_missing_fields(self, session):
        r = session.post(f"{API}/contact", json={"name": "TEST_x"}, timeout=20)
        # missing required email/message
        assert r.status_code in (400, 422), r.text
