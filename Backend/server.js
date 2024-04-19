import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { router } from "./routes/routes.js";
import { PORT } from "./config/config.js";

const app = express();

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

app.listen(PORT || 8000, () => {
  console.log(`App running on ${PORT}`);
});
