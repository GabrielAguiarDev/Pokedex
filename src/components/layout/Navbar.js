import React from "react";
import { MdCatchingPokemon, MdHome } from 'react-icons/md'

import "./Navbar.css";

const index = () => {
  return (
    <nav>
      <div className="nav--logo">
        <a href="/"><img src={process.env.PUBLIC_URL + "/pokemon-logo.png"} alt="pokedex" /></a>
      </div>
      <ul>
        <li>
          <a href="/"><MdHome /> Home</a>
        </li>
        <li>
          <a href="/pokemon"><MdCatchingPokemon /> Pokédex</a>
        </li>
      </ul>
    </nav>
  );
};

export default index;