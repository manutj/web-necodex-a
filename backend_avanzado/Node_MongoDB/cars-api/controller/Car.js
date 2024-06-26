import Car from '../model/Car.js' //Importamos el modelo

//Insertar o crear el documento
const createCar = async (req, res)=>{
    try {
        const newCar = await Car.create(req.body)
        res.status(201).json(newCar)
    } catch (error) {
        res.status(400).json({message:`Error creando el carro: ${error}`})
    }
}

//Buscar todos los documentos
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find({isActive:true}) // Nos comunicamos con el modelo
        res.status(200).json(cars)
    } catch (error) {
        res.status(400).json({message:`Error obteniendo los carros: ${error}` })
    }
}

//Buscar un solo documento
const getCarById = async (req, res) => {
    try {
        const car = await Car.find({_id: req.params.id, isActive:true}) // Nos comunicamos con el modelo
        res.status(200).json(car)
    } catch (error) {
        res.status(400).json({message:`Error obteniendo el carro: ${error}` })
    }
}

//Actualizar un documento
const updateCarById = async (req, res) => {
try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {new:true}) // Nos comunicamos con el modelo, el campo new nos devuelve el documento actualizado
    res.status(200).json(updatedCar)
} catch (error) {
    res.status(400).json({message:`Error actualizando el carro: ${error}` }) 
}
}

//Borrar un documento
const deleteCarById = async (req, res) => {
    if(!req.params.id){
        res.status(400).json({message: `El Id es requerido`})
    }
//BORRADO FISICO
    if(req.query.destroy === 'true'){
        try {
           const carDeleted = await Car.findByIdAndDelete(req.params.id) // Nos comunicamos con el modelo
           if(carDeleted === null){ // Si no encuentra el documento, find devuelve null
            return res.status(400).json({message: 'No se encontro el carro para borrar'})
           }
           res.status(204).json({message:'Carro eliminado'})
    }
    catch (error) {
        res.status(400).json({message:`Error eliminando el carro: ${error}` })
    }

} 

//BORRADO LOGICO
try {
    const cardUpdated = await Car.findByIdAndUpdate(req.params.id, {isActive: false}, {new:true}) // Nos comunicamos con el modelo, el campo new nos devuelve el documento actualizado y solo actulizamos el campo isActive, sin borrar el documento

    if(cardUpdated === null || cardUpdated.isActive === false){
        return res.status(404).json({message:'Carro no encontrado o ya eliminado'})
    }

    res.status(204).json({message:'Carro eliminado'})

} catch (error) {
    res.status(400).json({message:`Error eliminando el carro: ${error}` })
}
}




export {getAllCars, getCarById, createCar, updateCarById, deleteCarById}