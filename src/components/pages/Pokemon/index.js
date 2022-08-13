import React, { useState, useEffect, useCallback } from "react";

import CardPokemon from "../../CardPokemon";
import Loader from "../../Form/Loader";

import "./Pokemon.css";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [getURL, setGetURL] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true)

  const getPokemon = useCallback(async () => {
    const pokemonFromAPI = await fetch(getURL);
    const data = await pokemonFromAPI.json();

    const allPokemon = data.results.map(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();
      setLoading(false)
      return data
    });

    setGetURL(data.next);
    Promise.all([...allPokemon]).then((res) => {
      const removerPokemonRepetidos = []
      res.forEach(p => {
        if(!pokemon.find(poke => poke.name === p.name)){
          removerPokemonRepetidos.push(p)
        }
      })

      setPokemon([...removerPokemonRepetidos, ...pokemon].sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        } else {
          return -1;
        }
      }));
    });
  }, [pokemon, getURL]);


  useEffect(() => {
    getPokemon();
  }, []);

  const submitSearch = useCallback(
    async (e) => {
      e.preventDefault();
      if (!pokemon.find((pokemon) => pokemon.name === search)) {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
        );
        const data = await res.json();
        setPokemon(
          [...pokemon, data].sort((a, b) => {
            if (a.order > b.order) {
              return 1;
            } else {
              return -1;
            }
          })
        );
      }
    },
    [pokemon, search]
  );
  const filteredPokemon = pokemon.filter(p => p.name.includes(search))

  return (
    <main>
      <div className="pokemon--search">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            placeholder="Digite o nome do Pokemon"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button>Buscar</button>
        </form>
      </div>
      <div className="Container--pokedex">
        {loading && <Loader />}
        {pokemon &&
          filteredPokemon.map((pokemon, index) => (
            <CardPokemon
            key={index}
            order={pokemon.order}
            name={pokemon.name}
            image={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
            type={pokemon.types[0].type.name}
            experience={pokemon.base_experience}
            skills={pokemon.abilities}
            statistics={pokemon.stats}
            />
          ))}
      </div>
      <button
          className="btn"
          onClick={() => getPokemon()}
        >
          + Pokemons
      </button>
    </main>
  );
};

export default PokemonList;
