import React, { useEffect } from 'react';
import naturalSelection1 from '../../assets/natural-selection1.png';
import naturalSelection2 from '../../assets/natural-selection2.png';
import naturalSelection3 from '../../assets/natural-selection3.png';

import QuicklyMenu from "../../components/QuicklyMenu";

import './styles.css';

export default function NaturalSelection() {
  useEffect(() => {
    function handleScroll(e) {
      const subtitles = document.getElementsByClassName('subtitle');

      Array.prototype.map.call(subtitles, elem => {
        const { y } = elem.getBoundingClientRect();
        if (y === 0) {
          elem.style.backgroundColor = '#36E332';
          elem.style.color = '#FFFFFF';
        } else {
          elem.style.backgroundColor = 'initial';
          elem.style.color = '#000000';
        }
      });
    }

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='intro'>
        <section className='section-intro'>
          <h1 className='styled-title'>Seleção Natural</h1>
          <p className='text'>
            Você sabe por que algumas características são mais abundantes que outras?
            Tipo cores em borboletas, não sabe? A seleção natural pode te explicar
            o porquê disso.
          </p>
          <p className='text'>
            Mas o que é seleção natural? Então, a seleção natural é um dos pontos essenciais
            da teoria de Charles Darwin, ela é resumida em características favoráveis e
            desfavoráveis, funciona assim, segundo ela o ambiente irá selecionar os
            organismos com características favoráveis e os com características não favoráveis
            irão desaparecer ou diminuir com o tempo.
          </p>
          <p className='text'>
            Esses com características favoráveis vão ser considerados mais adaptados que os
            outros para aquele ambiente selecionador, e assim, o organismo mais adaptado vão
            sobreviver e produzirem descendentes que vão ter essas características que
            permitiram eles serem selecionados, afinal você provavelmente tem características
            que seus pais tenham, não é? Seja o cabelo parecido ou outras coisas, com isso
            ao passar o tempo as características vantajosas irão aumentar na população.
          </p>
          <p className='text'>
            Só para você ficar esperto, a seleção natural atua apenas nas características que
            existem naquela população, o que quer dizer que ela não vai provocar o surgimento
            de novas características.
          </p>
        </section>

        <QuicklyMenu selected='natural-selection' />
      </div>

      <div className='div-article'>
        <div className='article-left' />
        <article >
          <h2 className="styled-title subtitle">Exemplos de seleção natural</h2>
          <p className='text'>
            Para entendermos como funciona essa seleção, imaginemos a seguinte situação:
            em uma arvore vivem dois tipos de insetos em suas folhas, insetos verdes que são
            da mesma cor das suas folhas e insetos vermelhos que chamam atenção de predadores
            por sua cor, sendo assim, os insetos vermelhos sofrerão mais com a predação por
            não conseguirem se camuflar igual aos verdes.
          </p>
          <p className='text'>
            Como os verdes são menos capturados eles têm mais chance de sobreviver e se
            reproduzirem passando essa característica da cor para as gerações futuras, então
            com isso irá aumentar os insetos da cor verde e por ter menos chance de sobreviver
            e reproduzir irá diminuir os vermelhos.
          </p>
          <p className='text'>
            Uma outra situação que pode ser imaginada é a seguinte: imagine duas espécies de
            animais caçadores (uma com a musculatura das pernas mais adaptada para correr e a
            outra não), sendo que ambas precisam correr atrás de suas presas para se alimentar,
            mas essas conseguem fugir do predador mais lento na maioria das vezes, com isso,
            os predadores mais rápidos conseguirão sobreviver mais visto que conseguirão se
            alimentar e os lentos não terão o mesmo sucesso.
          </p>

          <h2 className="styled-title subtitle">Tipos de seleção natural</h2>
          <p className='text'>
            A seleção natural é dividida em três tipos que serão listados abaixo. Vale destacar
            que quando se refere a extremos quer dizer que existe uma escala onde tem extremos
            menores, intermediários e extremos maiores.
          </p>

          <ul id='natural-selection-types'>
            <li>
              <p>
                <span>Seleção direcional:</span> acontece quando uma das características é
                favorecida. Ela atua por exemplo no nosso caso dos insetos de cores diferentes
                nas arvores. A característica da cor verde foi selecionada e a vermelha reduzida.
              </p>
              <img src={naturalSelection1} alt="gráfico sobre seleção direcional" />
            </li>

            <li>
              <p>
                <span>Seleção disruptiva:</span> acontece o favorecimento de duas características
                extremas. Um exemplo são pássaros que tenham três tipos de bicos (pequenos,
                intermediário e grandes), pequenos bicos irão se alimentar de sementes macias
                e os grandes irão se alimentar de sementes mais duras, os bicos intermediários
                não será selecionado por que somente foram favorecidos os outros dois bicos.
              </p>
              <img src={naturalSelection2} alt="gráfico sobre seleção disruptiva" />
            </li>

            <li>
              <p>
                <span>Seleção estabilizadora:</span> acontece quando é favorecida a
                característica intermediária. Um exemplo dessa é a mudança no tamanho dos
                bebes, quando muito pequenos ou grandes teria maior risco de mortalidade
                com isso favoreceu que aumentassem a frequência dos intermediários.
              </p>
              <img src={naturalSelection3} alt="gráfico sobre seleção estabilizadora" />
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}