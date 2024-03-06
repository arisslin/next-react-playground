'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuButton } from './MenuButton';
import { useState } from 'react';
import { NavLink } from '@/types';

export function ToggleNav({
  links,
}: Readonly<{ links: NavLink[] }>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
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
