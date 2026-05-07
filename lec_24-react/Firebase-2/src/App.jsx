import React from "react";

import{ collection, addDoc ,getDoc,getDocs,updateDoc,deleteDoc ,doc} from "firebase/firestore";
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
            ...doc.data(),
            id:doc.id
          }
        })
        
        console.log(blogs);
      }catch(err){
        console.log(err);
      }
    }
    
    async function getblogbyid(id){
      let docref = doc(db,"blogs",id);
      try{
        let response = await getDoc(docref);
        console.log(response.data());
      }catch(err){
        console.log(err);
      }
    }
    async function updateblog(id,title,des){
      let docref = doc(db,"blogs",id);
      try{
        let response = await updateDoc(docref,{
          "title":title,
          "description":des
        })
        console.log("Blog Updated");
      }catch(err){
        console.log(err);
      }
    }
    async function deleteblog(id){
      let docref = doc(db,"blogs",id);
      try{
        let response = await deleteDoc(docref);
        console.log("Blog Deleted");
      }catch(err){
        console.log(err);
      }
    }

    return (
    <div>
      <h1>FireStore</h1>
      <button onClick={()=>addblog("my first blog","this is my first blog")}>Add Blog</button>
      <button onClick={()=>getblogs()}>Get Blogs</button>
      <button onClick={()=>getblogbyid("4T5C3NtClByoO18z411z")}>Get Blog By Id</button>
      <button onClick={()=>updateblog("4T5C3NtClByoO18z411z","my first blog updated","this is my first blog updated")}>Update Blog</button>
      <button onClick={()=>deleteblog("Mak8vrkm3ANzNWHlGw3v")}>Delete Blog</button>
    </div>
  );
};

export default App;