import React, {createContext, useState, useEffect} from 'react'
import canciones from '../assets/listaCanciones.json'

const SongContext = createContext()

const SongContextProvider = ({children}) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectSong, setselectSong] = useState({})

    useEffect(() => {
    setTimeout(() => {
        setList(canciones)
        setLoading(false)
    }, 3000);
    }, [])

    const data = {
        list,
        loading,
        selectSong,
        setselectSong
    }
    

  return (
    <SongContext.Provider value={data}>
        {children} 
    </SongContext.Provider>
  )
}


export {SongContextProvider, SongContext}