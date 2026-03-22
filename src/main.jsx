import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Backtop from './components/Backtotop';
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/Contacts' element={<Contacts />} />
        </Routes>
        <Backtop />
        <Footer />
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
