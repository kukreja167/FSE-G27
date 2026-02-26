import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(null);

  function check() {
    const random = Math.floor(Math.random() * 10);
    setNum(random);
  }

  return (
    <div>
<h1>WIN - 7</h1>
     <h2>Number is: {num}</h2>
<button onClick={check}>Check</button>
      {num !==null && (num === 7 ? (
        <div>
          <h1>You win</h1>
          <img
            src="https://media.tenor.com/2amPKT6KY0wAAAAM/chihuahua-chihuahua-laughing.gif"
          />
        </div>
      ) : (
        (
          <div>
            <h1>You lose</h1>
            <img
              src="https://media.tenor.com/pFz1Q12_hXEAAAAM/cat-holding-head-cat.gif"
            />
          </div>
        )
      ))}
    </div>
  );
}

export default App;