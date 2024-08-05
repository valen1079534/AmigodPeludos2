import { pool } from "../database/conexion.js"

export const listarMunicipio = async (req, res) => {
    try {
        let sql = 'SELECT * FROM municipio_dog'
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

export const postMunicipios = async (req, res) => {
    try {

        const {nombre_municipio} = req.body

        let sql = `INSERT INTO municipio_dog (nombre_municipio) VALUES (?)`

        const [rows] = await pool.query(sql, [nombre_municipio])

        if(rows.affectedRows>0){
            res.status(200).json({status: 200, message: 'Municipio Registrada Con Exito'
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

export const getMunicipioId = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT * FROM municipio_dog WHERE id_municipio= ?`;
        
        const [rows] = await pool.query(sql, [id]);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(403).json({ status: 403, message: 'No se encuentra esa municipio' });
        }

    } catch (error) {
        res.status(500).json({
            status: 500, message: 'Error del servidor: ' + error
        });
    }
};


