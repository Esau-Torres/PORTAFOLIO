'use client';
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
}

export default function Reveal({ children, width = "fit-content", delay = 0.25 }: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 }); // 3
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: delay, ease: "easeOut" }} 
            >
                {children}
            </motion.div>
        </div>
    );
}