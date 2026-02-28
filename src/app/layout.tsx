import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Oleksandr Vlasov - Software Test Engineer',
  description: 'Portfolio - Oleksandr Vlasov',
  openGraph: {
    type: 'website',
    title: 'Oleksandr Vlasov - Software Test Engineer',
    description: 'Portfolio - Oleksandr Vlasov',
    url: 'https://yourdomain.com',
    siteName: 'Oleksandr Vlasov Portfolio',
  },
  twitter: { card: 'summary_large_image', title: 'Oleksandr Vlasov Portfolio' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
