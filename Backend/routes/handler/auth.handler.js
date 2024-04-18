import { Router } from "express";
import controller from "../../controllers/controller.js";

const authRouter = Router();

authRouter.post("/register", controller.register);
authRouter.post("/login", controller.login);
authRouter.delete("/logout", controller.logout);

authRouter.get("/getUsers");
// authRouter.put();
// authRouter.delete();

export default authRouter;
