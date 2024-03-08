import Heading from '@/components/Heading';
import { TextLink } from '@/components/links/TextLink';

export default function ReactPage(): JSX.Element {
  return (
    <>
      <Heading order={1}>React.js</Heading>
      <p className='container'>
        Here you can find some examples of react.js. They are based on the
        reference on the official{' '}
        <TextLink href='https://react.dev/'>React.js website</TextLink>.
      </p>
    </>
  );
}
