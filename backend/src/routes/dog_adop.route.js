import { Router } from "express";
import { cargarImage, deleteMascota, getEstadoAdopMascota, getEstadoMascota, getMascotaId, getMascotas, MascotaAdoptada, MascotaEnProceso, MascotaNoAdoptada, PostMascota, putMascota, UserMascota } from "../controllers/controller.dog_adop.js";
import { validarToken } from "../controllers/controller.auth.js";

const routeDog = Router()

routeDog.get('/mascota', /* validarToken, */ getMascotas)
routeDog.post('/mascota', /* validarToken, */ cargarImage, PostMascota)
routeDog.put('/mascota/:id',/* validarToken, */ cargarImage, putMascota)
routeDog.get('/mascota/:id',  /* validarToken,  */getMascotaId)
routeDog.delete('/mascota/:id', /* validarToken, */ deleteMascota)
routeDog.put('/mascotaAdop/:id', MascotaAdoptada)
routeDog.put('/mascotaNoAdop/:id', MascotaNoAdoptada)
routeDog.put('/mascotaProceso/:id', MascotaEnProceso)
routeDog.get('/estadoMascota', getEstadoMascota)
routeDog.get('/estadoAdoMascota', getEstadoAdopMascota)

export default routeDog