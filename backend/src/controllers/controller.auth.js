
import { pool } from "../database/conexion.js"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

/* export const validar = async (req, res) => {

    try {
        let { email_user, password_user} = req.body

        let sql = `SELECT * FROM usuarios WHERE email_user='${email_user}'` 

        const [rows] = await pool.query(sql)

        if(rows.length === 0){
            return res.status(404).json({message: "Email incorrecto"})
        }

        const user = rows[0]

        const validarPassword = await bcrypt.compare(password_user, user.password_user)

        if(!validarPassword){
            return res.status(404).json({message: "Contraseña Incorrecta"})
        } 
        let token = jwt.sign({rows}, process.env.AUT_SECRET, {expiresIn:process.env.AUT_EXPIRE}) 
        
        res.status(200).json({user, token, message: "Hola :), puedes iniciar"})

    } catch (error) {
        res.status(500).json({status: 500, message: 'Error del servidor' + error})
    }
} */

    export const validar = async (req, res) => {
        try {
            let { email_user, password_user } = req.body;
            let sql = `SELECT * from usuarios where email_user='${email_user}' and password_user='${password_user}'`;
    
            const [rows] = await pool.query(sql)
            if (rows.length > 0) {
                // Incluir la identificación del usuario en el token JWT
                let token = jwt.sign({ rows }, process.env.AUT_SECRET, { expiresIn: process.env.AUT_EXPIRE })
                return res.status(200).json({ 'user': rows, 'token': token })
            } else {
                return res.status(404).json({ "message": "Usuario no autorizado" })
            }
    
        } catch (error) {
            res.status(500).json({ status: 500, message: 'Error del servidor' + error })
        }
    
    }
    

export const validarToken = async (req, res, next) => {
    try {
        const token_client = req.headers["token"];
        if (!token_client) {
            res.status(404).json({ message: "No autorizado " });
        } else {
            jwt.verify(token_client, process.env.AUT_SECRET, (err, decoded) => {
                if (err) {
                    res.status(401).json({ message: "Token no valido" });
                } else {
                    next();
                }
            });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
