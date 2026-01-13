'use client';
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface TypewriterProps {
    text: string;
    className?: string;
    delay?: number; // Retraso inicial antes de empezar a escribir
}

export default function TypewriterReveal({ text, className, delay = 0 }: TypewriterProps) {
    const ref = useRef(null);
    // Detectamos si está en pantalla (once: false para que se repita)
    const isInView = useInView(ref, { once: false, amount: 0.5 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden"); // Resetea la animación al salir
        }
    }, [isInView, controls]);

    // --- VARIANTES DE ANIMACIÓN ---

    // 1. El Contenedor (El director de orquesta)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // ESTA ES LA CLAVE: Tiempo entre la aparición de cada letra
                staggerChildren: 0.04, 
                delayChildren: delay, // Retraso inicial opcional
            },
        },
    };

    // 2. La Letra individual (La explosión)
    const letterVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 20,      // Empieza un poco abajo
            scale: 0.5, // Empieza pequeña
            rotate: -10 // Un poco inclinada
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            transition: {
                // Efecto de rebote fuerte ("explosión")
                type: "spring",
                damping: 12,
                stiffness: 150,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            style={{ display: "flex", flexWrap: "wrap" }} // Asegura que las letras queden en línea
        >
            {/* Dividimos el texto en caracteres individuales */}
            {text.split("").map((char, index) => (
                <motion.span 
                    key={index} 
                    variants={letterVariants}
                    // Importante: Los espacios necesitan un tratamiento especial para que no colapsen
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}

/**
 *  <TypewriterReveal 
            text={t('ttl1')} 
            className={styles.title} // Le pasas la clase de estilo del título
        />
        <TypewriterReveal 
            text={t('txt1')} 
            className={styles.desciption}
            delay={0.5} // Que empiece un poco después del título
        />
 */