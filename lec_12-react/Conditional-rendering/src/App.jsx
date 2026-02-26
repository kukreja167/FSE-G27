import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(null);

  function check() {
    const random = Math.floor(Math.random() * 10);
    setNum(random);
  }

  return (
    <div>
     <h1>Number is: {num}</h1>
<button onClick={check}>Check</button>
      {num && (num === 7 ? (
        <>
          <h1>You win</h1>
          <img
            src="https://www.shutterstock.com/image-vector/you-win-lettering-pop-art-260nw-1606108018.jpg"
          />
        </>
      ) : (
        (
          <>
            <h1>You lose</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtkF-RyJp9s_p144I00nfNmW2fjav9cn5UQ&s"
            />
          </>
        )
      ))}
    </div>
  );
}

export default App;