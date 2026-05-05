import React, { useEffect, useState } from "react";
import { Link, Route, Routes,Navigate } from "react-router-dom";
import{useRef} from "react"; 
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";

function Protected({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    let unsubscribe= onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return unsubscribe;
    
  }, []);

  if (user === undefined) {
    return <h2>Loading...</h2>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return React.cloneElement(children, { user });
}
const App = () => {
  
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={
          <Protected>
          <Dashboard />
          </Protected>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
      


    </div>
  );
};

// -------- AUTH FUNCTIONS --------

async function register(email, password, setEmail, setPassword) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Registered Successfully");
    setEmail("");
    setPassword("");
  } catch (err) {
    console.log(err);
  }
}

async function login(email, password, setEmail, setPassword) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login Successfully");
    setEmail("");
    setPassword("");
  } catch (err) {
    console.log(err);
  }
}

function logout() {
  signOut(auth)
    .then(() => {
      console.log("Logged out successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

// -------- GOOGLE LOGIN --------

function GoogleLogin() {
  async function loginwithgooglehandler() {
    try {
      let provider = new GoogleAuthProvider();
      let usercredential = await signInWithPopup(auth, provider);
      console.log(usercredential);
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={loginwithgooglehandler}>Login with Google</button>;
}

// -------- COMPONENTS --------

function Dashboard({ user }) {
  return (
    <div>
      <Home />
      <h1>Dashboard</h1>

      <p>Logged in as: {user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Login">login</Link>
        </li>
        <li>
          <Link to="/Register">register</Link>
        </li>
        <li>
          <Link to="/Dashboard">dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
<Home />
      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => login(email, password, setEmail, setPassword)}>
        Login
      </button>
      <h2>New User <Link to="/register"> Register </Link></h2>

      
    </div>
  );
}

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
<Home />
      <h1>Register Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => register(email, password, setEmail, setPassword)}>
        Register
      </button>
      <h2>Already have an account? <Link to="/login"> login </Link></h2>
    </div>
  );
}

export default App;