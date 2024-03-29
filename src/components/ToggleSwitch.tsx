type ToggleSwitchProps = Readonly<{
  children?: React.ReactNode;
  onClick?: () => void;
}>;

export function ToggleSwitch({ children, onClick }: ToggleSwitchProps) {
  return (
    <label className='flex cursor-pointer	items-center gap-0.5'>
      <span>{children}</span>
      <input
        type='checkbox'
        onClick={onClick}
        className='peer h-0 w-0 opacity-0'
      />
      <div
        data-before=''
        className='relative h-6 w-10 rounded-full bg-slate-400 duration-500 before:absolute before:bottom-0.5 before:left-0.5 before:h-5 before:w-5 before:rounded-full before:bg-slate-50 before:duration-500 before:content-[attr(data-before)] peer-checked:bg-sky-500 peer-checked:before:translate-x-4'
      />
    </label>
  );
}
