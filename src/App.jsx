// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Skills from './components/Skills';
import PortfolioSection from './components/PortfolioSection';
import Certifications from './components/Certifications';
import GalleryPage from './components/GalleryPage'; // Import the new page

// This component holds your main homepage content
const Home = () => (
  <>
    <Hero />
    <Skills />
    <PortfolioSection />
    <Certifications />
    <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800 bg-slate-900">
      <p>© 2025 Purushothama M S. Built with React & Tailwind.</p>
    </footer>
  </>
);

function App() {
  return (
    <Router>
      <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-blue-500 selection:text-white">
        <Routes>
          {/* Main Website Route */}
          <Route path="/" element={<Home />} />
          
          {/* New Gallery Page Route */}
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;