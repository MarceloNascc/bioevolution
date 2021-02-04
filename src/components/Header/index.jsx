import React from 'react';
import logo from '../../assets/img/logo.png';
import logoWhite from '../../assets/img/logo_white.png';

import { Link } from 'react-router-dom';

import './styles.css';

export default function Header({ useWhite = true }) {//create context
  return (
    <header id='header'>
      <Link to='/'><img src={useWhite ? logoWhite : logo} alt="a small tree" /></Link>
      <h1 className='title' style={{ color: useWhite ? '#FFFFFF' : '#000000' }}>
        BioEvolution
      </h1>
    </header>
  );
}