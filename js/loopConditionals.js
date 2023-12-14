
 //WHILE

/* let i = 0; j=1; 
let k;
 while(i < 40){
     document.write(i + "<br>")
     k = i+j
     i = j
     j = k
 } */

/* EXPLICACION DE SERIE FIBONACCI */

//LA PRIMERA VUELTA

// DOCUMENT.WRITE i(0) 

// K = (i)=> 0 + (j)=> 1
// I = J=> (1);
// J = K=> (1)


// //SEGUNDA VUELTA

// DOCUMENT.WRITE i(1)
// K = i=> (1) + j => (1)
// I = J=> (1)
// J = 2


// //TERCERA VUELTA
// DOCUMENT.WRITE i(1)
// K = i=> (1) + j => (2)
// I = J=> (2)
// J = 3

// //CUARTA VUELTA VUELTA
// DOCUMENT.WRITE i(2)
// K = i=> (2) + j => (3)
// I = J=> (3)
// J = 5





//DO-WHILE 

//(numeros pares menores que 20)

/*
 let i = 2
 do {
     document.write(i + '<br />')
         i = i + 2
 } while (i < 20); 
 */



//FOR (FOR, FOR-IN, FOR-OF, FOREACH)


let arreglo = ['manzana', 'pera', 'fresa', 'banano']

//MANUALMENTE
let elemento1 = arreglo[0]
let elemento2 = arreglo[1]

//console.log(elemento1, elemento2)


//FOR

for (let i = 0; i < arreglo.length; i++) {
    const element = arreglo[i];
    //document.write(element + ' ')
}


// FOR IN
for (const i in arreglo) {
    //console.log(arreglo[i])
}


//FOR OF

for (const element of arreglo) {
    //console.log(element)
}




//FOR EACH 

 arreglo.forEach((fruit, index, arr)=>{
//console.log(fruit)
 })



