const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
const validateEmail = require('../utils/validations')
const secret = require('../config')

router.post('/', (req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        res.sendStatus(400)
        return
    }

    if(!validateEmail(email)){
        res.status(400).send({message: 'Formato de email invalido'})
        return
    }

    const users = router.db.getState().users
    const user = users.find((user)=> user.email === email)

    if(user){
        bcrypt.compare(password, user.password, (err, result)=>{
            if(result){
                const token = jwt.sign({id: user.id, role: user.role}, secret)
                res.send({token})
            }else{
                res.status(401).send(err)
            }
        })
    }else{
        res.sendStatus(404)
    }

})

module.exports = router