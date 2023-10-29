import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import MyGames from './pages/MyGames';
import Game from './pages/Game';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myGames" element={<MyGames />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
