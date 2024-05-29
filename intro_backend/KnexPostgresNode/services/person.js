const PersonModel = require('../model/person')


class PersonService {
    //Recibiendo los datos que vienen en el request.body de la capa controller y destructuramos(obtenemos) los datos que necesitamos insertar a la tabla "person" de la base de datos
    createPerson(personDta){
        const {email, firstName, lastName } = personDta

        //Pasar los datos destructurados a la capa del modelo
        return PersonModel.createPerson(email, firstName, lastName)
    }

    updatePerson(personDta, id){
        const {email, firstName, lastName } = personDta
        return PersonModel.updatePerson(email, firstName, lastName, id)
    }

    findPersons(){
        return PersonModel.findPersons()
    }
    
}


module.exports = new PersonService()