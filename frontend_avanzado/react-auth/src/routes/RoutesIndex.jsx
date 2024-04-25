import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Dashboard, Home, Login, Singup, Secret } from '@/Pages'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='secret' element={<Secret/>}/>
    </Routes>
  )
}

export default RoutesIndex