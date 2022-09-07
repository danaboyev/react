import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>

            
        </Routes>
    
    </BrowserRouter>
);


