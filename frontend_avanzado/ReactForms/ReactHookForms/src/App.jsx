import { useState } from 'react'
import HookForm from './components/HookForm'
import YupForm from './components/YupForm'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <HookForm/> */}
   <YupForm/>
    </>
  )
}

export default App
