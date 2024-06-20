import type { Meta, StoryObj } from '@storybook/react';
import { TypeScriptCodeBlock } from './TypeScriptCodeBlock';

const exampleCode = `function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='counter'>
      <div>
        {count}
      </div>
      <Button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </Button>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
}`;

const meta: Meta<typeof TypeScriptCodeBlock> = {
  title: 'Components/CodeBlock/TypeScriptCodeBlock',
  component: TypeScriptCodeBlock,
  args: {
    children: exampleCode,
  },
  argTypes: {
    children: {
      description: 'The code snippet to display.',
      type: {
        required: true,
        name: 'string',
      },
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TypeScriptCodeBlock>;

export const Default: Story = {};
