import React from 'react'
import { useAuthContext } from "@/context/UseAuthContextProvider";

const Secret = () => {
  const {userPayload} = useAuthContext()
  return (
    <>
    <h1>Secret</h1>
    {
      userPayload?.role === 'ADMIN'
      ? <h2>Hola ADMIN</h2>
      : <h2>Hola CUSTOMER</h2>
    }

    {/* {userPayload?.role === 'ADMIN' && <h2>SALUDOS ADMIN</h2>}
    {userPayload?.role === 'CUSTOMER' && <h2>SALUDOS CUSTOMER</h2>} */}
    </>
  )
}

export default Secret