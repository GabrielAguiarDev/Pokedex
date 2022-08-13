import React from 'react';
import './CardPokemon.css'

const CardPokemon = ({ order, name, image, type, experience, skills, statistics  }) => {
  return (
    <div className='Container--Card'>
      <div className={`card--pokemon ${type}`}>
        <div className='card--image'>
          <img src={image} alt={name} />
        </div>
        <div className='card--description'>
          <p>#0{order}</p>
          <h1>{name}</h1>
          <p>{type}</p>
        </div>
      </div>
        <div className='card--info'>
          <h2>Especificações</h2>
          <p>Nível de experiência: <span>{experience}</span>
            </p>
          {statistics.map(statistc => <p>{statistc.stat.name}: <span>{statistc.base_stat}</span></p>)}
          <p>Habilidades: {skills.map(skill => <span>{skill.ability.name}{', '}</span>)}</p>
        </div>
    </div>
  )
}

export default CardPokemon