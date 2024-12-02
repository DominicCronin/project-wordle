import React from 'react';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {range} from '../../utils'
import {checkGuess} from '../../game-helpers'

function Guess ({word, statuses}){
  return (
  <p className="guess">
    {range(5).map((_,index) => {
      const status = statuses[index]?.status ?? ''
      return (<span key={index} className={`cell ${status}`}>{word.substring(index,index+1)}</span>)
    }
    )}
  </p>
  )
}

function GuessesList({guesses, answer}) {
  return (
  <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map((_,index)=>{
        const guess = guesses[index];
        if (guess !== undefined) {
          console.log(guess.word)
          const statuses = checkGuess(guess.word, answer)
        
        return <Guess key={guess.id} word={guess.word} statuses={statuses} className="guess"/>
        } else {
        return <Guess key={index} word='' className="guess" statuses={[]}/>
        }
      })
    }
  </div>);
}

export default GuessesList;
