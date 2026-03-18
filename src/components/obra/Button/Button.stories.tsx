import type { Meta, StoryObj } from '@storybook/react';
import { Plus, Search, ChevronDown, Trash2, X } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Obra/Button',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/MQUbIrlfuM8qnr9XZ7jc82/Obra-shadcn-ui--Carton-?node-id=9-1071&m=dev',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'ghost-muted'],
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Label',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Label',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Label',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Label',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Label',
  },
};

export const GhostMuted: Story = {
  args: {
    variant: 'ghost-muted',
    children: 'Label',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
    children: 'Label',
  },
};

export const SizeRegular: Story = {
  args: {
    size: 'regular',
    children: 'Label',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'small',
    children: 'Label',
  },
};

export const SizeMini: Story = {
  args: {
    size: 'mini',
    children: 'Label',
  },
};

export const RoundnessRound: Story = {
  args: {
    roundness: 'round',
    children: 'Label',
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Plus className="h-4 w-4" />,
    children: 'Add Item',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ChevronDown className="h-4 w-4" />,
    children: 'Options',
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: <Search className="h-4 w-4" />,
    rightIcon: <ChevronDown className="h-4 w-4" />,
    children: 'Search',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Label',
  },
};

export const DestructiveWithIcon: Story = {
  args: {
    variant: 'destructive',
    leftIcon: <Trash2 className="h-4 w-4" />,
    children: 'Delete',
  },
};

export const OutlineWithIcon: Story = {
  args: {
    variant: 'outline',
    rightIcon: <X className="h-4 w-4" />,
    children: 'Dismiss',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost-muted">Ghost Muted</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button size="large">Large</Button>
      <Button size="regular">Regular</Button>
      <Button size="small">Small</Button>
      <Button size="mini">Mini</Button>
    </div>
  ),
};

export const AllRoundness: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Button roundness="default">Default</Button>
      <Button roundness="round">Round</Button>
    </div>
  ),
};
