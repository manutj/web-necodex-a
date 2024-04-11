import React, {useEffect} from ' react'

const withLogger = (WrappedComponent) => {
    const WithLogger = () => {
        useEffect(() => {
        console.log(`El componente ${WrappedComponent.name} se ha montado`)
          return () => {
            console.log(`El componente ${WrappedComponent.name} se ha desmontado`)
          }
        }, [])

        useEffect(() => {
          console.log(`El componente ${WrappedComponent.name} se ha actualizado`)
        })
        
       return <WrappedComponent/>
    }
return WithLogger
}

export default withLogger