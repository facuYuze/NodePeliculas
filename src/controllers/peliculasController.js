import PeliculasService from '../services/peliculasService.js';

class PeliculasController {
    static actualizarDuracion(req, res) {
        const { minutos } = req.body;
        const peliculasActualizadas = PeliculasService.actualizarDuracion(minutos);
        res.status(200).json(peliculasActualizadas);
    }

    static obtenerPorGenero(req, res) {
        const { gen } = req.query;
        const peliculasPorGenero = PeliculasService.obtenerPorGenero(gen);
        res.status(200).json(peliculasPorGenero);
    }

    static obtenerAlAzar(req, res) {
        const pelicula = PeliculasService.obtenerAlAzar();
        res.status(200).json(pelicula);
    }

    static crearPelicula(req, res) {
        const nuevaPelicula = PeliculasService.crearPelicula(req.body);
        res.status(201).json(nuevaPelicula);
    }
}

export default PeliculasController;
