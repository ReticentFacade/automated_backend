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

export const POSTGRES_DB = process.env.POSTGRES_DB;
export const POSTGRES_USER = process.env.POSTGRES_USER;
export const POSTGRES_HOST = process.env.POSTGRES_HOST;
export const POSTGRES_PASS = process.env.POSTGRES_PASS;
export const POSTGRES_PORT = process.env.POSTGRES_PORT;
