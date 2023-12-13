
let i = 0; j=1; 
let k;
while(i < 40){
    document.write(i + "<br>")
    k = i+j
    i = j
    j = k
}


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
