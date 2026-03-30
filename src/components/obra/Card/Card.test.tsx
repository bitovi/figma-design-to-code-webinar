import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders mainSlot by default with slotNo="1 Slot"', () => {
    render(<Card mainSlot={<div>Main Content</div>} />);
    expect(screen.getByText('Main Content')).toBeInTheDocument();
  });

  it('does not render headerSlot when slotNo is "1 Slot"', () => {
    render(
      <Card
        slotNo="1 Slot"
        headerSlot={<div>Header</div>}
        mainSlot={<div>Main</div>}
      />
    );
    expect(screen.queryByText('Header')).not.toBeInTheDocument();
    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  it('renders headerSlot and mainSlot when slotNo is "2 Slots"', () => {
    render(
      <Card
        slotNo="2 Slots"
        headerSlot={<div>Header</div>}
        mainSlot={<div>Main</div>}
      />
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  it('does not render footerSlot when slotNo is "2 Slots"', () => {
    render(
      <Card
        slotNo="2 Slots"
        headerSlot={<div>Header</div>}
        mainSlot={<div>Main</div>}
        footerSlot={<div>Footer</div>}
      />
    );
    expect(screen.queryByText('Footer')).not.toBeInTheDocument();
  });

  it('renders all three slots when slotNo is "3 Slots"', () => {
    render(
      <Card
        slotNo="3 Slots"
        headerSlot={<div>Header</div>}
        mainSlot={<div>Main</div>}
        footerSlot={<div>Footer</div>}
      />
    );
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Main')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('applies custom className to the root element', () => {
    const { container } = render(<Card className="w-64" />);
    expect(container.firstChild).toHaveClass('w-64');
  });

  it('applies base Tailwind classes to root element', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass('bg-card', 'border', 'border-border', 'rounded-lg', 'shadow-sm');
  });
});
