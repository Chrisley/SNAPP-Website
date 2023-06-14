import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from "./component/Navbar/Navbar";
import  Home from "./pages/Home";
import  TheApp from "./pages/TheApp";
import  Contact from "./pages/Contact";
import  About from "./pages/About";
import  FAQ from "./pages/FAQ";

 function App() {
  return (
    <div className='App'>
       <Navbar/>
       <Routes>
       <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>} />
        <Route path="/app"element={<TheApp/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes> 
    <Footer/>

    </div>
  );
}

export default App;

