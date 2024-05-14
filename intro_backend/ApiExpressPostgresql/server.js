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
app.get('/users/:id', 'metodo para obtener un usuario especifico por ID')
app.post('/users', 'metodo para crear un usuario')
app.put('/users/:id', 'metodo para actualzar usuario')
app.delete('/users/:id', 'metodo para borrar un usuario')


// Decirle a la aplicacion que se inicie en el puerto que especificamos
app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`))