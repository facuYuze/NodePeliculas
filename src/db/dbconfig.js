import dotenv from 'dotenv';
import pg from 'pg';
dotenv.config();

const { Client } = pg;

const client = new Client({
    host: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
});

client.connect()
    .then(() => console.log('Conexión exitosa a PostgreSQL'))
    .catch((err) => console.error('Error al conectar a PostgreSQL:', err));

export default client;
