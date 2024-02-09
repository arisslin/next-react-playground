import { TopNavigation } from '@/components/TopNavigation';
import { NavLink } from '@/types';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next React Playground',
};

const topNavLinks: NavLink[] = [
  { href: '/', children: 'Home' },
  { href: '/next', children: 'Next' },
  { href: '/react', children: 'React' },
];

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <TopNavigation links={topNavLinks} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
