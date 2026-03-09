// src/pages/CertificationsPage.jsx
import Certifications from '../components/Certifications';
import { motion } from 'framer-motion';

const CertificationsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-transition min-h-screen pt-20"
    >
      <Certifications />
    </motion.div>
  );
};

export default CertificationsPage;
