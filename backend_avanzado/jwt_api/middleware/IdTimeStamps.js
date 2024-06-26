import { v4 as uuidv4 } from 'uuid';

const IdTimeStamps = (req, res, next) => {
    if(req.method === 'POST'){
        req.body.id = uuidv4()
        req.body.createAt = Date.now()
        req.body.updatedAt = Date.now()
    }
    next()
}

module.exports = IdTimeStamps