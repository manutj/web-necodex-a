const request = require('request');
// request.get('http://www.google.com', (error, response, body)=> {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// request('https://pokeapi.co/api/v2/pokemon/ditto', (error, response, body)=> {
//   if(response.statusCode === 200){
//     const json = JSON.parse(body)
//     console.log(json)
//   }else{
//     console.log(body)
//   }
// })

// const getPokemon = (name) => {
//   request(`https://pokeapi.co/api/v2/pokemon/${name}`, (error, response, body)=> {
//     if(response.statusCode === 200){
//       const json = JSON.parse(body)
//       console.log(json.forms[0].name)
//     }else{
//       console.log(body)
//     }
//   })
// }

// getPokemon('butterfree')



//C(CREATE)R(READ ALL, READ-ONE)U(UPDATE - PATCH, PUT)D(DELETE)

const URL_SERVER = 'https://crudcrud.com'

const createAuthor = (name, lastname, biography, nacionality, gender, age, isAlive) => {
const URL_POST = `${URL_SERVER}/api/a3d34af63e1d4262b2e53bb5600e3395/unicorns`
const jsonSend = {
  "name": name,
  "lastname": lastname,
  "biography": biography,
  "nacionality" : nacionality,
  "gender": gender,
  "age": age,
  "isAlive": isAlive
}

request.post(URL_POST, {form: jsonSend}, (err, response, body)=>{
  if(response.statusCode === 201){
    const author = JSON.parse(body)
    console.log(author)
    return author
  }else{
    console.log(response.statusCode)
  }
})
}


createAuthor('Juan', 'Valera', 'Autor', 'Español', 'M', 60, false)

