// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

let mostrarMensaje = (mensaje, callback) => {
    callback(mensaje)
}

// let mostrarEnConsola = msj => {
// console.log(msj)
// }

mostrarMensaje('Hola soy Manuel', (saludo => console.log(saludo)))

// 2.- Crear una función que reciba como
//     argumento una variable de cualquier tipo y un callback. 
//     La función debe retornar como resultado, mediante el callback, 
//      cual es el tipo de dato de la variable ingresada e imprimir su contenido.


const tipoVariable = (variable, callback) => {
    callback(variable)
}

let numero = 2
tipoVariable(numero, (v)=>console.log(`${v} es de tipo: ${typeof v}`))


// 4.- Escribe una función que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//              -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//              -> PEJELARTO


let transformarCadena = (palabra, transformarPalabra) => {
transformarPalabra(palabra)
}

let toMayus = palabra => console.log(`Palabra transformada ${palabra.toUpperCase()}`)
let toMinus = palabra => console.log(`Palabra transformada ${palabra.toLowerCase()}`)

transformarCadena('Hola Mundo', toMinus)


// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//      EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//      mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback.



let minutos = [120, 80, 200, 100, 1000, 250, 1, 500]

let filtrar = (cantidades, comparar) => {
comparar(cantidades)
}

let compararCantidades = (arrayCantidades) => {
    let nvoArray = arrayCantidades.filter((element)=>{
        return element > 120
    })
    console.log(nvoArray)
}

//filtrar(minutos, compararCantidades)

let nuevoArray = []
for (let i = 0; i < minutos.length; i++) {
    if(minutos[i] > 120){
       nuevoArray.push(minutos[i]) 
    }
    
}
//console.log(nuevoArray)