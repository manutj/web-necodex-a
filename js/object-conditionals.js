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

/* 

 console.log(persona.hablar())  // EJECUTAMOS LA FUNCION CON LOS PARENTESIS
 console.log(persona.nombre)
 console.log(persona['hablar']()) // EJECUTAMOS LA FUNCION CON LOS PARENTESIS
 console.log(persona['nombre'])

 */



// DECLARAR UN OBJETO CONSTRUIDO
// function Persona(nombre, edad, sexo, pasatiempos) {
// this.nombre = nombre
// this.edad = edad
// this.sexo = sexo
// this.pasatiempos = pasatiempos
// this.hablar = function () {
//     return `Hola, soy ${this.nombre} y tengo ${this.edad} años`
// }
// }

// const manuel = new Persona('manuel', 27, 'masculino', ['patinar', 'bailar'])



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

console.log(myObj.nombre) //Muestra el valor del nombre actualizado

console.log(myFunc) //Muestra el valor de la referencia que tuvo el nombre antes de la actualizacion




