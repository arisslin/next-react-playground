import Link from 'next/link';

type TextLinkProps = {
  href: string;
  children: string;
  target?: '_blank' | '_self';
};

export function TextLink({
  href,
  children,
  target = '_blank',
}: Readonly<TextLinkProps>): JSX.Element | null {
  const className =
    'text-sky-600 underline hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-400';

  if (href.startsWith('http') || href.startsWith('https')) {
    return (
      <a href={href} target={target} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
