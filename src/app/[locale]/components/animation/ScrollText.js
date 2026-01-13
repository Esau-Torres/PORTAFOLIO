'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollText({ children, className }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Transformamos el progreso del scroll (0 a 1) en valores de opacidad y posición
    // 0% scroll -> Opacidad 0 (Entrando)
    // 50% scroll -> Opacidad 1 (Centro de pantalla)
    // 100% scroll -> Opacidad 0 (Saliendo por arriba)
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    // Efecto de movimiento suave (Parallax) y desenfoque al salir
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
    const blur = useTransform(scrollYProgress, [0.7, 1], ["0px", "10px"]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, filter: blur }}
            className={className}
        >
            {children}
        </motion.div>
    );
}