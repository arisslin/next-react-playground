type TextLinkProps = {
  href: string;
  children: string;
  target?: '_blank' | '_self';
};

export function TextLink({
  href,
  children,
  target = '_blank',
}: Readonly<TextLinkProps>): JSX.Element {
  return (
    <a
      href={href}
      target={target}
      className='text-sky-600 underline hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-400'
    >
      {children}
    </a>
  );
}
