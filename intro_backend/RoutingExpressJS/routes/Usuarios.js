//CRUD (CREATE-READ-UPDATE-DELETE)

const express = require('express')
const router = express.Router()
router.use(express.json())


//BASE DE DATOS DE USUARIOS

const users = [{
    id:1,
    name:'juanito',
    age:23
},{
    id:2,
    name:'pablito',
    age:26
},{
    id:3,
    name:'sutanito',
    age:28
}]


//RUTAS DE USUARIOS

router.get('/', (req, res)=>{
    res.json(users)
})

router.get('/:id', (req,res)=>{
    const result = users.filter(user=>user.id == req.params.id)
    res.json({result})
})

router.post('/', (req, res)=>{
    const {id, name, age} = req.body
    users.push({id, name, age})
    res.json({success: true, message:'Usuario registrado con exito'})
})

router.patch('/', (req, res)=>{
    const {id, new_name} = req.body
    users[id - 1].name = new_name 
    res.json({success: true, message:'Usuario actualizado con exito'})
})

router.delete('/', (req, res)=>{
    const {id} = req.body
    users.splice(id - 1, 1)
    res.json({success: true, message:'Usuario eliminado con exito'})
})

module.exports = router