import React from 'react'
import { useState } from 'react';
const App = () => {
  //donot change previos state directly,always create a newState value
  let [state, setState] = useState(0);
  let [user,setUser] = useState([{name:"Kavya",age:20}])
  function increaseByOne(){
    // useState(state++)//can not do this
    // state = state+1 // can do this
    let newState= state+1
    setState(newState)
  }
  //[{name:"Nitesh",age:24}] ---> "Ritik",25--->[{name:"Nitesh",age:24},{name:"Ritik",age:25}]
  function addUser(name,age){
      // user.push(name,age); //[{name:"Nitesh",age:24},"Ritik",25]
      // user.push({name:name,age:age}) 
      // setUser(user);
      // let newUser=[]
      // user.forEach((u)=>newUser.push(u))
      // newUser.push({name:name,age:age})
      // setUser(newUser)
      /** spread operator (...) */
      //[1,2,3]= ... ===> 1,2,3 , [{},{},{}] = ... ====> {},{},{}
         let newUser=[...user,{name:name,age:age}]
         setUser(newUser)
  }

  return (
    <div key={user.id}>
      {user.map((u)=>{
      //  return(<div>
      //     <h2>Name : {u.name}</h2>
      //     <h4>age : {u.age}</h4>
      //   </div>)
      return <UserComponent name={u.name} age={u.age}></UserComponent>
      })}
      <button onClick={()=>addUser("Sargun",20)}>Add User</button>
    </div>

  )
}
function UserComponent(props){
  return(
     <div>
          <h2>Name : {props.name}</h2>
          <h4>age : {props.age}</h4>
      </div>
  )
}

export default App