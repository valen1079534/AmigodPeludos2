import express from 'express'
import body_parser  from 'body-parser'

import routeUser from './src/routes/auth.route.js'
import routeUsuario from './src/routes/users.routes.js'
import routeCategory from './src/routes/category.route.js';
import routeRace from './src/routes/races.route.js';
import routerMunicipio from './src/routes/municipio.route.js'
import routeDog from './src/routes/dog_adop.route.js'
import routerVacunas from './src/routes/Vacunas.route.js';
import routerSolicitud from './src/routes/solicitud.route.js';

import cors from 'cors'

const servidor = express()

const puerto = 4300

servidor.use(cors())

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extend: false}))

servidor.use('/auth', routeUser)
servidor.use('/users', routeUsuario)
servidor.use('/dog', routerMunicipio)
servidor.use('/dog', routerVacunas)
servidor.use('/dog', routeCategory)
servidor.use('/dog', routeRace)
servidor.use('/dog', routeDog)
servidor.use('/dog', routerSolicitud)

servidor.set("view engine", "ejs")
servidor.set("views", "./view")

servidor.use(express.static('./public'))

servidor.get("/document", (req, res) => {
    res.render("documents.ejs")
})

servidor.listen(4300, () => {
    console.log('Servidor corriendo en el puerto: ', puerto);
})
