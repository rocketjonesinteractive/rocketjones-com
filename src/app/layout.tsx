import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import { Header } from '@/components/ui/organisms/Header/Header';
import Script from 'next/script';
import { ProjectHeader } from '@/components/ui/organisms/Header/ProjectHeader.tsx';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Rocket Jones: Custom Application Development',
  description:
    'Rocket Jones has more than 22 years of experience providing custom software solutions. We are committed to communication, quality, and honesty.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
        :root {
          --font-roboto: ${roboto.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
        }`,
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=UA-5947153-1" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', 'UA-5947153-1');
          `}
        </Script>
      </head>
      <body className={`overflow-x-hidden bg-white text-grey ${roboto.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
