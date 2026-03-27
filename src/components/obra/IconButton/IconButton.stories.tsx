import type { Meta, StoryObj } from '@storybook/react';
import { Trash2 } from 'lucide-react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Obra/IconButton',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=9-775',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['mini', 'small', 'regular', 'large'],
    },
    roundness: {
      control: 'select',
      options: ['default', 'round'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const SizeRegular: Story = {
  args: {
    size: 'regular',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const SizeMini: Story = {
  args: {
    size: 'mini',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const RoundnessDefault: Story = {
  args: {
    roundness: 'default',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const RoundnessRound: Story = {
  args: {
    roundness: 'round',
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: <Trash2 className="size-4" />,
    'aria-label': 'Delete',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <IconButton variant="primary" icon={<Trash2 className="size-4" />} aria-label="Primary" />
      <IconButton variant="secondary" icon={<Trash2 className="size-4" />} aria-label="Secondary" />
      <IconButton variant="outline" icon={<Trash2 className="size-4" />} aria-label="Outline" />
      <IconButton variant="ghost" icon={<Trash2 className="size-4" />} aria-label="Ghost" />
      <IconButton variant="destructive" icon={<Trash2 className="size-4" />} aria-label="Destructive" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <IconButton size="mini" icon={<Trash2 className="size-4" />} aria-label="Mini" />
      <IconButton size="small" icon={<Trash2 className="size-4" />} aria-label="Small" />
      <IconButton size="regular" icon={<Trash2 className="size-4" />} aria-label="Regular" />
      <IconButton size="large" icon={<Trash2 className="size-4" />} aria-label="Large" />
    </div>
  ),
};
