import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { inter } from '../src/app/layout';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${inter.className}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
