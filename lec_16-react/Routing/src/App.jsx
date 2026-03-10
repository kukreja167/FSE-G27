import React from 'react';
//react router dom
import {BrowserRouter, Route, Routes,Link, useParams} from 'react-router-dom';
// dynamic routes are made using : in the path and then we can access that parameter using useParams hook

 function App(){
    return (    
        <div>





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
    <Route path='/profile/:name' element={<Profile/>}/>
    <Route path='*' element={<NotFound/>}/>
</Routes>


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
    function Profile(){
        const {name} = useParams();
        return(
            <div>
                <h1>Profile Page of {name}</h1>
            </div>
        );  
    }
    function NotFound(){
        return(
            <div>
                <h1>404 Not Found</h1>
            </div>
        );  
    }   







export default App;
