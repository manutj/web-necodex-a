const express = require('express')
const app = express()
const users = require('./routes/Usuarios')

const PORT = 3000

//Rutas API
app.use('/users', users)


app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`))