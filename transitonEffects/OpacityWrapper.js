import { AnimatePresence, motion } from "framer-motion";

function OpacityWrapper({ children }) {

 
  return (
    <AnimatePresence>
    {children && <motion.div
    key="My Op Wrapper"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.8, ease: 'easeIn' }}
    // transition={{ duration: 1, delay: 0.3, ease: 'easeIn' }}
    >
      {children}
    </motion.div>}
    </AnimatePresence>
  );
}

export default OpacityWrapper;
