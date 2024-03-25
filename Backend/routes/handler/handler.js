import { Router } from "express";
import authRouter from "./auth.handler.js";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);

export default apiRouter;
