import React from 'react';
import toucan from '../../assets/svg/toucan.svg';
import owl from '../../assets/svg/owl.svg';
import koala from '../../assets/svg/koala.svg';
import bee from '../../assets/svg/bee.svg';
import bird from '../../assets/svg/bird.svg';
import elephant from '../../assets/svg/elephant.svg';

import { Link } from 'react-router-dom';

import './styles.css'

export default function QuicklyMenu({ selected }) {
  return (
    <div id='quickly-menu'>
      <h2 id='title-quickly-menu'>Acesse rapidamente o resto do conteúdo...</h2>
      <nav id='nav-quickly-menu'>
        <ul id='quickly-menu-items'>
          <li>
            <Link to='/natural-selection'>
              <img src={toucan} alt="icone de um tucano" />
              <p
                style={{
                  backgroundColor: selected !== 'natural-selection' ?
                    undefined : '#2BA400'
                }}
              >
                Seleção Natural
              </p>
            </Link>
          </li>

          <li>
            <Link to='/artificial-selection'>
              <img src={bee} alt="icone de uma abelha" />
              <p
                style={{
                  backgroundColor: selected !== 'artificial-selection' ?
                    undefined : '#2BA400'
                }}
              >
                Seleção Artificial
              </p>
            </Link>
          </li>

          <li>
            <Link to='/genetic-drift'>
              <img src={koala} alt="icone de um coala" />
              <p
                style={{
                  backgroundColor: selected !== 'genetic-drift' ?
                    undefined : '#2BA400'
                }}
              >
                Deriva Genética
              </p>
            </Link>
          </li>

          <li>
            <Link to='/darwinismo'>
              <img src={owl} alt="icone de uma coruja" />
              <p
                style={{
                  backgroundColor: selected !== 'darwinismo' ?
                    undefined : '#2BA400'
                }}
              >
                Darwinismo
              </p>
            </Link>
          </li>

          <li>
            <Link to='/lamarckismo'>
              <img src={elephant} alt="icone de um elefante"/>
              <p
                style={{
                  backgroundColor: selected !== 'lamarckismo' ?
                    undefined : '#2BA400'
                }}
              >
                Lamarckismo
              </p>
            </Link>
          </li>

          <li>
            <Link to='/speciation'>
              <img src={bird} alt="icone de um pássaro"/>
              <p
                style={{
                  backgroundColor: selected !== 'speciation' ?
                    undefined : '#2BA400'
                }}
              >
                Especiação
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}