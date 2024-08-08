import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage'; // Ensure this component exists
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
        <div>
        <header className="bg-green-600 p-4 flex justify-between items-center">
          <img src="/logo.png" alt="Logo" className="w-20" />
          <nav>
            <Link to="/" className="mx-4 text-white">Home</Link>
            <Link to="/about" className="mx-4 text-white">About Us</Link>
            <Link to="/team" className="mx-4 text-white">Team</Link>
            <Link to="/contact" className="mx-4 text-white">Contact Us</Link>
          </nav>
        </header>
      <Routes>
        
        <Route path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <footer className="bg-green-600 text-black text-center p-4 mt-4">
          &copy; 2024 The Farm House
        </footer>
      </div>
    </Router>
  );
}

export default App;
