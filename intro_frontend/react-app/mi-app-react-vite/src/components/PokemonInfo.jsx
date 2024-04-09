import { useState, useEffect } from "react"

// ASIGNAMOS UN VALOR POR DEFECTO AL PROP NAME EN CASO NO SE ENVIE NINGUN VALOR PARA ESTE EN EL COMPONENETE APP.JSX
const PokemonInfo = ({name = 'ditto'}) => {

    const [pokemonInfo, setPokemonInfo] = useState(null)

    useEffect(() => {
      setTimeout(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res=> res.json())
        .then(pokemon=>setPokemonInfo(pokemon))
        .then(console.log(pokemonInfo))
      },2000)
    }, [name]) //ESTAS INSTRUCCIONES SOLO SE EJECUTARAN CUANDO EL EL VALOR DEL PROP NAME CAMBIE
    
  return (
    //RENDERIZADO CONDICIONAL DEPENDIENDO SI TRAE INFORMACION EL ESTADO POKEMONINFO
    pokemonInfo ? (
    <span>El ID del pokemon es {pokemonInfo.id} y su nombre es {pokemonInfo.name}</span>
    ) : (
      <h1>Cargando...</h1>
    )
  )
}

export default PokemonInfo