import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Backtop from './components/Backtotop';
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <Header />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/Contacts' element={<Contacts />} />
          </Routes>
        </Suspense>
        <Backtop />
        <Footer />
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
