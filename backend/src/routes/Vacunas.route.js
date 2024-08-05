import { Router } from "express";
import { deleteVacunas, getVacunas, getVacunasId, postVacunas, putVacunas } from "../controllers/controller.vacunas.js";
import { validarToken } from "../controllers/controller.auth.js";


const routerVacunas = Router()

routerVacunas.get('/vacunas',  getVacunas)
routerVacunas.post('/vacunas', /* validarToken, */ postVacunas)
routerVacunas.put('/vacunas/:id', /* validarToken, */ putVacunas)
routerVacunas.get('/vacunas/:id', /* validarToken, */getVacunasId )
routerVacunas.delete('/vacunas/:id', /* validarToken, */deleteVacunas)

export default routerVacunas