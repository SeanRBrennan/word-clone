import React, {useState} from 'react';

function GuessInput({handleIncomingGuess, isDisabled, handleDisable }) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess !== '') {
      handleIncomingGuess(guess)
      setGuess('')
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input 
          type="text" 
          name="guess-input" 
          value={guess.toUpperCase()} 
          onChange={(e) => setGuess(e.target.value.toUpperCase()) }
          minLength='5'
          maxLength='5'
          disabled={isDisabled}
        />
      <button type="submit" disabled={isDisabled} onClick={handleDisable}>
        Submit
      </button>
    </form>
  );
}

export default GuessInput;