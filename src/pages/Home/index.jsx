import React from 'react';
import naturalSelection from '../../assets/selecao_natural.jpg';
import darwinismo from '../../assets/darwinismo.jpg';
import geneticDrift from '../../assets/deriva_genetica.png';
import speciation from '../../assets/especiacao.png';
import lamarckismo from '../../assets/lamarckismo.jpg';
import artificialSelection from '../../assets/selecao_artificial.jpeg';

import MenuItem from './components/MenuItem';

import './styles.css';

export default function Home() {
  return (
    <>
      <div id='home-main'>
        <div id='home-left' />
        <div id='main-content-home'>
          <h1 className='title' id='home-title'>Assuntos</h1>

          <main id='home'>
            <nav>
              <ul id='home-navigation'>
                <MenuItem
                  image={naturalSelection}
                  text='Seleção Natural'
                  alt='imagem representando a seleção natural'
                  toUrl='/natural-selection'
                />
                <MenuItem
                  image={artificialSelection}
                  text='Seleção Artificial'
                  alt='imagem representando a seleção artificial'
                  toUrl='/artificial-selection'
                />
                <MenuItem
                  image={geneticDrift}
                  text='Deriva Genética'
                  alt='imagem representando a deriva genética'
                  toUrl='/genetic-drift'
                />
                <MenuItem
                  image={darwinismo}
                  text='Darwinismo'
                  alt='imagem representando o darwinismo'
                  toUrl='/darwinismo'
                />
                <MenuItem
                  image={lamarckismo}
                  text='Lamarckismo'
                  alt='imagem representando o lamarckismo'
                  toUrl='/lamarckismo'
                />
                <MenuItem
                  image={speciation}
                  text='Especiação'
                  alt='imagem representando a especiação'
                  toUrl='/speciation'
                />
              </ul>
            </nav>
          </main>
        </div>
      </div>

      <section className='content'>
        <h2 className='subtitle'>Exércicios</h2>

        <nav id='exercise-navigation'>
          <ul>
            <li></li>
          </ul>
        </nav>
      </section>
    </>
  );
}