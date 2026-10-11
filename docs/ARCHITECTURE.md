# System Architecture

## Overview
The Jogja Kickboxing Festival & Redy Championship 2 (JKB 2026) digital platform is built as a production-grade modular-monolith using modern web technologies. 

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS & shadcn/ui
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js (or equivalent session-based auth)

## High-Level Components
1. **Public Marketing Website**: Next.js SSR/SSG pages for SEO and performance.
2. **Admin Command Center**: Secure, client-side rendered (where appropriate) dashboard for managing content, users, and e-commerce.
3. **E-Commerce Module**: Handles merchandise listing, cart management, checkout, and inventory.
4. **Fighter & Match Management**: Database-driven bracket and schedule system.
5. **Creator Hub**: Portal for content creators to submit and track their campaign points.
6. **PPV Platform**: Integrated pay-per-view access control (video streaming outsourced).

## Design System
- **Theme**: "DI BALIK KALEM"
- **Colors**: Near-black (#0B0B0F), Charcoal (#17181D), Combat Red (#D21F2B), Off-white (#F6F3EC), Muted gray (#90929A)
- **Typography**: Barlow Condensed (Display), Inter (Body)

## Caching and Performance
- CDN for static assets.
- Redis (optional, based on scale) for rate-limiting and temporary state.
- Next.js built-in caching for mostly static pages.
