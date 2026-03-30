import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Obra/Avatar',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=18-1398&m=dev',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    initials: 'CN',
  },
};

export const SizeRegular: Story = {
  name: 'Size: Regular',
  args: { size: 'regular', initials: 'CN' },
};

export const SizeSmall: Story = {
  name: 'Size: Small',
  args: { size: 'small', initials: 'CN' },
};

export const SizeTiny: Story = {
  name: 'Size: Tiny',
  args: { size: 'tiny', initials: 'CN' },
};

export const SizeExtraTiny: Story = {
  name: 'Size: Extra Tiny',
  args: { size: 'extra-tiny', initials: 'CN' },
};

export const RoundnessRound: Story = {
  name: 'Roundness: Round',
  args: { roundnessType: 'round', initials: 'AB' },
};

export const RoundnessRoundrect: Story = {
  name: 'Roundness: Roundrect',
  args: { roundnessType: 'roundrect', initials: 'AB' },
};

export const WithPicture: Story = {
  name: 'Picture: true',
  args: {
    picture: true,
    src: 'https://i.pravatar.cc/40?img=1',
    alt: 'Jane Doe',
  },
};

export const WithPictureRoundrect: Story = {
  name: 'Picture: true, Roundrect',
  args: {
    picture: true,
    roundnessType: 'roundrect',
    src: 'https://i.pravatar.cc/40?img=2',
    alt: 'John Smith',
  },
};

export const WithPictureSmall: Story = {
  name: 'Picture: true, Small',
  args: {
    picture: true,
    size: 'small',
    src: 'https://i.pravatar.cc/32?img=3',
    alt: 'User',
  },
};

export const AllSizesInitials: Story = {
  name: 'All Sizes — Initials',
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="regular" initials="CN" />
      <Avatar size="small" initials="CN" />
      <Avatar size="tiny" initials="CN" />
      <Avatar size="extra-tiny" initials="CN" />
    </div>
  ),
};

export const AllSizesPicture: Story = {
  name: 'All Sizes — Picture',
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="regular" picture src="https://i.pravatar.cc/40?img=1" alt="User" />
      <Avatar size="small" picture src="https://i.pravatar.cc/32?img=2" alt="User" />
      <Avatar size="tiny" picture src="https://i.pravatar.cc/24?img=3" alt="User" />
      <Avatar size="extra-tiny" picture src="https://i.pravatar.cc/20?img=4" alt="User" />
    </div>
  ),
};
