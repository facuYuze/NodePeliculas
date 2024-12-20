import client from '../db/dbconfig.js'; 

class PeliculasService {
   
    static async obtenerPorGenero(genero) {
        try {
            const query = `
                SELECT * FROM peliculas 
                WHERE LOWER(genero) = $1 
                ORDER BY nombre ASC;
            `;
            const { rows } = await client.query(query, [genero.toLowerCase()]);
            return rows;
        } catch (error) {
            console.error('Error al buscar por género:', error);
            throw error;
        }
    }

    static async obtenerAlAzar() {
        try {
            const query = `
                SELECT * FROM peliculas 
                ORDER BY RANDOM() 
                LIMIT 1;
            `;
            const { rows } = await client.query(query);
            console.log(query);
            console.log(rows);
            return rows[0];
        } catch (error) {
            console.error('Error al buscar película al azar:', error);
            throw error; 
        }
    }
    

    static async crearPelicula(nuevaPelicula) {
        try {
            const { nombre, sinopsis, genero, duracionenminutos, director } = nuevaPelicula;
            const fechaEstreno = new Date().toISOString();
            const query = `
                INSERT INTO peliculas (nombre, sinopsis, genero, duracionenminutos, director, fechaestreno) 
                VALUES ($1, $2, $3, $4, $5, $6) 
                RETURNING *;
            `;
            const { rows } = await client.query(query, [nombre, sinopsis, genero, duracionenminutos, director, fechaEstreno]);
            return rows[0]; 
        } catch (error) {
            console.error('Error al crear película:', error);
            throw error;
        }
    }
   
}

export default PeliculasService;
