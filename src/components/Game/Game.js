import React, {useState} from 'react';
import GuessInput from '../GuessInput/GuessInput'
import Guesses from '../Guesses/Guesses'
import NUM_OF_GUESSES_ALLOWED from '../../constants'
import { checkGuess } from '../../game-helpers'

function Game({ setWin, setUserGuesses, userGuesses, answer }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [guessWithStatuses, setGuessWithStatuses] = useState([])

  const handleIncomingGuess = (guess) => {
    const updateUserGuesses = userGuesses < NUM_OF_GUESSES_ALLOWED && userGuesses + 1
    checkGuessStatus(guess)
    checkIfUserWon(guess)
    setUserGuesses(updateUserGuesses)
  }

  const checkGuessStatus = (guess) => {
    const checkGuessResults = []
    const newGuessWithStatuses = [...guessWithStatuses]
    checkGuess(guess, answer).map(item => checkGuessResults.push(item))
    newGuessWithStatuses.push({checkGuessResults: checkGuessResults, guess: guess})
    setGuessWithStatuses(newGuessWithStatuses)
  }

  const handleDisable = () => {
    if(userGuesses === NUM_OF_GUESSES_ALLOWED) {
      setIsDisabled(true)
    }
  }

  const checkIfUserWon = (guess) => {
    if(guess === answer) {
      setWin(true)
      setIsDisabled(true)
    }
  }


  return (
    <div className="wrapper">
      <Guesses 
        guessWithStatuses={guessWithStatuses}
      />
      <GuessInput 
        handleIncomingGuess={handleIncomingGuess}
        isDisabled={isDisabled}
        handleDisable={handleDisable}
      />
    </div>
  )
}

export default Game;
