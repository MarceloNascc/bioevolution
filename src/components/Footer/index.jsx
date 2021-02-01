import React from 'react';

import tree from '../../assets/tree.png';
import './styles.css';

export default function Footer(){
  return (
    <footer id='footer'>
      <p>Desenvolvido por <span>Marcelo Nascimento</span></p>
      <img src={tree} alt="a small tree"/>
    </footer>
  )
}