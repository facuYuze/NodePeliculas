import { peliculas } from '../db/memoryDatabase.js';

class PeliculasService {
    static actualizarDuracion(minutos) {
        peliculas.forEach((pelicula) => {
            pelicula.duracionEnMinutos += minutos;
        });
        return peliculas;
    }

    static obtenerPorGenero(genero) {
        return peliculas
            .filter((pelicula) => pelicula.genero.toLowerCase() === genero.toLowerCase())
            .sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    static obtenerAlAzar() {
        const randomIndex = Math.floor(Math.random() * peliculas.length);
        return peliculas[randomIndex];
    }

    static crearPelicula(nuevaPelicula) {
        const id = peliculas.length + 1;
        const fechaEstreno = new Date().toISOString();
        const pelicula = { id, ...nuevaPelicula, fechaEstreno };
        peliculas.push(pelicula);
        return pelicula;
    }
}

export default PeliculasService;
