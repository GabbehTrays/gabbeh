// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Shop from './pages/Shop';
import AboutContact from './pages/AboutContact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/store" element={<Shop />} />
        <Route path="/about-contact" element={<AboutContact />} />
      </Routes>
    </Router>
  );
}

export default App;