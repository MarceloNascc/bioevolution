import React from 'react';
import useSubtitle from '../../hooks/useSubtitle';
import lamarckismo1 from '../../assets/img/lamarckismo1.jpg';

import QuicklyMenu from "../../components/QuicklyMenu";

// import './styles.css';

export default function Lamarckismo() {
  useSubtitle();

  return (
    <>
      <div className='intro'>
        <section className='section-intro'>
          <h1 className='styled-title'>Lamarckismo</h1>
          <p className='text'>
            O Lamarckismo foi uma teoria evolutiva proposta pelo naturalista Jean-Baptiste
            Lamarck (1744-1829). Essa teoria se baseava em duas leis: A Lei do Uso e Desuso
            e a Lei da transmissão dos caracteres adquiridos.
          </p>
        </section>

        <QuicklyMenu selected='lamarckismo' />
      </div>

      <div className='div-article'>
        <div className='article-left' />
        <article >
          <h2 className="styled-title subtitle">Mais sobre o assunto</h2>
          <p className='text'>
            Lamarck acreditava que os organismos se adaptavam de acordo com o ambiente então
            se o ambiente sofria alguma alteração, logo a adaptação viria a seguir. Seguindo
            essa idéia a lei do uso e desuso era baseado nesse processo de adaptação ao meio,
            então se o organismo utilizava alguma parte do corpo, automaticamente faria com
            que ela se desenvolvesse mais que outras e as que não houvesse tanta necessidade
            de uso, acabariam se atrofiando. Essa idéia pode ser vista, por exemplo, no caso
            do pescoço da girafa.
          </p>
          <img id='img-end' src={lamarckismo1} alt="imagem sobre o lamarckismo" />
          <p className='text'>
            Lamarck dizia que as girafas tinham um pescoço curto, mas por conta que era
            necessário se alimentar das copas das árvores que ficavam muito altas, o pescoço
            foi se alongando.
          </p>
          <p className='text'>
            A Lei dos Caracteres adquiridos era baseada em que todas as características
            benéficas que um organismo tivesse eram transmitidas para todos seus descendentes
            de geração em geração.
          </p>
        </article>
      </div>
    </>
  );
}