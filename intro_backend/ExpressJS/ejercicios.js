const express = require('express')

const app = express()

const PORT = 3000

app.use(express.json())

// 1. Agrega un endpoint '/api/' que responda a una petición de tipo GET con un código de estado 200 y el siguiente json: 
//             { 'mensaje':'hola mundo' }

app.get('/api/', (req, res)=>{
    res.status(200)
    res.json({mensaje:'Hola mundo'})
})



// 2. Agrega un endpoint '/api/suma' que responda a una petición de tipo GET con la suma de dos números que reciba mediante las querys num1 y num2. El servidor debe responder con un código de estado 200 y un json como el siguiente:
//             { 'resultado': 7 }


app.get('/api/suma', (req, res)=> {

    const {num1, num2} = req.query

    const resultadoSuma = parseInt(num1) + parseInt(num2)

    res.status(200)
    res.json({resultado: resultadoSuma})
})




// 3. Agrega un endpoint '/api/usuario/' que responda a una petición de tipo GET con el nombre que sea recibido a través de params. El servidor debe responder con un código de estado 200 y un json como este:
//             { 'usuario': 'Edwin' }


app.get('/api/usuario/:usuario', (req, res)=>{
    const {usuario} = req.params
    res.status(200)
    res.json({usuario})
})


//PENDIENTE EJERCICIO 4



// 5. Agrega un endpoint '/api/body que responda a una petición de tipo PUT con el body que el cliente envíe al hacer la petición. Ejemplo: cliente envía un body desde postman o insomnia que luce como este:

// { "nombre": "Hiromi", "ocupacion": "Sensei" }


app.put('/api/body', (req,res)=>{
    res.status(200).json({mensaje: 'Usuario actualizado correctamente',usuario: req.body})
})



app.listen(PORT, ()=>console.log(`Servidor corriendo en el puertos ${PORT}`))