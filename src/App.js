import React from 'react';
import {Route, Routes, Router} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contact/Contact';
import AboutUs from './Pages/AboutUs/AboutUs'
import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
      <Route  exact path='/' element={<Home/>}/>
      <Route  path='/service' element={<Service />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/about' element={<AboutUs />}/>
    </Routes>
    </div>
  );
}

export default App;
