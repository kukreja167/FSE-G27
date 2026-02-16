import React, { useRef, useState } from 'react';
const App=()=>{
  console.log("re-rendering");
  let inputref=useRef();
  // let [name,setname]=useState("");
  let [showname,setshowname]=useState("");
  // function getname(inputname){
  //   // name=inputname
  //   setname(inputname);
  //   console.log(inputname);
  // }
  function changename(){
    console.log(inputref.current.value);
    
    setshowname(inputref.current.value);
  }
  console.log(inputref);
  
return (

  <div>
    <input type='text' ref={inputref} />
    {/* <input onChange={(e)=>getname(e.target.value)} type="text" placeholder=" Enter Your text" />  */}
    <button onClick={changename}> click</button>
    <h1>
    Name is : {showname}
    </h1>
  </div>
)
}
export default App;