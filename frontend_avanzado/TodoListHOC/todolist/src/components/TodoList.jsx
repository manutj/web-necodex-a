import React, {useState} from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
import withLogger from './withLogger'

const TodoList = () => {
    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState('')
    
    const agregarTarea = () => {
        if(nuevaTarea.trim() !== ''){
          setTareas((prevTareas)=> [...prevTareas, nuevaTarea])
            setNuevaTarea('')
        }
    }

    const completarTarea = (index) => {
      setTareas((prevTareas)=>{
        const tareasActuales = [...prevTareas]
        tareasActuales.splice(index, 1)
        return tareasActuales
      })
    }


  return (
    <>
    <div>TodoList</div>
    <TodoForm nuevaTarea={nuevaTarea} setNuevaTarea={setNuevaTarea} agregarTarea={agregarTarea}/>
    <ul>
      {tareas.map((tarea, index)=>(
        <TodoItem tarea={tarea} onComplete={()=>completarTarea(index)}/>
      ))}
    </ul>
    </>
  )
}

export default TodoList