const db = require('../db/db')

class PersonModel{
    //Recibimos los datos que vienen de la capa de servicios
    async createPerson(email, firstName, lastName){

        //Esperamos a que se cree el id del registro nuevo en la tabla "person" y cuando obtengamos una respuesta mandamos la respuesta a esa consulta de regreso a la capa de servicios
        const [id] = await db("person")
            .insert({
                email, 
               first_name:firstName, 
               last_name:lastName
            })

            //Devolvemos el id para mostrarlo al usuario cuando se registre uno nuevo
            .returning("id")
            return id
    }

   async updatePerson(email, firstName, lastName, id){
        const item = await db
        .update({
            email, 
            firstName, 
            lastName
        })
        .from("person")
        .where("id", id)
        return item
    }

    async findPersons () {
        const items = await db.select("*").from("person")
        return items
    }
}

module.exports = new PersonModel()