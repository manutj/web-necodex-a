// VARIABLES

let nombre = 'Manuel';
nombre = 'alejandro'

function Media(a,b) {
    let resultado;
    resultado = (a + b) / 2
    return resultado
}

let miMedia = Media(7,8)
// console.log(miMedia)


let media = (a,b) => {
    let resultado;
    resultado = (a + b) / 2
    return resultado
}

//console.log(media(7,8))


//CONDICIONALES
// if(2 > 3){
// console.log("2 es mayor que 3")
// } else if (5 > 7) {
//     console.log("5  es mayor que 7") 
// } else {
//     console.log('No se cumplio ninguna condicion')
// }


//BUCLE

// for (let index = 0; index <= 10; index++) {
// console.log(index)
// }

// let puntos = 0
// while(puntos <=10){
//     console.log(puntos)
//     puntos++
// }


//FUNCIONES

function saludo() {
   setTimeout(()=>{
    console.log("preparando saludo...")
   }, 1000) 

   setTimeout(()=>{
    console.log("Hola alejandro...")
   }, 2000)

   setTimeout(()=>{
    console.log("preparando despedida..")
   }, 3000)

   setTimeout(()=>{
    console.log("adios Alejandro..")
   }, 4000)
}

//saludo()



// ARREGLOS 

let paises = ['Colombia', 'Mexico', "Brasil", 'El Salvador']

for (let index = 0; index < paises.length; index++) {
    console.log(paises[index])
    
}






