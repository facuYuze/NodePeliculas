import PeliculasService from '../services/peliculasService.js';

class PeliculasController {

    static async obtenerPorGenero(req, res) {
        const { gen } = req.query;
        const peliculasPorGenero = await PeliculasService.obtenerPorGenero(gen);
        res.status(200).json(peliculasPorGenero);
    }

    static async obtenerAlAzar(req, res) {
        const pelicula = await PeliculasService.obtenerAlAzar();
        res.status(200).json(pelicula);
    }

    static async crearPelicula(req, res) {
        const nuevaPelicula = await PeliculasService.crearPelicula(req.body);
        res.status(201).json(nuevaPelicula);
    }
}

export default PeliculasController;
