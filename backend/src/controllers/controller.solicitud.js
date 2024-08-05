/* import { pool } from "../database/conexion.js"

export const getSolicitud = async (req, res) => {
    try {
        let sql =  `SELECT 
        u.* AS fk_users,
        m.* AS fk_dog_adop
        e.estado

        FROM solicitud_dog e

        JOIN 
        usuarios u ON a.fk_users = u.id_users
        JOIN
        mascotas m ON a.fk_dog_adop = m.id_dog
        `

        const [result] = await pool.query(sql)
        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                status: 404,
                message: 'No hay ninguna solicitud registrada'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Erro del servidor' + error 
        })
    }
}

export const postSolicitud = async (req, res) => {
    try {

        const {fk_users, fk_dog_adop} = req.body

        let sql = `INSERT INTO solicitud_dog (fk_users, fk_dog_adop, estado_solicitud) VALUES ( ?, ? , 1)`

        const [rows] = await pool.query(sql, [ fk_users, fk_dog_adop])

        if(rows.affectedRows>0){
            res.status(200).json({status: 200, message: 'Solicitud Registrada Con Exito'
            })
        }else{
            res.status(404).json({status: 404,message: 'No se registró la solicitud '
            })
        }

    } catch (error) {
        res.status(500).json({ status: 500,message: 'Error del servidor', error})
    }
}

export const putSolicitud = async (req, res) => {
    try {
        const { id } = req.params;
        const { fk_dog_adop, fk_users } = req.body;

        let sql = `UPDATE solicitud_dog SET fk_dog_adop = IFNULL(?, fk_dog_adop), fk_users = IFNULL(?, fk_users) WHERE id_solicitud = ?`;
        const [rows] = await pool.query(sql, [fk_dog_adop, fk_users, id]);
        
        if (rows.affectedRows > 0) {
            res.status(200).json({status: 200, message: 'Se actualizó la solicitud con éxito'});
        } else {
            res.status(403).json({ status: 404, message: 'No se actualizó la solicitud' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const deleteSolicitud = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `DELETE FROM solicitud_dog WHERE id_solicitud = ?`;
        const [rows] = await pool.query(sql, [id]);
        if (rows.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Se eliminó la solicitud' });
        } else {
            res.status(403).json({ status: 403, message: 'No se eliminó la solicitud, revisa' });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const getSolicitudId = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT * FROM solicitud_dog WHERE id_solicitud = ?`;
        const [rows] = await pool.query(sql, [id]);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(403).json({ status: 403, message: 'No se encuentra el ID de la solicitud' });
        }

    } catch (error) {
        res.status(500).json({
            status: 500, message: 'Error del servidor: ' + error
        });
    }
};


export const SolicitudAceptar = async (req, res) => {
    try {
        const { id } = req.params;
        let sql = `UPDATE solicitud_dog SET estado_solicitud = 2 WHERE id_solicitud = ?`;

        const [resultado] = await pool.query(sql, [id]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Solicitud aceptada con éxito' });
        } else {
            res.status(403).json({ status: 403, message: 'No se encontró la solicitud para aceptar' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error en el servidor', error });
    }
};


export const SolicitudRechazar = async (req, res) => {
    try {
        const { id } = req.params;
        let sql = `UPDATE solicitud_dog SET estado_solicitud = 1 WHERE id_solicitud = ?`;

        const [resultado] = await pool.query(sql, [id]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Solicitud rechazada con éxito' });
        } else {
            res.status(404).json({ status: 404, message: 'No se encontró la solicitud para rechazar' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error en el servidor', error });
    }
};

export const getEstadoSolicitudes = async (req, res) => {
    try {
        let sql =  `SELECT
        
        u.* ,
        m.*,
        e.estado_solicitud

        FROM solicitud_dog e

        JOIN 
        usuarios u ON e.fk_users = u.id_users
        JOIN
        dog_adop m ON e.fk_dog_adop = m.id_dog
        
        WHERE estado_solicitud = 1`

        const [result] = await pool.query(sql)
        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                status: 404,
                message: 'No hay ninguna solicitud registrada'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Erro del servidor' + error 
        })
    }
}

 */

import { pool } from "../database/conexion.js"

export const getSolicitud = async (req, res) => {
    try {
        let sql =  `SELECT 
        u.* AS fk_users,
        m.* AS fk_dog_adop
        e.estado

        FROM solicitud_dog e

        JOIN 
        usuarios u ON a.fk_users = u.id_users
        JOIN
        mascotas m ON a.fk_dog_adop = m.id_dog
        
        `
        const [result] = await pool.query(sql)
        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                status: 404,
                message: 'No hay ninguna solicitud registrada'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Erro del servidor' + error 
        })
    }
}

export const postSolicitud = async (req, res) => {
    try {

        const {fk_users, fk_dog_adop} = req.body

        let sql = `INSERT INTO solicitud_dog (fk_users, fk_dog_adop, estado_solicitud) VALUES ( ?, ? , 1)`

        const [rows] = await pool.query(sql, [ fk_users, fk_dog_adop])

        if(rows.affectedRows>0){
            res.status(200).json({status: 200, message: 'Solicitud Registrada Con Exito'
            })
        }else{
            res.status(404).json({status: 404,message: 'No se registró la solicitud '
            })
        }

    } catch (error) {
        res.status(500).json({ status: 500,message: 'Error del servidor', error})
    }
}

export const putSolicitud = async (req, res) => {
    try {
        const { id } = req.params;
        const { fk_dog_adop, fk_users } = req.body;

        let sql = `UPDATE solicitud_dog SET fk_dog_adop = IFNULL(?, fk_dog_adop), fk_users = IFNULL(?, fk_users) WHERE id_solicitud = ?`;
        const [rows] = await pool.query(sql, [fk_dog_adop, fk_users, id]);
        
        if (rows.affectedRows > 0) {
            res.status(200).json({status: 200, message: 'Se actualizó la solicitud con éxito'});
        } else {
            res.status(403).json({ status: 404, message: 'No se actualizó la solicitud' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const deleteSolicitud = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `DELETE FROM solicitud_dog WHERE id_solicitud = ?`;
        const [rows] = await pool.query(sql, [id]);
        if (rows.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Se eliminó la solicitud' });
        } else {
            res.status(403).json({ status: 403, message: 'No se eliminó la solicitud, revisa' });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const getSolicitudId = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT * FROM solicitud_dog WHERE id_solicitud = ?`;
        const [rows] = await pool.query(sql, [id]);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(403).json({ status: 403, message: 'No se encuentra el ID de la solicitud' });
        }

    } catch (error) {
        res.status(500).json({
            status: 500, message: 'Error del servidor: ' + error
        });
    }
};

// Aceptar solicitud
export const SolicitudAceptar = async (req, res) => {
    try {
        const { id } = req.params;
        let sql = `UPDATE solicitud_dog SET estado_solicitud = 2 WHERE id_solicitud = ?`;

        const [resultado] = await pool.query(sql, [id]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Solicitud aceptada con éxito' });
        } else {
            res.status(403).json({ status: 403, message: 'No se encontró la solicitud para aceptar' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error en el servidor', error });
    }
};

// Rechazar solicitud
export const SolicitudRechazar = async (req, res) => {
    try {
        const { id } = req.params;
        let sql = `UPDATE solicitud_dog SET estado_solicitud = 1 WHERE id_solicitud = ?`;

        const [resultado] = await pool.query(sql, [id]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Solicitud rechazada con éxito' });
        } else {
            res.status(404).json({ status: 404, message: 'No se encontró la solicitud para rechazar' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error en el servidor', error });
    }
};

export const getEstadoSolicitudes = async (req, res) => {
    try {
        let sql =  `SELECT
        
        u.* ,
        m.*,
        e.estado_solicitud,
        e.id_solicitud

        FROM solicitud_dog e

        JOIN 
        usuarios u ON e.fk_users = u.id_users
        JOIN
        dog_adop m ON e.fk_dog_adop = m.id_dog
        
        WHERE estado_solicitud = 1`

        const [result] = await pool.query(sql)
        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                status: 404,
                message: 'No hay ninguna solicitud registrada'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Erro del servidor' + error 
        })
    }
}

export const getEstadoAdop = async (req, res) => {
    try {
        let sql =  `SELECT
        
        u.* ,
        m.*,
        e.estado_solicitud,
        e.id_solicitud

        FROM solicitud_dog e

        JOIN 
        usuarios u ON e.fk_users = u.id_users
        JOIN
        dog_adop m ON e.fk_dog_adop = m.id_dog
        
        WHERE estado_solicitud = 2`

        const [result] = await pool.query(sql)
        if(result.length>0){
            res.status(200).json(result)
        }else{
            res.status(404).json({
                status: 404,
                message: 'No hay ninguna solicitud registrada'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Erro del servidor' + error 
        })
    }
}







