import express from 'express';
import dotenv from 'dotenv';
import peliculasRouter from './src/routers/peliculasRouter.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


app.use('/api/peliculas', peliculasRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
