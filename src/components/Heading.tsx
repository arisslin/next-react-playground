type HeadingProps = {
  order: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

export default function Heading({
  order,
  children,
}: Readonly<HeadingProps>): JSX.Element | null {
  const commonClassName = 'container font-bold';

  const headings = {
    1: (
      <h1
        data-after=''
        className={`${commonClassName} my-9 text-4xl after:mt-2 after:block after:h-px after:w-full after:bg-gray-300 after:content-[attr(data-after)] dark:after:bg-slate-500 md:my-12 md:text-5xl `}
      >
        {children}
      </h1>
    ),
    2: (
      <h2 className={`${commonClassName} my-7 text-3xl md:my-9 md:text-4xl`}>
        {children}
      </h2>
    ),
    3: (
      <h3 className={`${commonClassName} my-6 text-2xl md:my-7 md:text-3xl`}>
        {children}
      </h3>
    ),
    4: (
      <h4 className={`${commonClassName} my-5 text-xl md:my-6 md:text-2xl`}>
        {children}
      </h4>
    ),
    5: (
      <h5 className={`${commonClassName} my-5 text-lg md:text-xl`}>
        {children}
      </h5>
    ),
    6: (
      <h6 className={`${commonClassName} my-4 md:my-5 md:text-lg`}>
        {children}
      </h6>
    ),
  };

  return headings[order] ?? null;
}
