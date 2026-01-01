// src/components/PortfolioSection.jsx
import { PROJECTS } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useNavigate } from 'react-router-dom';

const PortfolioSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
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
  

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900" id="projects">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my work in Full Stack Development and Graphic Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => handleProjectClick(project)}
              className="cursor-pointer"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;