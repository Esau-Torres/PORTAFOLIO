'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faMailBulk, faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslations } from 'next-intl'; 
import Link from 'next/link';

export default function Footer() {
    const t = useTranslations('Footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#05080f', color: '#6c757d' }} className="py-5 mt-auto border-top border-secondary-subtle">
            <Container>
                <Row className="gy-4">

                    {/* Columna 1: Marca y Resumen */}
                    <Col md={4}>
                        <h5 className="text-white fw-bold mb-3">DT</h5>
                        <p>
                            {t('description')}
                        </p>
                    </Col>

                    {/* Columna 2: Enlaces Rápidos */}
                    <Col md={4}>
                        <h6 className="text-white fw-bold mb-3">Navegación</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><Link href="/" className="text-decoration-none text-secondary hover-white">{t('txt1')}</Link></li>
                            <li><Link href="/es/about" className="text-decoration-none text-secondary hover-white">{t('txt2')}</Link></li>
                            <li><Link href="/es/proyectos" className="text-decoration-none text-secondary hover-white">{t('txt3')}</Link></li>
                        </ul>
                    </Col>

                    {/* Columna 3: Contacto */}
                    <Col md={4}>
                        <h6 className="text-white fw-bold mb-3">{t('txt4')}</h6>
                        <ul className="list-unstyled text-secondary">
                            <li className="mb-2"><FontAwesomeIcon icon={faLocation} style={{color: 'rgba(138, 136, 136, 0.72)'}}/> Santa Ana, El Salvador</li>
                            <li className="mb-2"><FontAwesomeIcon icon={faMailBulk} style={{color: 'rgba(138, 136, 136, 0.72)'}}/> davidesau140@gmail.com</li>
                            <li><FontAwesomeIcon icon={faJournalWhills} style={{color: 'rgba(138, 136, 136, 0.72)'}}/> <a href="linkedin.com/in/esaú-torres-516b10306" className="text-secondary text-decoration-none">LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>

                <hr className="my-4 border-secondary" />

                <div className="text-center small">
                    &copy; {currentYear} DT Portafolio. {t('txt5')}.
                </div>
            </Container>
        </footer>
    );
}