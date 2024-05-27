export default function Paragraph({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <p className='container my-4 text-gray-950 dark:text-gray-50'>{children}</p>
  );
}
