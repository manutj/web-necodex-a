import React from 'react'

//LOS PROPS DE PUEDEN UTILIZAR DE TRES MANERAS:

//1. UTILIZAR EL OBJETO GLOBAL PROPS EN LOS PARENTESIS DEL COMPONENTE

// const HelloWord = (props) => {
//   return(
//     <div>
// <h1 style={{color: props.colorText}}>Hello, {props.name}</h1>
//     </div>
//   )
// }



//2. UTILIZAR LA DESTRUCTURACION
// const HelloWord = (props) => {

//    const obj = {nombre: 'Manuel', edad: 28}

//    const {nombre} = obj

//   const {name, colorText} = props

//   return(
//     <div>
// <h1 style={{color: colorText}}>Hello, {name}</h1>
//     </div>
//   )
// }


//3. UTILIZAR DIRECTAMENTE LA DESTRUCTURACION EN LOS PARENTESIS

const HelloWord = ({name, colorText, objeto}) => {
  return (
    <>
     <p>COMPONENTE HELLOWORD</p>
    <h1 style={{color: colorText}}>Hello, {name}</h1>
    <h1>{objeto.nombre}</h1>
    </>
  )
}

export default HelloWord

