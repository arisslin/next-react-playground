type InlineCodeProps = {
  children: React.ReactNode;
};

export function InlineCode({
  children,
}: Readonly<InlineCodeProps>): JSX.Element {
  return (
    <code className='bg-gray-200 text-gray-950 dark:bg-gray-800 dark:text-gray-50'>
      {children}
    </code>
  );
}
