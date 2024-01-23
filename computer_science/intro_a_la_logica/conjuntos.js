// const array = [1,3,5,7,3,5,9]
// console.log(array)

// const set = new Set([1,3,5,7,3,5,9])



// set.add(10)
// set.add(3)


// console.log(set.has(11))

// console.log(set)









 //const spreadExtendido = (param) => console.log(...param) // Expandido
// const spreadReagrupado = (...param) => console.log(param) // Reagrupado
 const array = [1,2,3,4,5]


 //spreadExtendido(array)
// spreadReagrupado(1,2,3,4,5)








//UNION (Elementos que estan en el primer conjunto unidos a elementos que estan en el segundo conjunto)

const conjuntoUno = new Set([1,2,3,4,5])
const conjuntoDos = new Set([4,5,6,7,8])


//const set = new Set([...conjuntoUno, ...conjuntoDos])
//console.log(set)


//DIFERENCIA (ELEMENTOS DEL PRIMER CONJUNTO QUE NO ESTAN EN EL SEGUNDO CONJUNTO)
// const diffElements = [...conjuntoUno].filter(element=> !conjuntoDos.has(element))
// const set = new Set (diffElements)
// console.log(set)




//INTERSECCION (ELEMENTOS COMUNES DEL PRIMER CONJUNTO Y EL SEGUNDO CONJUNTO)
 const intersecElements = [...conjuntoUno].filter(element=> conjuntoDos.has(element))
// const set = new Set (intersecElements)
// console.log(set)




//EXCLUSION (ELEMENTOS QUE O SOLO ESTAN EN EL PRIMER CONJUNTO O SOLO ESTAN EN EL SEGUNDO CONJUNTO)
 const elementosExcuidos1 = [...conjuntoUno].filter(element=> !conjuntoDos.has(element))

 const elementosExcuidos2 = [...conjuntoDos].filter(element=> !conjuntoUno.has(element))

 const set = new Set([...elementosExcuidos1, ...elementosExcuidos2])
 console.log(set)




