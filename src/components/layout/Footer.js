import React from "react";
import { BsLink45Deg } from 'react-icons/bs'

import './Footer.css'

const Footer = () => {
  return (
    <footer>
        Projeto criado por <a href="https://github.com/GabrielAguiarDev/" target="_blank" without rel="noreferrer"><span>Gabriel Aguiar <BsLink45Deg /></span></a> <br/> 
        Projeto para praticar com o ReactJS <br/>
        Api utilizada do site <a href="https://pokeapi.co/" target="_blank" without rel="noreferrer"><span>pokeapi.co <BsLink45Deg /></span></a>
    </footer>
  );
};

export default Footer;