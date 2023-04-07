import React from 'react';

function Banner({ win, userGuesses, answer }) {
  const losingCriteria = !win && userGuesses === 6

  return (
    <div className="banner">
      { win &&
        <div className="happy-banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {userGuesses} guesses</strong>.
          </p>
        </div> 
      }

      { losingCriteria &&
        <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      }
    </div>
  );
}

export default Banner;
