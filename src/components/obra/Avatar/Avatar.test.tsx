import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders with default props showing initials', () => {
    render(<Avatar />);
    expect(screen.getByText('CN')).toBeInTheDocument();
  });

  it('renders custom initials', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders profile picture when picture=true', () => {
    render(<Avatar picture src="https://example.com/user.jpg" alt="Jane Doe" />);
    const img = screen.getByRole('img', { name: 'Jane Doe' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/user.jpg');
  });

  it('does not render initials when picture=true', () => {
    render(<Avatar picture src="https://example.com/user.jpg" initials="JD" />);
    expect(screen.queryByText('JD')).not.toBeInTheDocument();
  });

  it('applies regular size classes by default', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toHaveClass('size-10');
  });

  it('applies small size classes', () => {
    const { container } = render(<Avatar size="small" />);
    expect(container.firstChild).toHaveClass('size-8');
  });

  it('applies tiny size classes', () => {
    const { container } = render(<Avatar size="tiny" />);
    expect(container.firstChild).toHaveClass('size-6');
  });

  it('applies extra-tiny size classes', () => {
    const { container } = render(<Avatar size="extra-tiny" />);
    expect(container.firstChild).toHaveClass('size-5');
  });

  it('applies rounded-full for round shape by default', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toHaveClass('rounded-full');
  });

  it('applies rounded-lg for roundrect on regular size', () => {
    const { container } = render(<Avatar roundnessType="roundrect" size="regular" />);
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('applies rounded-md for roundrect on tiny size', () => {
    const { container } = render(<Avatar roundnessType="roundrect" size="tiny" />);
    expect(container.firstChild).toHaveClass('rounded-md');
  });

  it('applies rounded-sm for roundrect on extra-tiny size', () => {
    const { container } = render(<Avatar roundnessType="roundrect" size="extra-tiny" />);
    expect(container.firstChild).toHaveClass('rounded-sm');
  });

  it('applies custom className', () => {
    const { container } = render(<Avatar className="ring-2 ring-primary" />);
    expect(container.firstChild).toHaveClass('ring-2', 'ring-primary');
  });

  it('renders img with empty alt when alt is not provided', () => {
    const { container } = render(<Avatar picture src="https://example.com/user.jpg" />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', '');
  });
});
