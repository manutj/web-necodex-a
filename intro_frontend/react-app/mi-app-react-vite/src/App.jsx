//import { useState } from 'react'
//import './App.css'
import React from 'react'
import HelloWord from './components/HelloWord.jsx'
import PropsFunction from './components/PropsFunction.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    
    <>
    <HelloWord name={'Alan'}/>
    <PropsFunction numero={10} booleano={true} cadena={'Hola mundo'} array={['elemento', 7]}/>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      */}
    </>
  )
}

export default App
