import { motion } from "framer-motion";
export default function Register() {
  return (
    <motion.div
      className="container mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Register
    </motion.div>
  );
}
