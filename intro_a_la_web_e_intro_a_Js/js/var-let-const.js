// DESCOMENTA CADA BLOQUE DE CODIGO PARA QUE VAYAS VIENDO EL RESULTADO

/******************************* BLOQUE 1 ************************************* */

//COMENTARIOS EN BLOQUE

/*  console.log('Hola mundo desde un script');
  alert('Hola mundo desde un script')
  document.write('Hola mundo desde un script')
*/

//COMENTARIOS POR LINEAS INDIVIDUALES

// console.log('Hola mundo desde un script');
//   alert('Hola mundo desde un script')
//   document.write('Hola mundo desde un script')

/******************************************************************** */

/******************************* BLOQUE 2************************************* */

/*

//VARIABLES CON VAR

var saludar = "Hey, hola";

//VAR TIENE UN MABITO LOCAL CUANDO ESTA DENTRO DE UNA FUNCION, SIGNIFICA QUE SOLO SE PUEDE ACCEDER A ELLA CUANDO ESTA DENTRO DE ESA FUNCION O BLOQUE
function nuevafuncion() {
  var hola = "Hola";
  console.log(hola);
}

console.log(hola); // POR ESE MOTIVO NO PODEMOS ACCEDER A LA VARIABLE "HOLA" FUERA DE LA FUNCION Y NOS DARÁ UN ERROR

console.log(saludar); //AQUI SI PODEMOS VER A "SALUDAR" PORQUE TIENE UN AMBITO GLOBAL PORQUE EXISTE FUERA DE LA FUNCION

*/

/******************************************************************** */

/********************************* BLOQUE3 *********************************** */

/* 
//LAS VARIABLES CON VAR SE PUEDEN VOLVER A REDECLARAR Y REDEFINIR DENTRO DEL MISMO AMBITO

//REDECLARANDO
 var saludar = 'hey hola'
 var saludar = 'hey, hola tambien'
 console.log(saludar)

//REDEFINIENDO
 var saludar = 'Hey hola'
 saludar = 'dice hola tambien'
 console.log(saludar)

 */

/******************************************************************** */

/***************************** BLOQUE 4 *************************************** */

/*
 //HOISTING (ES UNA MECANISMO DE JAVASCRIPT EN EL QUE PRIMERO SE EJECUTA LA DECLARACION DE LA VARIABLE Y DESPUES LA EJECUCION DE LA IMPRESION DE LA VARIBALE, AUNQUE EN EL CODIGO ESTÉ AL REVÉS )

 console.log(saludar) //undefined
 var saludar = 'Hey, hola'

 console.log(saludar) //reference error
 let saludar = 'Hey, hola'

*/

/******************************************************************** */

/******************************* BLOQUE 5 ************************************* */

/*
//EL PROBLEMA CON VAR ES QUE "SALUDAR" SE REDEFINE CON UN NUEVO VALOR AUNQUE ESTÉ DENTRO DE UN AMBITO DISTINTO"
var saludar = 'hey, hola'
var count = 4

if(count > 3){
  var saludar = 'dice hola tambien' // AQUI SALUDAR VUELVE A REDEFINIRSE
}

console.log(saludar)

*/

/******************************************************************** */

/******************************* BLOQUE 6 ************************************* */

/*

//VARIABLES CON LET, SOLO ESTAN DISPONIBLES PARA USAR DENTRO DE SU BLOQUE
 let saludar = 'Dice hola'
 let count = 4;

 if(count > 3){
  let hola = 'dice hola tambien'
   console.log(hola)
 }

 console.log(hola) // ES UNDEFINED PORQUE LO INTENTAMOS LLAMAR FUERA DE SU BLOQUE
 console.log(saludar) // NOS MUESTRA SU VALOR PORQUE EL CONSOLE ESTA EN EL MISMO AMBITO QUE SALUDAR

 */

/******************************************************************** */

/***************************** BLOQUE 7*************************************** */

/*

 //LET PUEDE REDEFINIRSE PERO NO REDECLARARSE
 
 //REDEFINIENDO
  let saludar = "dice Hola";
  saludar = "dice Hola tambien";

  //REDECLARANDO
      let saludar = "dice Hola";
    let saludar = "dice Hola tambien"; //NOS DARA UN ERROR

*/

/******************************************************************** */

/****************************** BLOQUE 8 ************************************** */

/*

    //AUNQUE SI DECLARAMOS LA VARIABLE EN DIFERENTES AMBITOS NO HABRA NINGUN ERROR

       let saludar = "dice Hola";
    if (true) {
        let saludar = "dice Hola tambien";
        console.log(saludar); 
    }
    console.log(saludar); 

 */

/******************************************************************** */

/*************************** BLOQUE 9 ***************************************** */

/*

//CONST NO PUEDE VOLVER A REDECLARARSE NI REDEFINIRSE

  const saludar = "dice Hola";
    const saludar = "dice Hola tambien"; // NOS DARA UN ERROR

const saludar = "dice Hola";
    saludar = "dice Hola tambien";// NOS DARA UN ERROR

    */
