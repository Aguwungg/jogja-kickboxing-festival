/**
 * Rate Limiter Architecture for JKB 2026
 * 
 * Note: The in-memory Map implementation below is designed for single-node / development.
 * For multi-instance horizontal cloud deployments, plug in the shared RateLimiterStore
 * interface (e.g. Upstash Redis / Redis cluster) to synchronize limits across serverless instances.
 */

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export interface RateLimiterStore {
  check(key: string, limit: number, windowMs: number): Promise<RateLimitResult> | RateLimitResult;
}

type RateLimitRecord = {
  count: number;
  resetTime: number;
};

// In-Memory store for local development / single instance
class MemoryRateLimiterStore implements RateLimiterStore {
  private trackers = new Map<string, RateLimitRecord>();

  constructor() {
    if (typeof setInterval !== "undefined") {
      setInterval(() => {
        const now = Date.now();
        for (const [key, record] of this.trackers.entries()) {
          if (now > record.resetTime) {
            this.trackers.delete(key);
          }
        }
      }, 5 * 60 * 1000);
    }
  }

  check(key: string, limit: number, windowMs: number): RateLimitResult {
    const now = Date.now();
    const record = this.trackers.get(key);

    if (!record || now > record.resetTime) {
      this.trackers.set(key, {
        count: 1,
        resetTime: now + windowMs,
      });
      return {
        success: true,
        limit,
        remaining: limit - 1,
        reset: Math.ceil((now + windowMs) / 1000),
      };
    }

    if (record.count >= limit) {
      return {
        success: false,
        limit,
        remaining: 0,
        reset: Math.ceil(record.resetTime / 1000),
      };
    }

    record.count += 1;
    return {
      success: true,
      limit,
      remaining: limit - record.count,
      reset: Math.ceil(record.resetTime / 1000),
    };
  }
}

const defaultStore = new MemoryRateLimiterStore();

export function rateLimit(
  key: string,
  options: { limit?: number; windowMs?: number; store?: RateLimiterStore } = {}
): RateLimitResult {
  const limit = options.limit ?? 5;
  const windowMs = options.windowMs ?? 60 * 1000;
  const store = options.store ?? defaultStore;

  return store.check(key, limit, windowMs) as RateLimitResult;
}

/**
 * Safely resolves client IP from headers, sanitizing untrusted proxy inputs
 */
export function getSanitizedClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((s) => s.trim());
    // Take leftmost IP and validate IPv4/IPv6 basic shape
    const firstIp = parts[0];
    if (/^[0-9a-fA-F:.]+$/.test(firstIp) && firstIp.length <= 45) {
      return firstIp;
    }
  }

  const realIp = headers.get("x-real-ip");
  if (realIp && /^[0-9a-fA-F:.]+$/.test(realIp) && realIp.length <= 45) {
    return realIp.trim();
  }

  return "127.0.0.1";
}
