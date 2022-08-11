import React, { useState, useEffect } from 'react';

import CardPokemon from '../CardPokemon'

import './Pokemon.css'

const PokemonList = () => {

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)

    function createPokemonObject(result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemon(currentList => [...currentList, data])
      });
    }
    createPokemonObject(data.results)
    console.log(allPokemon)
  }
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <main>
        <div className='pokemon--search'>
          <input type="text" placeholder='Digite o nome do Pokemon' />
          <button>Buscar</button>
        </div>
          <div className='Container--pokedex'>
            { allPokemon.map((pokemon, index) =>
              <CardPokemon
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
              type={pokemon.types[0].type.name}
              key={index}
              />
            )}
          </div>
    </main>
  )

}

export default PokemonList