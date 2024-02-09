'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export type TopNavLink = Readonly<{
  href: string;
  children: React.ReactNode;
}>;

type TopNavigationProps = Readonly<{ links: TopNavLink[] }>;

export function TopNavigation({ links }: TopNavigationProps): JSX.Element {
  return (
    <nav className='border-b border-gray-200 bg-gray-50 px-4 py-2 text-gray-950'>
      <ul className='flex gap-4'>
        {links.map((link) => (
          <Item key={link.href} href={link.href}>
            {link.children}
          </Item>
        ))}
      </ul>
    </nav>
  );
}

function Item({ href, children }: TopNavLink): JSX.Element {
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
