import type { Meta, StoryObj } from '@storybook/react';
import { CustomerListDialog } from './CustomerListDialog';

const sampleCustomers = [
  { name: 'Sarah Chen', role: 'Product Manager', initials: 'SC' },
  { name: 'Marcus Johnson', role: 'Senior Developer', initials: 'MJ' },
  { name: 'Emily Rodriguez', role: 'UX Designer', initials: 'ER' },
  { name: 'James Williams', role: 'QA Engineer', initials: 'JW' },
  { name: 'Priya Sharma', role: 'DevOps Lead', initials: 'PS' },
];

const meta: Meta<typeof CustomerListDialog> = {
  component: CustomerListDialog,
  title: 'Common/CustomerListDialog',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=3122-97',
    },
  },
  args: {
    open: true,
    customers: sampleCustomers,
  },
};

export default meta;
type Story = StoryObj<typeof CustomerListDialog>;

export const Default: Story = {};

export const WithSearch: Story = {
  args: {
    searchValue: 'Sarah',
  },
};

export const EmptyList: Story = {
  args: {
    customers: [],
  },
};

export const SingleCustomer: Story = {
  args: {
    customers: [{ name: 'Sarah Chen', role: 'Product Manager', initials: 'SC' }],
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Select a Team Member',
    customers: sampleCustomers,
  },
};

export const CustomActionLabels: Story = {
  args: {
    customers: sampleCustomers.map((c) => ({ ...c, actionLabel: 'View' })),
  },
};

export const FullWidthFooterButtons: Story = {
  args: {
    footerType: '2 Full-width Buttons',
    customers: sampleCustomers,
  },
};

export const SingleFooterButton: Story = {
  args: {
    footerType: 'Single Full-width Button',
    customers: sampleCustomers,
  },
};
