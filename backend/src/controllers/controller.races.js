import { pool } from "../database/conexion.js"

export const getRazas = async (req, res) => {
    try {
        let sql = 'SELECT * FROM razas_dog'
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
            message: 'Erro del servidor' + error 
        })
    }
}

export const postRaces = async (req, res) => {
    try {

        const {nombre_razas} = req.body

        let sql = `INSERT INTO razas_dog (nombre_razas) VALUES (?)`

        const [rows] = await pool.query(sql, [nombre_razas])

        if(rows.affectedRows>0){
            res.status(200).json({status: 200, message: 'Raza Registrada Con Exito'
            })
        }else{
            res.status(403).json({status: 403,message: 'Error'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error del servidor' + error
        })
    }
}

export const putRaces = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_razas } = req.body;

        let sql = `UPDATE razas_dog SET nombre_razas = IFNULL(?, nombre_razas) WHERE id_razas = ?`;

        const [rows] = await pool.query(sql, [nombre_razas, id]);
        
        if (rows.affectedRows > 0) {
            res.status(200).json({status: 200, message: 'Se actualizó raza con éxito'});
        } else {
            res.status(403).json({ status: 403, message: 'No se actualizó la raza' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const deleteRaces = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `DELETE FROM razas_dog WHERE id_razas = ?`;

        const [rows] = await pool.query(sql, [id]);

        if (rows.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Se eliminó la raza' });
        } else {
            res.status(403).json({ status: 403, message: 'No se eliminó la raza' });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const getRacesId = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT * FROM razas_dog WHERE id_razas = ?`;
        const [rows] = await pool.query(sql, [id]);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(403).json({ status: 403, message: 'No se encuentra esa raza' });
        }

    } catch (error) {
        res.status(500).json({
            status: 500, message: 'Error del servidor: ' + error
        });
    }
};