# Test Credentials — BLOWUP studio

No authentication in this app (public marketing site).

- Backend API base: `${REACT_APP_BACKEND_URL}/api`
- Public endpoints:
  - GET  /api/health
  - POST /api/contact   { name, email, phone?, topic, message }
  - GET  /api/contacts  (returns stored inquiries)
- MongoDB: local, DB_NAME=blowup_studio, collection `contacts`

No admin/user accounts to seed.
