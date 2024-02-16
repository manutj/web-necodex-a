const request = require('request');

//C(CREATE)R(READ ALL, READ-ONE)U(UPDATE - PATCH, PUT)D(DELETE)

const URL_SERVER = 'https://crudcrud.com'


// CREATE

const createAuthor = (name, lastname, biography, nacionality, gender, age, isAlive) => {
const URL_POST = `${URL_SERVER}/api/4c9787c3a3ec47de8fb39650b936afc9/unicorns`
const jsonSend = {
  "name": name,
  "lastname": lastname,
  "biography": biography,
  "nacionality" : nacionality,
  "gender": gender,
  "age": age,
  "isAlive": isAlive
}

request.post({uri: URL_POST, body: JSON.stringify(jsonSend), headers:{'content-type': 'application/json'}}, (err, response, body)=>{
  if(response.statusCode === 201){
    const author = JSON.parse(body)
    console.log(author)
  }else{
    console.log(response.statusCode)
  }
})
}


// createAuthor("Emilia", "Pardo", "Autor", "Española", "M", 75, false)




//READ ALL
const readAllAuthors = () => {
  const URL_GET = `${URL_SERVER}/api/4c9787c3a3ec47de8fb39650b936afc9/unicorns`

  request.get(URL_GET, (err, res, body)=>{
    if(res.statusCode === 200){
      const json = JSON.parse(body)
      console.log(json)
    }else{
      console.log(res.statusCode)
    }
  })
}

//readAllAuthors()


//READ ONE (ID)

const readOneAuthor = (id) => {
  const URL_GET = `${URL_SERVER}/api/4c9787c3a3ec47de8fb39650b936afc9/unicorns/${id}`

  request.get(URL_GET, (err, res, body)=>{
    if(res.statusCode === 200){
      const json = JSON.parse(body)
      console.log(json)
    }else{
      console.log(res.statusCode)
    }
  })
}

//readOneAuthor('65cec4c16227a803e824ca98')




//UPDATE ONE (PUT)

const updateAuthor = (id, name, lastname, biography, nacionality, gender, age, isAlive) => {
  const URL_PUT = `${URL_SERVER}/api/4c9787c3a3ec47de8fb39650b936afc9/unicorns/${id}`
  const jsonSend = {
    "name": name,
    "lastname": lastname,
    "biography": biography,
    "nacionality" : nacionality,
    "gender": gender,
    "age": age,
    "isAlive": isAlive
  }
  
  request.put({uri: URL_PUT, body: JSON.stringify(jsonSend), headers:{'content-type': 'application/json'}}, (err, response, body)=>{
    if(response.statusCode === 200){
      console.log(response)
      const author = JSON.parse(body)
      console.log(author)
    }else{
      console.log(response.statusCode)
    }
  })
  }

  // A veces, el servidor actualiza el item pero no devuelve una respuesta en concreto, por lo que puede ocasionarnos un error en la conversion del body

   //updateAuthor('65cec4c16227a803e824ca98', 'Leopoldo', 'Alas', 'Poeta', 'Frances', 'M', 40, true)



  // UPDATE ONE PARTIALITY


const updatePartialAuthor = (id, name, lastname, biography) => {
  const URL_PATCH = `${URL_SERVER}/api/4c9787c3a3ec47de8fb39650b936afc9/unicorns/${id}`
  const jsonSend = {
    "name": name,
    "lastname": lastname,
    "biography": biography,
  }
  
  request.patch({uri: URL_PATCH, body: JSON.stringify(jsonSend), headers:{'content-type': 'application/json'}}, (err, response, body)=>{
    if(response.statusCode === 200){
      const author = JSON.parse(body)
      console.log(author)
    }else{
      console.log(response.statusCode)
    }
  })
  }

//LA API DE PRUEBA QUE ESTAMOS USANDO (CRUDCRUD.COM) NO TIENE UN METODO PATCH, POR LO TANTO DARA UN ERROR DE METODO NO PERMITIDO, AUNQUE LA SINTAXIS ESTE CORRECTA

     //updatePartialAuthor('65cec4c16227a803e824ca98', 'Rai', 'Peña', 'Desarrollador')



//DELETE


const deleteOneAuthor = (id) => {
  const URL_DELETE = `${URL_SERVER}/api/4c9787c3a3ec47de8fb39650b936afc9/unicorns/${id}`

  request.delete(URL_DELETE, (err, res, body)=>{
    if(res.statusCode === 200 || res.statusCode === 204 || res.statusCode === 301){
      console.log(body)
      console.log(`autor ${id}, eliminado con exito`)
    }else{
      console.log(res.statusCode)
    }
  })
}

deleteOneAuthor('65ceb1df6227a803e824ca8c')