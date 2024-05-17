const personService = require('../services/person')

class PersonController{
    async createPerson (request, response){
        try {
            const id = await personService.createPerson(request.body);
            response.status(201).json(`Se ha creado el usuario con id: ${id}`)
        } catch (error) {
            console.log(error)
            response.status(500).json(error)
        }
    }
}

module.exports = new PersonController()