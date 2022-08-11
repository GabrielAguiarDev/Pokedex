import React from "react";

import LinkButton from "../../Form/LinkButton";

import './Home.css'

const index = () => {
  return (
    <section>
      <h1>
        Bem-vindo ao <span>Pokédex</span>
      </h1>
      <p>Esse projeto utiliza uma api de terceiro que retorna informações sobre cada Pokemon, pesquise o nome de um pokemon e saiba mais sobre ele com as informações exibidas!</p>
      <img src={process.env.PUBLIC_URL + "./Pokemon-capa.png"} alt="Pokemon" />
      <LinkButton to="/pokemon" text="Vamos lá!" />
    </section>
  );
};

export default index;
