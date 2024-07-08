import type { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    onClick: fn(),
    disabled: false,
  },
  argTypes: {
    children: {
      description: 'The text content of the button.',
      type: {
        required: true,
        name: 'other',
        value: 'React.ReactNode',
      },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    onClick: {
      description: 'The click handler of the button.',
      type: {
        required: false,
        name: 'function',
      },
      table: {
        type: { summary: '() => void' },
      },
    },
    disabled: {
      description: 'Whether the button is disabled.',
      type: {
        required: false,
        name: 'boolean',
      },
    },
  },
  parameters: { layout: 'centered' },
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  play: interactWithButton,
};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    disabled: true,
  },
  play: interactWithButton,
};

async function interactWithButton({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) {
  const button = within(canvasElement).getByRole('button');
  await userEvent.click(button);
}
