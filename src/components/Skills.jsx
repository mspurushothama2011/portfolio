// src/components/Skills.jsx
import { Code2, Palette, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Stack",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      skills: ["Python", "React (Vite)", "FastAPI", "Flask", "MongoDB", "MySQL", "Java", "JavaScript"]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "Git/GitHub", "Netlify", "Render"]
    },
    {
      title: "Core Competencies",
      icon: <Brain className="w-6 h-6 text-teal-400" />,
      skills: ["Leadership", "Problem Solving", "Teamwork", "Adaptability", "Communication"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Proficiency</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-600 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;