//UN COMPONENTE ES UNA FUNCION (SI SE HABLA DE COMPONENETES FUNCIONALES) QUE PUEDE O NO EJECUTAR UNA LOGICA PERO SIEMPRE O CASI SIEMPRE DEBE DEVOLVER ELEMENTOS QUE PUEDAN REFLEJARSE EN LA PANTALLA


//ESTOS COMPONENTES FUNCIONALES VIENEN A REEMPLAZAR A LOS DE TIPO CLASE


import { useState, useEffect } from "react" // HOOK USESTATE, HOOK USEEFFECT


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

const HelloWord = ({name, colorText, objeto, saludo}) => {


  // EL ESTADO es un valor de cualquier tipo que puede tener un valor por defecto o no tenerlo y ademas se puede actualizar cuanto veces nosotros lo necesitemos y con cualquier tipo de dato
  const [texto, setTexto] = useState('Haz click para cambiar el estado') // => VALOR POR DEFECTO ESTA EN LOS PARENTESIS

const [edad, setEdad] = useState(0) // Valor por defecto


//ACCION QUE SE REALIZA CUANDO EL COMPONENTE SE HA RENDERIZADO Y MONTADO EN EL DOM
useEffect(() => {
  console.log('Se monto el componente funcional sin dependencias')
  setTimeout(()=>{
    setTexto('Se actualizo el texto del boton con un useEffect')
  }, 5000)
}, [])

useEffect(() => {
  console.log('Se monto el componente funcional con depencias')
}, [texto])

  return (
    <>
     <p>COMPONENTE HELLOWORD</p>
     <button onClick={()=>setTexto('Otro texto para el boton')}>{`${texto}`}</button>
     <br />
     <br />
     <button onClick={()=>setTexto('Otro texto para el boton 2')}>{`${texto}`}</button>
    <h1 style={{color: colorText}}>Hello, {name}</h1>
    <h1>{objeto.nombre}</h1>
    </>
  )
}

export default HelloWord

