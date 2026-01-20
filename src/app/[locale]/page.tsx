'use client';
import styles from "./styles/page.module.css";
import style from './styles/layout.module.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLaptopCode, faServer, faRocket, faCode, faDatabase, faCodeCompare, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Certificados from './components/home/Certificados';
import Link from 'next/link';
import { useTranslations, useLocale } from 'use-intl';
import { motion } from "framer-motion"; // Importa motion desde framer-motion (annimaciones)

import StaggerContainer, { cardVariants } from './components/animation/StaggerContainer';
import AnimatedButton from './components/animation/AnimatedButton';

import AscendWords from './components/animation/AscendWords';
import ShiftWords from './components/animation/ShiftWords';
import Reveal from './components/animation/Reveal';

export default function Home() {
  const t = useTranslations('home');
  const locale = useLocale();
  return (
    <main className="min-vh-100 py-5">

      <section className={styles.bloque1}>
        <Container>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center">

              <AscendWords text={t('ttl1')} className={styles.title} />

              <ShiftWords text={t('txt1')} className={styles.desciption} delay={0.5} />

              <Reveal delay={0.9}>
                <p className={`${styles.content} mt-4`}>
                  <strong className="text-white"> {t('txt2')} </strong> {t('txt3')}
                </p>
              </Reveal>

              <div className={`${styles['btn-space']} d-flex gap-3 mt-4 justify-content-center justify-content-md-start`}>
                <Link href={`/${locale}/proyectos`} className="text-decoration-none">
                  <AnimatedButton className={`${style['btn-neon-pg']} btn btn-black rounded-3 px-4 fw-bold`} delay={1} onClick={() => { }}>
                    {t('txt4')}
                  </AnimatedButton>
                </Link>

                <Link href={`/${locale}/about`} className="text-decoration-none">
                  <AnimatedButton className={`${style['btn-neon-pg']} btn btn-light rounded-3 text-black px-4`} delay={1.1} onClick={() => { }}>
                    {t('txt5')}
                  </AnimatedButton>
                </Link>
              </div>
            </div>
            <motion.div
              className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, type: "spring" }}>
              <div className={styles['image-mask-container']}>
                <Image
                  src="/images/foto01.png"
                  alt="Descripción de la imagen"
                  width={500}
                  height={300}
                  className={`${styles['image-one']} img-fluid w-100`} />
              </div>
            </motion.div>
          </div>
          <div className={styles.circulo1}></div>
        </Container>
      </section>

      <section className={styles.bloque2}>
        <Container>
          <AscendWords text={t('ttl2')} className={`${styles.title} text-center justify-content-center mb-5 mt-4 fw-bold`} />


          <StaggerContainer className="row g-3 g-md-4">

            {/* CARD 1 */}
            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faPalette} /></div>
                <h3 className={styles.cardTitle}> {t('ttl3')} </h3>
                <p className={styles.cardText}>{t('txt6')}</p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}> {t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faLaptopCode} /></div>
                <h3 className={styles.cardTitle}>Frontend</h3>
                <p className={styles.cardText}>{t('txt8')}</p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}>{t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faDatabase} /></div>
                <h3 className={styles.cardTitle}>{t('ttl4')}</h3>
                <p className={styles.cardText}>{t('txt9')}</p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}>{t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

            {/* CARD 4 */}
            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faServer} /></div>
                <h3 className={styles.cardTitle}>Backend</h3>
                <p className={styles.cardText}> {t('txt10')} </p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}>{t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

            {/* Repite la estructura col-6 para el resto de cards... */}
            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faRocket} /></div>
                <h3 className={styles.cardTitle}>SEO</h3>
                <p className={styles.cardText}>{t('txt11')}</p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}>{t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faCode} /></div>
                <h3 className={styles.cardTitle}> {t('ttl5')} </h3>
                <p className={styles.cardText}> {t('txt12')} </p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}>{t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faCodeCompare} /></div>
                <h3 className={styles.cardTitle}>Frameworks</h3>
                <p className={styles.cardText}>.NET, Spring Boot, NestJS.</p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}>{t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

            <motion.div className="col-6 col-md-6 col-lg-3" variants={cardVariants}>
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faDesktop} /></div>
                <h3 className={styles.cardTitle}>{t('ttl6')}</h3>
                <p className={styles.cardText}>Bootstrap, Tailwind, Bulma.</p>
                <Link href={`/${locale}/proyectos`} className={styles.cardLink}>{t('txt7')} &rarr;</Link>
              </div>
            </motion.div>

          </StaggerContainer>
        </Container>
      </section>

      <section className={styles.bloque3}>
        <Container>

          <AscendWords text={t('ttl7')} className={`${styles.title} justify-content-center mb-5  fw-bold`} />

          <div className="row align-items-center">
            <div className="col-12 col-md-4 order-1 order-md-1 d-flex flex-column justify-content-center gap-3">

              <div className={`${styles.block1} row py-3 border-top border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                  <ShiftWords text={t('txt13')} className={styles.desciption} delay={0.2} />
                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                  <ShiftWords text={t('txt14')} className={styles.desciption} delay={0.4} />

                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">

                  <ShiftWords text={t('txt15')} className={styles.desciption} delay={0.6} />

                </div>
              </div>
            </div>

            <motion.div
              className="col-12 col-md-4 order-2 order-md-2 d-flex justify-content-center align-items-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, type: "spring", ease: "easeInOut" }}>

              <Image
                src="/images/bloque3.png"
                alt="Foto de perfil"
                width={900}
                height={900}
                className={styles.imageContent}
                priority />
            </motion.div>

            {/* COLUMNA DERECHA */}
            <div className="col-12 col-md-4 order-3 order-md-3 d-flex flex-column justify-content-center gap-3">
              <div className={`${styles.block1} row py-3 border-top border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <ShiftWords text={t('txt16')} className={styles.desciption} delay={0.2} />
                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <ShiftWords text={t('txt17')} className={styles.desciption} delay={0.4} />
                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <ShiftWords text={t('txt18')} className={styles.desciption} delay={0.6} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* bloque 4*/}
      <Certificados />
    </main>
  );
}
