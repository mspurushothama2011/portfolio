// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Profile', href: '/profile' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-space tracking-tighter flex items-center gap-2 group relative z-50">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary-500/30">
              P
            </span>
            <span className="text-white group-hover:text-primary-400 transition-colors">
              ms<span className="text-accent-400">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-all relative px-2 py-1 ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <a 
              href="/resume.pdf"
              download="Purushothama_Resume.pdf" 
              className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all shadow-[0_0_15px_rgba(236,72,153,0.15)] hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2 relative z-50 transition-transform active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-slate-950/95 pt-32 px-6 md:hidden flex flex-col items-center overflow-y-auto pb-12"
          >
            <div className="flex flex-col gap-6 items-center w-full min-h-[min-content]">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href) && link.href !== '/');
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-space font-medium tracking-tight ${
                        isActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400' : 'text-slate-300'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a 
                href="/resume.pdf"
                download="Purushothama_Resume.pdf" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="mt-6 px-10 py-4 w-full text-center rounded-2xl text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-accent-600 shadow-xl shadow-primary-500/25 active:scale-95 transition-transform"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
