import { Router } from "express";
import {  deleteUsers, getUsers, listarUsers, postUser, putUsers } from "../controllers/controller.users.js";
import { validarToken } from "../controllers/controller.auth.js";

const routeUsuario = Router()

routeUsuario.get('/usuarios', /* validarToken, */ listarUsers)
routeUsuario.post('/usuarios', postUser)
routeUsuario.put('/usuarios/:id', putUsers)
routeUsuario.get('/usuarios/:id', getUsers)
routeUsuario.delete('/usuarios/:id', /* validarToken */deleteUsers)

export default routeUsuario