import { Router } from "express";
import { deleteCategorias, getCategorias, getCategoryId, postCategorias, putCategorias } from './../controllers/controller.category.js';
import { validarToken } from "../controllers/controller.auth.js";

const routeCategory = Router()

routeCategory.get('/categoria', getCategorias)
routeCategory.post('/categoria', postCategorias)
routeCategory.put('/categoria/:id', putCategorias)
routeCategory.get('/categoria/:id', getCategoryId)
routeCategory.delete('/categoria/:id', deleteCategorias)

export default routeCategory