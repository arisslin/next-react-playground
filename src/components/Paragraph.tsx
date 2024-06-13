import classNames from 'classnames';

type ParagraphProps = Readonly<{
  children: React.ReactNode;
  optionalClassName?: string;
  hasContainer?: boolean;
}>;

export default function Paragraph({
  children,
  optionalClassName,
  hasContainer = true,
}: ParagraphProps): JSX.Element {
  const className = classNames(
    { container: hasContainer, 'my-4': hasContainer },
    'text-gray-950 dark:text-gray-50',
    optionalClassName
  );
  return <p className={className}>{children}</p>;
}
