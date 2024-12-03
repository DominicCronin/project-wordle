import React from 'react';

function GuessInput({makeGuess, isOver}) {
  const [guessInput , setGuessInput] = React.useState('');
  return (
  <form className="guess-input-wrapper"
    onSubmit={(event)=> {
      event.preventDefault()
      if (guessInput.length === 5) {
        makeGuess(guessInput)
        setGuessInput('')
      }
    }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      onChange={(event)=>{
          if (event.target.validity.patternMismatch) {
            event.target.setCustomValidity("Use a-zA-Z")
          } else {
            event.target.setCustomValidity('');
          }
          setGuessInput(event.target.value.toUpperCase().substring(-1,5));          
          }
      } 
      id="guess-input" type="text" 
      value={guessInput}
      disabled={isOver}
      pattern="[a-zA-Z]+"
      />
  </form>)
}
export default GuessInput;
