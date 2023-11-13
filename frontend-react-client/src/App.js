import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import Page2 from './pages/page2';
import Navbar from './components/navbar';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="/page2" Component={Page2}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;


