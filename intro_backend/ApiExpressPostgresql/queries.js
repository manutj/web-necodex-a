const { response } = require('express')

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


// Obtener todos los registros

const getAllUsers = (request, response) => {
pool.query("SELECT * FROM users ORDER BY id ASC", (error, result)=>{
    if(error){
        throw error
    }
    response.status(200).json(result.rows)
})
}


//Obtener un registro por ID

const getUserById = (request, response) => {
    const id = request.body.id

pool.query("SELECT * FROM users WHERE id =$1", [id], (error, result)=>{
    if(error){
        throw error
    }
    response.status(200).json(result.rows)
})
}



// Crear registro

const createUser = (request, reponse)=>{
    const id = request.body.id
    const name = request.body.name
    const email = request.body.email

    pool.query("INSERT INTO users (id,name,email) VALUES ($1,$2,$3)", [id, name, email], (error, result)=>{
        if(error){
            throw error
        }
        response.status(201).send('El usuario ha sido agregado exitosamente')
    })
}


// Acualizar un registro

const updateUser = (request, response) => {
    //const id = parseInt(request.params.id)
    const {name, email, id} = request.body

    pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id], (error, result)=>{
        if(error){
            throw error
        }
        response.status(200).send(`El usuario con ID: ${id} se ha actualizado exitosamente`)
    })
}


//Borrar un registro
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query("DELETE FROM users WHERE id = $1", [id], (error, result)=>{
        if(error) throw error
        response.status(200).send(`El usuario con ID: ${id} se ha eliminado exitosamente`)
    })
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}