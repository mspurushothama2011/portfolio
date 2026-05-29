// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';
import CertificationsPage from './pages/CertificationsPage';
import GalleryPage from './components/GalleryPage';

import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';

// Inner component to use location hook
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/certifications" element={<PageTransition><CertificationsPage /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};


function App() {
  return (
    <Router>
      <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-primary-500/30 selection:text-white font-outfit">
        <Navbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <footer className="py-8 relative z-10 text-center text-slate-500 text-sm border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
          <p>© 2026 Purushothama M S. Crafted with React, Tailwind & Framer Motion.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;