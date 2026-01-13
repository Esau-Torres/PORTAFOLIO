'use client';
import styles from "../styles/About.module.css";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

export default function About() {
    const t = useTranslations('about');
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
                        <div className={`col-12 col-md-6 ${styles.separatorColumn}`}>

                            <div className="mb-1">
                                <h1 className={`${styles.title} mb-4 fw-bold`}>{t('ttl1')}</h1>
                                <p className={`${styles.parrafo}`}>
                                    {t('txt1')}
                                </p>
                            </div>

                            <div className="mb-1">
                                <h1 className={`${styles.title} mb-4 fw-bold`}>{t('ttl2')}</h1>
                                <p className={`${styles.parrafo}`}>
                                    {t('txt2')}
                                </p>
                            </div>
                            <div className="mb-1">
                                <h1 className={`${styles.title} mb-4 fw-bold`}>{t('ttl3')}</h1>
                                <div className="d-flex flex-column">
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
                                        {t('txt7')} <a href="https://tkiero.app/" rel="noreferrer" style={{color: '#a1a1a0'}}>Tkiero App</a> <br /><br />
                                        {t('txt8')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column justify-content-start ps-md-5">

                            <h1 className={`${styles.title} mb-4 fw-bold`}>{t('ttl4')}</h1>
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

                            <h1 className={`${styles.title} mb-4 mt-4 fw-bold`}>{t('ttl5')}</h1>
                            <div className={styles.containerTags}>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>{t('txt9')}</span>
                                </div>
                                <div className={styles.tags}>
                                    <span className={styles.tagtext}>{t('txt10')}</span>
                                </div>
                            </div>

                            <h1 className={`${styles.title} mb-4 mt-4 fw-bold`}>{t('ttl6')}</h1>

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