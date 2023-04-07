import React from 'react';

function Guesses({ guessWithStatuses }) {

  return (
    <div className="guess-results">
      {guessWithStatuses.map((obj) =>
        <p 
          key={Math.random()}
          className="guess">
            {obj.checkGuessResults.map(obj => 
              <span 
                key={Math.random()} 
                className={`cell ${obj.status}`}
              >
                {obj.letter}
            </span>  
            )}
        </p>
      )}
    </div>  
  );
}

export default Guesses;
