import { Router } from "express";
import { listarMunicipio, postMunicipios } from "../controllers/controller.municipio.js";
import { validarToken } from "../controllers/controller.auth.js";

const routerMunicipio = Router()

routerMunicipio.get('/municipio', listarMunicipio)
routerMunicipio.post('/municipio', postMunicipios)

export default routerMunicipio

