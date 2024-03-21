import { AnimatePresence, motion } from "framer-motion";

function SlidingWrapper({ children }) {
  return (
    <AnimatePresence>
    <motion.div
    initial={{ x:'100vw' }}
    animate={{ x: 0 }}
    exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
    transition={{ duration: 3.2, delay: 3.3, ease: 'easeIn' }}
    >
      {children}
    </motion.div>
    </AnimatePresence>
  );
}

export default SlidingWrapper;
