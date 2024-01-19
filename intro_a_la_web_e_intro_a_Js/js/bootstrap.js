const inputColor = document.getElementById('inputColor')
const boton = document.getElementById('boton')
const textoHexa = document.getElementById('textoHexa')
const cardColor = document.getElementById('cardColor')


boton.addEventListener("click", function(){
    textoHexa.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value
})