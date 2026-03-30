import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders initials by default', () => {
    render(<Avatar initials="AB" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('renders default initials "CN" when none provided', () => {
    render(<Avatar />);
    expect(screen.getByText('CN')).toBeInTheDocument();
  });

  it('renders an image when picture=true and src is provided', () => {
    render(<Avatar picture src="https://example.com/photo.jpg" alt="Jane Doe" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/photo.jpg');
    expect(img).toHaveAttribute('alt', 'Jane Doe');
  });

  it('does not render an image when picture=false', () => {
    render(<Avatar initials="JD" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('applies size regular (40px)', () => {
    const { container } = render(<Avatar size="regular" />);
    expect(container.firstChild).toHaveClass('size-10');
  });

  it('applies size small (32px)', () => {
    const { container } = render(<Avatar size="small" />);
    expect(container.firstChild).toHaveClass('size-8');
  });

  it('applies size tiny (24px)', () => {
    const { container } = render(<Avatar size="tiny" />);
    expect(container.firstChild).toHaveClass('size-6');
  });

  it('applies size extra-tiny (20px)', () => {
    const { container } = render(<Avatar size="extra-tiny" />);
    expect(container.firstChild).toHaveClass('size-5');
  });

  it('applies round roundness', () => {
    const { container } = render(<Avatar roundnessType="round" />);
    expect(container.firstChild).toHaveClass('rounded-full');
  });

  it('applies roundrect roundness for regular size', () => {
    const { container } = render(<Avatar size="regular" roundnessType="roundrect" />);
    expect(container.firstChild).toHaveClass('rounded-[10px]');
  });

  it('applies roundrect roundness for tiny size (6px)', () => {
    const { container } = render(<Avatar size="tiny" roundnessType="roundrect" />);
    expect(container.firstChild).toHaveClass('rounded-[6px]');
  });

  it('applies roundrect roundness for extra-tiny size (4px)', () => {
    const { container } = render(<Avatar size="extra-tiny" roundnessType="roundrect" />);
    expect(container.firstChild).toHaveClass('rounded-[4px]');
  });

  it('applies custom className', () => {
    const { container } = render(<Avatar className="custom-test" />);
    expect(container.firstChild).toHaveClass('custom-test');
  });
});
