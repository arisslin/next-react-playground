import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/app/globals.css';
import { inter } from '../src/app/layout';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${inter.className}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
