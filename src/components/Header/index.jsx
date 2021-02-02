import React from 'react';

import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo_white.png';
import './styles.css';

export default function Header({ useWhite = true }) {//create context
  return (
    <header id='header'>
      <img src={useWhite ? logoWhite : logo} alt="a small tree" />
      <h1 className='title' style={{ color: useWhite ? '#FFFFFF' : '#000000' }}>
        BioEvolution
      </h1>
    </header>
  );
}