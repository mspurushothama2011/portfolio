// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition min-h-screen pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-space text-white mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
            
            {/* Contact Info Side */}
            <div className="md:col-span-2 space-y-6">
                <div className="glass-card p-8 rounded-3xl border border-white/10 group hover:border-primary-500/30 transition-colors">
                    <div className="w-12 h-12 bg-primary-500/10 text-primary-400 rounded-2xl flex items-center justify-center mb-6 border border-primary-500/20 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-space text-white mb-2">Email Me</h3>
                    <p className="text-slate-400 font-light text-sm mb-4">I actively check my inbox and usually respond within 24 hours.</p>
                    <a href="mailto:mspurushothama2011@gmail.com" className="text-primary-400 font-medium hover:text-primary-300 transition-colors">
                        mspurushothama2011@gmail.com
                    </a>
                </div>

                <div className="glass-card p-8 rounded-3xl border border-white/10 group hover:border-accent-500/30 transition-colors">
                    <div className="w-12 h-12 bg-accent-500/10 text-accent-400 rounded-2xl flex items-center justify-center mb-6 border border-accent-500/20 group-hover:scale-110 transition-transform">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-space text-white mb-2">Location</h3>
                    <p className="text-slate-400 font-light text-sm mb-4">Available for remote work and select local opportunities.</p>
                    <span className="text-accent-400 font-medium tracking-wide">
                        Earth
                    </span>
                </div>

                {/* Social Links Mini-cards */}
                <div className="grid grid-cols-2 gap-4">
                    <a href="https://github.com/mspurushothama2011" target="_blank" rel="noreferrer" className="glass-card p-6 flex flex-col items-center justify-center gap-3 rounded-2xl hover:bg-white/5 transition-colors group text-slate-400 hover:text-white border border-white/5 hover:border-white/20">
                        <Github size={28} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/purushothama-ms" target="_blank" rel="noreferrer" className="glass-card p-6 flex flex-col items-center justify-center gap-3 rounded-2xl hover:bg-white/5 transition-colors group text-slate-400 hover:text-primary-400 border border-white/5 hover:border-primary-500/30">
                        <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                </div>
            </div>

            {/* Form Side */}
            <div className="md:col-span-3">
                <form className="glass-card p-8 md:p-10 rounded-3xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="text-2xl font-bold font-space text-white mb-8">Send a Message</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400 pl-1">Your Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-light"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400 pl-1">Your Email</label>
                            <input 
                                type="email" 
                                placeholder="john@example.com"
                                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-light"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 mb-6">
                        <label className="text-sm font-medium text-slate-400 pl-1">Subject</label>
                        <input 
                            type="text" 
                            placeholder="How can I help you?"
                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-light"
                        />
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-sm font-medium text-slate-400 pl-1">Message</label>
                        <textarea 
                            rows="5"
                            placeholder="Tell me about your project..."
                            className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-light resize-none"
                        ></textarea>
                    </div>

                    <button 
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("Contact functionality needs a backend (like EmailJS) to work. Link your email provider here!");
                        }}
                        className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-medium rounded-xl px-6 py-4 flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/25 active:scale-[0.98]"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
