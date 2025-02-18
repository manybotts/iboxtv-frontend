import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import Trending from './components/Trending';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<ShowDetails />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </Router>
  );
}

export default App;
