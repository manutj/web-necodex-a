const demoId = document.getElementById('demo')
console.log(demoId)


demoId.style.border = '5px solid purple'


const link = document.getElementById('link')
console.log(link)

const cambiarAtributo = () => {
   link.href = 'https://w3schools.com' 
   link.innerText = 'w3schools'
}


const demoClass = document.getElementsByClassName('demo')
console.log(demoClass)
for (let index = 0; index < demoClass.length; index++) {
    demoClass[index].style.border = '5px solid purple'
}

const demoTag = document.getElementsByTagName('article')
demoTag[1].style.border = '5px solid purple'
console.log(demoTag)

const parrafo_primero = document.querySelector("div#caja p.primero")
console.log(parrafo_primero)
parrafo_primero.style.color = 'green'

const parrafos = document.querySelectorAll("#caja p");
console.log(parrafos)

for(i=0 ; i < parrafos.length ; i++){
    parrafos[i].style.backgroundColor = "orange";
    }

//INVESTIGAR SOBRE QUERYSELECTOR(#demo, .demo) Y QUERYSELECTORALL(.demo)


