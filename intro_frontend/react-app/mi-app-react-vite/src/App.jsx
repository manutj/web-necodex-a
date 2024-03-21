//Importaciones archivos: estilos, imagenes, otros componenentes, librerias,hooks, etc

//HOOKS
import { useState } from 'react'

//COMPONENTES
import HelloWordFunction from './components/FunctionalComponent.jsx'
import PokemonInfo from './components/PokemonInfo.jsx'
import PropsFunction from './components/PropsFunction.jsx'
import HelloWordClass from './components/ClassComponent.jsx'
import InlineStyle from './components/InlineStyle.jsx'

//ESTILOS CSS
import './App.css'

//ESTILOS CSS POR MODULOS
import style from './app.module.css'
import style2 from './app2.module.css'

function App() {

  //AQUI PODEMOS DECLARAR VARIABLES, ESTADOS, EFECTOS, FUNCIONES PROPIAS, ETC... QUE PUEDEN SER UTILIZADAS EN NUESTRA LOGICA O DIRECTAMENTE EN EL RETURN

  let titulo = 'Hola, soy el titulo'
  let InfoPersona = {nombre:'Alejadro', pais: 'Mexico', edad: 22}
  let InfoPersona2 = {nombreV:'Erick', paisV: 'Mexico', edadV: 31}
  let info = [{nombre: 'Jorge', edad: 20}, {nombre: 'Luis', edad:12}, {nombre: 'Manuel', edad: 28}, {nombre: 'Daniel', edad: 25}, {nombre: 'Erick', edad: 30}, {nombre: 'Francisco', edad: 40}]


  //ESTADOS 
  const [count, setCount] = useState(0)
  //const [{name, age, hobby}, setUser] = useState({name:'Carlos', age:20, hobby:'leer'})

  const [user, setUser] = useState({userName:{name:'Carlos', lastname:'Guevara'}, age:20, hobby:'leer'})
 

  //FUNCIONES
  const changeName = () => {
    setUser({
      ...user,
      userName:{
        name: 'Erick',
      lastname: 'Ramirez'
      }
    })
  }

//LAS VARIABLES PUEDEN ADQUIRIR CUALQUIER TIPO DE VALOR
  let img = './assets/sky.jpeg'
  let parrafo = <p style={{color:'lime', fontSize:20}}>Hola mundo</p>

  //RETORNAMOS CONTENIDO HTML, JSX U OTROS COMPONENTES IMPORTADOS MEDIANTE UN FRAGMENTO PADRE (<> </>)
  return(
    <>
    <div className='App'>
      {/* APLICAMOS ESTILOS MEDIANTE MODULOS CSS */}
      <h1>APP COMPONENT</h1>
      <p id={style2.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius, hic voluptatibus doloribus adipisci omnis dolorum eveniet tempore, ab harum temporibus laudantium nisi, laborum fugit natus sunt nulla odit inventore!</p>
      <p id={style.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias asperiores rerum quos porro aliquid amet error sapiente quasi quod, consequuntur voluptates iste maiores hic cumque quidem eos! Iste, voluptatum nihil?</p>

      <InlineStyle/>
    </div>



    {/* <HelloWordClass name={'Ricardo'}/> */}
    {/* <PokemonInfo name={'charizard'}/> */}
    {/* <HelloWordFunction countState={count} name={'Alan'} colorText={'red'} objeto={{nombre: 'Jose'}} saludo={()=>alert('Hola mundo')}/> */}
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
