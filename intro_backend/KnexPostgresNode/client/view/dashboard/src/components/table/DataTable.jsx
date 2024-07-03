import React from 'react'
import ModalForm from '../modal/ModalForm'
import { Button, Table } from 'reactstrap'

const DataTable = (props) => {
    const items = props.items.map(item=>{
        return(
            <tr>
                <th>{item.id}</th>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>
                    <div style={{width:'110px'}}>
            <ModalForm buttonLabel={"Editar"} item={item}/>
                    </div>
<Button color='danger'onClick={()=>console.log('Elemento eliminado')}>Eliminar</Button>
                </td>
            </tr>
        )
    })

    return(
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>{items}</tbody>
        </Table>
    )
}

export default DataTable