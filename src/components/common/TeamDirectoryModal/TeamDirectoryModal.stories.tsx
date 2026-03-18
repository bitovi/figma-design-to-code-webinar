import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TeamDirectoryModal } from './TeamDirectoryModal';
import type { TeamMember } from './types';

const mockMembers: TeamMember[] = [
  { id: '1', name: 'Alice Johnson', role: 'Product Manager' },
  { id: '2', name: 'Bob Smith', role: 'Senior Engineer' },
  { id: '3', name: 'Carol White', role: 'UX Designer' },
  { id: '4', name: 'David Lee', role: 'QA Engineer' },
  { id: '5', name: 'Eva Martinez', role: 'Engineering Manager' },
  { id: '6', name: 'Frank Chen', role: 'Backend Engineer' },
  { id: '7', name: 'Grace Kim', role: 'Frontend Engineer' },
  { id: '8', name: 'Henry Park', role: 'Data Analyst' },
  { id: '9', name: 'Irene Zhao', role: 'DevOps Engineer' },
  { id: '10', name: 'James Wilson', role: 'Technical Writer' },
];

const membersWithPictures: TeamMember[] = mockMembers.map((m, i) => ({
  ...m,
  avatarSrc: `https://i.pravatar.cc/40?img=${i + 1}`,
}));

const meta: Meta<typeof TeamDirectoryModal> = {
  component: TeamDirectoryModal,
  title: 'Components/Common/TeamDirectoryModal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    onOpenChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof TeamDirectoryModal>;

export const Default: Story = {
  args: {
    open: true,
    members: mockMembers,
  },
};

export const WithPictures: Story = {
  args: {
    open: true,
    members: membersWithPictures,
  },
};

export const Empty: Story = {
  args: {
    open: true,
    members: [],
  },
};

export const SingleMember: Story = {
  args: {
    open: true,
    members: [mockMembers[0]],
  },
};

export const Closed: Story = {
  args: {
    open: false,
    members: mockMembers,
  },
};
