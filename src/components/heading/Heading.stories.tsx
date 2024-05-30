import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Order1: Story = {
  args: {
    order: 1,
  },
};

export const Order2: Story = {
  args: {
    order: 2,
  },
};

export const Order3: Story = {
  args: {
    order: 3,
  },
};

export const Order4: Story = {
  args: {
    order: 4,
  },
};

export const Order5: Story = {
  args: {
    order: 5,
  },
};

export const Order6: Story = {
  args: {
    order: 6,
  },
};
