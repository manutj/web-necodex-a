import React from 'react'

const TodoForm = ({nuevaTarea, setNuevaTarea, agregarTarea}) => {
  return (
    <div>
        <input type="text" value={nuevaTarea} onChange={(e)=> setNuevaTarea(e.target.value)} placeholder='Escribe una tarea'  />
        <button onClick={agregarTarea}>Agregar Tarea</button>
    </div>
  )
}

export default TodoForm