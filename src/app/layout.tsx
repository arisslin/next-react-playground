import { Header } from '@/components/Header';
import { NavLink } from '@/types';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next React Playground',
};

const topNavLinks: NavLink[] = [
  { href: '/', children: 'Home' },
  { href: '/react', children: 'React' },
  { href: '/next', children: 'Next' },
];

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <Header links={topNavLinks} />
        <main>{children}</main>
      </body>
    </html>
  );
}
