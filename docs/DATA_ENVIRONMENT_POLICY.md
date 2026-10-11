# Data Environment Policy

## 1. Core Principle
**NO DEMO DATA MAY APPEAR ON THE PUBLIC PRODUCTION WEBSITE.**
The JKB 2026 digital platform enforces strict separation between Development/Staging environments and Production.

## 2. Environment Types
- **Development/Staging (`NODE_ENV !== 'production'`):** May contain clearly labeled demo data (e.g., "Fighter Demo 01", simulated brackets, test PPV entitlements) for QA and design verification.
- **Production (`NODE_ENV === 'production'`):** Must contain ONLY official event information, approved fighter records, actual user activity, and genuine commercial transactions.

## 3. Technical Enforcement
- **Database Isolation:** Production must use a separate, strictly access-controlled database instance. Staging and production databases will never share credentials.
- **Seed Scripts:** Database seeding scripts will check the `NODE_ENV`. If `NODE_ENV === 'production'`, the seed script will safely abort or only seed essential structural roles (e.g., `SUPER_ADMIN`). It will **never** inject mock fighters, votes, or merchandise into production.
- **Content Publication States:** All public-facing queries include a filter for `isPublished: true`. Drafts or embargoed content (like unannounced musicians) remain invisible to the public API and static generation.
- **Safe Migrations:** Prisma migrations are applied carefully. Destructive changes in production require manual review.

## 4. Operational Guidelines
- Operators must use the Admin Command Center (`/admin`) to transition content from draft to published.
- Test accounts used in staging will be purged or disabled before production launch.
- No developer or QA engineer is permitted to test live payment gateways or live voting with real user sessions in the production database without an explicit maintenance window.
