import { config } from "dotenv";

config();

export const SERVER_PORT = process.eventNames.SERVER_PORT || 3000;

export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "Juniortupapa10";
export const DB_DATABASE = process.env.DB_DATABASE || "companyDB";
