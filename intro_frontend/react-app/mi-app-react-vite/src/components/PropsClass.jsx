import React, { Component } from 'react'

class PropsClass extends Component {
   //COMO MI COMPONENTE HelloWordClass HEREDA DE Component, DEBO UTILIZAR super PARA PODER PASAR PROPIEDADES (PROPS) ENTRE COMPONENTES Y ENTREGRASELOS AL CONSTRUCTOR
    constructor(props){
        super(props)
      //DECLARACION DE ESTADOS, EL ESTADO ES UN VALOR DE CUALQUIER TIPO QUE PUEDE TENER UN VALOR POR DEFECTO Y SE PUEDE ACTUALIZAR CUANTAS VECES LO REQUIRAMOS

      //EN EL OBJETO STATE PODEMOS DEFINIR VARIOS ESTADOS A LA VEZ
        this.state = {
            texto: 'Hola desde el componente tipo clase', //ESTADO POR DEFECTO
            edad: 20 //ESTADO POR DEFECTO
        }
    }

    //INSTRUCCIONES QUE SE EJECUTAN CUANDO EL COMPONENTE SE HA RENDERIZADO Y MONTADO EN EL DOM
    componentDidMount(){
        console.log('Se monto el componente de tipo clase')
        setTimeout(()=>{
            this.setState({texto:'Se actualizo el estado del componente de tipo clase'})
        }, 3000)
       
    }

     //INSTRUCCIONES QUE SE EJECUTAN CUANDO EL COMPONENTE SE HA TENIDO UNA ACTULIAZACION INTERNA DE UN ESTADO Y CONTENIDO HTML O JSX
    componentDidUpdate(){
        console.log('El componente ha sufrido una actualizacion')
    }

     //NOS INDICA SI EL COMPONENTE PUEDE ADMITIR ACTULIZACIONES INTERNAS (ESTADOS), SI ES FALSE NO PERMITIRA ACTUALIZACIONES AUNQUE SI LAS TENGA
    shouldComponentUpdate(){
      return true
    }
    
  //INSTRUCCIONES QUE SE EJECUTAN ANTES DE RENDERIZAR EL COMPONENTE EN PANTALLA
    componentWillMount(){
      alert('se montara la vista')
    }

    //INSTRUCCIONES QUE SE EJECUTARAN CUANDO EL COMPONENTE SE HAYA DESMONTADO
    componentWillUnmount(){
      console.log('El componente se ha desmontado')
    }

  render() {
    //AQUI SE DECLARAN LAS VARIABLES, FUNCIONES, OBJETOS, ARRAYS, ETC... QUE UTILICEMOS EN EL COMPONENTE
    return (
      //SE RETORNAN LOS ELEMENTOS REFLEJADOS EN PANTALLA
        <>
        {/* ACCEDEMOS A LOS ESTADOS TEXTO Y EDAD DEL OBJETO STATE */}
        <h2>{this.state.texto}, mi edad es de {this.state.edad}</h2>

        {/* ACCEDEMOS A LOS PROPS ENVIADOS A ESTE COMPONENTE */}
      <h4>Hola, {this.props.name}!!! ...desde el componente PropsClass</h4>
      </>
    )
  }
}

export default PropsClass