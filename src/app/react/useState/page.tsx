'use client';

import { Button } from '@/components/Button';
import Heading from '@/components/Heading';
import { useState } from 'react';

export default function UseStatePage() {
  return (
    <>
      <Heading order={1}>useState</Heading>
      <section className='container'>
        <Counter />
      </section>
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

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }
}
