import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ===============================
// SAFE REDIS INIT (ANTI ERROR BUILD)
// ===============================
let ratelimit: {
  limit: (identifier: string) => Promise<{ success: boolean }>;
};

if (
  process.env.UPSTASH_REDIS_REST_URL &&
  process.env.UPSTASH_REDIS_REST_TOKEN
) {
  // ✅ kalau ENV ada → pakai Redis
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });

  ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "10 s"),
  });
} else {
  // ✅ fallback (tidak error walau Redis belum ada)
  ratelimit = {
    limit: async () => {
      return { success: true };
    },
  };
}

export { ratelimit };