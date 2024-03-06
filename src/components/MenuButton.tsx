type MenuButtonProps = {
  onClick: () => void;
  className?: string;
};

export function MenuButton({
  onClick,
  className,
}: Readonly<MenuButtonProps>): JSX.Element {
  return (
    <button
      className={`p-4 hover:bg-sky-200 dark:hover:bg-sky-500${className ? ' ' + className : ''}`}
      onClick={onClick}
    >
      <div className='h-0.5 w-4 bg-gray-950 dark:bg-slate-50'></div>
      <div className='my-0.5 h-0.5 w-4 bg-gray-950 dark:bg-slate-50'></div>
      <div className='h-0.5 w-4 bg-gray-950 dark:bg-slate-50'></div>
    </button>
  );
}
