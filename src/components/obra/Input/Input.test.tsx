import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders a native input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders placeholder text', () => {
    render(<Input placeholder="Enter value" />);
    expect(screen.getByPlaceholderText('Enter value')).toBeInTheDocument();
  });

  it('renders with default value', () => {
    render(<Input defaultValue="Hello" />);
    expect(screen.getByDisplayValue('Hello')).toBeInTheDocument();
  });

  it('applies size lg classes', () => {
    const { container } = render(<Input size="lg" />);
    expect(container.firstChild).toHaveClass('min-h-[40px]');
  });

  it('applies size sm classes', () => {
    const { container } = render(<Input size="sm" />);
    expect(container.firstChild).toHaveClass('min-h-[32px]');
  });

  it('applies size xs classes', () => {
    const { container } = render(<Input size="xs" />);
    expect(container.firstChild).toHaveClass('rounded-sm');
  });

  it('applies round roundness', () => {
    const { container } = render(<Input roundness="round" />);
    expect(container.firstChild).toHaveClass('rounded-full');
  });

  it('applies default rounded-lg for default roundness', () => {
    const { container } = render(<Input roundness="default" />);
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('applies error border class when hasError is true', () => {
    const { container } = render(<Input hasError />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('destructive-border');
  });

  it('does not apply error classes when hasError is false', () => {
    const { container } = render(<Input hasError={false} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).not.toContain('destructive-border');
  });

  it('renders disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('applies opacity-50 on the wrapper when disabled', () => {
    const { container } = render(<Input disabled />);
    expect(container.firstChild).toHaveClass('opacity-50');
  });

  it('renders prependText', () => {
    render(<Input prependText="https://" />);
    expect(screen.getByText('https://')).toBeInTheDocument();
  });

  it('renders appendText', () => {
    render(<Input appendText=".com" />);
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  it('renders leftDecoration', () => {
    render(<Input leftDecoration={<span data-testid="left-icon">L</span>} />);
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
  });

  it('renders rightDecoration', () => {
    render(<Input rightDecoration={<span data-testid="right-icon">R</span>} />);
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('applies custom className to the wrapper', () => {
    const { container } = render(<Input className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards ref to the native input', () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement>;
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('passes native input attributes through', () => {
    render(<Input type="email" name="email" data-testid="email-input" />);
    const input = screen.getByTestId('email-input');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
  });
});
