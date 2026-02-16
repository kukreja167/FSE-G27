import React,{useState} from 'react';
// react keeps track of the state variable and when it changes and not of regular variables. When we update the state variable using the setter function,
// it re-renders the component to reflect the new value. This allows us to create interactive and dynamic user interfaces in React applications.

const App = () => {
  const [num, random] = useState(0);
  // fucntion to get random number betwwen 1 to 10

  function RandomNumber() {
    const value =Math.floor(Math.random() * 10);
    random(value);
    console.log(value);
  }
  return (
    <div>
      <h1>number: {num}</h1>
      <button onClick={RandomNumber}>generate</button>
    </div>
  );
}
export default App;