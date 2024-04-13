import { config } from "dotenv";

config();

export default {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    DATABASE: process.env.DB_NAME,
};