import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyATLQpkFxRjCUVIKo-wRfbnBW8DBWLWpGE",
  authDomain: "fse-1may.firebaseapp.com",
  projectId: "fse-1may",
  storageBucket: "fse-1may.firebasestorage.app",
  messagingSenderId: "421326166483",
  appId: "1:421326166483:web:bf07055163c6caabb7b726",
  measurementId: "G-M359N908LR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });


  async function register() {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
return(
  <>
<h1>Registered Successfully</h1>
  </>
)

    setEmail("");
    setPassword("");
  } catch (err) {
console.log(err);
  }
}
function googleLogin() {
  async function loginwithgooglehandler(){
    try{
let provider = new GoogleAuthProvider();
let usercredential = await signInWithPopup(auth, provider);
console.log(usercredential);
    }
    catch(err){
      console.log(err);
    }

  }
  return(
    <>
    <button onClick={loginwithgooglehandler}>Login with Google</button>
    </>
  )
}

  async function login() {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return(
      <>
<h1>Login Successfully</h1>
      </>
    )

    setEmail("");
    setPassword("");
  } catch (err) {
console.log(err);
  }
}

   function logout() {
  signOut(auth).then(() => {
    console.log("Logged out successfully");
  }).catch((err) => {
    console.log(err);
  });
}

  

  return (
    <div x>
      <h2>Firebase Auth</h2>

      {/* <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br /> */}

      {/* <button onClick={register}>Register</button>
      <button onClick={login}>Login</button> */}
      <button onClick={logout}>Logout</button>

    {googleLogin()};


      <br /><br />


      {user && <h3>Welcome: {user.email}</h3>}
    </div>
  );
}

export default App;