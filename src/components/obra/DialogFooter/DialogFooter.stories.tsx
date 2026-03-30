import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/obra/Button';
import { DialogFooter } from './DialogFooter';

const meta: Meta<typeof DialogFooter> = {
  title: 'Obra/DialogFooter',
  component: DialogFooter,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=176-21284',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[640px] border border-border rounded-[10px] bg-background">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DialogFooter>;

const cancel = <Button variant="outline">Cancel</Button>;
const action = <Button variant="primary">Done</Button>;

export const TwoButtonsRight: Story = {
  name: '2 Buttons Right',
  args: {
    type: '2 Buttons Right',
    cancelButton: cancel,
    actionButton: action,
  },
};

export const TwoFullWidthButtons: Story = {
  name: '2 Full-width Buttons',
  args: {
    type: '2 Full-width Buttons',
    cancelButton: cancel,
    actionButton: action,
  },
};

export const SingleFullWidthButton: Story = {
  name: 'Single Full-width Button',
  args: {
    type: 'Single Full-width Button',
    actionButton: <Button variant="primary">Confirm</Button>,
  },
};
