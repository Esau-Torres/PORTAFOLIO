'use client';

import { useState } from 'react';
import styles from "../../styles/page.module.css";
import { Container, Modal } from 'react-bootstrap';
import Image from 'next/image';
import { useTranslations } from 'use-intl';
import AscendWords from '../animation/AscendWords';
import StaggerContainer, { cardVariants } from '../animation/StaggerContainer';
import { motion } from "framer-motion";

export default function Certificados() {

    const t = useTranslations();
    // 1. ESTADOS PARA EL MODAL
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // 2. DATOS DE LOS CERTIFICADOS
    const certificados = [
        {
            id: 1,
            title: t('components.certificados.ttl1'),
            src: "/images/certificado1.png",
        },
        {
            id: 2,
            title: t('components.certificados.ttl2'),
            src: "/images/certificado02.png",
        },
        {
            id: 3,
            title: t('components.certificados.ttl3'),
            src: "/images/certificado3.png",
        }
    ];

    // 3. FUNCIONES
    const handleOpenModal = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage('');
    };

    return (
        <section className={styles.bloque4}>
            <Container>
                <AscendWords text={t('components.certificados.ttl4')} className={`${styles.title} justify-content-center mb-5 mt-4 fw-bold`} />

                <StaggerContainer className="row g-4">
                    {certificados.map((cert) => (
                        <motion.div key={cert.id} className="col-12 col-md-4" variants={cardVariants}>
                            {/* CARD LIMPIA SIN ICONO */}
                            <div className={styles.cardCustom2}>

                                <h3 className={styles.cardcertificado}>{cert.title}</h3>

                                <div
                                    className={styles.imageContainer}
                                    onClick={() => handleOpenModal(cert.src)}>
                                    <Image
                                        src={cert.src} alt={cert.title}
                                        width={500}
                                        height={300}
                                        className={`${styles['image-cerificate']} img-fluid`} />
                                    <div className={styles.overlay}>
                                        <span>{t('components.certificados.ttl5')}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>

                {/* MODAL (Sin cambios, funciona igual) */}
                <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    centered
                    size="lg"
                    backdropClassName={styles.solidBackdrop}
                    className={styles.modalCustom}>
                    <Modal.Header closeButton className="border-0 pb-0" />
                    <Modal.Body className="text-center p-4">
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt={t('components.certificados.ttl6')}
                                width={800}
                                height={600}
                                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                            />
                        )}
                    </Modal.Body>
                </Modal>

            </Container>
        </section>
    );
}