'use client';

import { usePathname, useRouter } from 'next/navigation';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslations } from 'next-intl';
import style from '../../styles/layout.module.css';

export default function LanguageSwitcher({ onLanguageSelect }: { onLanguageSelect?: (locale: string) => void }) {
    const t = useTranslations('Navbar');
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        const pathParts = pathname.split('/');
        pathParts[1] = newLocale;
        const newPath = pathParts.join('/');

        router.push(newPath);
        router.refresh();

        if (onLanguageSelect) {
            onLanguageSelect(newLocale);
        }
    };

    return (
        <NavDropdown title={t('txt1')} id="language-nav-dropdown" menuVariant="dark" className={style['scale-on-hover']}>
            <NavDropdown.Item onClick={() => handleLanguageChange('en')}>
                English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLanguageChange('es')}>
                Español
            </NavDropdown.Item>
        </NavDropdown>
    );
}