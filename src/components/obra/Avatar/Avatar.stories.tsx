import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Obra/Avatar',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/MQUbIrlfuM8qnr9XZ7jc82/Obra-shadcn-ui--Carton-?node-id=18-1398&m=dev',
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['regular', 'small', 'tiny', 'extra-tiny'],
    },
    roundnessType: {
      control: 'select',
      options: ['round', 'roundrect'],
    },
    picture: {
      control: 'boolean',
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

export const InitialsRegularRound: Story = {
  args: {
    size: 'regular',
    roundnessType: 'round',
    initials: 'CN',
  },
};

export const InitialsSmallRound: Story = {
  args: {
    size: 'small',
    roundnessType: 'round',
    initials: 'CN',
  },
};

export const InitialsTinyRound: Story = {
  args: {
    size: 'tiny',
    roundnessType: 'round',
    initials: 'CN',
  },
};

export const InitialsExtraTinyRound: Story = {
  args: {
    size: 'extra-tiny',
    roundnessType: 'round',
    initials: 'CN',
  },
};

export const InitialsRegularRoundrect: Story = {
  args: {
    size: 'regular',
    roundnessType: 'roundrect',
    initials: 'CN',
  },
};

export const InitialsSmallRoundrect: Story = {
  args: {
    size: 'small',
    roundnessType: 'roundrect',
    initials: 'CN',
  },
};

export const InitialsTinyRoundrect: Story = {
  args: {
    size: 'tiny',
    roundnessType: 'roundrect',
    initials: 'CN',
  },
};

export const InitialsExtraTinyRoundrect: Story = {
  args: {
    size: 'extra-tiny',
    roundnessType: 'roundrect',
    initials: 'CN',
  },
};

export const PictureRegularRound: Story = {
  args: {
    picture: true,
    src: 'https://i.pravatar.cc/40',
    alt: 'User avatar',
    size: 'regular',
    roundnessType: 'round',
  },
};

export const PictureSmallRound: Story = {
  args: {
    picture: true,
    src: 'https://i.pravatar.cc/32',
    alt: 'User avatar',
    size: 'small',
    roundnessType: 'round',
  },
};

export const PictureTinyRound: Story = {
  args: {
    picture: true,
    src: 'https://i.pravatar.cc/24',
    alt: 'User avatar',
    size: 'tiny',
    roundnessType: 'round',
  },
};

export const PictureExtraTinyRound: Story = {
  args: {
    picture: true,
    src: 'https://i.pravatar.cc/20',
    alt: 'User avatar',
    size: 'extra-tiny',
    roundnessType: 'round',
  },
};

export const PictureRegularRoundrect: Story = {
  args: {
    picture: true,
    src: 'https://i.pravatar.cc/40',
    alt: 'User avatar',
    size: 'regular',
    roundnessType: 'roundrect',
  },
};

export const PictureSmallRoundrect: Story = {
  args: {
    picture: true,
    src: 'https://i.pravatar.cc/32',
    alt: 'User avatar',
    size: 'small',
    roundnessType: 'roundrect',
  },
};

export const AllSizesRound: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="regular" roundnessType="round" initials="CN" />
      <Avatar size="small" roundnessType="round" initials="CN" />
      <Avatar size="tiny" roundnessType="round" initials="CN" />
      <Avatar size="extra-tiny" roundnessType="round" initials="CN" />
    </div>
  ),
};

export const AllSizesRoundrect: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar size="regular" roundnessType="roundrect" initials="CN" />
      <Avatar size="small" roundnessType="roundrect" initials="CN" />
      <Avatar size="tiny" roundnessType="roundrect" initials="CN" />
      <Avatar size="extra-tiny" roundnessType="roundrect" initials="CN" />
    </div>
  ),
};
