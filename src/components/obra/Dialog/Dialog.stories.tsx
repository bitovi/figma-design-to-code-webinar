import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  title: 'Obra/Dialog',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=151-12298&m=dev',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const SlotContent = () => (
  <p className="text-muted-foreground text-sm">Dialog content goes here.</p>
);

const CancelButton = () => (
  <button
    type="button"
    className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm font-medium shadow-sm hover:bg-muted transition-colors"
  >
    Cancel
  </button>
);

const ActionButton = () => (
  <button
    type="button"
    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
  >
    Continue
  </button>
);

export const Desktop: Story = {
  name: 'Type: Desktop',
  args: {
    type: 'Desktop',
    children: <SlotContent />,
  },
};

export const DesktopScrollable: Story = {
  name: 'Type: Desktop Scrollable',
  args: {
    type: 'Desktop Scrollable',
    children: <SlotContent />,
    cancelButton: <CancelButton />,
    actionButton: <ActionButton />,
  },
};

export const Mobile: Story = {
  name: 'Type: Mobile',
  args: {
    type: 'Mobile',
    children: <SlotContent />,
  },
};

export const MobileFullScreenScrollable: Story = {
  name: 'Type: Mobile Full Screen Scrollable',
  args: {
    type: 'Mobile Full Screen Scrollable',
    children: <SlotContent />,
    cancelButton: <CancelButton />,
    actionButton: <ActionButton />,
  },
};

export const WithOnClose: Story = {
  name: 'With onClose handler',
  args: {
    type: 'Desktop',
    children: <SlotContent />,
    onClose: () => alert('Dialog closed'),
  },
};

export const ScrollableNoButtons: Story = {
  name: 'Scrollable — no footer buttons',
  args: {
    type: 'Desktop Scrollable',
    children: <SlotContent />,
  },
};
