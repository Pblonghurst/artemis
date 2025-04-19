// lib/auth0.js

import { initAuth0 } from "@auth0/nextjs-auth0/edge";

export const auth0 = initAuth0({
  baseURL:        process.env.AUTH0_BASE_URL!,
  issuerBaseURL:  process.env.AUTH0_ISSUER_BASE_URL!,
  clientID:       process.env.AUTH0_CLIENT_ID!,
  clientSecret:   process.env.AUTH0_CLIENT_SECRET!,
  secret:         process.env.AUTH0_SECRET!,
  authorizationParams: { scope: "openid profile email" },
});
