import { Router } from "express";
import { deleteSolicitud, getEstadoAdop, getEstadoSolicitudes, getSolicitud, getSolicitudId, postSolicitud, putSolicitud, SolicitudAceptar, SolicitudRechazar } from "../controllers/controller.solicitud.js";
import { validarToken } from "../controllers/controller.auth.js";

const routerSolicitud = Router()

routerSolicitud.get('/solicitud', /* validarToken, */getSolicitud)
routerSolicitud.post('/solicitud_dog',/*  validarToken, */postSolicitud)
routerSolicitud.put('/solicitud/:id',/*  validarToken, */putSolicitud)
routerSolicitud.get('/solicitud/:id', /* validarToken ,*/getSolicitudId)
routerSolicitud.delete('/solicitud/:id', /* validarToken, */deleteSolicitud)
routerSolicitud.put('/solicitudRechazada/:id', SolicitudRechazar)
routerSolicitud.put('/solicitudAceptar/:id', SolicitudAceptar)
routerSolicitud.get('/estadoSolicitud', getEstadoSolicitudes)
routerSolicitud.get('/getEstadoAdop', getEstadoAdop)


export default routerSolicitud
