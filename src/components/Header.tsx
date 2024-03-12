import { NavLink } from '@/types';
import React from 'react';
import { DarkModeToggle } from './DarkModeToggle';
import { ToggleNav } from './ToggleNav';

export function Header({ links }: Readonly<{ links: NavLink[] }>): JSX.Element {
  return (
    <header className='sticky top-0 border-b border-gray-200 bg-gray-50 text-gray-950 dark:border-gray-600 dark:bg-slate-800 dark:text-gray-50'>
      <div className='mx-auto flex max-w-screen-lg flex-nowrap justify-between pr-4 lg:pl-4'>
        <ToggleNav links={links} />
        <DarkModeToggle />
      </div>
    </header>
  );
}
