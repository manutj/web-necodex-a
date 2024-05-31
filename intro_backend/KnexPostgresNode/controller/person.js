const personService = require("../services/person");

class PersonController {
  async createPerson(request, response) {
    console.log('====>', request.body)
    try {
      const id = await personService.createPerson(request.body);
      response.status(201).json(`Se ha creado el usuario con id: ${id}`);
    } catch (error) {
      console.log(error);
      response.status(500).json(error);
    }
  }

  async updatePerson(request, response) {
    try {
      const updatedBody = await personService.updatePerson(
        request.body,
        request.params.id
      );
      response
        .status(200)
        .send(`Se ha actualizado correctamente el usuario con id: ${id}`)
        .json(updatedBody);

    } catch (error) {
      console.error(error);
      response.status(500).json(error);
    }
  }

  async findPersons(request, response){
    try {
        const items = await personService.findPersons()
        response.status(200).json(items)
    } catch (error) {
        console.error(error)
        response.status(500).json(error)
    }
  }
}

module.exports = new PersonController();
