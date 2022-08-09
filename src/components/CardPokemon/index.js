import React, {useState, useEffect} from 'react'

function CardPokemon({ url }) {

  const [pokemon, setPokemon] = useState("")

  useEffect(() => {

    fetch(`${url}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      setPokemon(data)
    })
    .catch(e => console.log(e))

  }, [url])
  console.log(pokemon)

  return (
    <div>
      {pokemon.name}
    </div>
  )
}

export default CardPokemon