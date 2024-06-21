import express from 'express'
import * as carController from '../controller/Car.js'

//Utilizamos enrutamiento de express para crear las rutas
const carRoutes = express.Router()

//Definimos los endpoints y le asignamos su controlador, cada controlador tiene una tarea en especifico
carRoutes.post('/cars', carController.createCar)
carRoutes.get('/cars', carController.getAllCars)
carRoutes.get('/cars/:id', carController.getCarById)
carRoutes.patch('/cars/:id', carController.updateCarById)
carRoutes.delete('/cars/:id', carController.deleteCarById)


export {carRoutes}