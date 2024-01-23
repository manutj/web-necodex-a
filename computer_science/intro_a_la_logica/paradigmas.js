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
