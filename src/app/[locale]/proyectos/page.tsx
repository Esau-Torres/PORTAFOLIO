'use client';
import { useState } from 'react';
import s1 from "../styles/Proyectos.module.css"
import s2 from "../styles/page.module.css";
import { Container, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode, faLayerGroup, faShieldHalved, faServer } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import GoogleVideo from '../components/proyectos/googleDrive';
import { useTranslations } from 'use-intl';

import StaggerContainer, { cardVariants } from '../components/animation/StaggerContainer';
import AscendWords from '../components/animation/AscendWords';
import ShiftWords from '../components/animation/ShiftWords';
import { motion, cubicBezier } from "framer-motion";

interface Project {
    id: number;
    title: string;
    content: string;
    src: string;
}
 const cardAnim = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) }
        }
    };

    interface TechCardProps {
        icon: IconDefinition;
        title: string;
        children: React.ReactNode;
    }

    const TechCardItem = ({ icon, title, children }: TechCardProps) => (
        <motion.div className="col-12 col-lg-6 mb-4" variants={cardAnim}>
            <div className={s1.techCard}>
                <div className={s1.techIcon}>
                    <FontAwesomeIcon icon={icon} />
                    <h3 className={s2.desciption}>{title}</h3>
                </div>
                <p className={s2.content}>
                    {children}
                </p>
            </div>
        </motion.div>
    );

export default function Proyectos() {
    const t = useTranslations('proyectos');

    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


    const videos: Project[] = [
        {
            id: 1,
            title: t('ttl1'),
            content: t('txt1'),
            src: "https://youtu.be/jvYOgdgVkGs",
        },
        {
            id: 2,
            title: t('ttl2'),
            content: t('txt2'),
            src: "https://youtu.be/A3ziU7yvIDM",
        },
        {
            id: 3,
            title: t('ttl3'),
            content: t('txt3'),
            src: "https://youtu.be/ydHVm7IAzBU",
        }
    ];

    // Recibe el objeto completo del proyecto
    const handleOpenModal = (project: any) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <>
            <section className={s1.proyectosSection}>
                <Container>
                    <div className="d-flex justify-content-center align-items-center flex-column text-center  mt-4">
                        <AscendWords text={t('ttl4')} className={s2.title} />
                        <ShiftWords text={t('txt4')} className={`${s2.desciption} mb-4`} delay={0.5} />
                    </div>

                    <StaggerContainer className="row g-4">
                        {videos.map((vid) => (

                            <motion.div key={vid.id} className="col-12 col-md-4" variants={cardVariants}>
                                <div className={s1.projectCard} onClick={() => handleOpenModal(vid)}>

                                    <div className={s1.videoThumbnailWrapper}>
                                        {/* Pasamos solo el src limpio */}
                                        <GoogleVideo
                                            src={vid.src}
                                            title={vid.title}
                                            showThumbnail={true} />

                                        <div className={s1.overlay}>
                                            <span>{t('txt5')} <FontAwesomeIcon icon={faEye} /></span>
                                        </div>
                                    </div>

                                    {/* Información breve en la tarjeta */}
                                    <div className="p-3">
                                        <h3 className={`${s2.desciption} text-center mb-2 fw-bold text-white`}>{vid.title}</h3>
                                        <p className={`${s2.content} ${s1.truncateText}`}>
                                            {vid.content.substring(0, 100)}...
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </StaggerContainer>

                    {/* --- MODAL --- */}
                    <Modal
                        show={showModal}
                        onHide={handleCloseModal}
                        centered
                        size="xl"
                        className={s1.modalCustom}>
                        <Modal.Body className="p-0 bg-dark text-white">
                            {selectedProject && (
                                <div className="container-fluid">
                                    <div className="row">

                                        <div className="col-12 col-lg-8 p-0">
                                            <div className={s1.modalVideoContainer}>
                                                <GoogleVideo src={selectedProject.src} title={selectedProject.title} />
                                            </div>
                                        </div>

                                        <div className="col-12 col-lg-4 p-4 d-flex flex-column justify-content-center">
                                            <Modal.Header closeButton className="border-0" style={{ position: 'absolute', top: '0', right: '0' }} data-bs-theme="dark"></Modal.Header>
                                            <h2 className="fw-bold mb-4" style={{ color: '#ececec' }}>
                                                {selectedProject.title}
                                            </h2>
                                            <div className={s1.scrollableContent}>
                                                <p className={s2.content} style={{ textAlign: 'justify' }}>
                                                    {selectedProject.content}
                                                </p>
                                            </div>

                                            <div className="mt-4 pt-3 border-top border-secondary">
                                                <span className="badge bg-secondary me-2">Full Stack</span>
                                                <span className="badge bg-secondary me-2">Software</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </Modal.Body>
                    </Modal>

                </Container>
            </section>

            <section className="mb-4">
                <Container>
                    <StaggerContainer className="row mt-5 pt-5 border-top border-secondary border-opacity-25">

                        <div className="col-12 text-center d-flex flex-column align-items-center mb-5">
                            <h2 className={s2.title} style={{ fontSize: '2rem' }}>{t('ttl5')}</h2>
                            <p className={s2.desciption}>{t('txt6')}</p>
                        </div>

                        <TechCardItem icon={faCode} title={t('ttl6')}>
                            {t('txt7')} <span className={s1.highlight}>C++, C# y Java</span> {t('txt8')} <span className={s1.highlight}>Python</span> {t('txt9')} <span className={s1.highlight}>JavaScript y TypeScript</span>, {t('txt10')}
                        </TechCardItem>

                        <TechCardItem icon={faLayerGroup} title={t('ttl7')}>
                            {t('txt11')} <span className={s1.highlight}>{t('txt12')}</span> {t('txt13')} <span className={s1.highlight}>{t('txt14')}</span> {t('txt15')}
                        </TechCardItem>

                        <TechCardItem icon={faShieldHalved} title={t('ttl8')}>
                            {t('txt16')} <span className={s1.highlight}>{t('txt17')}</span> {t('txt18')}
                        </TechCardItem>

                        <TechCardItem icon={faServer} title={t('ttl9')}>
                            {t('txt19')} <span className={s1.highlight}>Backend</span> {t('txt20')} <span className={s1.highlight}>Frontend</span> {t('txt21')} <strong> {t('txt22')} </strong>, {t('txt23')}
                        </TechCardItem>

                    </StaggerContainer>
                </Container>
            </section>
        </>
    );
}