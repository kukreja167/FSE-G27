import React from 'react'
function sum(a,b){
  return a+b;
}
function App() {
  let a=Math.random();
  let num1=10;
  let num2=5
  
  return (
    <div>
      <Header></Header>
      <h1>Hello world</h1>
      <h3>{a}</h3>
      <p>{num1+num2}</p>
      <br />
      <input type="text" />
    </div>
  )
}
//component should start with capital letter
function Header(){
  return (
    <div>
      <div className="logo">Logo
        <img src="" alt="" />
      </div>
      <ul className="navLinks">
        <li className="navlist">Home</li>
        <li className="navlist">About</li>
        <li className="navlist">Contant</li>
      </ul>
    </div>
  )
}
export default App
