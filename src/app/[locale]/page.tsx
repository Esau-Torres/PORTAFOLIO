import styles from "./styles/page.module.css";
import style from './styles/layout.module.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLaptopCode, faServer, faRocket, faCode, faDatabase, faCodeCompare, faDesktop } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Certificados from './components/home/Certificados';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="min-vh-100 py-5">

      <section className={styles.bloque1}>
        <Container>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center">
              <h1 className={styles.title}>Bienvenidos a mi Portafolio</h1>
              <span className={styles.desciption}>Este portafolio esta didicado a recorer mis proyectos y habilidades</span>
              <p className={`${styles.content} mt-4`}>
                <strong className="text-white">Sobre mi:</strong> Soy un programador full stack que le apaciona crear soluciones
                digitales robustas y escalables para el sector empresarial ademas soy una persona super curiosa que enfrenta contantemente desafios y retos propuestos
                para mejorar mis hablilidades y pulir mis conocimiento sobre las nuevas tecnologia
              </p>

              <div className={`${styles['btn-space']} d-flex gap-3 mt-4 justify-content-center justify-content-md-start`}>
              <Link href="/es/proyectos" className="text-decoration-none"><button className={`${style['btn-neon-pg']} btn btn-light rounded-3 px-4 fw-bold`}>Ver Proyectos</button></Link>
              <Link href="/es/about" className="text-decoration-none"><button className={`${styles['btn-neon-pg']} btn btn-light rounded-3 px-4`}>Sobre Mí</button></Link>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
              <Image
                src="/images/foto1.png"
                alt="Descripción de la imagen"
                width={500}
                height={300}
                className={`${styles['image-about2']} img-fluid card-img-top`}
                style={{ maxWidth: '400px' }} />
            </div>
          </div>
          <div className={styles.circulo1}></div>
        </Container>
      </section>

      <section className={styles.bloque2}>
        <Container>
          <h1 className={`${styles.title} text-center mb-5 mt-4 fw-bold`} >Mis Habilidades Técnicas</h1>
          <div className="row g-3 g-md-4">

            {/* CARD 1 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faPalette} /></div>
                <h3 className={styles.cardTitle}>Diseño UI/UX</h3>
                <p className={styles.cardText}>Interfaces interactivas y modernas.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faLaptopCode} /></div>
                <h3 className={styles.cardTitle}>Frontend</h3>
                <p className={styles.cardText}>React, Next.js, Angular y animaciones.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faDatabase} /></div>
                <h3 className={styles.cardTitle}>Base de Datos</h3>
                <p className={styles.cardText}>SQL y NoSQL optimizadas.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faServer} /></div>
                <h3 className={styles.cardTitle}>Backend</h3>
                <p className={styles.cardText}>APIs robustas y lógica servidor.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

            {/* Repite la estructura col-6 para el resto de cards... */}
            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faRocket} /></div>
                <h3 className={styles.cardTitle}>SEO</h3>
                <p className={styles.cardText}>Optimización y performance.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faCode} /></div>
                <h3 className={styles.cardTitle}>Lenguajes</h3>
                <p className={styles.cardText}>C#, Java, Python, JS Avanzado.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faCodeCompare} /></div>
                <h3 className={styles.cardTitle}>Frameworks</h3>
                <p className={styles.cardText}>.NET, Spring Boot, NestJS.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <div className={styles.cardCustom}>
                <div className={styles.iconBox}><FontAwesomeIcon icon={faDesktop} /></div>
                <h3 className={styles.cardTitle}>Estilos</h3>
                <p className={styles.cardText}>Bootstrap, Tailwind, Bulma.</p>
                <Link href="/es/proyectos" className={styles.cardLink}>Ver más &rarr;</Link>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <section className={styles.bloque3}>
        <Container>
          <h1 className={`${styles.title} text-center mb-5 mt-4 fw-bold`} >Habilidades blandas</h1>
          <div className="row align-items-center">
            <div className="col-12 col-md-4 order-1 order-md-1 d-flex flex-column justify-content-center gap-3">

              <div className={`${styles.block1} row py-3 border-top border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p className={styles.desciption}>Excelentes habilidades de comunicación y colaboración para trabajar en equipo.</p>
                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p className={styles.desciption}>Capacidad para seguir instrucciones y resolver problemas de forma independiente.</p>
                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p className={styles.desciption}>Manejar la frustración y asegurar la calidad del código.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 order-2 order-md-2 d-flex justify-content-center align-items-center">
              <Image
                src="/images/bloque3.png"
                alt="Foto de perfil"
                width={900}
                height={900}
                className={styles.imageContent}
                priority
              />
            </div>

            {/* COLUMNA DERECHA */}
            <div className="col-12 col-md-4 order-3 order-md-3 d-flex flex-column justify-content-center gap-3">
              <div className={`${styles.block1} row py-3 border-top border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p className={styles.desciption}>Resolución de problemas complejos y desarrollar soluciones eficientes.</p>
                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p className={styles.desciption}>Ajustarse rápidamente a nuevas tecnologías y cambios en los requisitos.</p>
                </div>
              </div>
              <div className={`${styles.block1} row py-3 border-bottom border-secondary-subtle`}>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <p className={styles.desciption}>Tomo la iniciativa y ayudo a mi equipo en problemas del proyectos.</p>
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
