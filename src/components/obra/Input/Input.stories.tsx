import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Obra/Input',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=16-1738&m=dev',
    },
  },
  args: {
    placeholder: 'Value',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const SizeLarge: Story = {
  name: 'Size: Large',
  args: { size: 'lg' },
};

export const SizeMedium: Story = {
  name: 'Size: Medium (Regular)',
  args: { size: 'md' },
};

export const SizeSmall: Story = {
  name: 'Size: Small',
  args: { size: 'sm' },
};

export const SizeMini: Story = {
  name: 'Size: Mini',
  args: { size: 'xs' },
};

export const RoundnessRound: Story = {
  name: 'Roundness: Round',
  args: { roundness: 'round' },
};

export const WithValue: Story = {
  name: 'State: Value',
  args: { defaultValue: 'Value' },
};

export const StateError: Story = {
  name: 'State: Error',
  args: { hasError: true, defaultValue: 'Value' },
};

export const StateDisabled: Story = {
  name: 'State: Disabled',
  args: { disabled: true, defaultValue: 'Value' },
};

export const WithLeftDecoration: Story = {
  name: 'With Left Decoration',
  args: {
    leftDecoration: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4 text-muted-foreground">
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    placeholder: 'Search...',
  },
};

export const WithRightDecoration: Story = {
  name: 'With Right Decoration',
  args: {
    rightDecoration: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4 text-muted-foreground">
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

export const WithBothDecorations: Story = {
  name: 'With Both Decorations',
  args: {
    leftDecoration: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4 text-muted-foreground">
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    rightDecoration: (
      <svg viewBox="0 0 16 16" fill="none" className="size-4 text-muted-foreground">
        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

export const WithPrependText: Story = {
  name: 'With Prepend Text',
  args: {
    prependText: 'https://',
    placeholder: 'yourdomain',
  },
};

export const WithAppendText: Story = {
  name: 'With Append Text',
  args: {
    appendText: '.com',
    placeholder: 'yourdomain',
  },
};

export const WithPrependAndAppend: Story = {
  name: 'With Prepend + Append Text',
  args: {
    prependText: 'https://',
    appendText: '.com',
    placeholder: 'yourdomain',
  },
};

export const ErrorWithRound: Story = {
  name: 'Error + Round',
  args: {
    hasError: true,
    roundness: 'round',
    defaultValue: 'Value',
  },
};

export const LargeRound: Story = {
  name: 'Large + Round',
  args: {
    size: 'lg',
    roundness: 'round',
  },
};
