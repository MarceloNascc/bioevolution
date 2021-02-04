import React, { useState } from 'react';

import naturalSelection from '../../assets/img/selecao_natural.jpg';
import darwinismo from '../../assets/img/darwinismo.jpg';
import geneticDrift from '../../assets/img/deriva_genetica.png';
import speciation from '../../assets/img/especiacao.png';
import lamarckismo from '../../assets/img/lamarckismo.jpg';
import artificialSelection from '../../assets/img/selecao_artificial.jpeg';
import darwinismoQuestions from '../../assets/questions/darwinismo.json';
import naturalSelectionQuestions from '../../assets/questions/natural_selection.json';
import geneticDriftQuestions from '../../assets/questions/genetic_drift.json';
import lamarckismoQuestios from '../../assets/questions/lamarckismo.json';
import speciationQuestions from '../../assets/questions/speciation.json';

import MenuItem from './components/MenuItem';
import Questions from './components/Questions';

import './styles.css';

export default function Home() {
  const [currentSelected, setCurrentSelected] = useState(0);

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
        <h2 className='styled-subsubtitle'>Teste o seu conhecimento</h2>

        <ul
          style={{ display: currentSelected !== 0 ? 'none' : 'flex' }}
          id='exercise'
        >
          <li className='exercise-item'>
            <p>Exercício sobre <span>Seleção natural</span></p>
            <button onClick={() => setCurrentSelected(1)}>Iniciar</button>
          </li>
          <li className='exercise-item'>
            <p>Exercício sobre <span>Lamarckismo</span></p>
            <button onClick={() => setCurrentSelected(2)}>Iniciar</button>
          </li>
          <li className='exercise-item'>
            <p>Exercício sobre <span>Deriva genética</span></p>
            <button onClick={() => setCurrentSelected(3)}>Iniciar</button>
          </li>
          <li className='exercise-item'>
            <p>Exercício sobre <span>Darwinismo</span></p>
            <button onClick={() => setCurrentSelected(4)}>Iniciar</button>
          </li>
          <li className='exercise-item'>
            <p>Exercício sobre <span>Especiação</span></p>
            <button onClick={() => setCurrentSelected(5)}>Iniciar</button>
          </li>
        </ul>

        <Questions
          about={naturalSelectionQuestions}
          isSelected={currentSelected === 1}
          unselect={() => setCurrentSelected(0)}
        />

        <Questions
          about={lamarckismoQuestios}
          isSelected={currentSelected === 2}
          unselect={() => setCurrentSelected(0)}
        />

        <Questions
          about={geneticDriftQuestions}
          isSelected={currentSelected === 3}
          unselect={() => setCurrentSelected(0)}
        />

        <Questions
          about={darwinismoQuestions}
          isSelected={currentSelected === 4}
          unselect={() => setCurrentSelected(0)}
        />

        <Questions
          about={speciationQuestions}
          isSelected={currentSelected === 5}
          unselect={() => setCurrentSelected(0)}
        />
      </section>
    </>
  );
}