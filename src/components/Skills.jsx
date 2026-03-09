// src/components/Skills.jsx
import { Code2, Palette, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Stack",
      icon: <Code2 className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-500" />,
      skills: ["Python", "React (Vite)", "FastAPI", "Flask", "MongoDB", "MySQL", "Java", "JavaScript"],
      color: "from-primary-500 to-primary-600"
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-500" />,
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "Git/GitHub", "Netlify", "Render"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Core Competencies",
      icon: <Brain className="w-8 h-8 text-accent-400 group-hover:scale-110 transition-transform duration-500" />,
      skills: ["Leadership", "Problem Solving", "Teamwork", "Adaptability", "Communication"],
      color: "from-accent-500 to-accent-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my tools, languages, and core skills cultivated over years of study and practice.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8 }}
              key={index} 
              className="glass-card p-8 rounded-3xl group relative overflow-hidden"
            >
              {/* Dynamic Glow Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold font-space text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-slate-900/50 text-slate-300 rounded-xl text-sm font-medium border border-white/5 hover:bg-white/10 hover:text-white transition-all cursor-default shadow-sm group-hover:border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Subtle background glow effect on hover */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${category.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;