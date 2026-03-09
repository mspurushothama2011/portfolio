// src/hooks/useIsMobile.js
import { useState, useEffect } from 'react';

/**
 * Returns true if the device is a touch/mobile screen (no hover capability).
 * Used to conditionally disable heavy cursor-driven animations.
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    // Initial check using matchMedia - 'hover: none' means touch device
    return window.matchMedia('(hover: none), (max-width: 768px)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return isMobile;
};

export default useIsMobile;
