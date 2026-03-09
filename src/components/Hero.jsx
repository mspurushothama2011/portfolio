// src/components/Hero.jsx
import { useEffect } from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  // Cursor tracking motion values
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);

  // Apply smooth spring physics to the raw mouse coordinates
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transform coordinates into 3D rotation degrees for Parallax effect
  const rotateX = useTransform(smoothY, [0, window.innerHeight], [8, -8]);
  const rotateY = useTransform(smoothX, [0, window.innerWidth], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, z: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      z: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white pt-24 overflow-hidden perspective-1000">
      
      {/* 1. Cursor Spotlight Effect */}
      <motion.div
        className="fixed top-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none z-0"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* 2. Slow Ambient Floating Orbs (Existing) */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-600/20 rounded-full blur-[150px] pointer-events-none" 
      />

      <div className="container mx-auto px-6 relative z-10 text-center flex justify-center">
        
        {/* 3. Interactive Parallax Container */}
        <motion.div 
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="w-full max-w-4xl"
        >
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 glass-card border-white/5 bg-slate-900/10 p-10 md:p-16 rounded-[3rem] shadow-2xl relative"
            style={{ transform: "translateZ(50px)" }} // Pop out the glass card itself
          >
            
            {/* Badge - Popped further out */}
            <motion.div variants={itemVariants} className="flex justify-center" style={{ transform: "translateZ(20px)" }}>
              <div className="inline-block px-5 py-2 glass-card border-primary-500/30 text-primary-400 text-sm font-semibold rounded-full shadow-[0_0_15px_rgba(236,72,153,0.15)] relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                  Open to Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
            
            {/* Headlines */}
            <motion.div variants={itemVariants} style={{ transform: "translateZ(40px)" }}>
              <h1 className="text-5xl md:text-7xl font-bold font-space leading-tight mb-6 tracking-tight drop-shadow-xl">
                Designing the Future, <br className="hidden md:block"/>
                Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Present</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                Hi, I'm <span className="font-semibold text-white">Purushothama M S</span>
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.p variants={itemVariants} style={{ transform: "translateZ(30px)" }} className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              MSc Computer Science student bridging the gap between Full Stack Engineering and 
              <span className="text-slate-200 font-medium"> UI/UX Design</span>. I craft scalable applications and pixel-perfect interfaces.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} style={{ transform: "translateZ(50px)" }} className="flex flex-wrap gap-6 justify-center pt-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects" 
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-medium rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-primary-500/25 border border-white/10"
              >
                View My Work <ArrowRight size={20} />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"  
                download="Purushothama_Resume.pdf"
                className="px-8 py-4 glass-card hover:bg-white/10 text-white font-medium rounded-xl flex items-center gap-2 transition-all"
              >
                Download CV <Download size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} style={{ transform: "translateZ(20px)" }} className="flex items-center justify-center gap-8 pt-12 mt-8 max-w-md mx-auto">
              <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://github.com/mspurushothama2011" className="text-slate-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={28} />
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.1 }} href="https://www.linkedin.com/in/purushothama-ms" className="text-slate-400 hover:text-primary-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={28} />
              </motion.a>
              <motion.a whileHover={{ y: -5, scale: 1.1 }} href="mailto:mspurushothama2011@gmail.com" className="text-slate-400 hover:text-accent-400 transition-colors">
                <Mail size={28} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;