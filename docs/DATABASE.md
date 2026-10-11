# Database Schema (ERD Specification)

## Overview
The database uses PostgreSQL and Prisma ORM.

## Core Models

### Authentication & Users
- `User`: id, email, passwordHash, role, createdAt, updatedAt
- `Session`: id, userId, token, expiresAt
- `VerificationToken`: identifier, token, expiresAt

### CMS & Marketing
- `Campaign`: id, name, startDate, endDate, status
- `ContentBlock`: id, key, content, type, isPublished, scheduledAt
- `Announcement`: id, title, content, publishedAt

### E-Commerce
- `Product`: id, name, description, price, isActive
- `ProductVariant`: id, productId, size, color, stockQuantity
- `Order`: id, userId, totalAmount, status, paymentStatus, createdAt
- `OrderItem`: id, orderId, variantId, quantity, price

### Championship & Athletes
- `Athlete`: id, name, weightClass, division, club, record, image
- `Match`: id, athlete1Id, athlete2Id, category, scheduledAt, status, winnerId
- `Tournament`: id, name, format, status

### Creator Hub
- `CreatorProfile`: id, userId, instagram, tiktok, status, totalPoints
- `Submission`: id, creatorId, url, platform, status, points, campaignId
- `BarcodeClaim`: id, creatorId, barcode, status

### City Pride Voting
- `VotingCampaign`: id, name, startDate, endDate
- `Vote`: id, userId, campaignId, choice, createdAt

### PPV
- `PPVProduct`: id, name, price, streamUrl (nullable)
- `Entitlement`: id, userId, ppvId, status, expiresAt
