import React from 'react'
import Header from './component/headerComponent/Header'
import { sum } from './component/headerComponent/Header'
import { multiply } from './component/headerComponent/Header'
const App = () => {
  // sum(2,5) --> error cannot find sum function
  let ans = sum(2,6);
  return (
    <div>
      <Header ans={ans} name="Nitesh"></Header>
      {/* <p>{ans}</p> */}
      //add some line of jsx
      //footer component
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
