import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="loading_container"
    >
      <motion.span
        initial={{ y: -30 }}
        animate={{ y: 10 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.span>
    </motion.div>
  );
}
