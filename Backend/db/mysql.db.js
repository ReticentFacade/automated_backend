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

const pool = mysql.createPool({
  connectionLimit: 10,
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
});

const mysqlConnection = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to MySQL DB:", err);
      return;
    }
    console.log("Connected to MySQL DB successfully...");

    const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${MYSQL_DB}`;
    connection.query(createDbQuery, (err) => {
      if (err) {
        console.error("Error creating database:", err);
        connection.release();
        return;
      }
      console.log(`${MYSQL_DB} created successfully...`);
      useDatabase(connection);
    });
  });
};

const useDatabase = (connection) => {
  const useDbQuery = `USE ${MYSQL_DB}`;
  connection.query(useDbQuery, (err) => {
    if (err) {
      console.error("Error selecting database:", err);
      connection.release();
      return;
    }
    console.log(`Now using ${MYSQL_DB}...`);
    createUserTable(connection);
  });
};

const createUserTable = (connection) => {
  const query = `CREATE TABLE IF NOT EXISTS users (${Object.entries(userSchema)
    .map(([key, value]) => `${key} ${value}`)
    .join(", ")})`;

  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error("Error creating users table:", err);
      connection.release();
      return;
    }
    console.log(`Users table created successfully`);
    connection.release();
  });
};

const insertUser = (userData) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error getting connection from pool:", err);
      return;
    }

    const { username, email, password } = userData;
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    connection.query(
      query,
      [username, email, password],
      (err, results, fields) => {
        if (err) {
          console.error("Error inserting user:", err);
          connection.release();
          return;
        }
        console.log("User inserted successfully");
        connection.release();
      }
    );
  });
};

export { mysqlConnection, insertUser };
