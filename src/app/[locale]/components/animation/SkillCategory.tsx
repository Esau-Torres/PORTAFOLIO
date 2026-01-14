'use client';
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import styles from "../../styles/About.module.css";
import AscendWords from '../animation/AscendWords'; 
import StaggerContainer from '../animation/StaggerContainer'; 

const tagPopVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring" as const, stiffness: 300, damping: 20 } 
  }
};

interface SkillCategoryProps {
    title: string;
    skills: string[]; // Array de strings con las tecnologías
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
    return (
        <div className="mb-5"> {/* Margen inferior para separar categorías */}
            
            {/* 1. Título Animado */}
            <AscendWords 
                text={title} 
                className={`${styles.title} mb-4 fw-bold`} 
            />

            {/* 2. Contenedor de Tags */}
            <StaggerContainer className={styles.containerTags}>
                {skills.map((skill, index) => (
                    <motion.div 
                        key={index} 
                        className={styles.tags} 
                        variants={tagPopVariant}
                    >
                        <span className={styles.tagtext}>{skill}</span>
                    </motion.div>
                ))}
            </StaggerContainer>
        </div>
    );
}