type ListProps = {
  children: React.ReactNode;
  ordered?: boolean;
};

function List({ children, ordered }: Readonly<ListProps>): JSX.Element {
  if (ordered) {
    return (
      <ol className='container my-4 list-inside list-decimal'>{children}</ol>
    );
  }
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
