//VANILLA JS (funciones tradicionales)
/* function Conteo(num) {
    if(typeof num != 'number') return false; // El return nos sirve para finalizar la ejecucion de una funcion, todo lo que se encuentre debajo de el ya no se ejecutara
   for (let i = 1; i <= num ; i++) {
    console.log(i)
   }
}
*/


// ES6 (funciones flecha o array)
const Conteo = () => {
    if(typeof num != 'number') return false;
    for (let i = 1; i <= num ; i++) {
     console.log(i)
    }
}

//Una funcion no se puede ejecutar si no es invocada
const Conteo2 = () => {
    if(typeof num != 'number') return false;
    for (let i = 1; i <= num ; i++) {
     console.log(i)
    }
    }




//console.log(Conteo('100'));
//Nunca se invoca a la funcion "Conteo2"


// FUNCIONES ANONIMAS (Usualmente van junto a una variable que se encrga de almacenar el valor que duelve la funcion anonima y anonima significa que no tienen un nombre)

// let multiplicar = (num1, num2)=> {
//     let multi = num1 * num2
//     return multi
// }


 
//    let multiplicar = function() {
//     let multi = 4 * 5
//     return multi
// }

//console.log(multiplicar())




let dato1 = 'hola mundo'
let dato2 = 'k'

/* console.log(value) */
 //No podemos acceder a una variable desde el ambito global(exterior) que se declara en el ambito local de una funcion(interior)

const Prueba = (num1, num2) => {
    let value = 'valor'
    console.log(dato1) //Mientras que si podemos acceder a variables del ambito global(exterior) dentro del ambito local de una funcion(interior) 
    if(num1 > 2 && num2>3){
        return dato1, dato2;   //Una funcion solo puede gresar un valor 
    }
}


console.log(Prueba(3,4))








