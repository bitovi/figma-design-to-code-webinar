import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Trash2 } from 'lucide-react';
import { IconButton } from './IconButton';

const icon = <Trash2 data-testid="icon" />;

describe('IconButton', () => {
  it('renders without error with default props', () => {
    render(<IconButton icon={icon} aria-label="Delete" />);
    expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });

  it('applies the aria-label to the button', () => {
    render(<IconButton icon={icon} aria-label="Remove item" />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Remove item');
  });

  it('fires onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<IconButton icon={icon} aria-label="Delete" onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not render any visible text', () => {
    render(<IconButton icon={icon} aria-label="Delete" />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('');
  });

  it('renders primary variant by default', () => {
    render(<IconButton icon={icon} aria-label="Delete" />);
    expect(screen.getByRole('button')).toHaveClass('bg-primary', 'text-primary-foreground');
  });

  it('renders secondary variant', () => {
    render(<IconButton icon={icon} aria-label="Delete" variant="secondary" />);
    expect(screen.getByRole('button')).toHaveClass('bg-secondary', 'text-secondary-foreground');
  });

  it('renders outline variant', () => {
    render(<IconButton icon={icon} aria-label="Delete" variant="outline" />);
    expect(screen.getByRole('button')).toHaveClass('border', 'border-border', 'bg-transparent');
  });

  it('renders ghost variant', () => {
    render(<IconButton icon={icon} aria-label="Delete" variant="ghost" />);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent', 'text-foreground');
  });

  it('renders destructive variant', () => {
    render(<IconButton icon={icon} aria-label="Delete" variant="destructive" />);
    expect(screen.getByRole('button')).toHaveClass('bg-destructive', 'text-white');
  });

  it('applies large size classes', () => {
    render(<IconButton icon={icon} aria-label="Delete" size="large" />);
    expect(screen.getByRole('button')).toHaveClass('h-10', 'w-10');
  });

  it('applies regular size classes by default', () => {
    render(<IconButton icon={icon} aria-label="Delete" />);
    expect(screen.getByRole('button')).toHaveClass('h-9', 'w-9');
  });

  it('applies small size classes', () => {
    render(<IconButton icon={icon} aria-label="Delete" size="small" />);
    expect(screen.getByRole('button')).toHaveClass('h-8', 'w-8');
  });

  it('applies mini size classes', () => {
    render(<IconButton icon={icon} aria-label="Delete" size="mini" />);
    expect(screen.getByRole('button')).toHaveClass('h-6', 'w-6');
  });

  it('applies default roundness class', () => {
    render(<IconButton icon={icon} aria-label="Delete" />);
    expect(screen.getByRole('button')).toHaveClass('rounded-lg');
  });

  it('applies round roundness class', () => {
    render(<IconButton icon={icon} aria-label="Delete" roundness="round" />);
    expect(screen.getByRole('button')).toHaveClass('rounded-full');
  });

  it('is disabled when disabled prop is set', () => {
    render(<IconButton icon={icon} aria-label="Delete" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveClass('disabled:opacity-50', 'disabled:pointer-events-none');
  });

  it('forwards className prop', () => {
    render(<IconButton icon={icon} aria-label="Delete" className="custom-class" />);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
