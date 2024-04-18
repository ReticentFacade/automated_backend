import dotenv from "dotenv";
dotenv.config();

export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PW = process.env.REDIS_PW;
export const REDIS_PORT = process.env.REDIS_PORT;