// src/components/PortfolioSection.jsx
import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (e, project) => {
    // If the user clicked on an anchor tag (like the Github/Live links), ignore this wrapper navigation
    if (e.target.closest('a')) return;

    // 1. If it is the NVC Project
    if (project.title.includes("NVC")) {
      // Send "nvc" as the section type
      navigate('/gallery', { state: { section: 'nvc' } });
    } 
    // 2. If it is the College Project
    else if (project.title.includes("College")) {
      // Send "college" as the section type
      navigate('/gallery', { state: { section: 'college' } });
    } 
    // 3. Normal Coding Projects
    else if (project.liveLink && project.liveLink !== "#") {
      window.open(project.liveLink, '_blank');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-accent-500/30 text-accent-400 text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(45,212,191,0.1)]">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
            Recent Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            A curated selection of my work spanning Full Stack Development, UI/UX, and Graphic Design. Each project reflects a commitment to quality and scalable architecture.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project) => (
            <motion.div 
              variants={itemVariants}
              key={project.id} 
              onClick={(e) => handleProjectClick(e, project)}
              className="cursor-pointer h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioSection;