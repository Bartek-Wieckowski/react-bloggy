import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      className="container mx-auto px-4 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Home
    </motion.div>
  );
}
