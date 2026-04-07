import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Obra/Button',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
<<<<<<< Updated upstream
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=9-1071&m=dev',
    },
  },
  args: {
    children: 'Label',
=======
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Figma-to-code-webinar-?node-id=9-1071',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['mini', 'sm', 'default', 'lg'],
    },
    roundness: {
      control: 'radio',
      options: ['default', 'round'],
    },
>>>>>>> Stashed changes
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

<<<<<<< Updated upstream
export const Default: Story = {};

export const VariantPrimary: Story = {
  name: 'Variant: Primary',
  args: { variant: 'primary' },
};

export const VariantSecondary: Story = {
  name: 'Variant: Secondary',
  args: { variant: 'secondary' },
};

export const VariantOutline: Story = {
  name: 'Variant: Outline',
  args: { variant: 'outline' },
};

export const VariantGhost: Story = {
  name: 'Variant: Ghost',
  args: { variant: 'ghost' },
};

export const VariantDestructive: Story = {
  name: 'Variant: Destructive',
  args: { variant: 'destructive' },
};

export const SizeLarge: Story = {
  name: 'Size: Large',
  args: { size: 'lg' },
};

export const SizeDefault: Story = {
  name: 'Size: Default (md)',
  args: { size: 'md' },
};

export const SizeSmall: Story = {
  name: 'Size: Small',
  args: { size: 'sm' },
};

export const SizeMini: Story = {
  name: 'Size: Mini (xs)',
  args: { size: 'xs' },
};

export const RoundnessRound: Story = {
  name: 'Roundness: Round',
  args: { roundness: 'round' },
};

export const WithLeftIcon: Story = {
  name: 'With Left Icon',
  args: {
    leftIcon: (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
        <path d="M8 4.75a.75.75 0 0 1 .75.75v2.69l1.28 1.28a.75.75 0 0 1-1.06 1.06L7.47 9.03A.75.75 0 0 1 7.25 8.5v-3a.75.75 0 0 1 .75-.75Z" />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  name: 'With Right Icon',
  args: {
    rightIcon: (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
        />
      </svg>
    ),
  },
};

export const WithBothIcons: Story = {
  name: 'With Both Icons',
  args: {
    leftIcon: (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2Z" />
      </svg>
    ),
    rightIcon: (
      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
        />
      </svg>
    ),
=======
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

export const SizeMini: Story = {
  args: {
    size: 'mini',
    children: 'Label',
  },
};

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'Label',
  },
};

export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'Label',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'Label',
  },
};

export const RoundnessRound: Story = {
  args: {
    roundness: 'round',
    children: 'Label',
>>>>>>> Stashed changes
  },
};

export const Disabled: Story = {
<<<<<<< Updated upstream
  name: 'State: Disabled',
  args: { disabled: true },
};

export const DisabledDestructive: Story = {
  name: 'State: Disabled Destructive',
  args: { variant: 'destructive', disabled: true },
};

export const AllVariants: Story = {
  name: 'All Variants',
=======
  args: {
    disabled: true,
    children: 'Label',
  },
};

export const DisabledOutline: Story = {
  args: {
    variant: 'outline',
    disabled: true,
    children: 'Label',
  },
};

export const AllVariants: Story = {
>>>>>>> Stashed changes
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
<<<<<<< Updated upstream
  name: 'All Sizes',
  render: () => (
    <div className="flex items-center flex-wrap gap-3">
      <Button size="lg">Large</Button>
      <Button size="md">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="xs">Mini</Button>
=======
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="mini">Mini</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
>>>>>>> Stashed changes
    </div>
  ),
};
