import { pool } from "../database/conexion.js"

export const getVacunas = async (req, res) => {
    try {
        let sql = 'SELECT * FROM vacunas_dog'
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

export const postVacunas = async (req, res) => {
    try {

        const {nombre_vacunas} = req.body

        let sql = `INSERT INTO vacunas_dog (nombre_vacunas) VALUES (?)`

        const [rows] = await pool.query(sql, [nombre_vacunas])

        if(rows.affectedRows>0){
            res.status(200).json({status: 200, message: 'Vacunas Registrada Con Exito'
            })
        }else{
            res.status(403).json({status: 403,message: 'No se pudieron registrar las vacunas'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error del servidor' + error
        })
    }
}

export const putVacunas = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_vacunas } = req.body;

        let sql = `UPDATE vacunas_dog SET nombre_vacunas = IFNULL(?, nombre_vacunas) WHERE id_vacunas = ?`;

        const [rows] = await pool.query(sql, [nombre_vacunas, id]);
        
        if (rows.affectedRows > 0) {
            res.status(200).json({status: 200, message: 'Se actualizó raza con éxito'});
        } else {
            res.status(403).json({ status: 403, message: 'No se actualizó la raza' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const deleteVacunas = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `DELETE FROM vacunas_dog WHERE id_vacunas = ?`;

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

export const getVacunasId = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT * FROM vacunas_dog WHERE id_vacunas = ?`;
        
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