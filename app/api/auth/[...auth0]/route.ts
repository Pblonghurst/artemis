// app/api/auth/[...auth0]/route.ts
import { handleAuth } from "@auth0/nextjs-auth0";

// (optional) ensure this runs in the Node.js runtime
export const runtime = "nodejs";

export const GET  = handleAuth();
export const POST = handleAuth();
