'use client';

import { NavLink } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ToggleSwitch } from './ToggleSwitch';

export function TopNavigation({
  links,
}: Readonly<{ links: NavLink[] }>): JSX.Element {
  return (
    <nav className='border-b border-gray-200 bg-gray-50 px-4 py-2 text-gray-950'>
      <div className='mx-auto flex max-w-screen-lg flex-nowrap justify-between'>
        <ul className='flex gap-4'>
          {links.map((link) => (
            <Item key={link.href} href={link.href}>
              {link.children}
            </Item>
          ))}
        </ul>
        <ToggleSwitch></ToggleSwitch>
      </div>
    </nav>
  );
}

function Item({ href, children }: Readonly<NavLink>): JSX.Element {
  const pathname = usePathname();
  const activeClassName =
    pathname === href
      ? 'text-sky-800 underline decoration-2 underline-offset-2'
      : '';

  return (
    <li>
      <Link href={href} className={`hover:text-sky-800 ${activeClassName}`}>
        {children}
      </Link>
    </li>
  );
}
