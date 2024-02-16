export function ToggleSwitch({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <label className='flex items-center	gap-1'>
      <span>{children}</span>
      <input type='checkbox' className='peer h-0 w-0 opacity-0' />
      <div
        data-before=''
        className='relative h-6 w-10 cursor-pointer rounded-full bg-slate-400 duration-500 before:absolute before:bottom-0.5 before:left-0.5 before:h-5 before:w-5 before:rounded-full before:bg-slate-50 before:duration-500 before:content-[attr(data-before)] peer-checked:bg-sky-600 peer-checked:before:translate-x-4'
      />
    </label>
  );
}
