import React from 'react';
import useSubtitle from '../../hooks/useSubtitle';
import speciation1 from '../../assets/speciation1.png';
import speciation2 from '../../assets/speciation2.png';
import speciation3 from '../../assets/speciation3.png';

import QuicklyMenu from "../../components/QuicklyMenu";

import './styles.css';

export default function Speciation() {
  useSubtitle();

  return (
    <>
      <div className='intro'>
        <section className='section-intro'>
          <h1 className='styled-title'>Especiação</h1>
          <p className='text'>
            Por muitos anos biólogos evolucionistas vêm discutindo sobre a origem da vida.
            Questionamentos foram levantados de formas diferentes por grandes biólogos como:
            Darwin e Lamarck.
          </p>
          <p className='text'>
            Mas afinal, como se origina uma espécie?
          </p>
          <p className="text">
            O evento crucial para a origem de uma nova espécie é o isolamento reprodutivo.
          </p>
          <p className="text">
            A divisão de uma população em pequenas populações separadas irá diminuir o
            fluxo gênico originando outra espécie.
          </p>
          <p className='text'>
            Existem três tipos de especiação: Alopátrica, simpátrica e parapátrica.
          </p>
        </section>

        <QuicklyMenu selected='speciation' />
      </div>

      <div className='div-article'>
        <div className='article-left' />
        <article >
          <h2 className="styled-title subtitle">Especiação Alopátrica</h2>
          <p className='text'>
            Quando uma população sofre uma separação por uma barreira física ou uma distância
            fazendo com que os indivíduos não tenham contato e não possam acasalar entre eles,
            levando assim a diminuição do fluxo gênico chamamos de especiação alopátrica.
            Eles sofreram diferentes pressões seletivas e poderá ser observada a mudança nos indivíduos.
          </p>

          <h3 className="styled-subsubtitle">Efeito fundador</h3>
          <p className='text'>
            É um tipo especial de especiação alopátrica. Esse tipo de evento no qual alguns
            indivíduos se dispersam através de uma barreira preexistente colonizando uma região
            inabitada e denominado dispersão ou efeito fundador. Nesse caso, cada população
            fundadora sofre uma variação genética considerável em relação à população ancestral,
            tanto em termos de redução da variabilidade genética quanto em relação a mudanças
            aleatórias dos alelos devido à deriva genética, já que deriva genética tem maior
            efeito sobre populações pequenas, gerando mudanças adaptativas radicais.
          </p>

          <h3 className="styled-subsubtitle">Eventos vicariantes</h3>
          <p className='text'>
            Acontece quando uma mudança ambiental separa uma população original em duas ou
            mais áreas pelo surgimento de uma barreira impedindo a dispersão dos indivíduos
            e, consequentemente, o entrecruzamento. Tais mudanças ambientais são denominadas
            ‘eventos vicariantes’, os quais, muitas vezes, têm o potencial de separar populações
            relativamente grandes, que, uma vez isoladas, podem responder independentemente
            às pressões do meio e se diferenciar, resultando em novas espécies.
          </p>
          <img src={speciation1} alt="imagem sobre especiação alopátrica" />

          <h2 className="styled-title subtitle">Especiação simpátrica</h2>
          <p className='text'>
            A especiação simpátrica ocorre sem a presença de uma barreira geográfica. Duas
            populações podem coexistir no mesmo espaço sem haver cruzamentos entre eles. Isso
            pode acontecer por os indivíduos sofrerem mutações que impedem o cruzamento,
            ocasionando o isolamento reprodutivo.
          </p>

          <h3 className="styled-subsubtitle">Seleção disruptiva</h3>
          <p className='text'>
            O primeiro caso pode ocorrer quando fortes pressões seletivas fazem com que uma
            determinada população se adapte a dois ou mais regimes ambientais diferentes (ou nichos),
            gerando isolamento progressivo das subpopulações e, por fim, resultando em especiação.
          </p>

          <h3 className="styled-subsubtitle">Alterações cromossômicas</h3>
          <p className='text'>
            O segundo caso de especiação simpátrica, denominado alterações cromossômicas, é
            observado com menos frequência na natureza, entre os animais (Rieseberg, 2001),
            quando Eduardo Colley, Marta Luciane Fischer 1684 História, Ciências, Saúde – Manguinhos,
            Rio de Janeiro comparada com a origem e evolução de vegetais silvestres e cultivados
            (para uma revisão sobre esse tipo de especiação em vegetais, ver Shifino-Wittmann,
            2004; Soltis, Soltis, Tate, 2003). As alterações cromossômicas podem conduzir ao
            rearranjo do material genético do progenitor durante a meiose ou de um embrião
            durante a fertilização ou no início do desenvolvimento (Regateiro, 2003).
          </p>
          <img src={speciation2} alt="imagem sobre alterações cromossômicas" />

          <h2 className="styled-title subtitle">Especiação parapátrica</h2>
          <p className='text'>
            Não precisa de barreira geográfica, são duas populações vivendo em áreas
            contíguas com diferenças ecológicas.
          </p>
          <img id='img-end' src={speciation3} alt="imagem sobre especiação parapátrica" />
        </article>
      </div>
    </>
  );
}