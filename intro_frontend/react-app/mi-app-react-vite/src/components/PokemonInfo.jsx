import { useState, useEffect } from "react"

const PokemonInfo = ({name = 'Ditto'}) => {

    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res=> res.json())
      .then(pokemon=>setPokemonInfo(pokemon))
      .then(console.log(pokemonInfo))
    }, [name])
    
    

  return (
    pokemonInfo && (
    <span>El ID del pokemon es {pokemonInfo.id} y su nombre es {pokemonInfo.name}</span>
    )
  )
}

export default PokemonInfo