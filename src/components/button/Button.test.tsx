import { Button } from '@/components/button/Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe(Button.name, () => {
  const text = 'Click me';

  it('should render children', () => {
    render(<Button>{text}</Button>);
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
  });

  it('should call onClick', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={onClick}>{text}</Button>);

    await user.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalled();
  });

  it('should be disabled', () => {
    render(<Button disabled>{text}</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should not call onClick when disabled', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <Button onClick={onClick} disabled>
        {text}
      </Button>
    );

    await user.click(screen.getByRole('button'));

    expect(onClick).not.toHaveBeenCalled();
  });
});
