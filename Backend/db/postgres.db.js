import { Sequelize } from "sequelize";
import {
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_PASS,
  POSTGRES_PORT,
} from "../config/config.js";

if (!POSTGRES_DB || !POSTGRES_USER || !POSTGRES_HOST || !POSTGRES_PASS)
  throw new Error("Couldn't load env variables");

const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASS, {
  host: POSTGRES_HOST,
  password: POSTGRES_PASS,
  dialect: "postgres",
  dialectOptions: {
    decimalNumbers: true, // instructs sequelize to parse decimal numbers as floats (Javascript decimal objects) instead of strings - helps avoid rounding errors
  },
  logging: false, // It's hidden by default
});

// Create DB:
async function createDatabase() {
  try {
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${POSTGRES_DB}`);
    console.log("Postgres DB created successfully");
  } catch (err) {
    console.error("Error creating Postgres DB:", err);
  }
}

sequelize
  .authenticate()
  .then(() => console.log("Postgres connection established successfully"))
  .catch((err) => {
    console.log("Error connecting to Postgres db:", err);
  });

export default sequelize;
