import React, { useState, useEffect } from 'react';

import CardPokemon from '../CardPokemon'

import './Pokemon.css'

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([])

  const getPokemonList = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/pikachu`
      const res = await fetch(url)
      const data = await res.json()
      setPokemonData(data)
      
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    getPokemonList()
  }, [])

  // Obtenho um erro ao rodar a aplicação, o react faz duas chamadas no fetch e a primeira chamada não esta obtendo sucesso, o que resulta em um erro para o componente CardPokemon, pois ele executa uma função map(), e como a primeira chamada não retorna nada, ele gera um erro.

  return (
    <main>
        <h1>Lista de pokemons</h1>
        <div className='pokemon--search'>
          <input type="text" placeholder='Digite o nome do Pokemon' />
          <button>Buscar</button>
        </div>
        {pokemonData &&  (
          <section>
            <CardPokemon
              key={pokemonData.id} 
              obj={pokemonData}
            />
          </section>
        )}
    </main>
  )

}

export default PokemonList