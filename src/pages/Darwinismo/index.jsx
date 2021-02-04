import React from 'react';
import useSubtitle from '../../hooks/useSubtitle';
import darwinismo1 from '../../assets/img/darwinismo1.jpg';
import darwinismo2 from '../../assets/img/darwinismo2.jpg';

import QuicklyMenu from "../../components/QuicklyMenu";

// import './styles.css';

export default function Darwinismo() {
  useSubtitle();

  return (
    <>
      <div className='intro'>
        <section className='section-intro'>
          <h1 className='styled-title'>Darwinismo</h1>
          <p className='text'>
            Darwinismo se refere à teoria evolucionista proposta pelo naturalista inglês
            Charles Darwin (1808-1882).  Essa teoria defende que as espécies descendem de
            um ancestral comum, não sendo perceptível de geração em geração, porém era
            perceptível tal modificação através do tempo.
          </p>
        </section>

        <QuicklyMenu selected='darwinismo' />
      </div>

      <div className='div-article'>
        <div className='article-left' />
        <article >
          <h2 className="styled-title subtitle">Mais sobre o assunto</h2>
          <p className='text'>
            Em 1831, Darwin fez uma grande viagem e embarcou no navio H.S.S. Beagle viajando
            ao redor do mundo e notou várias observações tanto na fauna como na flora. No
            arquipélago de Galápagos durante a observação de pássaros, Darwin observou que
            os pássaros eram semelhantes entre si, mas tinham bicos com formatos diferentes
            e isso mudava conforme o tipo de comida disponível em cada ilha e então por
            esse ponto ele tentou explicar esse modo pela seleção natural.
          </p>
          <img id='img-end' src={darwinismo1} alt="imagem sobre o darwinismo" />
          <p className='text'>
            Darwin acreditava que o meio tinha influência e limitava o aumento do crescimento
            das populações das espécies o que acabaria causando uma luta de sobrevivência
            sendo assim, o organismo que tivesse uma característica com maior vantagem, iria
            se reproduzir mais e passaria essas características para seus descendentes.
            E os que não possuíssem tal vantagem, sendo menos apto não reproduziriam e
            conseqüentemente suas espécies acabariam desaparecendo, e partindo dessa idéia
            surgiu o conceito de seleção natural.
          </p>
          <img id='img-end' src={darwinismo2} alt="imagem sobre o darwinismo" />
          <p className='text'>
            A seleção natural não foi o único mecanismo que faz parte da evolução. A mutação,
            a deriva genética e a migração de indivíduos também são fatores que age na
            modificação dos seres vivos e esses fatores que compõem a teoria sintética da evolução.
          </p>
          <p className="text">
            A mutação ocorre no material genético sendo de forma natural ou introduzida e é
            a principal fonte de variabilidade genética influenciando o processo de evolução
            dos seres vivos. A deriva genética é quando ocorre um efeito que acaba afetando
            a ordem natural das coisas como desordem catastrófica e a migração de indivíduos
            é quando ocorre a migração de genes de populações que se incorporam a outras populações.
          </p>
        </article>
      </div>
    </>
  );
}