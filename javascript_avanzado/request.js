const request = require('request');
request.get('http://www.google.com', (error, response, body)=> {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

request('https://pokeapi.co/api/v2/pokemon/ditto', (error, response, body)=> {
  if(response.statusCode === 200){
    const json = JSON.parse(body)
    console.log(json)
  }else{
    console.log(body)
  }
})

const getPokemon = (name) => {
  request(`https://pokeapi.co/api/v2/pokemon/${name}`, (error, response, body)=> {
    if(response.statusCode === 200){
      const json = JSON.parse(body)
      console.log(json.forms[0].name)
    }else{
      console.log(body)
    }
  })
}

getPokemon('butterfree')







