import React from 'react'

function MyComponent({loading}) {
  return (
    <div>
    {loading ? <h1>Loading...</h1> : <h1>Hola Mundo!!</h1>}
  </div>
  )
}

export default MyComponent