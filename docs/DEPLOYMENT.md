# Deployment & Operations

## Infrastructure Requirements
- **Node.js Environment**: Compatible with Next.js 15 (e.g., Vercel, AWS Amplify, or custom VPS with Docker).
- **Database**: PostgreSQL 14+ (e.g., Supabase, Neon, RDS).
- **Storage**: S3-compatible storage for media uploads (images, merch photos).
- **Caching/CDN**: Vercel Edge Network or Cloudflare.

## Docker Deployment (VPS)
A `Dockerfile` and `docker-compose.yml` will be provided for containerized deployment.

### Steps
1. Build the image: `docker build -t jkb-platform .`
2. Configure `.env.production` with live database credentials and integration keys.
3. Run migrations: `npx prisma migrate deploy`
4. Start the container: `docker run -p 3000:3000 --env-file .env.production jkb-platform`

## CI/CD
- GitHub Actions configured to run linting and Vitest/Playwright tests on PRs.
- Automatic deployment to staging on push to `main`.
