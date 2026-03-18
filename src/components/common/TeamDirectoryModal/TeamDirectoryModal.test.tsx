import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TeamDirectoryModal } from './TeamDirectoryModal';
import type { TeamMember } from './types';

const mockMembers: TeamMember[] = [
  { id: '1', name: 'Alice Johnson', role: 'Product Manager' },
  { id: '2', name: 'Bob Smith', role: 'Senior Engineer' },
  { id: '3', name: 'Carol White', role: 'UX Designer' },
];

describe('TeamDirectoryModal', () => {
  it('renders the modal title when open', () => {
    render(
      <TeamDirectoryModal open members={mockMembers} onOpenChange={vi.fn()} />
    );
    expect(screen.getByText('Team Directory')).toBeInTheDocument();
  });

  it('renders all team member names', () => {
    render(
      <TeamDirectoryModal open members={mockMembers} onOpenChange={vi.fn()} />
    );
    expect(screen.getByText('Alice Johnson')).toBeInTheDocument();
    expect(screen.getByText('Bob Smith')).toBeInTheDocument();
    expect(screen.getByText('Carol White')).toBeInTheDocument();
  });

  it('renders all team member roles', () => {
    render(
      <TeamDirectoryModal open members={mockMembers} onOpenChange={vi.fn()} />
    );
    expect(screen.getByText('Product Manager')).toBeInTheDocument();
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
    expect(screen.getByText('UX Designer')).toBeInTheDocument();
  });

  it('renders initials derived from member name when no avatarSrc', () => {
    render(
      <TeamDirectoryModal
        open
        members={[{ id: '1', name: 'Jane Doe', role: 'Engineer' }]}
        onOpenChange={vi.fn()}
      />
    );
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders profile picture when avatarSrc is provided', () => {
    render(
      <TeamDirectoryModal
        open
        members={[
          {
            id: '1',
            name: 'Jane Doe',
            role: 'Engineer',
            avatarSrc: 'https://example.com/jane.jpg',
          },
        ]}
        onOpenChange={vi.fn()}
      />
    );
    const img = screen.getByRole('img', { name: 'Jane Doe' });
    expect(img).toHaveAttribute('src', 'https://example.com/jane.jpg');
  });

  it('renders an empty list when members is empty', () => {
    render(
      <TeamDirectoryModal open members={[]} onOpenChange={vi.fn()} />
    );
    expect(screen.getByText('Team Directory')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('does not render content when closed', () => {
    render(
      <TeamDirectoryModal open={false} members={mockMembers} onOpenChange={vi.fn()} />
    );
    expect(screen.queryByText('Team Directory')).not.toBeInTheDocument();
  });

  it('calls onOpenChange(false) when close button is clicked', async () => {
    const onOpenChange = vi.fn();
    render(
      <TeamDirectoryModal open members={mockMembers} onOpenChange={onOpenChange} />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
