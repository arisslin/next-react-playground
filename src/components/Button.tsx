type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ children, onClick }: Readonly<ButtonProps>) {
  return (
    <button
      onClick={onClick}
      className='cursor rounded bg-sky-500 px-3 py-2 text-gray-50 shadow-md active:shadow-none'
    >
      {children}
    </button>
  );
}
