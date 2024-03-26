import { jwtVerifyToken } from "../controllers/helpers/jwtToken.js";
import dotenv from "dotenv";
dotenv.config();

// This middleware doesn't need to be used in `authRoutes` BUT it's an authentication middleware FOR OTHER routes.
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).json({ message: "Access denied. Log in first" });
    }

    const decoded = await jwtVerifyToken(token);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Attaching the decoded user information to the request object for further use in other middleware or route handlers
    req.user = decoded;
    
    next();
  } catch (err) {
    console.error("Error in authMiddleware:", err.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export { authMiddleware };
