import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '@/app/[locale]/styles/globals.css';

import Header from '@/app/[locale]/components/layout/Header'; 
import Footer from '@/app/[locale]/components/layout/Footer';

/* font awesome */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio profesional",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {

  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
            {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}