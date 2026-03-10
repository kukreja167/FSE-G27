import React from 'react';
//react router dom
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom';
 function App(){
    return (    
        <div>




            <BrowserRouter>
            <header>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
</header>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
</Routes>
            </BrowserRouter>

        </div>
    );
}


function Home(){
    return(
        <div>
            <h1>Home Page</h1>
        </div>
    );  
}
function About(){
        return(
            <div>
                <h1>About Page</h1>
            </div>
        );  
    }

 function Contact(){
        return(
            <div>
                <h1>Contact Page</h1>
            </div>
        );  
    }






export default App;
