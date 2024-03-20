import { useState, useEffect } from "react"

const PokemonInfo = ({name = 'ditto'}) => {

    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
      setTimeout(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res=> res.json())
        .then(pokemon=>setPokemonInfo(pokemon))
        .then(console.log(pokemonInfo))
      },2000)
    }, [name])
    
  return (
    pokemonInfo ? (
    <span>El ID del pokemon es {pokemonInfo.id} y su nombre es {pokemonInfo.name}</span>
    ) : (
      <h1>Cargando...</h1>
    )
  )
}

export default PokemonInfo