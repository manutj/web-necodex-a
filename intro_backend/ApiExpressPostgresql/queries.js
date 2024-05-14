//Importamos Postgres Connection para guardarlo en una variable "pool"
const Pool = require('pg').Pool

//Este es el objeto de configuracion para conectarme a la base de datos
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password:'holamundo',
    database:'apiexpress'
})


// Obtener todos los usuarios

const getAllUsers = (request, response) => {
pool.query("SELECT * FROM users ORDER BY id ASC", (error, result)=>{
    if(error){
        throw error
    }
    response.status(200).json(result.rows)
})
}

//TODOS LOS OTROS METODOS


module.exports = {
    getAllUsers
}