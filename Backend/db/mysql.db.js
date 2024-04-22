import mysql from "mysql";
import {
  MYSQL_DB,
  MYSQL_USER,
  MYSQL_HOST,
  MYSQL_PASS,
} from "../config/config.js";
import userSchema from "../schemas/userSchema.js";

if (!MYSQL_DB || !MYSQL_USER || !MYSQL_HOST || !MYSQL_PASS)
  throw new Error("Couldn't load env variables");

const client = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
});

const mysqlConnection = () => {
  client.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL DB:", err);
      return;
    }
    console.log("Connected to MySQL DB successfully");

    const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`;
    client.query(createDbQuery, (err) => {
      if (err) {
        console.error("Error creating database:", err);
        return;
      }
      console.log(`${MYSQL_DB} created successfully...`);
      useDatabase();
    });
  });
};

const useDatabase = () => {
  const useDbQuery = `USE ${MYSQL_DB}`;
  client.query(useDbQuery, (err) => {
    if (err) {
      console.error("Error selecting database:", err);
      return;
    }
    console.log(`Now using ${MYSQL_DB}...`);
    createUserTable();
  });
};

const createUserTable = () => {
  const query = `CREATE TABLE IF NOT EXISTS users (${Object.entries(userSchema)
    .map(([key, value]) => `${key} ${value}`)
    .join(", ")})`;

  client.query(query, (err, results, fields) => {
    if (err) {
      console.error("Error creating users table:", err);
      return;
    }
    console.log(`Users table created successfully`);
  });
};

const insertUser = (userData) => {
  const { username, email, password } = userData;
  const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
  client.query(query, [username, email, password], (err, results, fields) => {
    if (err) {
      console.error("Error inserting user:", err);
      return;
    }
    console.log("User inserted successfully");
  });
};

export { mysqlConnection, insertUser };
