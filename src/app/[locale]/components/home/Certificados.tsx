'use client';

import { useState } from 'react';
import styles from "../../styles/page.module.css";
import { Container, Modal } from 'react-bootstrap';
import Image from 'next/image';

export default function Certificados() {
    // 1. ESTADOS PARA EL MODAL
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // 2. DATOS DE LOS CERTIFICADOS
    const certificados = [
        {
            id: 1,
            title: "Hacker Ético",
            src: "/images/certificado1.png",
        },
        {
            id: 2,
            title: "Ciberseguridad",
            src: "/images/certificado2.png",
        },
        {
            id: 3,
            title: "Git & Github",
            src: "/images/certificado3.png",
        }
    ];

    // 3. FUNCIONES
    const handleOpenModal = (imageSrc:string) => {
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
                <h1 className={`${styles.title} text-center mb-5 mt-4 fw-bold`}>Mis Certificados</h1>

                <div className="row g-4">
                    {certificados.map((cert) => (
                        <div key={cert.id} className="col-12 col-md-4">
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
                                        className={`${styles['image-cerificate']} img-fluid`}/>
                                    <div className={styles.overlay}>
                                        <span>Ver Certificado 🔍</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* MODAL (Sin cambios, funciona igual) */}
                <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    centered
                    size="lg"
                    className={styles.modalCustom}>
                    <Modal.Header closeButton className="border-0 pb-0" />
                    <Modal.Body className="text-center p-4">
                        {selectedImage && (
                            <Image
                                src={selectedImage}
                                alt="Vista previa"
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