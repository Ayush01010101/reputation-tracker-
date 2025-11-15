import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

export const requireAuth = (req, res, next) => {
  ClerkExpressRequireAuth()(req, res, (err) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  });
};


