import React from 'react';
import GuessInput from '../GuessInput'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessesList from '../GuessesList/GuessesList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses , setGuesses] = React.useState([]);

  function makeGuess(guess) {
    const guessObject = {
      "id": crypto.randomUUID(),
      "word": guess
    }
    const nextGuesses = [...guesses]
    nextGuesses.push(guessObject)
    setGuesses(nextGuesses)
  }

  return (
    <>    
      <GuessesList guesses={guesses} answer={answer}/> 
      <GuessInput makeGuess={makeGuess}/>
    </>
)  
}

export default Game;
