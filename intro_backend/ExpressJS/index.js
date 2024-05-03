const express = require('express')

const app = express()

const PORT = 3000


// request => Informacion de la peticion que hace el cliente

// response => Respuesta de la peticion que enviamos al cliente

app.get('/', (request, response)=>{
    response.send('Respuesta de tu primer API!!')
})

app.get('/api/v1/usuarios', (req, res)=>{
    res.send('Informacion de todos los usuarios')
})


//Endpoints con PARAMS
app.get('/api/v1/usuarios/:id/codigos/:codigo', (req, res)=>{
   // console.log(req.params)
    console.log(req.params.codigo)

    // const idUser = req.params.id
    // const codigoUser = req.params.codigo

    const {id, codigo} = req.params

    res.send(`Estas accediendo al usuario con el id ${id} y a su codigo ${codigo}`)
})


//Endpoints con QUERYS (query params)

app.get('/api/v1/usuarios/buscar', (req, res)=> {
    console.log(req.query)
    const {q} = req.query

    res.send(`Tu busqueda es: ${q}`)
})

app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`))

