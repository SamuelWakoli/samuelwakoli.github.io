import { motion } from "framer-motion";

export const Section = ({ children, className, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};
