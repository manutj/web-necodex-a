import React from 'react'

const PropsFunction = ({numero, booleano, cadena, array}) => {
  return (
    <>
    <h1>{numero}</h1>
    <h1>{booleano}</h1>
    <h1>{cadena}</h1>
    <h1>{array}</h1>
    </>
  )
}

export default PropsFunction