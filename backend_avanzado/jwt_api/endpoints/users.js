const router = require('express').Router()
const validateToken = require('../middleware/ValidateToken')
const secret = require('../config')

router.get('/', validateToken(secret), (req, res)=>{
const {role} = req.user
if(role !=='ADMIN'){
   return res.status(403).send({message:'Forbidden: Solo usuarios ADMIN pueden ver la lista de usuarios'})
}

const users = router.db.getState().users

const usersWithoutPassword = users.map(user=>{
    const {password, ...restOfUser} = user
    return restOfUser
})
res.send(usersWithoutPassword)
})

module.exports = router