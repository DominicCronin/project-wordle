import React from 'react';
import GuessInput from '../GuessInput'

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess , setGuess] = React.useState('');
  return (
    <>
      <h1>Returned guess: {guess}</h1>
      <GuessInput setGuess={setGuess}/>
    </>
)  
}

export default Game;
