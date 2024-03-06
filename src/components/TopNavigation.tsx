'use client';

import { NavLink } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import { MenuButton } from './MenuButton';

export function TopNavigation({
  links,
}: Readonly<{ links: NavLink[] }>): JSX.Element {
  return (
    <nav className='border-b border-gray-200 bg-gray-50 text-gray-950 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-50'>
      <div className='mx-auto flex max-w-screen-lg flex-nowrap justify-between pr-4 lg:pl-4'>
        <ToggleNav links={links} />
        <DarkModeToggle />
      </div>
    </nav>
  );
}

function ToggleNav({ links }: Readonly<{ links: NavLink[] }>): JSX.Element {
  const [isOpen, setIsOpen] = React.useState(false);
  const openClassName = isOpen ? '' : 'hidden';
  return (
    <nav className='relative'>
      <MenuButton onClick={() => setIsOpen(!isOpen)} className='lg:hidden' />
      <ul
        className={`absolute left-0 w-screen bg-gray-200 lg:static lg:flex lg:w-fit lg:bg-transparent ${openClassName}`}
      >
        {links.map((link) => (
          <Item key={link.href} href={link.href}>
            {link.children}
          </Item>
        ))}
      </ul>
    </nav>
  );
}

function Item({ href, children }: Readonly<NavLink>): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClassname = isActive ? 'bg-gray-300' : '';

  return (
    <li>
      <Link
        href={href}
        className={`block px-4 py-2 hover:bg-sky-200 ${activeClassname}`}
      >
        {children}
      </Link>
    </li>
  );
}
