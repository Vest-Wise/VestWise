import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import CardComponent from './components/Card';

function App() {
  // const [count, setCount] = useState(0)

  return (
// removed divs. I don't htink we need them
    <Router>
      <NavBar />
      <Routes>
        <Route path="/stocknews" element={<CardComponent />} />
      </Routes>
    </Router>
  );
}
      

export default App
