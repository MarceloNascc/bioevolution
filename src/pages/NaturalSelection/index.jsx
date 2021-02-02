import React from 'react';

import QuicklyMenu from "../../components/QuicklyMenu";

export default function NaturalSelection() {
  return (
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
  );
}