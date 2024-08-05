import { pool } from "../database/conexion.js"
import bcrypt from 'bcrypt'

export const listarUsers = async (req, res) => {
    try {
        let sql = 'SELECT * FROM usuarios'
        const [result] = await pool.query(sql)
        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                status: 404,
                message: 'Not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error del servidor' + error 
        })
    }
}

export const postUser = async (req, res) => {
    try {
        const {nombre_user, cedula_user, telefono_user,email_user,  password_user, rol_user} = req.body;

        /* const bcryptPassword = bcrypt.hashSync(password_user, 12) */

        let sql = `INSERT INTO usuarios (nombre_user, cedula_user, telefono_user, email_user, password_user, rol_user) VALUES (?, ?, ?, ?, ?, 2)`;

        const [rows] = await pool.query(sql, [nombre_user,  cedula_user, telefono_user, email_user, password_user, rol_user]);

        if (rows.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Usuario registrado con éxito' });
        } else {
            res.status(403).json({ status: 403, message: 'Error al registrar el usuario' });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error.message });
    }
};

export const putUsers = async (req, res) => {
    try {

        const {id} = req.params

        const {nombre_user, email_user, telefono_user, rol_user, password_user } = req.body

        let sql = `UPDATE usuarios SET nombre_user =IFNULL(?, nombre_user), email_user = IFNULL(?, email_user), telefono_user = IFNULL(?, telefono_user), rol_user = IFNULL(?, rol_user), password_user = IFNULL(?, password_user) WHERE id_users = ?`
        
        const [rows] = await pool.query(sql, [nombre_user, email_user, telefono_user, rol_user, password_user, id ])
        if(rows.affectedRows>0){
            res.status(200).json({
                status: 200,
                message: 'Se actualizo con exito la User'
            })
        }else{
            res.status(403).json({
                status: 403,
                message: 'No fue posible actualizar la User'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error del servidor' + error
        })
    }
   
}


export const deleteUsers = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `DELETE FROM usuarios WHERE id_users = ?`;
        const [rows] = await pool.query(sql, [id]);
        if (rows.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Se eliminó el usuario' });
        } else {
            res.status(403).json({ status: 403, message: 'No se eliminó el usuario' });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const getUsers = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT * FROM usuarios WHERE id_users = ?`;
        const [rows] = await pool.query(sql, [id]);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(403).json({ status: 403, message: 'No se encuentra el usuario' });
        }

    } catch (error) {
        res.status(500).json({
            status: 500, message: 'Error del servidor: ' + error
        });
    }
};

