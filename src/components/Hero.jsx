// src/components/Hero.jsx
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white pt-16">
      
      {/* Background Gradient - subtle effects */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-teal-900/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Badge - Centered */}
          <div className="flex justify-center">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold rounded-full">
              Available for Internship
            </div>
          </div>
          
          {/* Headlines - Centered */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                Purushothama
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
              Full Stack Developer & Graphic Designer
            </h2>
          </div>
          
          {/* Description - Centered */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            MSc Computer Science student bridging the gap between Full Stack Engineering and 
            <span className="text-slate-200 font-medium"> UI/UX Design</span>. 
            I craft scalable applications with Python/React and design intuitive, pixel-perfect user interfaces using 
            <span className="text-slate-200 font-medium"> Figma & Adobe Suite</span>.
          </p>

          {/* Buttons - Centered */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-blue-600/25"
            >
              View My Work <ArrowRight size={20} />
            </a>
            
            <a 
              href="#" 
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl flex items-center gap-2 transition-all border border-slate-700"
            >
              Download CV <Download size={20} />
            </a>
          </div>

          {/* Social Links - Centered */}
          <div className="flex items-center justify-center gap-6 pt-8 border-t border-slate-800/50 mt-8 max-w-md mx-auto">
            <a href="https://github.com/mspurushothama2011" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/purushothama-ms" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mspurushothama2011@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;