const jwt = require('jsonwebtoken')

const validateToken = (secret) => {

    return(req, res, next )=>{
        const {Authorization} = req.headers
        if(!Authorization || !Authorization.startsWith('Bearer')){
            res.status(400)
            return
        }


        const token = Authorization.slice(7)
        try {
           const payload = jwt.verify(token, secret) 
           req.user = payload
        } catch (error) {
            res.status(401)
        }

    }
}


module.exports = {
    validateToken
}