import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNavigation from '@/components/TopNavigation';

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next React Playground',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <TopNavigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
