'use client';

import { Button } from '@/components/Button';
import Heading from '@/components/Heading';
import { useState } from 'react';
import { CodeBlock } from '@/components/codeblock/TypeScriptCodeBlock';
import Paragraph from '@/components/Paragraph';
import { TextLink } from '@/components/links/TextLink';
import { InlineCode } from '@/components/InlineCode';
import { List } from '@/components/List';

const codeCounter = `function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='m-auto grid w-36 grid-cols-2 grid-rows-2 gap-4 rounded bg-slate-600 p-4 text-2xl shadow-md dark:bg-slate-300'>
      <div className='col-span-2 flex items-center justify-center font-bold text-gray-50 dark:text-gray-950'>
        {count}
      </div>
      <Button onClick={decrement} disabled={count === 0}>
        -
      </Button>
      <Button onClick={increment}>+</Button>
    </div>
  );

  function decrement(): void {
    setCount(count - 1);
  }

  function increment(): void {
  setCount(count + 1);
  }
}`;

const codeUseState = 'const [state, setState] = useState<T>(initialState);';

const codeParameters = `function Component() {
  const [counter, setCounter] = useState<number>(0);
  const [user, setUser] = useState<User | undefined>(initialState);
  const [state, setState] = useState<string[]>(() => createTodos());
  ...
}`;

export default function UseStatePage(): JSX.Element {
  return (
    <>
      <Heading order={1}>useState</Heading>
      <Paragraph>
        With the <b>useState</b> Hook a state variable can get added to a
        component.
      </Paragraph>
      <CodeBlock>{codeUseState}</CodeBlock>
      <Heading order={2}>Reference</Heading>
      <Paragraph>
        The hook should get called at the top level of a component. With array
        destructuring the state variables get created like{' '}
        <InlineCode>[state, setState]</InlineCode>.
      </Paragraph>
      <CodeBlock>{codeParameters}</CodeBlock>
      <Heading order={3}>Parameters</Heading>
      <Paragraph>
        It takes an <b>initial state</b> as parameter. This can take a value of
        any type. If a function is passed, it will be handled as initializer
        function. This function has to be pure, should take no arguments and
        should return a value of any type. The initializer function only get
        {"'"}s called when the component is initialized. Then it{"'"}s return
        value is stored as state.
      </Paragraph>
      <Paragraph>
        The state value can get typed via generics. More information about
        generics can be found{' '}
        <TextLink href='https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types'>
          here
        </TextLink>
        .
      </Paragraph>
      <Heading order={3}>Returns</Heading>
      <Paragraph>The hook returns an array with exactly two values:</Paragraph>
      <List ordered>
        <List.Item>
          The <b>current state</b>. During the first render, it will match the{' '}
          <i>initialState</i>.
        </List.Item>
        <List.Item>
          The <b>set function</b>. It updates the state to a different value and
          triggers a re-render.
        </List.Item>
      </List>
      <Heading order={3}>Caveats</Heading>
      <Paragraph>
        <b>useState</b> is a Hook, so it can only get called at the top level of
        a component or other own Hooks. It can’t get called inside loops or
        conditions. If that is needed, extract a new component and move the
        state into it.
      </Paragraph>
      <Paragraph>
        In Strict Mode, React will call the initializer function twice in order
        to{' '}
        {
          <TextLink href='https://react.dev/reference/react/useState#my-initializer-or-updater-function-runs-twice'>
            help to find accidental impurities
          </TextLink>
        }
        . This is development-only behavior and does not affect production. If
        the initializer function is pure (as it should be), this should not
        affect the behavior. The result from one of the calls will be ignored.
      </Paragraph>
      <Heading order={2}>Ressources</Heading>
      <Paragraph>
        All informations are from{' '}
        {
          <TextLink href='https://react.dev/reference/react/useState'>
            this page
          </TextLink>
        }
        . For more details visit the official React documentation.
      </Paragraph>
      <Heading order={2}>Example</Heading>
      <section className='container'>
        <Counter />
      </section>
      <CodeBlock>{codeCounter}</CodeBlock>
    </>
  );
}

function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className='m-auto grid w-36 grid-cols-2 grid-rows-2 gap-4 rounded bg-slate-600 p-4 text-2xl shadow-md dark:bg-slate-300'>
      <div className='col-span-2 flex items-center justify-center font-bold text-gray-50 dark:text-gray-950'>
        {count}
      </div>
      <Button onClick={decrement} disabled={count === 0}>
        -
      </Button>
      <Button onClick={increment}>+</Button>
    </div>
  );

  function decrement(): void {
    setCount(count - 1);
  }

  function increment(): void {
    setCount(count + 1);
  }
}
