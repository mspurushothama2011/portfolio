// src/components/GalleryPage.jsx
import { ArrowLeft, BookOpen, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const GalleryPage = () => {
  const location = useLocation();
  const activeSection = location.state?.section || 'nvc';

  // 1. Load NVC Internship Images
  const nvcImages = import.meta.glob('../assets/designs/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' });
  const nvcList = Object.values(nvcImages);

  // 2. Load College Images
  const collegeImages = import.meta.glob('../assets/college-designs/*.{png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' });
  const collegeList = Object.values(collegeImages);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12 overflow-x-hidden relative font-outfit">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Header & Back Button */}
      <div className="container mx-auto px-6 mb-16 relative z-20">
        <div className="flex flex-col md:flex-row md:items-center gap-6 pb-6 border-b border-white/10">
          <Link to="/" className="w-12 h-12 flex items-center justify-center glass-card rounded-full hover:bg-white/10 hover:-translate-x-1 transition-all group shrink-0">
            <ArrowLeft className="text-slate-400 group-hover:text-white transition-colors" size={24} />
          </Link>
          <div>
            <h1 className="text-4xl font-bold font-space tracking-tight mb-2">
              {activeSection === 'nvc' ? 'NVC Internship Experience' : 'College Event Leadership'}
            </h1>
            <p className="text-slate-400 font-light text-lg">
              {activeSection === 'nvc' 
                ? 'Learning Design Principles & Creating Visual Assets' 
                : 'Managing Design Teams for Campus Events'}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* VIEW 1: NVC INTERNSHIP */}
        {activeSection === 'nvc' && (
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-start gap-5 mb-12 glass-card p-6 md:p-8 rounded-3xl border border-primary-500/20 max-w-4xl">
              <div className="p-4 bg-primary-500/10 text-primary-400 rounded-2xl shrink-0 border border-primary-500/20">
                <BookOpen size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-space mb-2 group-hover:text-primary-400 transition-colors">Internship Learning Outcomes</h2>
                <p className="text-slate-300 text-base leading-relaxed font-light">
                  During my internship at NVC & Associates, I was trained in professional design workflows. 
                  These projects represent the practical application of the skills I learnt in 
                  <span className="text-white font-medium"> Layout Design, Typography, and Adobe Suite/Canva</span>.
                </p>
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {nvcList.map((imgSrc, index) => (
                <motion.div variants={itemVariants} key={`nvc-${index}`} className="break-inside-avoid relative group rounded-2xl overflow-hidden glass-card">
                  <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/10 transition-colors duration-500 pointer-events-none z-10"></div>
                  <img src={imgSrc} alt={`NVC Internship Work ${index+1}`} className="w-full relative z-0 transition-transform duration-700 ease-in-out group-hover:scale-105" />
                </motion.div>
              ))}
              {nvcList.length === 0 && (
                <div className="p-8 text-center glass-card rounded-2xl break-inside-avoid col-span-3">
                  <p className="text-slate-500">No images currently populated in the design directory.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {/* VIEW 2: COLLEGE EVENTS */}
        {activeSection === 'college' && (
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-start gap-5 mb-12 glass-card p-6 md:p-8 rounded-3xl border border-accent-500/20 max-w-4xl">
              <div className="p-4 bg-accent-500/10 text-accent-400 rounded-2xl shrink-0 border border-accent-500/20">
                <GraduationCap size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-space mb-2">Campus Leadership</h2>
                <p className="text-slate-300 text-base leading-relaxed font-light">
                  As the Design Team Lead, I was responsible for creating the visual identity for major college fests like ICRTMS and Synergia.
                </p>
              </div>
            </motion.div>

            <motion.div variants={containerVariants} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {collegeList.map((imgSrc, index) => (
                <motion.div variants={itemVariants} key={`college-${index}`} className="break-inside-avoid relative group rounded-2xl overflow-hidden glass-card">
                  <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-colors duration-500 pointer-events-none z-10"></div>
                  <img src={imgSrc} alt={`College Event Design ${index+1}`} className="w-full relative z-0 transition-transform duration-700 ease-in-out group-hover:scale-105" />
                </motion.div>
              ))}
              {collegeList.length === 0 && (
                <div className="p-8 text-center glass-card rounded-2xl break-inside-avoid col-span-3">
                  <p className="text-slate-500">No images currently populated in the college design directory.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default GalleryPage;