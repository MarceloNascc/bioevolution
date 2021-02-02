import React from 'react';
import naturalSelection from '../../assets/selecao_natural.jpg';
import darwinismo from '../../assets/darwinismo.jpg';
import geneticDrift from '../../assets/deriva_genetica.png';
import speciation from '../../assets/especiacao.png';
import lamarckismo from '../../assets/lamarckismo.jpg';
import artificialSelection from '../../assets/selecao_artificial.jpeg';

import { Link } from 'react-router-dom';

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
                <li>
                  <Link>
                    <img className='link-img' src={naturalSelection} alt="imagem representando a seleção natural" />
                    <p className='paragraph-img'>Seleção Natural</p>
                  </Link>
                </li>

                <li>
                  <Link>
                    <img className='link-img' src={artificialSelection} alt="uma imagem" />
                    <p className='paragraph-img'>Seleção Artificial</p>
                  </Link>
                </li>

                <li>
                  <Link>
                    <img className='link-img' src={geneticDrift} alt="uma imagem" />
                    <p className='paragraph-img'>Deriva Genética</p>
                  </Link>
                </li>

                <li>
                  <Link>
                    <img className='link-img' src={darwinismo} alt="uma imagem" />
                    <p className='paragraph-img'>Darwinismo</p>
                  </Link>
                </li>

                <li>
                  <Link>
                    <img className='link-img' src={lamarckismo} alt="uma imagem" />
                    <p className='paragraph-img'>Lamarckismo</p>
                  </Link>
                </li>

                <li>
                  <Link>
                    <img className='link-img' src={speciation} alt="uma imagem" />
                    <p className='paragraph-img'>Especiação</p>
                  </Link>
                </li>

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