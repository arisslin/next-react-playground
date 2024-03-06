'use client';

import { useEffect, useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';
import { DarkModeIcon } from './icons/DarkModeIcon';

export function DarkModeToggle(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ToggleSwitch onClick={() => setIsDarkMode(!isDarkMode)}>
      <DarkModeIcon />
    </ToggleSwitch>
  );
}
