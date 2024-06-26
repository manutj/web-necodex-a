const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const IdTimeStamps = require('./middleware/IdTimeStamps')

const PORT = process.env.PORT || 3000

server.use(jsonServer.bodyParser)
server.use(jsonServer.defaults)
server.use(IdTimeStamps)

const loginEndpoint = require('./endpoints/login')
const registerEnpoint = require('./endpoints/register')

loginEndpoint.db = router.db
registerEnpoint.router.db = 

server.use('/login', loginEndpoint)
server.use('/register', registerEnpoint)

server.use(router)




server.listen(PORT, ()=>{
    console.log('JSON SERVER corriendo en el puerto ' + PORT)
})



