//PARADIGMA IMPERATIVO (SE CENTRA EN EL COMO SE DEBE ALCAZAR UN OBJETIVO, OSEA IR DANDO INSTRUCCIONES DETALLADAS, LO QUE IMPLICA MAS USO DE LINEAS DE CODIGO)

const array = [2,4,6]
let acumulador = 0

for (let index = 0; index < array.length; index++) {
    acumulador+= array[index]
}

console.log(acumulador)





//PARADIGMA DECLARATIVO (SE CENTRA EN CUAL ES EL OBJETIVO, EL METODO REDUCE Y LA MAYORIA DE LOS METODOS DE ARREGLOS, SE VALEN DE UNA FUNCION QUE RECIBE PARAMETROS Y RETORNA UN RESULTADO, LO QUE IMPLICA EL USO DE MENOS LINEAS DE CODIGO)
const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(arraySum)






// PARADIGMA DE PROGARAMACION FUNCIONAL (EL PRINCIPAL PRINCIPIO DE ESTE PARADIGMA ES QUE LAS FUNCIONES QUE DECLARE, NO DEBEN ALTERAR A LOS DATOS EXTERNOS A ESTA FUNCION EN DADO CASO ESTA LOS UTILICE...LO QUE SE CONOCE COMO FUNCIONES PURAS)



//FUNCION PURA (SOLO UTILIZAMOS LAS VARIABLES COMO PARAMETROS, SIN MODIFICAR SU VALOR)

let edadLegal = 18

function checkEdadLegal(edadUsuario, edadLegal) {
    if(edadUsuario > edadLegal){
        console.log('Es mayor de edad')
    } else {
        console.log('Es menor de edad')
    }
    
}

checkEdadLegal(21, edadLegal)


//FUNCION IMPURA (MODIFICAMOS LOS VALORES DE LAS VARIABLES QUE PASAMOS COMO PARAMETROS)

let edadLegal2 = 18

function checkEdadLegal(edadUsuario, edadLegal) {
    edadLegal2 = 25
    if(edadUsuario > edadLegal){
        console.log('Es mayor de edad')
    } else {
        console.log('Es menor de edad')
    }
    
}

checkEdadLegal(21, edadLegal2)




const reducirArray = (arrayAreducir) => {
    const arraySum = arrayAreducir.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(arraySum)
}

reducirArray([1,2,3,4,5]) //ESTA FUNCION APLICA UN PARADIGMA DE PROGRAMACION FUNCIONAL Y AL MISMO TIEMPO UN PARADIGMA DECLARATIVO


//OTRO CASO PUEDE SER EL METODO PUSH Y CONCAT, VISUALMENTE PUDE QUE DEN EL MISMO RESULTADO PERO A NIVEL LOGICO EL PUSH CAMBIA EL VALOR ORIGINAL DE UN ARRAY MIENTRAS QUE EL CONCAT CREA UNO NUEVO SIN ALTERAR EL O LOS ARRAYS QUE RECIBE COMO PARAMETROS
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = arr1.concat(arr2)
console.log(arr1)
arr1.push(4)
arr1.push(5)
arr1.push(6)
console.log(arr1)
console.log(arr2)
console.log(arr3)





// FUNCIONES ANONIMAS (SON FUNCIONES QUE SON ASIGNADAS A VARIABLES E INVOCADAS POR MEDIO DE LAS MISMAS)

 const ConteoRegresivo = () => {}

let saludo = function(){
    alert('Hola Mundo')
}

saludo()



let conteoRegresivo = function (numero) {
    console.log(numero)
    let numeroSiguiente = numero -1
    if(numeroSiguiente > 0){

        //FUNCION ASINCRONA (ESPERA UN TIEMPO DE RESPUESTA PARA PODER EJECUTARSE, MIENTRAS SIGUE EJECUTANDO LAS TAREAS SINCRONAS)
        setTimeout(()=>{
            conteoRegresivo(numeroSiguiente)
        }, 1000)
    
    }

}
//CODIGO SINCRONO (SE EJECUTA CADA INSTRUCCION Y ESPERA A QUE SE COMPLETE PARA PASAR A LA SIGUIENTE)
console.log('Sigo tareas, mientras el servidor responde cada 3 segundos')
console.log('Sigo tareas, mientras el servidor responde cada 3 segundos')
console.log('Sigo tareas, mientras el servidor responde cada 3 segundos')

conteoRegresivo(10)



const Parent = (childData) => {
console.log(childData)
}


const Child = () => {
   Parent('Hola componente padre desde el componente hijo')
}

Child()











