import { pool } from "../database/conexion.js";
import multer from "multer";

const storage = multer.diskStorage(
    {
        destination: function(req,file,cb){
            cb(null, "public/img")
        },
        filename: function(req,file, cb){
            cb(null, file.originalname)
        }
    }
)

const upload = multer({storage: storage})
export const cargarImage = upload.single('imagen_dog')

export const PostMascota = async (req, res) => {
    try {

        const {nombre_dog, edad_dog, descripcion_dog, historia_dog, sexo_dog, fk_categoria, fk_razas, fk_municipios, ubicacion_dog, fk_users,  esterilizado_dog, fk_vacunas} = req.body

        let imagen_dog = req.file.originalname

        let sql = `INSERT INTO dog_adop (nombre_dog, edad_dog, imagen_dog, descripcion_dog, historia_dog, sexo_dog, estado_dog, fk_categoria, fk_razas, fk_municipios, ubicacion_dog, fk_users, esterilizado_dog, fk_vacunas) VALUES ( ?, ?, ?, ?, ?, ?, 2, ?, ?, ?, ?, ?, ?, ? )`

        const [rows] = await pool.query(sql, [nombre_dog, edad_dog, imagen_dog, descripcion_dog, historia_dog, sexo_dog, fk_categoria, fk_razas, fk_municipios, ubicacion_dog, fk_users,  esterilizado_dog, fk_vacunas])

        if(rows.affectedRows>0){
            res.status(200).json({status: 200, message: 'Mascota Registrada Con Exito'
            })
        }else{
            res.status(403).json({status: 403,message: 'No se registró la mascota'
            })
        }

    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error del servidor' + error
        })
    }
}


export const getMascotas = async (req, res) => {
    try {
         let sql = `SELECT 
    d.id_dog, 
    d.nombre_dog, 
    d.edad_dog, 
    d.imagen_dog, 
    d.descripcion_dog, 
    d.historia_dog, 
    d.sexo_dog, 

    r.*, 
        
    c.*, 
  
    m.*, 

    u.*,

    d.ubicacion_dog, 
    d.esterilizado_dog,
    fk_vacunas
    
    FROM 
        dog_adop d
    JOIN 
        razas_dog r ON d.fk_razas = r.id_razas
    JOIN 
        categorias c ON d.fk_categoria = c.id_categoria  
    JOIN 
        municipio_dog m ON d.fk_municipios = m.id_municipio
    JOIN 
        usuarios u ON d.fk_users = u.id_users

         `

        const [result] = await pool.query(sql);
        if(result.length > 0){
            res.status(200).json(result);
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontraron mascotas'
            });
        }
    } catch (error) {  
        res.status(500).json({
            status: 500,
            message: 'Error del servidor: ' + error
        });
    }
};


export const putMascota = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar si se ha enviado un archivo de imagen
        let imagen_dog = req.file ? req.file.originalname : undefined;

        const { nombre_dog, edad_dog, descripcion_dog, historia_dog, estado_dog, sexo_dog, fk_categoria, fk_razas, fk_vacunas, fk_municipios, fk_users, ubicacion_dog, esterilizado_dog } = req.body;

        let sql = `UPDATE dog_adop SET 
            nombre_dog = IFNULL(?, nombre_dog),
            edad_dog = IFNULL(?, edad_dog), 
            descripcion_dog = IFNULL(?, descripcion_dog),
            historia_dog = IFNULL(?, historia_dog), 
            estado_dog = IFNULL(?, estado_dog), 
            sexo_dog = IFNULL(?, sexo_dog),
            fk_categoria = IFNULL(?, fk_categoria),
            fk_razas = IFNULL(?, fk_razas), 
            fk_vacunas = IFNULL(?, fk_vacunas),
            fk_municipios = IFNULL(?, fk_municipios), 
            fk_users = IFNULL(?, fk_users),
            ubicacion_dog = IFNULL(?, ubicacion_dog),
            esterilizado_dog = IFNULL(?, esterilizado_dog)`;

        // Si se ha subido una nueva imagen, agregarla a la consulta SQL
        if (imagen_dog) {
            sql += ', imagen_dog = ?';
        }

        sql += ' WHERE id_dog = ?';

        const values = [
            nombre_dog, edad_dog, descripcion_dog, historia_dog, estado_dog, sexo_dog,
            fk_categoria, fk_razas, fk_vacunas, fk_municipios, fk_users,
            ubicacion_dog, esterilizado_dog
        ];

        // Agregar la imagen al final de los valores si existe
        if (imagen_dog) {
            values.push(imagen_dog);
        }
        
        values.push(id);

        const [rows] = await pool.query(sql, values);

        if (rows.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizó con éxito la mascota'
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No fue posible actualizar la mascota'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error del servidor: ' + error
        });
    }
};



export const getMascotaId = async (req, res) => {
    try {
        const { id } = req.params;

        let sql = `SELECT
    d.id_dog, 
    d.nombre_dog, 
    d.edad_dog, 
    d.imagen_dog, 
    d.descripcion_dog, 
    d.historia_dog, 
    d.sexo_dog, 

    r.nombre_razas AS razas_dog, 
        
    c.nombre_categoria AS categorias, 
  
    m.nombre_municipio AS municipio_dog, 
 
    d.ubicacion_dog, 
    d.fk_users, 
    d.esterilizado_dog,
    fk_vacunas
    
    FROM 
        dog_adop d
    JOIN 
        razas_dog r ON d.fk_razas = r.id_razas
    JOIN 
        categorias c ON d.fk_categoria = c.id_categoria  
    JOIN 
        municipio_dog m ON d.fk_municipios = m.id_municipio

     WHERE id_dog = ?`

        const [rows] = await pool.query(sql, [id]);

        if (rows.length > 0) {
            res.status(200).json(rows);
        } else {
            res.status(403).json({ status: 403, message: 'No hay mascotas registradas con ese ID' });
        }

    } catch (error) {
        res.status(500).json({
            status: 500, message: 'Error del servidor: ' + error
        });
    }
};


export const deleteMascota = async (req, res) => {
    try {
        const {id} = req.params

        let sql = `DELETE FROM dog_adop WHERE id_dog = ?`

        const [rows] = await pool.query(sql, id)
        
        if(rows.affectedRows>0){
            res.status(200).json({
                status: 200,
                message: 'Se eliminó con éxito la mascota'
            })
        }else{
            res.status(403).json({
                status: 403,
                message: 'No fue posible eliminar la mascota'
            })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error del servidor' + error
        })
    }
}


export const UserMascota = async (req, res) => {
    try {
        const {id} = req.params

        let sql = `
        SELECT 
    d.id_dog, 
    d.nombre_dog, 
    d.edad_dog, 
    d.imagen_dog, 
    d.descripcion_dog, 
    d.historia_dog, 
    d.sexo_dog, 

    r.nombre_razas AS razas_dog, 
    r.id_razas AS id_razas,

    c.nombre_categoria AS categorias, 
    c.id_categoria AS id id_categoria,

    m.nombre_municipio AS municipio_dog, 
    m.id_municipio AS id_municipio,

    v.nombre_vacunas AS vacunas_dog, 
    v.id_vacunas AS id_vacunas,

    d.ubicacion_dog, 
    d.fk_users, 
    d.esterilizado_dog
    FROM 
        dog_adop d
    JOIN 
        razas_dog r ON d.fk_razas = r.id_razas
    JOIN 
        categorias c ON d.fk_categoria = c.id_categoria
    JOIN 
        vacunas_dog v ON d.fk_vacunas = v.id_vacunas   
    JOIN 
        municipio_dog m ON d.fk_municipios = m.id_municipio

    WHERE estado_dog = 1 AND fk_users = ?
        `

        const [resultado] = await pool.query(sql, [id])
        if(resultado.length > 0){
            res.status(200).json(resultado)
        }else{
            res.status(404).json({
                status: 404,
                message: 'No hay mascotas Registradas'
            })
        }
    } catch (error) {
        res.status(500).json({message: 'Error del servidor', error})
    }
}

export const MascotaAdoptada = async (req, res) => {
    try {
        const {id} = req.params
        let sql = `UPDATE dog_adop SET estado_dog = 1 WHERE id_dog = ?`

        const [resultado] = await pool.query(sql, [id])

        if(resultado.affectedRows > 0){
            res.status(200).json({status: 200, message: 'Se adopto la mascota con exito'})
        }else{
            res.status(404).json({status: 404, message: 'Mascota Adoptada'})
        }

    } catch (error) {
        res.status(500).json({message: 'Error en en el servidor', error})
    }
}

export const MascotaNoAdoptada = async (req, res) => {
    try {
        const {id} = req.params
        let sql = `UPDATE dog_adop SET estado_dog = 2 WHERE id_dog = ?`

        const [resultado] = await pool.query(sql, [id])

        if(resultado.affectedRows > 0){
            res.status(200).json({status: 200, message: 'No se adopto la mascota con exito'})
        }else{
            res.status(404).json({status: 404, message: 'Mascota NO Adoptada'})
        }

    } catch (error) {
        res.status(500).json({message: 'Error en en el servidor', error})
    }
}

export const MascotaEnProceso = async (req, res) => {
    try {
        const {id} = req.params
        let sql = `UPDATE dog_adop SET estado_dog = 3 WHERE id_dog = ?`

        const [resultado] = await pool.query(sql, [id])

        if(resultado.affectedRows > 0){
            res.status(200).json({status: 200, message: 'La adopcion de la mascota se encuentra en espera'})
        }else{
            res.status(404).json({status: 404, message: 'Mascota en espera'})
        }

    } catch (error) {
        res.status(500).json({message: 'Error en en el servidor', error})
    }
}

export const getEstadoMascota = async (req, res) => {
    try {
        let sql =  `SELECT * FROM dog_adop WHERE estado_dog = 2`

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

export const getEstadoAdopMascota = async (req, res) => {
    try {
        let sql =  `SELECT * FROM dog_adop WHERE estado_dog = 1`

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


