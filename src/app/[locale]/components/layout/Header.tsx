'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import LanguageSwitcher from './LanguageSwitcher';
import style from '../../styles/layout.module.css';
import { useRef } from 'react';

export default function Header() {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    const navbarCollapseRef = useRef<HTMLDivElement>(null);
    const navbarTogglerRef = useRef<HTMLButtonElement>(null);

   const closeMenu = () => {
        if (navbarCollapseRef.current && navbarTogglerRef.current) {
            if (navbarCollapseRef.current.classList.contains('show')) {
                navbarTogglerRef.current.click();
            }
        }
    };

    return (
        <Navbar expand="lg" className={`${style['navbar-nav']} py-3 shadow-sm`} data-bs-theme="dark" style={{ backgroundColor: '#0B0F19' }}>
            <Container>
                {/* BRAND */}
                <Navbar.Brand
                    href={`/${locale}`}className={`${style['brand-email']} ${style.animate} text-light z-3 position-relative`}>
                    {"davidesau140@gmail.com".split("").map((char, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                            {char}
                        </span>
                    ))}
                </Navbar.Brand>

                {/* TOGGLE */}
                <Navbar.Toggle ref={navbarTogglerRef} aria-controls="basic-navbar-nav" className="border-0 focus-ring-0 z-3"/>

                {/* COLLAPSE */}
                <Navbar.Collapse ref={navbarCollapseRef} id="basic-navbar-nav">

                    <button className={style['menu-close-btn']} onClick={closeMenu} aria-label="Cerrar menú"></button>

                    <Nav className="ms-auto gap-4 align-items-center text-center w-100 justify-content-end">
                        <Nav.Link 
                            href={`/${locale}`} className={`${style.navlink} px-0 text-white`} onClick={closeMenu}>{t('home')}
                        </Nav.Link>
                        <Nav.Link 
                            href={`/${locale}/about`} className={`${style.navlink} px-0 text-white`} onClick={closeMenu}>{t('about')}</Nav.Link>
                        <Nav.Link 
                            href={`/${locale}/proyectos`} className={`${style.navlink} px-0 text-white`} onClick={closeMenu}> {t('projects')}
                        </Nav.Link>
                    </Nav>

                    {/* SEPARADOR VISUAL */}
                    <div className="nav-separator d-lg-none"></div>

                    {/* ACTIONS */}
                    <div className={`${style['actions-container']} ms-lg-4 d-flex flex-column-reverse flex-lg-row align-items-center gap-4 mt-5 mt-lg-0`}>
                        <LanguageSwitcher onLanguageSelect={closeMenu} />
                        
                        <Button 
                            className={`${style['btn-neon-pg']} rounded-pill px-4 py-2 py-lg-2 `} onClick={closeMenu}>
                            {t('download_cv')}
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}