import React, {useState, useEffect} from 'react'
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'

const TodoList = () => {
    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState('')

    useEffect(() => {
    console.log(tareas)
    })
    

    const agregarTarea = () => {
        if(nuevaTarea.trim() !== ''){
          setTareas((prevTareas)=> [...prevTareas, nuevaTarea])
            setNuevaTarea('')
        }
    }


  return (
    <>
    <div>TodoList</div>
    <TodoForm nuevaTarea={nuevaTarea} setNuevaTarea={setNuevaTarea} agregarTarea={agregarTarea}/>
    </>
  )
}

export default TodoList