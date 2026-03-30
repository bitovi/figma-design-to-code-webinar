import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Obra/Card',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=179-29234&m=dev',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

const SlotPlaceholder = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center p-4 text-sm text-muted-foreground border border-dashed border-border rounded-lg m-2">
    {label}
  </div>
);

export const OneSlot: Story = {
  name: 'Slot No: 1 Slot',
  args: {
    slotNo: '1 Slot',
    mainSlot: <SlotPlaceholder label="Main Slot" />,
  },
};

export const TwoSlots: Story = {
  name: 'Slot No: 2 Slots',
  args: {
    slotNo: '2 Slots',
    headerSlot: <SlotPlaceholder label="Header Slot" />,
    mainSlot: <SlotPlaceholder label="Main Slot" />,
  },
};

export const ThreeSlots: Story = {
  name: 'Slot No: 3 Slots',
  args: {
    slotNo: '3 Slots',
    headerSlot: <SlotPlaceholder label="Header Slot" />,
    mainSlot: <SlotPlaceholder label="Main Slot" />,
    footerSlot: <SlotPlaceholder label="Footer Slot" />,
  },
};

export const Default: Story = {
  args: {
    mainSlot: <SlotPlaceholder label="Main Slot" />,
  },
};
