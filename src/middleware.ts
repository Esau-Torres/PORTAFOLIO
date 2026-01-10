import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // Lista de idiomas soportados
    locales: ['en', 'es'],

    // Idioma por defecto si no detecta ninguno
    defaultLocale: 'en'
});

export const config = {
    // Configuración para que el middleware no interfiera con archivos internos (_next), imagenes, etc.
    matcher: ['/', '/(es|en)/:path*']
};