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
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <SpeedInsights />
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
