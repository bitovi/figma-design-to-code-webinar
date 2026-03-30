import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('renders children in the content area', () => {
    render(<Dialog>Dialog content</Dialog>);
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
  });

  it('renders a close button', () => {
    render(<Dialog>Content</Dialog>);
    expect(screen.getByRole('button', { name: /close dialog/i })).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    const onClose = vi.fn();
    render(<Dialog onClose={onClose}>Content</Dialog>);
    await userEvent.click(screen.getByRole('button', { name: /close dialog/i }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it('applies Desktop dimensions by default', () => {
    const { container } = render(<Dialog>Content</Dialog>);
    expect(container.firstChild).toHaveClass('w-[640px]', 'h-[480px]');
  });

  it('applies Mobile dimensions for type="Mobile"', () => {
    const { container } = render(<Dialog type="Mobile">Content</Dialog>);
    expect(container.firstChild).toHaveClass('w-[320px]', 'h-[240px]');
  });

  it('applies Mobile Full Screen Scrollable dimensions', () => {
    const { container } = render(
      <Dialog type="Mobile Full Screen Scrollable">Content</Dialog>
    );
    expect(container.firstChild).toHaveClass('w-[320px]', 'h-[640px]');
  });

  it('renders footer buttons in Desktop Scrollable variant', () => {
    render(
      <Dialog
        type="Desktop Scrollable"
        cancelButton={<button>Cancel</button>}
        actionButton={<button>Save</button>}
      >
        Content
      </Dialog>
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });

  it('renders footer buttons in Mobile Full Screen Scrollable variant', () => {
    render(
      <Dialog
        type="Mobile Full Screen Scrollable"
        cancelButton={<button>Cancel</button>}
        actionButton={<button>Confirm</button>}
      >
        Content
      </Dialog>
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });

  it('does not render footer buttons in non-scrollable variants', () => {
    render(
      <Dialog
        type="Desktop"
        cancelButton={<button>Cancel</button>}
        actionButton={<button>Save</button>}
      >
        Content
      </Dialog>
    );
    expect(screen.queryByRole('button', { name: 'Cancel' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Save' })).not.toBeInTheDocument();
  });

  it('applies border and rounded classes for Desktop variant', () => {
    const { container } = render(<Dialog type="Desktop">Content</Dialog>);
    expect(container.firstChild).toHaveClass('border', 'border-border', 'rounded-[10px]');
  });

  it('does not apply border for Mobile Full Screen Scrollable', () => {
    const { container } = render(
      <Dialog type="Mobile Full Screen Scrollable">Content</Dialog>
    );
    expect(container.firstChild).not.toHaveClass('border-border');
  });

  it('applies custom className', () => {
    const { container } = render(<Dialog className="custom-class">Content</Dialog>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies shadow-lg to all variants', () => {
    const { container } = render(<Dialog>Content</Dialog>);
    expect(container.firstChild).toHaveClass('shadow-lg');
  });
});
