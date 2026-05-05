import React from "react";

import{ collection, addDoc ,getDocs } from "firebase/firestore";
import { db } from "./firebase";
const App = () => {
  
    async function addblog(title,des){
      try{
        let response = await addDoc(collection(db,"blogs"),{
        "title":title,
        "description":des
        })
        console.log(response);
      }catch(err){
        console.log(err);
      }
    }
    async function getblogs(){
      try{
        let response = await getDocs(collection(db,"blogs"));
        let blogs = response.docs.map((doc)=>{
          return { 
            ...doc.data()
          }
        })
        console.log(blogs);
      }catch(err){
        console.log(err);
      }
    }

    return (
    <div>
      <h1>FireStore</h1>
      <button onClick={()=>addblog("my first blog","this is my first blog")}>Add Blog</button>
      <button onClick={()=>getblogs()}>Get Blogs</button>
    </div>
  );
};

export default App;