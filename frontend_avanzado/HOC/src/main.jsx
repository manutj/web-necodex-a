import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


//Componente de orden superior 
// const withLoading = (AlgunComponente) =>{ //recibimos por parametros a cualquier otro componente


//   //Definimos el componente en si
//   class WithLoading extends Component {

//     //Definimos los estados
//     state={
//       isLoding: true
//     }

//     //Actualizamos el estado
//     componentDidMount(){
//       setTimeout(() => {
//         this.setState({isLoding: false})
//       }, 5000);
//     }

//     render(){
//       return(
//         //devolvemos el componente pasado por parametros
//         <AlgunComponente loading={this.state.isLoding}/>
//       )
//     }
//   }

//   //Devolvemos la ejecucion de la funcion del componente de orden superior (que nos regresa un nuevo componente mejorado o con alguna funcionalidad extra)
//   return WithLoading 
// }


// //Definiendo el componente que pasaremos por parametro al HOC
// const MiComponente = ({loading}) => ( //recibimos los props que vienen desde el HOC
// <div>
//   {/* Hacemos renderizacion condicional */}
//   {loading ? <h1>Loading...</h1> : <h1>Hola Mundo!!</h1>} 
// </div>
//   )

//   const MyNewComponentWithLoading = withLoading(MiComponente) // Guardar el nuevo componente mejorado


const getAuthentication = (AlgunComponente) => {
  return class extends Component{
    componentDidMount(){
      if(!this.props.isAuthenticated){
        console.log('Ve al login')
      }else{
        console.log('Bienvenido!')
      }
    }
    render(){
      return <AlgunComponente/> 
    }
  }
}

const MiComponente = () => ( 
<div>
<h1>Hello World</h1>
</div>
  )

  const MyNewComponentWithAuthentication = getAuthentication(MiComponente)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renderizamos el componente mejorado */}
  {/* <MyNewComponentWithLoading/> */}
  <MyNewComponentWithAuthentication isAuthenticated={true}/>
    {/* <App /> */}
  </React.StrictMode>,
)
