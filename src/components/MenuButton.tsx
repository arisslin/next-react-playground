type MenuButtonProps = {
  onClick: () => void;
};

export function MenuButton({
  onClick,
}: Readonly<MenuButtonProps>): JSX.Element {
  return (
    <button className='p-4 hover:bg-sky-200' onClick={onClick}>
      <div className='h-0.5 w-4 bg-gray-950'></div>
      <div className='my-0.5 h-0.5 w-4 bg-gray-950'></div>
      <div className='h-0.5 w-4 bg-gray-950'></div>
    </button>
  );
}