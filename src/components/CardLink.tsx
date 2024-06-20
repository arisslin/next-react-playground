import Link from 'next/link';
import Paragraph from './Paragraph';

export type CardLinkProps = { href: string; title: string; subtext?: string };

export function CardLink({ href, title, subtext }: Readonly<CardLinkProps>) {
  return (
    <Link
      href={href}
      className='group block rounded-md border border-slate-500 p-4 hover:bg-slate-500 dark:border-slate-700 dark:bg-slate-700 dark:hover:border-slate-400 dark:hover:bg-slate-500'
    >
      <h4 className='text-lg font-bold text-sky-700 group-hover:text-sky-300 dark:text-sky-200'>
        {title}
      </h4>
      {subtext ? (
        <Paragraph
          optionalClassName='group-hover:text-gray-50'
          hasContainer={false}
        >
          {subtext}
        </Paragraph>
      ) : null}
    </Link>
  );
}
