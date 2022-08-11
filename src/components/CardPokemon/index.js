import React from 'react';
import './CardPokemon.css'

const CardPokemon = ({ id, name, image, type }) => {
  return (
    <div className='Container--Card'>
      <div className={`card--pokemon ${type}`}>
        <div className='card--image'>
          <img src={image} alt={name} />
        </div>
        <div className='card--description'>
          <p>#0{id}</p>
          <h1>{name}</h1>
          <p>{type}</p>
        </div>
      </div>
        <div className='card--info'>
          <h2>Especificações</h2>
          <p>Teste</p>
          <p>Teste</p>
          <p>Teste</p>
        </div>
    </div>
  )
}

export default CardPokemon