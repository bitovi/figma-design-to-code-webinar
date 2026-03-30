import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DialogFooter } from './DialogFooter';

const cancelButton = <button type="button">Cancel</button>;
const actionButton = <button type="button">Done</button>;

describe('DialogFooter', () => {
  describe('2 Buttons Right (default)', () => {
    it('renders both buttons', () => {
      render(<DialogFooter cancelButton={cancelButton} actionButton={actionButton} />);
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Done')).toBeInTheDocument();
    });

    it('is right-aligned', () => {
      const { container } = render(
        <DialogFooter cancelButton={cancelButton} actionButton={actionButton} />
      );
      expect(container.firstChild).toHaveClass('justify-end');
    });

    it('uses default type when none provided', () => {
      const { container } = render(
        <DialogFooter cancelButton={cancelButton} actionButton={actionButton} />
      );
      expect(container.firstChild).toHaveClass('justify-end');
    });
  });

  describe('2 Full-width Buttons', () => {
    it('renders both buttons', () => {
      render(
        <DialogFooter
          type="2 Full-width Buttons"
          cancelButton={cancelButton}
          actionButton={actionButton}
        />
      );
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Done')).toBeInTheDocument();
    });

    it('wraps each button in a flex-1 container', () => {
      const { container } = render(
        <DialogFooter
          type="2 Full-width Buttons"
          cancelButton={cancelButton}
          actionButton={actionButton}
        />
      );
      const wrappers = container.querySelectorAll('.flex-1');
      expect(wrappers).toHaveLength(2);
    });
  });

  describe('Single Full-width Button', () => {
    it('renders only the action button', () => {
      render(
        <DialogFooter
          type="Single Full-width Button"
          actionButton={<button type="button">Confirm</button>}
        />
      );
      expect(screen.getByText('Confirm')).toBeInTheDocument();
    });

    it('wraps action button in a full-width container', () => {
      const { container } = render(
        <DialogFooter
          type="Single Full-width Button"
          actionButton={<button type="button">Confirm</button>}
        />
      );
      const inner = container.querySelector('.w-full');
      expect(inner).toBeInTheDocument();
    });

    it('does not render cancel button slot', () => {
      render(
        <DialogFooter
          type="Single Full-width Button"
          cancelButton={cancelButton}
          actionButton={<button type="button">Confirm</button>}
        />
      );
      expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const { container } = render(
      <DialogFooter
        cancelButton={cancelButton}
        actionButton={actionButton}
        className="custom-class"
      />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
