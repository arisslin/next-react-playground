import Heading from '@/components/Heading';

export default function ReactPage(): JSX.Element {
  return (
    <>
      <Heading order={1}>React.js</Heading>
      <p className='container'>
        Here you can find some examples of react.js. They are based on the
        reference on the official{' '}
        <a
          href='https://react.dev/'
          target='_blank'
          className='text-sky-600 underline hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-400'
        >
          React.js website
        </a>
        .
      </p>
    </>
  );
}
