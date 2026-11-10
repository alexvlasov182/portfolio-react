import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oleksandr-vlasov.com'),

  title: {
    default: 'Oleksandr Vlasov | QA Automation Engineer',
    template: '%s | Oleksandr Vlasov',
  },

  description:
    'QA Automation Engineer with experience in TestCafe, TypeScript, end-to-end testing and software development. Based in Munich, Germany.',

  keywords: [
    'Oleksandr Vlasov',
    'QA Automation Engineer',
    'Test Automation',
    'TestCafe',
    'TypeScript',
    'E2E Testing',
    'Python',
    'Munich',
    'Germany',
  ],

  authors: [{ name: 'Oleksandr Vlasov' }],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oleksandr-vlasov.com',
    siteName: 'Oleksandr Vlasov Portfolio',
    title: 'Oleksandr Vlasov | QA Automation Engineer',
    description:
      'QA Automation Engineer with experience in TestCafe, TypeScript, E2E testing and software development.',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Oleksandr Vlasov | QA Automation Engineer',
    description:
      'QA Automation Engineer based in Munich, Germany.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <div className="flex justify-center">
          <div className="w-full max-w-layout px-6">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}