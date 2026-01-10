import styles from "../styles/About.module.css";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function About() {
    return (
        <>
            <section className={styles.banner}>
                <div className="h-100 w-100 d-flex align-items-end p-3 p-md-5">

                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <FontAwesomeIcon icon={faPhone} style={{ color: 'rgba(138, 136, 136, 0.72)' }} />
                            <span>7490-7343</span>
                        </div>

                        <div className={styles.contactItem}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgba(138, 136, 136, 0.72)' }} />
                            <span>davidesau140@gmail.com</span>
                        </div>

                        <div className={styles.contactItem}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'rgba(138, 136, 136, 0.72)' }} />
                            <span>San Salvador</span>
                        </div>

                    </div>
                </div>
            </section>

            <section className={styles.contentSection}>
                <Container>
                    <div className="row">
                        <div className={`col-12 col-md-6     ${styles.separatorColumn}`}>

                            <div className="mb-1">
                                <h1 className={`${styles.title} mb-4 fw-bold`}>Sobre mi</h1>
                                <p className={`${styles.parrafo}`}>
                                    Programador joven Full Stack Web, con capacidad para planificar y ejecutar proyectos de forma eficiente, destacando en la
                                    resolución de problemas mediante razonamiento estructurado y detección de patrones. Cuenta con experiencia en el uso
                                    estratégico de diferentes tecnologías, manejo avanzado de Git y GitHub para control de versiones además de Bitbucket y
                                    trabajo colaborativo, y una rápida comprensión de dificultades técnicas. Posee conocimientos en
                                    ingeniería de datos y gestión de data warehouses, orientado a crear soluciones web modernas, escalables y bien
                                    estructuradas, además de ser una persona proactiva, responsable y con habilidades de comunicación efectiva.
                                </p>
                            </div>

                            <div className="mb-1">
                                <h1 className={`${styles.title} mb-4 fw-bold`}>Educacion</h1>
                                <p className={`${styles.parrafo}`}>
                                    Alumno de quinto año de la Licenciatura en Informática en la Universidad Modular Abierta de Santa Ana, con sólida formación
                                    académica y alto grado de autonomía e independencia en el aprendizaje. Complementa su preparación con el Certificado de Hacker
                                    Ético y el Certificado de Introducción a la Ciberseguridad, ambos ofrecidos por Networking Academy, fortaleciendo sus
                                    conocimientos en seguridad informática y buenas prácticas tecnológicas.
                                </p>
                            </div>
                            <div className="mb-1">
                                <h1 className={`${styles.title} mb-4 fw-bold`}>Experiencia</h1>
                                <div className="d-flex flex-column">
                                    <p className={`${styles.parrafo}`}>
                                        Docente hora-clase Data System Computadoras — (2 años) <br /><br />
                                        <span className={styles.vineta}></span>
                                        Impartición de clases en áreas técnicas y tecnológicas, destacando ofimática avanzada, diseño gráfico, soporte técnico
                                        (mantenimiento preventivo y correctivo de equipos, instalación de hardware y redes), programación web, marketing en redes
                                        sociales y manejo de plataformas virtuales. Experiencia en enseñanza práctica, acompañamiento a estudiantes y resolución
                                        de problemas técnicos en entornos reales.  <br /></p>

                                    <p className={`${styles.parrafo}`}>
                                        Freelance programador Full Stack middle — (1 año)<br /><br />
                                        <span className={styles.vineta}></span>
                                        Desarrollo de una aplicación web para la empresa TKIERO, participando en el diseño, implementación y puesta en producción del
                                        proyecto.<br />
                                        Sitio web: <a href="https://tkiero.app/" rel="noreferrer" style={{color: '#a1a1a0'}}>Tkiero App</a> <br /><br />

                                        Actualmente me encuentro en búsqueda activa de oportunidades laborales y abierto a ofertas de empleo, con disposición para
                                        integrarme a nuevos proyectos y equipos de trabajo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-start ps-md-5">

                            <h1 className={`${styles.title} mb-4 fw-bold`}>Tools</h1>
                            <div className={styles.containerTags}>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Node.js</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Figma</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Git and GitHub</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Bitbucket</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Bitbucket</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Adobe Photoshop</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Adobe Illustrator</span>
                                </div>
                            </div>

                            <h1 className={`${styles.title} mb-4 mt-4 fw-bold`}>idiomas</h1>
                            <div className={styles.containerTags}>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Ingles intermedio</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Español</span>
                                </div>
                            </div>

                            <h1 className={`${styles.title} mb-4 mt-4 fw-bold`}>Base de datos</h1>

                            <div className={styles.containerTags}>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>MySQL</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Postgres SQL</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Sql Server</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>Fire Base</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>MongoDB</span>
                                </div>
                            </div>

                            <div className="container container-fluid h-100 d-flex justify-content-center align-content-center" >
                                <Image src="/images/about4.png"  
                                alt="imagen de about" 
                                width={500} 
                                height={500} 
                                className={`${styles['image-about2']} `}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </section >
        </>
    );
}