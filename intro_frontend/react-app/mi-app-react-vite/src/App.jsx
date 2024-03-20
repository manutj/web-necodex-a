import { useState } from 'react'
//import './App.css'
import HelloWord from './components/FunctionalComponent.jsx'
import PokemonInfo from './components/PokemonInfo.jsx'
import PropsFunction from './components/PropsFunction.jsx'
import HelloWordClass from './components/ClassComponent.jsx'

function App() {
  let titulo = 'Hola, soy el titulo'
  let InfoPersona = {nombre:'Alejadro', pais: 'Mexico', edad: 22}
  let InfoPersona2 = {nombreV:'Erick', paisV: 'Mexico', edadV: 31}
  let info = [{nombre: 'Jorge', edad: 20}, {nombre: 'Luis', edad:12}, {nombre: 'Manuel', edad: 28}, {nombre: 'Daniel', edad: 25}, {nombre: 'Erick', edad: 30}, {nombre: 'Francisco', edad: 40}]


  const [count, setCount] = useState(0)
  //const [{name, age, hobby}, setUser] = useState({name:'Carlos', age:20, hobby:'leer'})

  const [user, setUser] = useState({userName:{name:'Carlos', lastname:'Guevara'}, age:20, hobby:'leer'})
 
  const changeName = () => {
    setUser({
      ...user,
      userName:{
        name: 'Erick',
      lastname: 'Ramirez'
      }
    })
  }


  let img = './assets/sky.jpeg'
  let parrafo = <p style={{color:'lime', fontSize:20}}>Hola mundo</p>

  return(
    <>
    <HelloWordClass name={'Ricardo'}/>
    {/* <PokemonInfo name={'charizard'}/> */}
    {/* <HelloWord countState={count} name={'Alan'} colorText={'red'} objeto={{nombre: 'Jose'}} saludo={()=>alert('Hola mundo')}/> */}
    {/* <PropsFunction {...InfoPersona} infoPersona={InfoPersona2}  numero={10} booleano={true}/> */}
    <div>
      {/* <h1>{name}</h1> */}
      {/* <h1>{user.userName.name}</h1>
      <button onClick={changeName}>Cambiar nombre</button> */}
    </div>
      {/* <div className="card">
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          count is {count}
        </button>
      </div> */}
     
      {/* {parrafo}
  <section className='tarjetas-contenedor'>
    {info.map(usuario=>{
      return usuario.edad > 18 && (
        <div className='tarjeta'>
          <h1>{`Nombre: ${usuario.nombre}`}</h1>
          <h2>{`Edad: ${usuario.edad}`}</h2>
        </div>
      )
      
    })}
  </section> */}

    </>
  )
}

export default App
