// const array = [1,3,5,7,3,5,9]
// console.log(array)

// const set = new Set([1,3,5,7,3,5,9])

// set.add(10)
// set.add(3)


// console.log(set.has(11))

// console.log(set)






//UNION

const conjuntoUno = new Set([1,2,3,4,5])
const conjuntoDos = new Set([4,5,6,7,8])

 //const spreadExtendido = (param) => console.log(...param) // Expandido
// const spreadReagrupado = (...param) => console.log(param) // Reagrupado
 const array = [1,2,3,4,5]

 //spreadExtendido(array)
// spreadReagrupado(1,2,3,4,5)


//const set = new Set([...conjuntoUno, ...conjuntoDos])
//console.log(set)




//DIFERENCIA
const diffElements = [...conjuntoUno].filter(element=> !conjuntoDos.has(element))
const set = new Set (diffElements)
console.log(set)


