//Importamos libreria de express para utilizar su ROUTER
const express = require('express')
const router = express.Router()

const personController = require('../controller/person')

router.post('/person', personController.createPerson)
 router.put('/person/:id', personController.updatePerson)
 router.get('/persons', personController.findPersons)