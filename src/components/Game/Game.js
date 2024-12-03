import React from 'react';
import GuessInput from '../GuessInput'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessesList from '../GuessesList/GuessesList';
import Results from '../Results/Results';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses , setGuesses] = React.useState([]);
  const [isWon,setIsWon] = React.useState(false);
  const [isOver, setIsOver] = React.useState(false);

  function makeGuess(guess) {
    const guessObject = {
      "id": crypto.randomUUID(),
      "word": guess
    }
    const nextGuesses = [...guesses]
    nextGuesses.push(guessObject)
    setGuesses(nextGuesses)
    const nextIsWon = guess === answer;
    setIsWon(nextIsWon);
    const nextIsOver = nextIsWon || nextGuesses.length >= NUM_OF_GUESSES_ALLOWED
    setIsOver( nextIsOver);
    console.log(nextGuesses, nextIsOver)
  }
  return (
    <>
      <GuessesList guesses={guesses} answer={answer} />
      {isOver && <Results isWon={isWon} answer={answer} guesses={guesses} />}
      <GuessInput makeGuess={makeGuess} isOver={isOver}/>
    </>
)  
}

export default Game;
