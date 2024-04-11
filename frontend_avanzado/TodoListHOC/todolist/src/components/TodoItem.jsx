import React from 'react'

const TodoItem = () => {
  return (
   <li>
    Aqui se agregaran las tareas
    <button onClick={()=>'Funcion que eliminara la tarea'}>Completar</button>
   </li>
  )
}

export default TodoItem
