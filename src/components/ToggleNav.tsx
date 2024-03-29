'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuButton } from './MenuButton';
import { useOutsideClick } from '@/utils/hooks';
import { NavLink } from '@/types';
import { useState } from 'react';

export function ToggleNav({
  links,
}: Readonly<{ links: NavLink[] }>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));
  const openClassName = isOpen ? '' : 'hidden';

  return (
    <nav className='relative' ref={ref}>
      <MenuButton onClick={() => setIsOpen(!isOpen)} className='lg:hidden' />
      <ul
        className={`absolute left-0 w-screen bg-gray-200 dark:bg-gray-500 lg:static lg:flex lg:w-fit lg:bg-transparent dark:lg:bg-transparent ${openClassName}`}
      >
        {links.map((link) => (
          <Item
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.children}
          </Item>
        ))}
      </ul>
    </nav>
  );
}

type ItemProps = { onClick?: () => void } & NavLink;

function Item({ href, children, onClick }: Readonly<ItemProps>): JSX.Element {
  const pathname = usePathname();
  const isActive = pathname === href;
  const activeClassname = isActive ? 'bg-gray-300 dark:bg-gray-400' : '';

  return (
    <li>
      <Link
        href={href}
        className={`block px-4 py-2 hover:bg-sky-200 dark:hover:bg-sky-500 ${activeClassname}`}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
}
