import React from 'react';
import './CardPokemon.css'

const CardPokemon = ({ obj }) => {

  console.log(obj)
  return (
    <div className='card--pokemon'>
      <div className='card--image'>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt={obj.name} />
      </div>
      <div className='card--info'>
        <h1>{obj.name}</h1>
        <p>Eletric</p>
        <p>{obj.id}</p>
      </div>
    </div>
  )
}

export default CardPokemon