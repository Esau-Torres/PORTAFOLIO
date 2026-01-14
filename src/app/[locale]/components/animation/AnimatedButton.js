'use client';
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedButton({ children, className, onClick, delay = 0 }) {
    const [isExploding, setIsExploding] = useState(false);
    const particles = Array.from({ length: 12 });

    const handleClick = async () => {
        if (onClick) onClick();
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 600);
    };

    return (
       <motion.div
            style={{ display: 'inline-block' }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20, 
                delay: delay
            }}
        >
            <motion.button
                className={`${className} position-relative`}
                onClick={handleClick}
                
                whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                    zIndex: 1,
                    transition: { duration: 0.2 }
                }}
                
                whileTap={{ scale: 0.95 }}
                
                transition={{ duration: 0.2 }} 
                
                style={{ overflow: 'visible' }} >
                <span style={{ position: 'relative', zIndex: 10 }}>{children}</span>

                {particles.map((_, i) => (
                    <Particle key={i} index={i} total={12} active={isExploding} />
                ))}
            </motion.button>
        </motion.div>
    );
}

function Particle({ index, total, active }) {
    const angle = (360 / total) * index;
    return (
        <motion.span
            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            animate={active ? {
                x: Math.cos(angle * (Math.PI / 180)) * 60,
                y: Math.sin(angle * (Math.PI / 180)) * 60,
                opacity: [1, 0],
                scale: [1, 0]
            } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "10px",
                height: "10px",
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#09ff00",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    );
}