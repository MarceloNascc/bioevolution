import React from 'react';
import useSubtitle from '../../hooks/useSubtitle';
import geneticDrift1 from '../../assets/genetic-drift1.jpg';
import geneticDrift2 from '../../assets/genetic-drift2.jpg';

import QuicklyMenu from "../../components/QuicklyMenu";

// import './styles.css';

export default function GeneticDrift() {
  useSubtitle();

  return (
    <>
      <div className='intro'>
        <section className='section-intro'>
          <h1 className='styled-title'>Deriva Genética</h1>
          <p className='text'>
            A deriva genética é um mecanismo básico da evolução, em conjunto com a seleção
            natural, migrações e mutações. Esse mecanismo, importante principalmente em
            pequenas populações, pode ser definido como uma mudança das frequências alélicas
            que ocorre de forma totalmente aleatória.
          </p>
          <p className="text">
            A seleção natural se diferencia da deriva genética, pois na seleção natural o
            gene que passa para a próxima geração é aquele que trouxe uma melhor adaptação
            ao meio, enquanto na deriva genética, o gene que passou foi aquele que teve mais “sorte”.
          </p>
        </section>

        <QuicklyMenu selected='genetic-drift' />
      </div>

      <div className='div-article'>
        <div className='article-left' />
        <article >
          <h2 className="styled-title subtitle">Mais sobre o assunto</h2>
          <p className='text'>
            A deriva genética pode ocorrer de maneiras distintas, sendo duas delas, o efeito
            fundador e o efeito gargalo.
          </p>
          <h2 className="styled-title subtitle">Efeito fundador</h2>
          <img id='img-end' src={geneticDrift1} alt="imagem sobre o efeito fundador" />
          <p className='text'>
            Ocorre quando uma nova população é formada por poucos indivíduos, seja por qualquer
            redução que uma população original tenha sofrido ou migração de um pequeno grupo
            de indivíduos para uma nova área. Essa nova população vai ter uma variação
            genética reduzida. A alta incidência de doenças hereditárias em populações
            isoladas é um fenômeno explicado por conta desse efeito.
          </p>
          <h2 className="styled-title subtitle">Efeito gargalo</h2>
          <img id='img-end' src={geneticDrift2} alt="imagem sobre o darwinismo" />
          <p className='text'>
            Ocorre quando mudanças repentinas no ambiente, como desastres naturais entre
            outros, acabam reduzindo o tamanho de uma população e consequentemente a
            diversidade genética. Um exemplo de efeito gargalo, são os elefantes marinhos do
            norte que tem variação genética reduzida por conta da caça feita por humanos,
            a caça reduziu o tamanho da população para cerca de 20 indivíduos ao final do
            século 19, atualmente já ultrapassa 30.000 desde então, porém sua variação genética é pequena.
          </p>
        </article>
      </div>
    </>
  );
}