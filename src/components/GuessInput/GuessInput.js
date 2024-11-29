import React from 'react';

function GuessInput({setGuess}) {
  const [guessInput , setGuessInput] = React.useState('');
  return (
  <form class="guess-input-wrapper"
    onSubmit={(event)=> {
      event.preventDefault()
      if (guessInput.length == 5) {
        setGuess(guessInput)
        setGuessInput('')
      }
    }}>
    <label for="guess-input">Enter guess:</label>
    <input 
      onChange={(event)=>{
        if (event.target.validity.patternMismatch) {
          event.target.setCustomValidity("Done bad things.")
        } else {
          event.target.setCustomValidity('');
        }
        setGuessInput(event.target.value.toUpperCase().substring(0,5));          
        }
      } 
      id="guess-input" type="text" 
      value={guessInput}
      pattern="[a-zA-Z]{5,5}"
      />
  </form>)
}
export default GuessInput;
