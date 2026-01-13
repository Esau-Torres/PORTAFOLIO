'use client';
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    text: string;
    className?: string;
    delay?: number;
}

export default function ShiftWords({ text, className, delay = 0.2 }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    // --- Variantes ---
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05, // Un poco más rápido que el título
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { x: -20, opacity: 0 }, // Empieza a la izquierda y transparente
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className} // Aplicamos la clase (ej: description) al contenedor
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }} // Flex para que las palabras fluyan
        >
            {text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    style={{ display: "inline-block" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}