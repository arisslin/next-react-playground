type ButtonProps = Readonly<{
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}>;

export function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className='cursor rounded bg-sky-500 px-3 py-2 text-gray-50 shadow-md active:shadow-none disabled:bg-gray-400 disabled:shadow-none'
      disabled={disabled}
    >
      {children}
    </button>
  );
}
