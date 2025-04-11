import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
// import StockInfo from './components/StockInfo';
import Home from './views/Home';

function App() {
  
  return (
    <Router>
  <main>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/stockInfo" element={<StockInfo />} /> */}
      </Routes>
  </main>
    </Router>

  );
}
      

export default App
