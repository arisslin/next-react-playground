import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';
import { inter } from '../src/app/layout';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className={`${inter.className}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      toc: true,
    },
  },
};

export default preview;
