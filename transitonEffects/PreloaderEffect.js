import { AnimatePresence, motion } from "framer-motion";

function PreloaderEffect({ children }) {
  return (
    <AnimatePresence>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
    transition={{ duration: 0.5, delay: 0.1, ease: 'easeIn' }}
    >
      {children}
    </motion.div>
    </AnimatePresence>
  );
}

export default PreloaderEffect;
