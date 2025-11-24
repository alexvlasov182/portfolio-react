import './globals.css';
import { Inter, Geist } from 'next/font/google';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });
const geist = Geist({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geist.className}`}>
        <div className="flex justify-center">
          <div className="w-full max-w-[1280px]">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
