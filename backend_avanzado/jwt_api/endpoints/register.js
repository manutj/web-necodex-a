const bcrypt = require('bcrypt')
const validateEmail = require('../utils/validations')
const router = require('express').Router()


router.post('/', (req, res)=>{
    const {
        id,
        first_name,
        last_name,
        gender,
        email,
        password,
        role,
        createdAt,
        updatedAt
    } = req.body

    if(!email || !password || gender !== 'M' && gender != 'F'  ){
        res.sendStatus(400)
        return
    }



    if(!validateEmail(email)){
        res.status(400).send({message: 'Formato de email invalido'})
        return
    }
    
    const users = router.db.getState().users
    const user = users.find((user)=> user.email === email)
    
    
    if(!user){
    
        bcrypt.hash(password, 10, (err, hashedPassword)=>{
            if(err) console.log(err.stack)
                const user = {
                    id,
                    first_name,
                    last_name,
                    gender,
                    email,
                    password: hashedPassword,
                    role: role || 'CUSTOMER',
                    createdAt,
                    updatedAt
                }
                router.db.get('users').push(user).write()
                res.status(201).send({message: 'Usuario creado exitosamente'})
        })
    }else{
        res.status(403).send({message:'Email duplicado'})
    }
})


module.exports = router

