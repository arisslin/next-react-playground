import Heading from '@/components/Heading';
import Paragraph from '@/components/Paragraph';
import { CardLink, CardLinkProps } from '@/components/CardLink';

const cardLinks: CardLinkProps[] = [
  {
    href: '/react',
    title: 'React.js',
    subtext: 'Here you find some React.js examples.',
  },
  {
    href: '/next',
    title: 'Next.js',
    subtext: 'Here you find some Next.js examples.',
  },
];

export default function Home() {
  return (
    <>
      <Heading order={1}>Next React Playground</Heading>
      <Paragraph>
        This website i use for learning Next.js in combination with some other
        web technologies.
      </Paragraph>
      <ul className='container mt-6 grid flex-col flex-wrap gap-4 sm:grid-cols-2'>
        {cardLinks.map((props) => (
          <li key={props.href} className='*:h-full'>
            <CardLink {...props} />
          </li>
        ))}
      </ul>
    </>
  );
}
