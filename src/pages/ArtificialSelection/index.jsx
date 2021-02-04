import React from 'react';
import useSubtitle from '../../hooks/useSubtitle';
import artificialSelection1 from '../../assets/artificial-selection1.jpg';
import artificialSelection2 from '../../assets/artificial-selection2.jpg';

import QuicklyMenu from "../../components/QuicklyMenu";

// import './styles.css';

export default function ArtificialSelection() {
  useSubtitle();

  return (
    <>
      <div className='intro'>
        <section className='section-intro'>
          <h1 className='styled-title'>Seleção artificial</h1>
          <p className='text'>
            Um tema que gera uma grande discussão é a seleção artificial, afinal, até onde
            a humanidade pode intervir e que consequência isso irá causar a longo prazo?
          </p>
          <p className="text">
            Para conhecermos melhor o tema, vamos começar com o que é a seleção artificial.
          </p>
          <p className="text">
            A seleção artificial também conhecida como seleção seletiva é a modificação das
            espécies através de cruzamentos seletivos. Os animais ou plantas
            que apresentam características que interessam aos seres humanos são cruzados
            para obter indivíduos com um determinado genótipo, e para obter novas populações
            de organismos com um fim específico.
          </p>
        </section>

        <QuicklyMenu selected='artificial-selection' />
      </div>

      <div className='div-article'>
        <div className='article-left' />
        <article >
          <h2 className="styled-title subtitle">Mais sobre o assunto</h2>
          <p className='text'>
            Em defesa da sua teoria da seleção natural, Charles Darwin usou a seleção artificial,
            um experimento laboratorial de reversão ao ancestral comum, a descendência ao
            pombo-da-rocha. Em maio de 1855, toda a estrutura física necessária à criação de
            pombos estava construída em sua casa, em Kent.
          </p>
          <p className='text'>
            O experimento foi feito com pombos de cauda-de-leque e pombos poloneses negros,
            cruzou-os e obteve uma linhagem com pássaros pretos e pintados de marrom. Cruzou-os
            novamente entre si e obteve pombos com costas brancas, barra negra dupla nas asas,
            penas da cauda com barra e bordas brancas, semelhante ao pombo-da-rocha. Todavia,
            fornecia elementos explicativos feitos em sua residência-laboratório.
          </p>
          <p className='text'>
            Se fosse admitido que o homem foi capaz de produzir mudanças tão notáveis através
            de seleção, seria razoável aceitar que a natureza pode fazer o mesmo, tornando
            sua teoria aceitável.
          </p>
          <p className='text'>
            Na biotecnologia a seleção artificial representou um grande avanço, as tecnologias
            vêm aumentando a eficiência das variações sobre a reprodução das plantas, dando
            ênfase ao desenvolvimento de mecanismos de isolamento reprodutivo através de
            seleção artificia.
          </p>
          <p className="text">
            Por exemplo, algumas culturas muito utilizadas hoje em dia, como a soja, o milho
            e o algodão, já possuíam naturalmente suas variantes genéticas, mas nenhuma delas
            proporcionava proteção contra alguns insetos considerados pragas nas plantações.
          </p>
          <p className="text">
            Assim a biotecnologia desenvolveu organismos geneticamente modificados (OGMs) que
            possuíam essa variação. Esses estavam melhor adaptados contra insetos/pragas e
            foram mais utilizados por agricultores devido a essa vantagem.
          </p>
          <img id='img-end' src={artificialSelection1} alt="imagem sobre seleção artificial" />
          <p className="text">
            Mas há quem seja a favor ou contra a seleção artificial, ela pode causar benefícios
            mas também acarreta problemas como baixa variabilidade genética, com a variabilidade
            genética reduzida fica difícil a adaptação da população a variações ambientais,
            populações menores sofre maior efeito da deriva genética. Além disso, outra
            preocupação é o efeito do endocruzamento que aumenta a possibilidade de que
            genes recessivos deletérios se manifestem. A consequência disso, em cães, é que
            diversas raças apresentam doenças associadas à baixa variabilidade nos seus genes.
          </p>
          <img id='img-end' src={artificialSelection2} alt="imagem sobre seleção artificial" />
          <p className="text">
            Qual a sua opinião sobre a seleção artificial?
          </p>
        </article>
      </div>
    </>
  );
}