# Security & Privacy Requirements

## Authentication & Authorization
- Implement role-based access control (RBAC).
- Validate all administrative privileges strictly on the server (API endpoints and server actions).
- Secure password hashing (Argon2 or bcrypt).
- Secure session management with HttpOnly, Secure cookies.

## Data Protection
- Prevent SQL injection (natively handled by Prisma).
- Output encoding and XSS protection (natively handled by React).
- Implement CSRF controls where appropriate.
- Protect sensitive data (PII, passwords). No raw credit card data storage.

## Application Security
- Rate limiting on authentication and voting endpoints.
- File upload validation (type, size, content) for creator submissions and CMS media.
- Brute-force protection for logins.

## Privacy
- Do not collect unnecessary personal data.
- Enforce GDPR/PDPA compliant consent mechanisms where applicable.
- Provide secure account deletion flows.
