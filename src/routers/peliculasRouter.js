import { Router } from 'express';
import PeliculasController from '../controllers/peliculasController.js'; 

const router = Router();


router.put('/', PeliculasController.actualizarDuracion);
router.get('/', PeliculasController.obtenerPorGenero);
router.get('/azar', PeliculasController.obtenerAlAzar);
router.post('/', PeliculasController.crearPelicula);

export default router;

