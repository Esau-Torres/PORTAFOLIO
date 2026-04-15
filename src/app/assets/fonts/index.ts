import localFont from 'next/font/local';

// Definimos la fuente y sus variantes
export const SpecialGothicExpandedOne = localFont({
    src: [
        {
            path: '../../assets/fonts/SpecialGothicExpandedOne-Regular.ttf',
            weight: '300',
            
            style: 'normal',
        },
        {
            path: '../../assets/fonts/SpecialGothicExpandedOne-Regular.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-SpecialGothicExpandedOne',


});

export const Inter = localFont({
    src: [
        {
            path: '../../assets/fonts/Inter-VariableFont_opsz,wght.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../assets/fonts/Inter-VariableFont_opsz,wght.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-Inter',
});