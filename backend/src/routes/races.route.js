import { Router } from "express";
import { deleteRaces, getRacesId, getRazas, postRaces, putRaces } from "../controllers/controller.races.js";
import { validarToken } from "../controllers/controller.auth.js";

const routeRace = Router()

routeRace.get('/razas', getRazas)
routeRace.post('/razas', postRaces)
routeRace.put('/razas/:id', putRaces)
routeRace.get('/razas/:id', getRacesId)
routeRace.delete('/razas/:id', deleteRaces)

export default routeRace