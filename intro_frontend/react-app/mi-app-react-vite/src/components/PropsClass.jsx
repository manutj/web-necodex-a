import React, { Component } from 'react'

class PropsClass extends Component {
    constructor(props){
        super(props)

        this.state = {
            texto: 'Hola desde el componente tipo clase',
            edad: 20
        }
    }

    componentDidMount(){
        console.log('Se monto el componente de tipo clase')
        setTimeout(()=>{
            this.setState({texto:'Se actualizo el estado del componente de tipo clase'})
        }, 3000)
       
    }

    componentDidUpdate(){
        console.log('El componente ha sufrido una actualizacion')
    }

  render() {
    return (
        <>
        <h2>{this.state.texto}, mi edad es de {this.state.edad}</h2>
      <h4>Hola, {this.props.name}!!! ...desde el componente PropsClass</h4>
      </>
    )
  }
}

export default PropsClass