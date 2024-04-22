import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;

export const SECRET_KEY = process.env.SECRET_KEY;
export const SECRET_IV = process.env.SECRET_IV;
export const ENCRYPTION_METHOD = process.env.ENCRYPTION_METHOD;

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export const REDIS_PORT = process.env.REDIS_PORT;
export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PASS = process.env.REDIS_PASS;

export const MYSQL_PORT = process.env.MYSQL_PORT;
export const MYSQL_DB = process.env.MYSQL_DB;
export const MYSQL_HOST = process.env.MYSQL_HOST;
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_PASS = process.env.MYSQL_PASS;
