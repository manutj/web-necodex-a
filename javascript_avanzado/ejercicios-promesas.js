const axios = require('axios');

let obtenerPokemon = (id) => {
const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/'

axios.get(`${URL_BASE}${id}`)
.then(response=>{
    const resultado = response.data
    const tipos = resultado.types
    const tiposNombres = tipos.map(tipo=>tipo.type.name)
    console.log(tiposNombres)
})
.catch(error=>console.log('error en la peticion', error))
}

//obtenerPokemon(10)




const obtenerAutor = (nombreLibro) => {
  const URL_BASE = 'http://openlibrary.org/search.json?q='
  axios.get(`${URL_BASE}${nombreLibro}`)
  .then(response=>{
    const resultados = response.data
    console.log('Autor', resultados.docs[0].author_name)
  })
}

//obtenerAutor('i robot')




const obtenerHabitantes = (idPlaneta) => {
const URL_BASE = ' http://swapi.dev/api/planets/'
axios.get(`${URL_BASE}${idPlaneta}`)
.then(responsePlaneta=>{
    infoPlaneta = responsePlaneta.data
    console.log('nombre del planeta:', infoPlaneta.name)

    if(infoPlaneta.residents.length>0){
        infoPlaneta.residents.forEach(URL_HABITANTE=>{
            axios.get(URL_HABITANTE)
            .then(responseHabitante=>{
                //console.log(responseHabitante)
                let nombreHabitante = responseHabitante.data.name
                console.log('Habitante', nombreHabitante)
            })
        })
    }else{
        console.log('No hay habitantes')
    }

})
.catch(error=>console.log('error en la solicitud o no existe el planeta', error))
}



obtenerHabitantes(1)
