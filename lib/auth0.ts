// lib/auth0.js

import { initAuth0 } from "@auth0/nextjs-auth0/edge";

export const auth0 = initAuth0({
  authorizationParams: { scope: "openid profile email" },
});
