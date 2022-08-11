import React, { useState, useEffect } from "react";

import CardPokemon from "../../CardPokemon";
import Loader from "../../Form/Loader";

import "./Pokemon.css";

const PokemonList = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("");

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();
    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setLoading(false)
        setAllPokemon((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
  };

  async function submitSearch(e) {
    e.preventDefault();
    const searchApi = search.toLowerCase()
    async function main() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchApi}`)
      const data = await res.json()
      
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setLoading(false)
        setAllPokemon(data)
      })
      .catch(e => console.log(e))
    }
    await main();
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

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
          {allPokemon && allPokemon && allPokemon.map((pokemon, index) => (
            <CardPokemon
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
      </div>
    </main>
  );
};

export default PokemonList;
