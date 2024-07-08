import { TextLink } from '@/components/links/TextLink';
import { render, screen } from '@testing-library/react';

describe(TextLink.name, () => {
  const props: React.ComponentProps<typeof TextLink> = {
    href: '/example',
    children: 'Example',
  };

  it('should render children', () => {
    render(<TextLink {...props} />);
    expect(
      screen.getByRole('link', { name: props.children })
    ).toBeInTheDocument();
  });

  it('should render an internal link', () => {
    render(<TextLink {...props} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', props.href);
  });

  it('should render an external link', () => {
    render(<TextLink {...props} href='https://example.com' />);
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://example.com'
    );
  });

  it('should render an external link with target _self', () => {
    render(<TextLink {...props} href='https://example.com' target='_self' />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
  });

  it('should render an external link with default target _blank', () => {
    render(<TextLink {...props} href='https://example.com' />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });
});
