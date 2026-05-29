import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
      
      {/* Wipe effect - optional, but adds motion graphics flair */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-slate-950 z-[9998] transform-gpu pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
      />
    </>
  );
};

export default PageTransition;
