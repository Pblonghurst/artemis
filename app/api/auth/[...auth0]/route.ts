// app/api/auth/[...auth0]/route.ts
export const runtime = "nodejs";   // ← ensure Node.js runtime

import { handleAuth } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  async onError(req, res, error) {
    console.error("🔥 Auth0 handler error:", error);
    res.status(error.status || 500).json({ message: error.message });
  }
});
export const POST = GET;
