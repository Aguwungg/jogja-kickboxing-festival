# Integrations & External Services

## Ticketing (Rawooh)
- **Status**: Not Integrated (Excluded from current scope).
- **Implementation**: Abstraction layer prepared. Do NOT simulate live ticketing.

## Payment Gateway (Midtrans / Xendit)
- **Status**: Pending Configuration.
- **Implementation**: Service adapter pattern. Verify webhooks server-side.
- **Environment**: Sandbox currently required.

## PPV Video Streaming
- **Status**: Pending Provider Selection.
- **Implementation**: Assume HLS or signed player URL. Validate access via entitlements.
- **Environment**: Test stream placeholder required.

## Email Delivery
- **Status**: Pending Provider (Resend / SendGrid).
- **Implementation**: Transactional emails for order confirmation and creator verification.

## Storage
- **Status**: Pending S3 configuration.
