import React, {useState, useEffect, createContext} from 'react'
import { jwtDecode } from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [userPayload, setUserPayload] = useState(null)



    const login = (token) => {
        localStorage.setItem('token',token)
        const decode = jwtDecode(token)
        setUserPayload(decode)
        setIsAuth(true)
    }

    const logout = () => {
        localStorage.removeItem('token')
        setUserPayload(null)
        setIsAuth(false)
    }


    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token) {
        const decode = jwtDecode(token)
        setUserPayload(decode)
        setIsAuth(true)
      }
    }, [])
    


    const data = {isAuth, userPayload, login, logout}
  return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthContextProvider, AuthContext}