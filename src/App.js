import React from 'react';
import {Route, Routes, Router} from 'react-router-dom'
import Header from './components/Header/Header';
import Logo from './Pages/Logo/Logo';
import Menu from './Pages/Menu/Menu';
import Search from './Pages/Search/Search';
import Weekly from './Pages/Weekly/Weekly';
import World from './Pages/World/World'
import './App.css';
import Data from './components/Data/Data';
import Briefing from './components/Briefing/Briefing';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
      <Route  exact path='/' element={<Logo/>}/>
      <Route  path='/menu' element={<Menu />}/>
      <Route  path='/search' element={<Search />}/>
      <Route  path='/weekly' element={<Weekly />}/>
      <Route  path='/world' element={<World />}/>
    </Routes>
    <Data />
    <Briefing />
    </div>
  );
}

export default App;
