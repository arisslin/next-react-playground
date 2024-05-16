type InlineCodeProps = {
  children: React.ReactNode;
};

export function InlineCode({
  children,
}: Readonly<InlineCodeProps>): JSX.Element {
  return <code className='bg-gray-200 dark:bg-gray-800'>{children}</code>;
}
