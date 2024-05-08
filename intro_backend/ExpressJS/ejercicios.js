const express = require('express')
const request = require('request')

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


// 4. Agrega un endpoint '/api/swapi' que responda a una petición de tipo GET con el personaje solicitado de https://swapi.dev/. El cliente debe mandar el número de personaje mediante params. La respuesta del servidor debe lucir algo así
//             { 'personaje': {
//             	'name': 'Luke Skywalker',
//                         ...,
// } }



//FUNCION QUE MANDA A LLAMAR A LA SWAPI

//ENDOPINT DE EXPRESS QUE ATRAVES DEL CALLBACK OBTIENE EL ID DE LOS PARAMS Y SE LO PASA LA LA FUNCION DEFINIDA ARRIBA


const getPersonajeSwapi = (id) => {
return new Promise((resolve, reject)=>{
    request.get(`https://swapi.dev/api/people/${id}/`, (error, response, body)=>{
        if(response.statusCode === 200){
            resolve(JSON.parse(body))
        }else{
            reject(error)
        }
    })
})
}
app.get('/api/swapi/:idPersonaje',(req,res)=>{
    const {idPersonaje} = req.params
    getPersonajeSwapi(idPersonaje).then(personajeInfo=>res.status(200).json({personajeInfo}))
    .catch(error=>res.status(500).json({error}))
})




// 5. Agrega un endpoint '/api/body que responda a una petición de tipo PUT con el body que el cliente envíe al hacer la petición. Ejemplo: cliente envía un body desde postman o insomnia que luce como este:

// { "nombre": "Hiromi", "ocupacion": "Sensei" }


app.put('/api/body', (req,res)=>{
    res.status(200).json({mensaje: 'Usuario actualizado correctamente',usuario: req.body})
})



// 6.  Vuelve a hacer el ejercicio 2 pero enviando num1 y num2 desde el body, a través de una petición POST que responda con el status 200

app.post('/api/suma', (req, res)=>{
    const {num1, num2} = req.body

    const resultado = num1 + num2
    res.status(200).json({resultado})
})


// 7.  Crea un endpoint para una petición de tipo DELETE donde envíes un ID (un número cualquiera) a través de params.

// app.delete('/api/v1/usuarios/:id', (req,res)=>{
//     const {id} = req.params
//     res.json({mensaje:`Usuario ${id} eliminado con exito`})
// })

// 8. Si el param contiene el ID 3, entonces responde con un status 200 y el mensaje "se ha eliminado el objeto con ID 3", de lo contrario, si envían cualquier otro número como ID, responde con un status 404 y el mensaje "No se encontró el objeto con el ID especificado".


app.delete('/api/v1/usuarios/:id', (req,res)=>{
    const {id} = req.params

    if(id === '3'){
    res.status(200).json({mensaje:`Usuario ${id} eliminado con exito`})
    } else {
        res.status(404).json({mensaje:`Usuario con id ${id} no se encuentra registrado`}) 
    }
})



app.listen(PORT, ()=>console.log(`Servidor corriendo en el puertos ${PORT}`))