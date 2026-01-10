'use client';
import { useState } from 'react';
import s1 from "../styles/Proyectos.module.css"
import s2 from "../styles/page.module.css";
import { Container, Modal } from 'react-bootstrap';
import Image from 'next/image';
import GoogleVideo from '../components/proyectos/googleDrive';

export default function Proyectos() {

    const [showModal, setShowModal] = useState(false);
    const [selectvideo, setSelectVideo] = useState('');
    const videos = [
        {
            id: 1,
            title: "este es el primer video",
            content: " esta es la descripcion del video",
            src: "https://drive.google.com/file/d/1SXQGLUy9Azl_jHxOpedxAb0fuS3lwch_/view?usp=drive_link",
        },
        {
            id: 2,
            title: "este es el segundo video",
            content: "descripcion del video",
            src: "https://drive.google.com/file/d/1SXQGLUy9Azl_jHxOpedxAb0fuS3lwch_/view?usp=drive_link",
        },
        {
            id: 3,
            title: "este es el tercer video",
            content: "descripcion del video",
            src: "https://drive.google.com/file/d/1SXQGLUy9Azl_jHxOpedxAb0fuS3lwch_/view?usp=drive_link",
        }
    ];

    const handleOpenModal = (videoSrc: string) => {
        setSelectVideo(videoSrc);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectVideo('');
    };

    return (
        <>
            <section>
                <Container>
                    <div className="d-flex justify-content-center align-items-center flex-column text-center mb-5 mt-4">
                        <h1 className={s2.title}>Proyectos grades realizados</h1>
                        <p className={s2.desciption}>En esta sección se presentan algunos de los proyectos más destacados realizados a lo largo de mi experiencia. Cada proyecto refleja un flujo de trabajo
                            eficiente y un enfoque en el desarrollo de soluciones innovadoras.</p>
                    </div>
                    <div className="row g-4">
                        {videos.map((vid) => (
                            <div key={vid.id} className="col-12 col-md-4">
                                <div className="">
                                    <div
                                        className=""
                                        onClick={() => handleOpenModal(vid.src)}>
                                        <GoogleVideo driveLink={ `${vid.src} ${vid.title}`} title="Demostración de Ciberseguridad" />
                                        <div className={s1.overlay}>
                                            <span>Ver Certificado </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={`${s2.desciption} text-center mb-3`}>{vid.title}</h3>
                                        <p className={s2.content}>{vid.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Modal
                        show={showModal}
                        onHide={handleCloseModal}
                        centered
                        size="lg"
                        className={s1.modalCustom}>
                        <Modal.Header closeButton className="border-0 pb-0" />
                        <Modal.Body className="text-center p-4">
                            {selectvideo && (
                                <Image
                                    src={selectvideo}
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
        </>
    );
}