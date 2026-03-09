// src/components/ProjectCard.jsx
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      onClick={onCardClick}
      className="glass-card rounded-3xl overflow-hidden group border border-white/10 h-full flex flex-col relative cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-56 m-2 rounded-2xl">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Overlay Effect */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
          {project.githubLink && (
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubLink} target="_blank" rel="noopener noreferrer" 
              className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-primary-500 hover:border-primary-400 transition-colors shadow-lg relative z-30 pointer-events-auto"
              onClick={(e) => {
                e.preventDefault(); // Stop standard routing briefly to strictly control the window open
                e.stopPropagation(); // Block bubbling
                window.open(project.githubLink, '_blank');
              }}
            >
              <Github size={22} className="pointer-events-none" />
            </motion.a>
          )}
          {project.liveLink && project.liveLink !== '#' && (
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-accent-500 hover:border-accent-400 transition-colors shadow-lg relative z-30 pointer-events-auto"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveLink, '_blank');
              }}
            >
              <ExternalLink size={22} className="pointer-events-none" />
            </motion.a>
          )}
        </div>
        
        {/* Subtle inner shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60 pointer-events-none z-10"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col relative z-20 pointer-events-none">
        <h3 className="text-2xl font-bold font-space text-white mb-3 group-hover:text-primary-400 transition-colors pointer-events-none">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 pointer-events-none">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pointer-events-none">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20 group-hover:border-primary-500/40 group-hover:bg-primary-500/20 transition-colors pointer-events-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;