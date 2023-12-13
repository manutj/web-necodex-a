//DECLARAR UN OBJETO LITERAL
const persona = {
    nombre: 'Manuel',
    edad: 27,
    sexo: 'masculino',
    patiempos: ['patinar', 'bailar'],
    hablar: function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
    }
}




//ACCEDER A LAS PROPIEDADES DEL OBJETO MEDIANTE EL PUNTO O LOS CORCHETES


 console.log(persona.hablar())  // EJECUTAMOS LA FUNCION CON LOS PARENTESIS
 console.log(persona.nombre)
 console.log(persona['hablar']()) // EJECUTAMOS LA FUNCION CON LOS PARENTESIS
 console.log(persona['nombre'])

 
const superheroe = {
    nombre: 'Superman',
    peso: 30,
    edad: 35,
    empresa: 'Marvel'
}


console.log(`${superheroe.nombre} tiene ${superheroe.edad}, pesa ${superheroe.peso}`)

/* *******************************DESTRUCTURACION ******************************** */
console.log(`${nombre} tiene ${edad}, pesa ${peso}`)


//DECLARAR UN OBJETO CONSTRUIDO
function Persona(nombre, edad, sexo, pasatiempos) {
this.nombre = nombre
this.edad = edad
this.sexo = sexo
this.pasatiempos = pasatiempos
this.hablar = function () {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
}
}

const manuel = new Persona('manuel', 27, 'masculino', ['patinar', 'bailar'])



const myObj = {
    nombre: 'Jose',
    edad: 25,
    hablar : function () {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
    }
}

//Javascript no almacena el contenido de las propiedades dentro de los objetos, solo guarda el nombre de las propiedades con referencias a donde estan almacenados los valores

const myFunc = myObj.nombre // guarda la referencia de lo que tiene el nombre en ese momento

myObj.nombre = null // actualiza el valor del nombre

//console.log(myObj.nombre) //Muestra el valor del nombre actualizado

//console.log(myFunc) //Muestra el valor de la referencia que tuvo el nombre antes de la actualizacion




/* ********************************* CONDICIONALES ****************************** */

/* if (10 > 5) console.log('Es mayor') // EJECUTAR UNA SOLA INSTRUCCION SI LA CONDICION ES VERDADERA



// SI LA PRIMERA CONDICION ES VERDADERA, EJECUTA EL CODIGO PARA ESA CONDICION Y TERMINA EL IF; SINO EJECUTA EL CODIGO DEL ELSE Y TERMINA EL IF

 if (10 > 5) {
     console.log('Es mayor')
    prompt('Escribe tu edad')
 } else {
     console.log('Es menor')
 }


 if(10>11){
     console.log('mensaje 1')
 } else if(10>20){
     console.log('mensaje 2')
 } else if (10 < 7) {
     console.log('mensaje 3')
 } else {
     console.log('no se cumplio nada de lo anterior')
 }


 if(10 > 5){
     if(8*4 == 32){
         console.log('operacion exitosa')
     }else if ((10 / 2) == 5){
         console.log('operacion exitosa') 
     }else{
         console.log('hubo un problema con la division') 
     }
 } else {
     console.log('hubo un problema con el primer if') 
 }

 */




/* *********************************** OPERADORES TERNARIOS ***************************************** */

//LOS OPERADORES TERNARIOS SON OTRA FORMA DE EVALUAR CONDICIONES COMO LOS IF-ELSE, SOLO QUE UTILIZAMOS EL SIMBOLO "?" PARA EJECUTAR CODIGO EN CASO LA CONDICION SEA VERDADERA Y EL SIMBOLO ":" PARA EJECUTAR EL CODIGO EN CASO LA CONDICION SE FALSA

/*

 let nota = 7
 nota < 5 ? console.log('nota insuficiente') : console.log('nota suficiente')

let nota = 7
let calificacion =

    nota < 5 ? 'Insuficiente' :
    nota < 6 ? 'Suficiente' :
    nota < 8 ? 'Muy bien' :
    nota <= 9 ? 'Excelente' :
    'Sobresaliente'

    console.log('He obtenido un', calificacion)

*/


