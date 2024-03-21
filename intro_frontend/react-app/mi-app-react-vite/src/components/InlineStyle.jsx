import React from 'react'
import '../inline.css'

const InlineStyle = () => {
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
    </div>
  )
}

export default InlineStyle