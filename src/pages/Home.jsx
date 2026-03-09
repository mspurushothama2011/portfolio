// src/pages/Home.jsx
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import PortfolioSection from '../components/PortfolioSection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition min-h-screen"
    >
      <Hero />
      
      {/* Shortened Skills Section for Home */}
      <div className="py-24 relative">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-space font-bold mb-4">Core Strengths</h3>
            <p className="text-slate-400 mb-12 max-w-2xl mx-auto">A quick look at my primary technical and design capabilities. View my full profile for a detailed breakdown.</p>
        </div>
        <Skills />
      </div>

      <PortfolioSection />
    </motion.div>
  );
};

export default Home;
