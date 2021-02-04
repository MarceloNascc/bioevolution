import React, { useState, useEffect } from 'react';

import './styles.css';

function Questions({ about, isSelected, unselect }) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [hits, setHits] = useState(0);
  const [selectedAlternative, setSelectedAlternative] = useState('none');
  const [previousIsCorrect, setPreviousIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [seeAnswers, setSeeAnswers] = useState(false);

  useEffect(() => {
    setSelectedAlternative('none');
  }, [currentPosition]);

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedAlternative === about[currentPosition].correctResponse.alternativeId) {
      setPreviousIsCorrect(true);
      setHits(hits + 1);
      // setSelectedAlternative('none'); not working here
    } else {
      setPreviousIsCorrect(false);
    }

    if (currentPosition < about.length - 1) {
      setCurrentPosition(currentPosition + 1);
    } else {
      setIsFinished(true);
    }
  }

  function handlePrevious(event) {
    event.preventDefault();

    if (previousIsCorrect) {
      setHits(hits - 1);
    }

    setCurrentPosition(currentPosition - 1);
  }

  function handleExit(event) {
    event.preventDefault();

    setCurrentPosition(0);
    setHits(0);
    setSelectedAlternative('none');
    setIsFinished(false);
    setSeeAnswers(false);
    unselect();
  }

  return (
    <section style={{ display: !isSelected ? 'none' : '' }} className='questions'>
      <div style={{ display: seeAnswers ? 'none' : '' }}>
        <div dangerouslySetInnerHTML={{ __html: about[currentPosition].text }} />

        <form method='POST'>
          {
            about[currentPosition].alternatives.map((alternative, index) => (
              <div className="custom-radio-row">
                <input
                  checked={alternative.id === selectedAlternative}
                  className="custom-radio"
                  type="radio"
                  name="multi"
                  id={alternative.id}
                  value={alternative.id}
                  onChange={value => setSelectedAlternative(value.target.value)}
                />
                <label htmlFor={alternative.id}>{'abcde'.slice(index, index + 1)}) {alternative.text}</label>
              </div>
            ))
          }

          {currentPosition > 0 && (
            <button onClick={handlePrevious} className='back-button' type='button'>
              Voltar
            </button>
          )}

          <button
            disabled={selectedAlternative === 'none'}
            className='submit-button'
            type='submit'
            onClick={handleSubmit}
          >
            {
              currentPosition + 1 !== about.length ? 'Próxima' : 'Concluir'
            }
          </button>
        </form>
      </div>

      <div style={{ display: !seeAnswers ? 'none' : '' }}>
        {
          about.map((question, index) => (
            <>
              <h2 className='title question-number'>Questão {index + 1}:</h2>
              <div dangerouslySetInnerHTML={{ __html: question.text }} />
              <p className='answer'>
                <span>Resposta correta - </span>{question.correctResponse.text}
              </p>
            </>
          ))
        }
      </div>

      <button
        style={{ position: !seeAnswers ? 'absolute' : 'initial' }}
        onClick={handleExit}
        id='give-up'
        type='button'
      >
        {!seeAnswers ? 'Desistir' : 'Voltar para o menu'}
      </button>

      <div id='finished' style={{ display: !isFinished || seeAnswers ? 'none' : '' }}>
        <p>Você acertou <span id='hits'>{hits}/{about.length}</span></p>
        <button onClick={handleExit}>Voltar para o menu</button>
        <button onClick={() => setSeeAnswers(true)}>Ver gabarito</button>
      </div>
    </section>
  );
}

export default Questions;