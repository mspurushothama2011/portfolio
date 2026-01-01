// src/components/Certifications.jsx
import { useState } from 'react';
import { Award, CheckCircle2, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      id: 1,
      title: "AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      color: "border-red-500/50 text-red-400",
      image: "https://placehold.co/800x600/1e293b/FFF?text=Oracle+Certificate", // Replace with actual image path
      description: "Gained foundational knowledge of Artificial Intelligence workloads, Deep Learning, and Machine Learning on Oracle Cloud Infrastructure (OCI).",
      skills: ["OCI", "Machine Learning", "AI Workloads"]
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      issuer: "HP",
      year: "2025",
      color: "border-blue-500/50 text-blue-400",
      image: "https://placehold.co/800x600/1e293b/FFF?text=HP+Certificate",
      description: "Mastered data analysis techniques, statistical modeling, and data visualization strategies to drive business insights.",
      skills: ["Data Analysis", "Statistics", "Visualization"]
    },
    {
      id: 3,
      title: "Intro to Artificial Intelligence",
      issuer: "Infosys",
      year: "2025",
      color: "border-blue-400/50 text-blue-300",
      image: "https://placehold.co/800x600/1e293b/FFF?text=Infosys+AI+Certificate",
      description: "Comprehensive introduction to AI concepts, including neural networks, natural language processing, and ethical AI practices.",
      skills: ["AI Concepts", "NLP", "Ethics"]
    },
    {
      id: 4,
      title: "Programming using Java",
      issuer: "Infosys",
      year: "2024",
      color: "border-blue-400/50 text-blue-300",
      image: "https://placehold.co/800x600/1e293b/FFF?text=Java+Certificate",
      description: "Deep dive into Object-Oriented Programming (OOP), exception handling, and multi-threading using Java.",
      skills: ["Java", "OOP", "Data Structures"]
    },
    {
      id: 5,
      title: "Kabaddi Team Captain (Winner)",
      issuer: "Intercollegiate Competition",
      year: "2020",
      color: "border-yellow-500/50 text-yellow-400",
      image: "https://placehold.co/800x600/1e293b/FFF?text=Kabaddi+Award",
      description: "Led the team to victory at the intercollegiate level. Developed strong leadership, strategic planning, and team management skills under pressure.",
      skills: ["Leadership", "Strategy", "Teamwork"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" id="certifications">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications & Awards
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Click on a certificate to view details.</p>
        </div>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert) => (
            <div 
              key={cert.id} 
              onClick={() => setSelectedCert(cert)}
              className="group bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer transition-all hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg border bg-slate-50 dark:bg-slate-900 ${cert.color}`}>
                  <Award size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500">{cert.year}</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-500 transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                <CheckCircle2 size={14} />
                <span>{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Popup Logic */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white dark:bg-slate-800 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-2 bg-black/10 dark:bg-white/10 rounded-full hover:bg-red-500 hover:text-white transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Left: Image */}
                <div className="h-64 md:h-auto bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title} 
                    className="max-h-full max-w-full object-contain rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
                  />
                </div>

                {/* Right: Info */}
                <div className="p-8">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-4 ${selectedCert.color.replace('text-', 'bg-').replace('500', '500/10')}`}>
                    <Award size={14} />
                    {selectedCert.issuer}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {selectedCert.title}
                  </h3>
                  
                  <div className="h-1 w-20 bg-blue-500 rounded-full mb-6"></div>

                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">What I Learnt</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {selectedCert.description}
                  </p>

                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md">
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