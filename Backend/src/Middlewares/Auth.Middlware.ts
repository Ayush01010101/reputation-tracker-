import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

export const requireAuth = (req, res, next) => {
  const clerkMiddleware = ClerkExpressRequireAuth();

  clerkMiddleware(req, res, (err) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Clerk ne auth attach kar diya hoga
    console.log("User ID:", req.auth?.userId);

    next();
  });
};

