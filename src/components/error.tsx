import { motion } from "framer-motion";
import { FC } from "react";

const Error: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="error_container"
    >
      <h1>something went wrong try again later!</h1>
    </motion.div>
  );
};

export default Error;
