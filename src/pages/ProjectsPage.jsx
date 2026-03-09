// src/pages/ProjectsPage.jsx
import PortfolioSection from '../components/PortfolioSection';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
// We reuse the existing PortfolioSection which already fetches from data/projects.js
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition min-h-screen pt-20"
    >
      <PortfolioSection />
    </motion.div>
  );
};

export default ProjectsPage;
