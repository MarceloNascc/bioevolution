import React from 'react';

import tree from '../../assets/img/tree.png';
import './styles.css';

export default function Footer() {
  return (
    <footer id='footer'>
      <p>
        Desenvolvido por&nbsp;
        <a href="https://www.linkedin.com/in/j-marcelo-nascimento/" target="blank">
          Marcelo Nascimento
        </a>
      </p>
      <img src={tree} alt="a small tree" />
    </footer>
  );
}