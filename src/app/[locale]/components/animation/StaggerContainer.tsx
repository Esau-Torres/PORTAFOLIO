'use client';
import { motion, Variants } from "framer-motion"; // 1. Importamos Variants

// 2. Definimos el tipo explícitamente
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15 
    }
  }
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(5px)" }, // Agregué un blur sutil
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" } // Quitamos el rebote (spring) para más elegancia
  }
};

interface StaggerProps {
    children: React.ReactNode;
    className?: string;
}

export default function StaggerContainer({ children, className }: StaggerProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}