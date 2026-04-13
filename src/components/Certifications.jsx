// src/components/Certifications.jsx
import { useState } from 'react';
import { Award, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      id: 1,
      title: "AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      color: "border-primary-500/30 text-primary-400 bg-primary-500/10",
      pdf: "/certificates/oracle.pdf",
      description: "Gained foundational knowledge of Artificial Intelligence workloads, Deep Learning, and Machine Learning on Oracle Cloud Infrastructure (OCI).",
      skills: ["OCI", "Machine Learning", "AI Workloads"]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      issuer: "HP",
      year: "2025",
      color: "border-accent-500/30 text-accent-400 bg-accent-500/10",
      pdf: "/certificates/hp.pdf",
      description: "Mastered data analysis techniques, statistical modeling, and data visualization strategies to drive business insights.",
      skills: ["Data Analysis", "Statistics", "Visualization"]
    },
    {
      id: 3,
      title: "UiPath RPA Developer",
      issuer: "UiPath",
      year: "2024",
      color: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      pdf: "/certificates/24mscs14 UI Path.pdf",
      description: "Completed hands-on training in Robotic Process Automation (RPA) using UiPath, covering workflow automation, bots, and enterprise process design.",
      skills: ["RPA", "UiPath", "Automation", "Bots"]
    },
    {
      id: 4,
      title: "Research Paper — KJC",
      issuer: "Published Research",
      year: "2024",
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      pdf: "/certificates/SRS Research Paper KJC.pdf",
      description: "Authored and published a research paper exploring innovative solutions in software design and systems. Contributed original ideas to academic discourse.",
      skills: ["Research", "Technical Writing", "Analysis"]
    },
    {
      id: 5,
      title: "Intro to Artificial Intelligence",
      issuer: "Infosys",
      year: "2025",
      color: "border-purple-500/30 text-purple-400 bg-purple-500/10",
      pdf: "/certificates/infosys_ai.pdf",
      description: "Comprehensive introduction to AI concepts, including neural networks, natural language processing, and ethical AI practices.",
      skills: ["AI Concepts", "NLP", "Ethics"]
    },
    {
      id: 6,
      title: "Programming using Java",
      issuer: "Infosys",
      year: "2024",
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
      pdf: "/certificates/java.pdf",
      description: "Deep dive into Object-Oriented Programming (OOP), exception handling, and multi-threading using Java.",
      skills: ["Java", "OOP", "Data Structures"]
    },
    {
      id: 7,
      title: "Kabaddi Team Captain (Winner)",
      issuer: "Intercollegiate Competition",
      year: "2020",
      color: "border-yellow-500/30 text-yellow-400 bg-yellow-500/10",
      pdf: "/certificates/kabaddi.pdf",
      description: "Led the team to victory at the intercollegiate level. Developed strong leadership, strategic planning, and team management skills under pressure.",
      skills: ["Leadership", "Strategy", "Teamwork"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 relative overflow-hidden z-10" id="certifications">
      {/* Background Decor */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-4 tracking-tight">
            Credentials & Highlights
          </h2>
          <p className="text-slate-400 font-light text-lg">Click on a certificate to view details.</p>
        </div>

        {/* Grid of Certificates */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {certs.map((cert) => (
            <motion.div 
              variants={itemVariants}
              key={cert.id} 
              onClick={() => setSelectedCert(cert)}
              className="group glass-card p-6 md:p-8 rounded-3xl border border-white/10 hover:border-primary-500/30 cursor-pointer transition-all hover:translate-y-[-8px] relative overflow-hidden"
            >
              {/* Subtle hover glow inside the card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-transparent group-hover:from-primary-500/5 transition-colors duration-500"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className={`p-4 rounded-2xl border ${cert.color}`}>
                  <Award size={28} />
                </div>
                <span className="text-sm font-medium text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">{cert.year}</span>
              </div>
              
              <h3 className="text-xl font-bold font-space text-white mb-2 group-hover:text-primary-400 transition-colors relative z-10 leading-tight">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-400 font-light text-sm relative z-10">
                <CheckCircle2 size={14} className="text-accent-400" />
                <span>{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal / Popup Logic */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative glass-card w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/15"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-white transition-colors z-20 border border-white/10"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-5 h-full">
                {/* Left: PDF Viewer (Spans 2 cols) */}
                <div className="md:col-span-2 h-72 md:h-full min-h-[350px] bg-slate-900/50 flex flex-col border-r border-white/5 relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-10 ${selectedCert.color.split(' ')[0].replace('border-', 'bg-')}`}></div>
                  {selectedCert.pdf ? (
                    <>
                      <iframe
                        src={`${selectedCert.pdf}#toolbar=0&navpanes=0&view=FitH`}
                        title={selectedCert.title}
                        className="w-full flex-1 relative z-10 border-0"
                      />
                      <a
                        href={selectedCert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 text-center text-xs text-primary-400 hover:text-primary-300 py-2 border-t border-white/10 bg-slate-900/60 transition-colors shrink-0"
                      >
                        ↗ Open in full screen
                      </a>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">No preview available</div>
                  )}
                </div>

                {/* Right: Info (Spans 3 cols) */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-6 ${selectedCert.color}`}>
                    <Award size={16} />
                    {selectedCert.issuer}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold font-space text-white mb-4 leading-tight">
                    {selectedCert.title}
                  </h3>
                  
                  <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8"></div>

                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">What I Learnt</h4>
                  <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed mb-8">
                    {selectedCert.description}
                  </p>

                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Competencies</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 glass-card border border-white/10 text-slate-300 font-medium text-xs md:text-sm rounded-lg hover:border-primary-500/50 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;