import Heading from '@/components/Heading';
import { List } from '@/components/List';
import Paragraph from '@/components/Paragraph';
import { TextLink } from '@/components/links/TextLink';
import Head from 'next/head';

export default function ReactPage(): JSX.Element {
  return (
    <>
      <Heading order={1}>React</Heading>
      <Paragraph>
        Here you can find some examples of react.js. They are based on the
        reference on the official{' '}
        <TextLink href='https://react.dev/'>React.js website</TextLink>.
      </Paragraph>
      <Heading order={2}>Hooks</Heading>
      <Paragraph>
        With <i>Hooks</i> you can use different <i>React</i> features in your
        components.
      </Paragraph>
      <Heading order={3}>State Hooks</Heading>
      <Paragraph>
        A state hook is used to manage the state of a component. It is used to
        store data that can change over time. For example a counter or a form
        input.
      </Paragraph>
      <Paragraph>
        Following Hooks are used to manage the state of a component:
      </Paragraph>
      <List>
        <List.Item>useState</List.Item>
        <List.Item>useReducer</List.Item>
      </List>
    </>
  );
}
