import React from 'react'

const PropsFunction = ({numero, booleano, nombre, pais, edad, infoPersona:{nombreV,paisV,edadV}}) => {
  return (
    <>
     <p>************************************************</p>
    <p>COMPONENTE PROPSFUNCTION</p>
    <h1>{numero}</h1>
    <h1>{`${booleano}`}</h1>
    <h1>{`${nombre}, ${pais}, ${edad}`}</h1>
    <h1>{`${nombreV}, ${paisV}, ${edadV}`}</h1>
    </>

  )
}


export default PropsFunction