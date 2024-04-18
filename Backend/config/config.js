import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const SECRET_KEY = process.env.SECRET_KEY;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const SECRET_IV = process.env.SECRET_IV;
export const ENCRYPTION_METHOD = process.env.ENCRYPTION_METHOD;

export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PW = process.env.REDIS_PW;
export const REDIS_PORT = process.env.REDIS_PORT;