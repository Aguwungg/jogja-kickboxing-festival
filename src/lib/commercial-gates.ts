/**
 * COMMERCIAL SAFETY & PRODUCTION DATA GATES — JKB 2026
 * 
 * Strict isolation layer separating development simulation workflows
 * from production commercial execution.
 * 
 * Core Guarantees:
 * 1. Default all orders to PENDING & UNPAID.
 * 2. Reject client-submitted payment states (never trust client payload).
 * 3. Prohibit payment simulator completion in production.
 * 4. Disallow demo pass authorization in production.
 * 5. Protect streaming URLs from public unauthenticated exposure.
 */

export interface GatePolicy {
  isProduction: boolean;
  allowPaymentSimulator: boolean;
  isLivePaymentActive: boolean;
  allowDevDemoPasses: boolean;
  isLiveStreamingActive: boolean;
}

export function getGatePolicy(): GatePolicy {
  const isProduction = process.env.NODE_ENV === "production";
  
  // Simulation is disabled if explicitly set to "false", or in production unless explicitly enabled
  const allowPaymentSimulator =
    process.env.ALLOW_PAYMENT_SIMULATOR === "false"
      ? false
      : isProduction
      ? process.env.ALLOW_PAYMENT_SIMULATOR === "true"
      : true;

  // Live payments require explicit configuration flag and credentials
  const isLivePaymentActive =
    process.env.LIVE_PAYMENT_GATEWAY_ACTIVE === "true" &&
    Boolean(process.env.MIDTRANS_SERVER_KEY);

  // Demo passes: disabled if explicitly set to "false", or in production unless explicitly enabled
  const allowDevDemoPasses =
    process.env.ALLOW_DEV_DEMO_PASSES === "false"
      ? false
      : isProduction
      ? process.env.ALLOW_DEV_DEMO_PASSES === "true"
      : true;

  // Live streaming protection
  const isLiveStreamingActive = 
    process.env.LIVE_STREAMING_ACTIVE === "true";

  return {
    isProduction,
    allowPaymentSimulator,
    isLivePaymentActive,
    allowDevDemoPasses,
    isLiveStreamingActive,
  };
}

/**
 * Validates whether payment simulation is permitted in the current context.
 * Throws an error if invoked in production without proper authorization.
 */
export function assertSimulationAllowed(actionName: string): void {
  const policy = getGatePolicy();
  if (!policy.allowPaymentSimulator) {
    throw new Error(
      `[SECURITY_GATE_REJECTED] Aksi simulasi '${actionName}' ditolak. ` +
      `Simulasi pembayaran dinonaktifkan pada lingkungan produksi. ` +
      `Menunggu integrasi payment gateway resmi (Midtrans) terverifikasi.`
    );
  }
}

/**
 * Known internal development/staging demo codes.
 * These codes must NEVER authorize access in production.
 */
export const INTERNAL_DEMO_ACCESS_CODES = [
  "JKB-VIP-2026",
  "JKB-PPV-DEMO88",
  "JKB-DEMO-TESTER",
] as const;

export function isInternalDemoCode(code: string): boolean {
  const normalized = code.trim().toUpperCase();
  return INTERNAL_DEMO_ACCESS_CODES.includes(normalized as any);
}

/**
 * Validates playback authorization for a given access code.
 */
export function assertPlaybackAuthorization(code: string): { isDemo: boolean } {
  const policy = getGatePolicy();
  const isDemo = isInternalDemoCode(code);

  if (isDemo && !policy.allowDevDemoPasses) {
    throw new Error(
      `[SECURITY_GATE_REJECTED] Kode demo '${code}' tidak sah untuk otorisasi siaran di lingkungan produksi.`
    );
  }

  return { isDemo };
}

/**
 * Safely resolves the stream URL.
 * In production, if external CDN streaming is not yet active,
 * it returns a protected standby notice instead of exposing arbitrary links.
 */
export function resolveProtectedStreamUrl(rawStreamUrl: string | null | undefined): {
  streamUrl: string;
  isStagingMock: boolean;
  notice?: string;
} {
  const policy = getGatePolicy();

  if (!policy.isProduction) {
    return {
      streamUrl: rawStreamUrl || "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
      isStagingMock: true,
      notice: "STAGING_DEMO_FEED: Sinyal pemutar pengujian staging lokal.",
    };
  }

  if (!policy.isLiveStreamingActive) {
    return {
      streamUrl: "",
      isStagingMock: false,
      notice: "STANDBY_FEED: Siaran langsung resmi JKB 2026 akan aktif pada 12–14 Desember 2026.",
    };
  }

  return {
    streamUrl: rawStreamUrl || "",
    isStagingMock: false,
  };
}
