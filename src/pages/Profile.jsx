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
      className="page-transition min-h-screen pt-28 pb-12"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Profile Header section */}
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start mb-24 glass-card p-10 rounded-3xl border border-primary-500/20 max-w-5xl mx-auto relative overflow-hidden">
            {/* BG glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="shrink-0 relative group">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary-500/50 shadow-[0_0_30px_rgba(236,72,153,0.3)] relative z-10">
                    <img src="https://placehold.co/400x400/1e1b4b/FFF?text=MS+Profile" alt="Purushothama M S" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500"></div>
            </div>

            <div className="flex-grow z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/10 text-primary-400 rounded-full text-xs font-bold tracking-widest uppercase border border-primary-500/20 mb-4">
                    <Code2 size={14} /> Full Stack Developer
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-space text-white mb-4 tracking-tight">Purushothama M S</h1>
                <p className="text-slate-300 text-lg leading-relaxed font-light mb-6">
                    I am an MSc Computer Science student with a deep passion for creating scalable backend architectures and 
                    pixel-perfect, engaging user interfaces. My hybrid skill set allows me to bridge the gap between engineering 
                    logic and visual design excellence.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="mailto:mspurushothama2011@gmail.com" className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl hover:bg-white/10 transition-colors text-sm font-medium border border-white/10">
                        <Mail size={16} className="text-primary-400" /> Let's Connect
                    </a>
                    <a href="/resume.pdf" download="Purushothama_Resume.pdf" className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white rounded-xl transition-colors shadow-lg shadow-primary-500/25 text-sm font-medium">
                        <Briefcase size={16} /> Download Resume
                    </a>
                </div>
            </div>
        </div>

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
