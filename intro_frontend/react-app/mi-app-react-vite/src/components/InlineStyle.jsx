import React from 'react'
import '../inline.css'
import {createUseStyles} from 'react-jss'
import styled from 'styled-components'

const styles = createUseStyles({
  paragraph:{
    color:'red',
  },
  button:{backgroundColor:'red'}
})


const InlineStyle = () => {

  const classes = styles()

  const Myh1 = styled.h1`
  color:red;
  background-color: papayawhip;
  `;

    //PODEMOS DECALARAR LOS ESTILOS DENTRO DE UN OBJETO PARA LUEGO USARLOS EN CUALQUIER ELEMENTO DEL RETURN
    const bandera = false
    const pStyle={
        color:bandera ? 'green' : 'yellow', // ESTILOS CONDICIONALES
        backgroundColor:'gray'
    }

  return (
    <div>
        <h1>INLINE COMPONENT</h1>
        {/* USO DE ESTILOS EN LINEA FORMA 1 */}
        <p style={pStyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque quasi porro non hic dolorum molestiae et totam? Incidunt, ratione maxime molestiae deleniti accusamus totam at temporibus. Delectus, reiciendis eaque!</p>

        {/* USO DE ESTILOS EN LINEA FORMA 2 */}
        <p style={{
        color:'green' ,
        backgroundColor:'aqua'
        }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi atque quasi porro non hic dolorum molestiae et totam? Incidunt, ratione maxime molestiae deleniti accusamus totam at temporibus. Delectus, reiciendis eaque!</p>

        <p className={classes.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, amet iusto. Quam est iusto nam voluptas quasi maiores provident itaque aperiam sequi reiciendis, totam, labore fugit doloribus numquam ipsa adipisci facere culpa laboriosam, architecto inventore asperiores voluptatibus. Quisquam blanditiis asperiores iusto totam dolor? Quisquam est nihil tempore accusantium qui deleniti!</p>
        <button className={classes.button}>Mi boton</button>
        <Myh1>Hola desde styled components</Myh1>
    </div>
  )
}

export default InlineStyle