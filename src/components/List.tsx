type ListProps = {
  children: React.ReactNode;
};

function List({ children }: Readonly<ListProps>): JSX.Element {
  return <ul className='container my-4 list-inside list-disc'>{children}</ul>;
}

type ItemProps = {
  children: React.ReactNode;
};

function Item({ children }: Readonly<ItemProps>): JSX.Element {
  return <li>{children}</li>;
}

List.Item = Item;

export { List };
