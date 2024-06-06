const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const PORT = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(jsonServer.defaults)

const loginEndpoint = require('./endpoints/login')

server.use(router)


server.listen(PORT, ()=>{
    console.log('JSON SERVER corriendo en el puerto ' + PORT)
})



