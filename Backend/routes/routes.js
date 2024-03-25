import { Router } from "express";
import apiRouter from "./handler/handler.js";

const router = Router();

router.use("/api/", apiRouter);
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

export { router };
