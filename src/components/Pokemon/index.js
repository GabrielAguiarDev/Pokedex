import React, { useState, useEffect } from 'react';

import CardPokemon from '../CardPokemon'

import url from '../../PokeApi'

function Pokemon() {

  const [pokemons, setPokemons] = useState("")

  useEffect(() => {

    fetch(`${url}`, {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      setPokemons(data.results)
    })
    .catch(e => console.log(e))

  }, [])
  
  return (
    <main>
      <h1>Busque pelo Pokémon</h1>
      <input type="text" />
        <section>
          {pokemons && pokemons.map((pokemon) => <CardPokemon url={pokemon.url} />)}
        </section>
    </main>
  )
}

export default Pokemon