const request = require('request');

//PROMESAS

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const randomNumber = Math.random()
//         console.log(randomNumber)
//         if(randomNumber > 0.5){
//             resolve('La promesa se ha resuelto porque el numero aleatorio es mayor a 5')
//         }else{
//             reject('Ocurrio un error en la llamada de datos')
//         }
//     }, 1000);
// })


// myPromise
// .then(data=> console.log(data))
// .catch(error=>console.log(error))




// CALLBACK HELL

// getArticle(20, (user)=>{
//     console.log('Estos son los articulos', user)
//     getUserData(userName, (name)=>{
//         console.log(name)
//         getAddress(name, (item)=>{
//             console.log(item)
//             //...y sigue el mismo patron
//         })
//     })
// })




// ASYNC AWAIT
// const fetchUrl = async (url)=>{
//     try {
//       const response = await fetch(url)  
//       if(response.ok){
//         const data = await response.json()
//         return data
//       }else{
//         throw new Error('La solicitud no respondio con ok')
//       }
//     } catch (error) {
//         console.log(error)
//     }
//     }
    
//     const data = fetchUrl('https://pokeapi.co/api/v2/pokemon/ditto')
//     data.then(pokemon=>console.log(pokemon.forms[0].name))



    // const fetchUrlPromise = (url) => {
    //     return new Promise((resolve, reject)=>{
    //         fetch(url)
    //         .then(response=>{
    //             if(response.ok){
    //                 return response.json()
    //             }else{
    //                 throw new Error('La solicitud no respondio con ok')
    //               }
    //         })
    //         .then(data=>resolve(data))
    //         .catch(error=>reject(error))
    //     })
    // }


    // fetchUrlPromise('https://pokeapi.co/api/v2/pokemon/ditto')
    // .then(pokemon=>console.log(pokemon.forms[0].name))
    // .catch(error=>console.log(error))






// const asyncWithCallback = (numero1, numero2, callback) => {
//     const resultado = numero1 + numero2
//     return setTimeout(()=>{
//         callback(resultado)
//     }, 1000)
// }

// asyncWithCallback(12,7, (resultado)=>{
//     console.log(resultado)
// })



// const asyncWithPromises = (numero1, numero2) => {
//     const operacion = numero1 + numero2
//     return new Promise(resolve=>{
//         return setTimeout(()=>{
//             resolve(operacion)
//         }, 1000)
//     })
// }

// asyncWithPromises(1,3)
// .then(result=>console.log(result))



const obtenerPeliculasPersonaje = (idPersonaje) => {
    URL_BASE = 'https://swapi.dev/api/people/'
    return new Promise((resolve, reject)=>{
        request.get(`${URL_BASE}/${idPersonaje}`, (err, res, body)=>{
            res.statusCode === 200 
            ? resolve(body)
            : reject('No se encontro el personaje')
        })
    })
}

obtenerPeliculasPersonaje(11)
.then(body=>{
    let infoPersonaje = JSON.parse(body)
    let peliculas = infoPersonaje.films
    peliculas.forEach(film=>{
        request(film, (err,res, body)=>{
           if(res.statusCode === 200){
            let infoPelicula = JSON.parse(body)
            console.log('Peliculas:', infoPelicula.title)
           }else{
            console.log('No hay peliculas')
           }
        })
    })
})
.catch(err=>console.log(err))