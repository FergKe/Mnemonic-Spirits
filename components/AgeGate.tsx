'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (mounted) {
      const isVerified = localStorage.getItem('age-verified');
      if (!isVerified) {
        const frame = requestAnimationFrame(() => setIsVisible(true));
        return () => cancelAnimationFrame(frame);
      }
    }
  }, [mounted]);

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true');
    setIsVisible(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary px-4"
        >
          <div className="grain-overlay" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md w-full text-center space-y-8 p-12 gold-border bg-slate/50 backdrop-blur-md rounded-lg relative z-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-serif text-gold">Mnemonic Spirits</h2>
              <p className="text-parchment/80 font-sans tracking-wide uppercase text-xs">The Archive Awaits</p>
            </div>
            
            <div className="space-y-6">
              <p className="text-parchment font-serif text-xl italic">
                &quot;Are you of age to remember?&quot;
              </p>
              <p className="text-parchment/60 text-sm">
                You must be 21 years of age or older to access the archive.
              </p>
              <button
                onClick={handleVerify}
                className="w-full py-4 border border-gold text-gold hover:bg-gold hover:text-primary transition-all duration-500 font-sans tracking-widest uppercase text-sm"
              >
                I am 21+
              </button>
              <p className="text-parchment/40 text-[10px] uppercase tracking-tighter">
                By entering, you agree to our terms and privacy policy.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
