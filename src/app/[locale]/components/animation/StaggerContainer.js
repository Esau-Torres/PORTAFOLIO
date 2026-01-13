'use client';
import { motion } from "framer-motion";

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15 // Retraso entre cada tarjeta
        }
    }
};

export const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function StaggerContainer({ children, className }) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Se repite al scrollear
            className={className}
        >
            {children}
        </motion.div>
    );
}