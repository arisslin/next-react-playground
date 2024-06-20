import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from './TextLink';

const meta: Meta<typeof TextLink> = {
  title: 'Components/Links/TextLink',
  component: TextLink,
  args: {
    children: 'Example',
    target: '_blank',
  },
  argTypes: {
    href: {
      description: 'The URL to link to.',
      type: {
        required: true,
        name: 'string',
      },
    },
    children: {
      description: 'The text content of the link.',
      type: {
        required: true,
        name: 'string',
      },
    },
    target: {
      description: 'The HTML anchor target attribute of the link.',
      type: {
        required: false,
        name: 'string',
      },
      control: {
        type: 'radio',
      },
      options: ['_blank', '_self'],
      table: {
        type: { summary: '_blank | _self' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextLink>;

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
  },
};

export const InternalLink: Story = {
  args: {
    href: '/example/',
  },
};
