// Importamos express y lo guardamos en "app" para utilizar sus metodos
const express = require('express')
const app = express()

const db = require("./queries")

//Declaramos el puerto donde corre el servidor local
const PORT = 3000


//Lo utilizamos para enviar las respuestas de tipo JSON al cliente
app.use(express.json())

app.get('/', (request, response)=>{
    response.json({Info: "API utlizando NODE, EXPRESS Y POSTGRES"})
})

app.get('/users', db.getAllUsers)
 app.get('/user', db.getUserById)
 app.post('/users', db.createUser) // Solucionar problema de content-type apllication/json (sale undefined)
 app.put('/users', db.updateUser)
 app.delete('/users/:id', db.deleteUser)


// Decirle a la aplicacion que se inicie en el puerto que especificamos
app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`))