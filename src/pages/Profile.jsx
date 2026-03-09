// src/pages/Profile.jsx
import { motion } from 'framer-motion';
import { Mail, Briefcase, GraduationCap, Code2, Heart } from 'lucide-react';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition min-h-screen pb-12"
    >
      
      {/* Full-Width Profile Hero Section */}
      <div className="relative w-full min-h-[70vh] flex items-center mb-24 pt-20 border-b border-primary-500/10">
        
        {/* Large Image Background - Left Side */}
        <div className="absolute top-0 left-0 w-full md:w-[65%] h-full z-0">
          <img src="https://placehold.co/1200x800/1e1b4b/FFF?text=MS+Profile" alt="Purushothama M S" className="w-full h-full object-cover object-center" />
          
          {/* Gradient Switch - Fading to background color on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/0 via-slate-950/80 to-slate-950 hidden md:block"></div>
          
          {/* Mobile Gradient Switch - Fading to background color on the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent md:hidden"></div>
        </div>

        {/* Content Side - Right Side aligned */}
        <div className="container mx-auto px-6 relative z-10 w-full flex">
          <div className="w-full md:w-1/2 md:ml-auto pt-64 pb-12 md:py-20 flex flex-col justify-center text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 text-primary-400 rounded-full text-xs font-bold tracking-widest uppercase border border-primary-500/20 mb-6 w-max mx-auto md:mx-0 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                <Code2 size={14} /> Full Stack Developer
            </div>
            
            <h1 className="text-5xl md:text-6xl md:leading-tight font-bold font-space text-white mb-6 tracking-tight drop-shadow-md relative">
                Purushothama M S
                <span className="absolute -inset-2 bg-primary-500/20 blur-2xl -z-10 rounded-full"></span>
            </h1>
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-10 drop-shadow">
                I am an MSc Computer Science student with a deep passion for creating scalable backend architectures and 
                pixel-perfect, engaging user interfaces. My hybrid skill set allows me to bridge the gap between engineering 
                logic and visual design excellence.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="mailto:mspurushothama2011@gmail.com" className="flex items-center gap-2 px-6 py-3 glass-card rounded-xl hover:bg-white/10 transition-colors text-sm font-medium border border-white/10 shadow-lg relative overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <Mail size={18} className="text-primary-400" /> Let's Connect
                </a>
                <a href="/resume.pdf" download="Purushothama_Resume.pdf" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white rounded-xl transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:-translate-y-1 text-sm font-medium">
                    <Briefcase size={18} /> Download Resume
                </a>
            </div>
            
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Experience & Education */}
        <div className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-12">
            
            {/* Education Column */}
            <div>
                <h2 className="text-3xl font-bold font-space text-white mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
                    <GraduationCap className="text-accent-400" size={32} /> Education
                </h2>
                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary-500">
                        <h3 className="text-xl font-bold text-white mb-1">MSc Computer Science</h3>
                        <p className="text-slate-400 text-sm mb-4">Current • Data Structures, Algorithms, Full Stack Dev</p>
                        <p className="text-slate-300 font-light text-sm">Focusing on advanced computing concepts and developing robust web applications using the Python/React ecosystem.</p>
                    </div>
                    
                    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary-600">
                        <h3 className="text-xl font-bold text-white mb-1">BSc Computer Science</h3>
                        <p className="text-slate-400 text-sm mb-4">Completed</p>
                        <p className="text-slate-300 font-light text-sm">Built a strong foundation in programming, software engineering principles, and database management.</p>
                    </div>
                </div>
            </div>

            {/* Experience Column */}
            <div>
                <h2 className="text-3xl font-bold font-space text-white mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-3">
                    <Briefcase className="text-accent-400" size={32} /> Experience
                </h2>
                <div className="space-y-6">
                    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-accent-400">
                        <h3 className="text-xl font-bold text-white mb-1">Website Designer <span className="text-slate-400 text-sm font-normal">@ Big Welt</span></h3>
                        <p className="text-slate-400 text-sm mb-4">Recent</p>
                        <p className="text-slate-300 font-light text-sm">Led the design and development of responsive, modern web interfaces tailored to client needs, ensuring high conversion rates and accessible user experiences.</p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-purple-400">
                        <h3 className="text-xl font-bold text-white mb-1">Lead Tech Engineer <span className="text-slate-400 text-sm font-normal">@ Temple Project</span></h3>
                        <p className="text-slate-400 text-sm mb-4">Freelance / Contract</p>
                        <p className="text-slate-300 font-light text-sm">Architected and engineered the digital frontend for the Temple Project, building a highly performant and interactive web platform.</p>
                    </div>

                    <div className="glass-card p-6 rounded-2xl border-l-4 border-l-slate-500">
                        <h3 className="text-xl font-bold text-white mb-1">Graphic Design Intern <span className="text-slate-400 text-sm font-normal">@ NVC & Associates</span></h3>
                        <p className="text-slate-400 text-sm mb-4">Completed</p>
                        <p className="text-slate-300 font-light text-sm">Gained professional experience in layout design, typography, brand identity, and asset creation using Adobe Creative Suite.</p>
                    </div>
                </div>
            </div>

        </div>

      </div>

      <Skills />

    </motion.div>
  );
};

export default Profile;
