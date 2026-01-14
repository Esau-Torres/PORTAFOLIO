'use client';
import styles from "../styles/About.module.css";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

import SkillCategory from '../components/animation/SkillCategory';
import AscendWords from '../components/animation/AscendWords';
import ShiftWords from '../components/animation/ShiftWords';
import Reveal from '../components/animation/Reveal';
import { motion } from "framer-motion";

export default function About() {
    const t = useTranslations('about');

    const skillsData = [
        {
            id: 'tools',
            title: t('ttl4'),
            skills: ['Node.js', 'Figma', 'Git & GitHub', 'Bitbucket', 'Adobe Photoshop', 'Adobe Illustrator']
        },
        {
            id: 'soft',
            title: t('ttl5'),
            skills: [t('txt9'), t('txt10')]
        },
        {
            id: 'db',
            title: t('ttl6'),
            skills: ['MySQL', 'Postgres SQL', 'Sql Server', 'Fire Base', 'MongoDB']
        }
    ];

    const contactInfo: { [key: string]: string } = {
        phone: '7490-7343',
        email: 'davidesau140@gmail.com',
        location: 'San Salvador'
    };

    const faIcon: { [key: string]: any } = {
        phone: faPhone,
        email: faEnvelope,
        location: faMapMarkerAlt
    };

    return (
        <>
            <section className={styles.banner}>
                <div className="h-100 w-100 d-flex align-items-end p-3 p-md-5">

                    <div className={styles.contactInfo}>
                    
                        {Object.entries(contactInfo).map(([key, value], index) => (
                            <div key={key} className={styles.contactItem}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <FontAwesomeIcon icon={faIcon[key]} style={{ color: 'rgba(138, 136, 136, 0.72)' }} />
                                </motion.div>
                                <ShiftWords text={value} delay={0.5 + index * 0.1} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <Container>
                    <div className="row">
                        <div className={`col-12 col-md-6 ${styles.separatorColumn}`}>

                            <div className="mb-1">
                                <AscendWords text={t('ttl1')} className={styles.title} />
                                <Reveal delay={0.3}>
                                    <p className={`${styles.parrafo}`}>
                                        {t('txt1')}
                                    </p>
                                </Reveal>

                            </div>

                            <div className="mb-1">
                                <AscendWords text={t('ttl2')} className={`${styles.title} mb-4 fw-bold`} />

                                <Reveal delay={0.3}>
                                    <p className={`${styles.parrafo}`}>
                                        {t('txt2')}
                                    </p>
                                </Reveal>

                            </div>
                            <div className="mb-1">
                                <AscendWords text={t('ttl3')} className={`${styles.title} mb-4 fw-bold`} />
                                <div className="d-flex flex-column">
                                    <Reveal delay={0.3}>
                                        <p className={`${styles.parrafo}`}>
                                            {t('txt3')} <br /><br />
                                            <span className={styles.vineta}></span>
                                            {t('txt4')}
                                            <br /></p>

                                        <p className={`${styles.parrafo}`}>
                                            {t('txt5')}
                                            <br /><br />
                                            <span className={styles.vineta}></span>
                                            {t('txt6')}
                                            <br />
                                            {t('txt7')} <a href="https://tkiero.app/" rel="noreferrer" style={{ color: '#a1a1a0' }}>Tkiero App</a> <br /><br />
                                            {t('txt8')}
                                        </p>
                                    </Reveal>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-start ps-md-5">

                            {skillsData.map((category) => (
                                <SkillCategory
                                    key={category.id}
                                    title={category.title}
                                    skills={category.skills}
                                />
                            ))}


                            <motion.div
                                className="container container-fluid h-100 d-flex justify-content-center align-content-center"
                                initial={{ opacity: 0, y: 50, rotate: -5 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 1, delay: 0.2, type: "spring" }}>
                                <Image src="/images/about4.png"
                                    alt="imagen de about"
                                    width={500}
                                    height={500}
                                    className={`${styles['image-about2']} `} />
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    );
}