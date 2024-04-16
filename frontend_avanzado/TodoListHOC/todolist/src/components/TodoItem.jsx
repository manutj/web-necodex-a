import React from 'react'

const TodoItem = ({tarea, onComplete}) => {
  return (
   <li>
    {tarea}
    <button onClick={onComplete}>Completar</button>
   </li>
  )
}

export default TodoItem
