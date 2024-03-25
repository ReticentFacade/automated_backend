import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express());

app.listen(PORT || 5000, () => {
  console.log(`App running on ${PORT}`);
});
