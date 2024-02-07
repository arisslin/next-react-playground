type ReactLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function ReactLayout({ children }: ReactLayoutProps) {
  return <>{children}</>;
}
