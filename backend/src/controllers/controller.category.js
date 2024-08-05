import { pool } from "../database/conexion.js";

export const getCategorias = async (req, res) => {
    try {
        let sql = 'SELECT * FROM categorias'
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

export const postCategorias = async (req, res) => {
    try {

        const {nombre_categoria} = req.body

        let sql = `INSERT INTO categorias (nombre_categoria) VALUES (?)`

        const [rows] = await pool.query(sql, [nombre_categoria])

        if(rows.affectedRows>0){
            res.status(200).json({status: 200, message: 'Categoria Registrada Con Exito'
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


export const putCategorias = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_categorias } = req.body;

        let sql = `UPDATE categorias SET nombre_categoria = IFNULL(?, nombre_categoria) WHERE id_categoria = ?`;

        const [rows] = await pool.query(sql, [nombre_categorias, id]);
        
        if (rows.affectedRows > 0) {
            res.status(200).json({status: 200, message: 'Se actualizó Categoria con éxito'});
        } else {
            res.status(403).json({ status: 403, message: 'No se actualizó la Categoria' });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const deleteCategorias = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `DELETE FROM categorias WHERE id_categoria = ?`;

        const [rows] = await pool.query(sql, [id]);

        if (rows.affectedRows > 0) {
            res.status(200).json({ status: 200, message: 'Se eliminó la Categoria' });

        } else {
            res.status(403).json({ status: 403, message: 'No se eliminó la Categoria' });
        }

    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error del servidor: ' + error });
    }
};

export const getCategoryId = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT * FROM categorias WHERE id_categoria = ?`;
        
        const [rows] = await pool.query(sql, [id]);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(403).json({ status: 403, message: 'No se encuentra esa Categoria' });
        }

    } catch (error) {
        res.status(500).json({
            status: 500, message: 'Error del servidor: ' + error
        });
    }
};