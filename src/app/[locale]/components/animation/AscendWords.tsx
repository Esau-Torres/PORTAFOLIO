'use client';
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
    text: string; // Recibimos el texto puro
    className?: string;
    delay?: number;
}

export default function AscendWords({ text, className, delay = 0 }: Props) {
    const ref = useRef(null);
    // Se repite al salir y entrar
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
                staggerChildren: 0.1, // Tiempo entre cada palabra
                delayChildren: delay,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { y: "110%" }, // Empieza justo debajo de su línea
        visible: {
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1], // Curva suave "premium"
            },
        },
    };

    return (
        // Usamos el tag que nos pasen en className (ej: h1) o un div por defecto
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4em' }} // Gap para separar palabras
        >
            {text.split(" ").map((word, index) => (
                // Wrapper para el efecto de máscara (overflow hidden)
                <span key={index} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
                    {/* La palabra que se mueve */}
                    <motion.span variants={wordVariants} style={{ display: 'inline-block' }}>
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
}