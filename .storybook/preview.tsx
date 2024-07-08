import type { Decorator, Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';
import { inter } from '../src/app/layout';
import { withThemeByClassName } from '@storybook/addon-themes';

const decorators: Decorator[] = [
  (Story) => (
    <div className={`${inter.className}`}>
      <Story />
    </div>
  ),
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

const preview: Preview = {
  tags: ['autodocs'],
  decorators,
  parameters: {
    backgrounds: {
      disable: true,
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
