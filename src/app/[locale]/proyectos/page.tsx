'use client';
import { useState } from 'react';
import s1 from "../styles/Proyectos.module.css"
import s2 from "../styles/page.module.css";
import { Container, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCode, faLayerGroup, faShieldHalved, faServer } from '@fortawesome/free-solid-svg-icons';
import GoogleVideo from '../components/proyectos/googleDrive';

    interface Project {
        id: number;
        title: string;
        content: string;
        src: string;
    }

export default function Proyectos() {

    // Cambiamos el estado para guardar EL PROYECTO ENTERO, no solo la url
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] =  useState<Project | null>(null);


    const videos : Project[] = [
        {
            id: 1,
            title: "Catalogo de Musica",
            content: "Este proyecto fue desarrollado utilizando el lenguaje de programación C#, bajo el framework ASP.NET, con SQL Server como sistema gestor de base de datos. La interfaz web fue implementada mediante HTML, CSS con el apoyo de Bootstrap 5 para diseño responsivo y JavaScript para interactividad dinámica. Arquitectónicamente, se adoptó el patrón de diseño Modelo-Vista-Controlador (MVC).",
            src: "https://youtu.be/jvYOgdgVkGs",
        },
        {
            id: 2,
            title: "Marketplace DeepMarket",
            content: "Este proyecto es un marketplace web desarrollado en Java con Spring Boot y Hibernate, utilizando PostgreSQL como base de datos. La arquitectura sigue el patrón MVC, separando claramente las entidades, los repositorios y los servicios. La interfaz se construyó con Thymeleaf y Tailwind CSS.",
            src: "https://youtu.be/A3ziU7yvIDM",
        },
        {
            id: 3,
            title: "Proyectos de Python",
            content: "Este repositorio reúne un conjunto de 120 proyectos desarrollados en Python, concebidos como herramientas prácticas y modulares. Cada script ha sido diseñado con un propósito funcional claro, abarcando automatización, interfaces gráficas y manejo de APIs.",
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
                    <h1 className={s2.title}>Proyectos grandes realizados</h1>
                    <p className={s2.desciption}>
                        En esta sección se presentan algunos de los proyectos más destacados.
                    </p>
                </div>

                <div className="row g-4">
                    {videos.map((vid) => (
                        <div key={vid.id} className="col-12 col-md-4">
                            {/* Tarjeta contenedora con estilos s1 */}
                            <div className={s1.projectCard} onClick={() => handleOpenModal(vid)}>
                                
                                {/* Contenedor del video (Thumbnail) */}
                                <div className={s1.videoThumbnailWrapper}>
                                    {/* Pasamos solo el src limpio */}
                                    <GoogleVideo 
                                        src={vid.src} 
                                        title={vid.title} 
                                        showThumbnail={true} 
                                    />
                                    
                                    {/* Overlay para click */}
                                    <div className={s1.overlay}>
                                        <span>Ver Detalles <FontAwesomeIcon icon={faEye} /></span>
                                    </div>
                                </div>

                                {/* Información breve en la tarjeta */}
                                <div className="p-3">
                                    <h3 className={`${s2.desciption} text-center mb-2 fw-bold text-white`}>{vid.title}</h3>
                                    {/* Cortamos el texto para que no sea muy largo en la card */}
                                    <p className={`${s2.content} ${s1.truncateText}`}>
                                        {vid.content.substring(0, 100)}...
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- MODAL GRANDE (XL) --- */}
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
                                    
                                    {/* IZQUIERDA: VIDEO */}
                                    <div className="col-12 col-lg-8 p-0">
                                        <div className={s1.modalVideoContainer}>
                                            <GoogleVideo src={selectedProject.src} title={selectedProject.title} />
                                        </div>
                                    </div>

                                    {/* DERECHA: INFORMACIÓN */}
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
                <div className="row mt-5 pt-5 border-top border-secondary border-opacity-25">
                    <div className="col-12 text-center d-flex flex-column align-items-center mb-5">
                        <h2 className={s2.title} style={{fontSize: '2rem'}}>ADN Tecnológico</h2>
                        <p className={s2.desciption}>Mi filosofía detrás de cada línea de código</p>
                    </div>

                    {/* COLUMNA 1: LENGUAJES */}
                    <div className="col-12 col-lg-6 mb-4">
                        <div className={s1.techCard}>
                            <div className={s1.techIcon}>
                                <FontAwesomeIcon icon={faCode} /> 
                                <h3 className={s2.desciption}>Políglota Tecnológico</h3>
                            </div>
                            <p className={s2.content}>
                                Mi trayectoria se define por la versatilidad en lenguajes robustos como <span className={s1.highlight}>C++, C# y Java</span>, donde he forjado una base sólida en programación orientada a objetos y gestión de memoria. 
                                En el ecosistema moderno, utilizo <span className={s1.highlight}>Python</span> para automatización y análisis, mientras que en la web domino <span className={s1.highlight}>JavaScript y TypeScript</span>, 
                                creando interfaces reactivas y tipos seguros. Esta diversidad me permite elegir la herramienta exacta para cada problema.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA 2: ARQUITECTURA */}
                    <div className="col-12 col-lg-6 mb-4">
                        <div className={s1.techCard}>
                            <div className={s1.techIcon}>
                                <FontAwesomeIcon icon={faLayerGroup} />
                                <h3 className={s2.desciption}>Arquitectura & Patrones</h3>
                            </div>
                        
                            <p className={s2.content}>
                                El código funciona, pero la arquitectura perdura. Implemento rigurosamente patrones de diseño como <span className={s1.highlight}>MVC (Modelo-Vista-Controlador)</span> para desacoplar la lógica de negocio de la interfaz. 
                                Mi obsesión por el <span className={s1.highlight}>Código Limpio (Clean Code)</span> y el pensamiento lógico me impulsa a refactorizar constantemente, buscando no solo que el software funcione, 
                                sino que sea escalable, mantenible y eficiente en el consumo de recursos.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA 3: SEGURIDAD */}
                    <div className="col-12 col-lg-6 mb-4">
                        <div className={s1.techCard}>
                            <div className={s1.techIcon}>
                                <FontAwesomeIcon icon={faShieldHalved} />
                                <h3 className={s2.desciption}>Seguridad & Innovación</h3>
                            </div>
                            
                            <p className={s2.content}>
                                En un mundo digital vulnerable, la seguridad no es opcional. Implemento prácticas de <span className={s1.highlight}>Seguridad Web</span> desde el diseño, protegiendo contra inyecciones y vulnerabilidades comunes. 
                                Me emociona la mejora continua; ver nacer nuevas tecnologías despierta mi curiosidad crítica, llevándome a estudiar y adoptar herramientas emergentes que puedan 
                                elevar la robustez de mis sistemas.
                            </p>
                        </div>
                    </div>

                    {/* COLUMNA 4: FULL STACK */}
                    <div className="col-12 col-lg-6 mb-4">
                        <div className={s1.techCard}>
                            <div className={s1.techIcon}>
                                <FontAwesomeIcon icon={faServer} />
                                <h3 className={s2.desciption}>Backend & Frontend</h3>
                            </div>
                            
                            <p className={s2.content}>
                                Entiendo el desarrollo web como una orquesta. Tengo claridad absoluta sobre las responsabilidades del <span className={s1.highlight}>Backend</span> (lógica, datos, seguridad) 
                                y el <span className={s1.highlight}>Frontend</span> (experiencia, interactividad). Soy experto consumiendo y diseñando <strong>APIs RESTful</strong>, asegurando una comunicación 
                                fluida y eficiente entre el servidor y el cliente, optimizando cada petición para una experiencia de usuario instantánea.
                            </p>
                        </div>
                    </div>
                </div>
         </Container>
        </section>
        </>
    );
}