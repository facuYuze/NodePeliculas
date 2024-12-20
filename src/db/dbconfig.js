import dotenv from "dotenv";
dotenv.config();

const config = {
    host: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432
};
export default config;