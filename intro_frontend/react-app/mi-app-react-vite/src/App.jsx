//import { useState } from 'react'
//import './App.css'
import React from 'react'
import HelloWord from './components/HelloWord.jsx'
import PropsFunction from './components/PropsFunction.jsx'

function App() {
  // const [count, setCount] = useState(0)
  let titulo = 'Hola, soy el titulo'
  let InfoPersona = {nombre:'Alejadro', pais: 'Mexico', edad: 22}
  let InfoPersona2 = {nombreV:'Erick', paisV: 'Mexico', edadV: 31}
  let info = [{nombre: 'Jorge', edad: 20}, {nombre: 'Luis', edad:12}, {nombre: 'Manuel', edad: 28}, {nombre: 'Daniel', edad: 25}, {nombre: 'Erick', edad: 30}, {nombre: 'Francisco', edad: 40}]



  let img = './assets/sky.jpeg'
  let parrafo = <p style={{color:'lime', fontSize:20}}>Hola mundo</p>

  return(
    <>
    {/* <HelloWord name={'Alan'} colorText={'red'} objeto={{nombre: 'Jose'}}/>
    <PropsFunction {...InfoPersona} infoPersona={InfoPersona2}  numero={10} booleano={true}/> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      */}
      {parrafo}
  <section className='tarjetas-contenedor'>
    {info.map(usuario=>{
      
      return(
        <div className='tarjeta'>
          <h1>{`Nombre: ${usuario.nombre}`}</h1>
          <h2>{`Edad: ${usuario.edad}`}</h2>
        </div>
      )
      
    })}
  </section>

    </>
  )
}

export default App
