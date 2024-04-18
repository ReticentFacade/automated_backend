import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./routes/routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "*",
  methods: "HEAD, GET, POST, PUT, DELETE, PATCH",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
