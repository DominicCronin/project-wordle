import React from 'react';

function GuessesList({guesses}) {
  return (
  <div class="guess-results">
    {
      guesses.map((guess)=> {
        return <p class="guess">{guess}</p>
      })
    }
  </div>) ;
}

export default GuessesList;
