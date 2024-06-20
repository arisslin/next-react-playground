type ListProps = {
  children: React.ReactNode;
  ordered?: boolean;
};

function List({ children, ordered }: Readonly<ListProps>): JSX.Element {
  const commonClassName =
    'container my-4 list-inside text-gray-950 dark:text-gray-50';

  if (ordered) {
    return <ol className={`${commonClassName} list-decimal`}>{children}</ol>;
  }
  return <ul className={`${commonClassName} list-disc`}>{children}</ul>;
}

type ItemProps = {
  children: React.ReactNode;
};

function Item({ children }: Readonly<ItemProps>): JSX.Element {
  return <li>{children}</li>;
}

List.Item = Item;

export { List };
