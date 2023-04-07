import React, {useState} from "react";
import Game from '../Game';
import Header from '../Header';
import Banner from '../Banner/Banner'
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function App() {
  const [win, setWin] = useState(false);
  const [userGuesses, setUserGuesses] = useState(0);

  return (
    <div className="wrapper">
      <Header />
      <Banner win={win} userGuesses={userGuesses} answer={answer}/>
      <div className="game-wrapper">
        <Game setWin={setWin} setUserGuesses={setUserGuesses} userGuesses={userGuesses} answer={answer}/>
      </div>
    </div>
  );
}

export default App;
