import React from 'react'
import {useSongContext} from '../context/useSongContext'
import './songlist.css'

const SongList = () => {
    const {list, loading, setselectSong} = useSongContext()
  return (
    <div className='container'>
        {loading ? <h2>Cargando...</h2> : list.map((song)=>(
            <div key={song.id} className='song' onClick={()=>setselectSong(song)}>
                <h4>{song.title}</h4>
                <p>{song.artist}</p>
            </div>
        ))}
    </div>
  )
}

export default SongList