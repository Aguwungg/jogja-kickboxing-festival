# Test Report

## Overview
This document will track the outcomes of automated and manual tests across all modules.

## Test Scenarios

### Authentication & Authorization
- [ ] Admin login/logout.
- [ ] Rejection of unauthorized admin access.
- [ ] Session expiration revokes access.

### CMS
- [ ] Admin publishes homepage content.
- [ ] Scheduled content remains hidden before release.

### Championship
- [ ] Admin creates a fighter.
- [ ] Admin schedules a match.
- [ ] Operator updates a match result.
- [ ] Public bracket reflects the updated result.

### Creator Hub
- [ ] Creator creates an account.
- [ ] Creator submits content.
- [ ] Admin reviews the submission.
- [ ] Leaderboard reflects approved points.
- [ ] Creator barcode remains pending until verified.

### City Pride
- [ ] Verified user submits an eligible vote.
- [ ] Duplicate voting is rejected.

### E-Commerce
- [ ] Buyer adds merchandise to cart.
- [ ] Buyer creates an order.
- [ ] Test payment webhook updates order state.
- [ ] Duplicate webhook does not duplicate fulfillment.

### PPV
- [ ] Unpaid viewer cannot access PPV.
- [ ] Authorized test viewer receives correct PPV entitlement.

### General
- [ ] Public pages work on mobile.
