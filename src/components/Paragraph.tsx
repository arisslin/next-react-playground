export default function Paragraph({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <p className='container my-4'>{children}</p>;
}
