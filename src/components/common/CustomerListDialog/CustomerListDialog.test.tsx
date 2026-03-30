import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CustomerListDialog } from './CustomerListDialog';

const sampleCustomers = [
  { name: 'Sarah Chen', role: 'Product Manager', initials: 'SC' },
  { name: 'Marcus Johnson', role: 'Senior Developer', initials: 'MJ' },
];

describe('CustomerListDialog', () => {
  it('renders the dialog title', () => {
    render(<CustomerListDialog customers={sampleCustomers} open />);
    expect(screen.getByText('Customer List')).toBeInTheDocument();
  });

  it('renders a custom title', () => {
    render(<CustomerListDialog customers={sampleCustomers} open title="Select a Member" />);
    expect(screen.getByText('Select a Member')).toBeInTheDocument();
  });

  it('renders all customer names and roles', () => {
    render(<CustomerListDialog customers={sampleCustomers} open />);
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Product Manager')).toBeInTheDocument();
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
  });

  it('renders default action button label "Message"', () => {
    render(<CustomerListDialog customers={[sampleCustomers[0]]} open />);
    expect(screen.getByRole('button', { name: 'Message' })).toBeInTheDocument();
  });

  it('renders custom action button label', () => {
    const customers = [{ ...sampleCustomers[0], actionLabel: 'View' }];
    render(<CustomerListDialog customers={customers} open />);
    expect(screen.getByRole('button', { name: 'View' })).toBeInTheDocument();
  });

  it('calls onMessageCustomer when action button is clicked', async () => {
    const onMessageCustomer = vi.fn();
    render(
      <CustomerListDialog
        customers={[sampleCustomers[0]]}
        open
        onMessageCustomer={onMessageCustomer}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Message' }));
    expect(onMessageCustomer).toHaveBeenCalledWith(sampleCustomers[0]);
  });

  it('renders the search input with placeholder', () => {
    render(<CustomerListDialog customers={sampleCustomers} open />);
    expect(screen.getByPlaceholderText('Search customers...')).toBeInTheDocument();
  });

  it('calls onSearch when typing in the search input', async () => {
    const onSearch = vi.fn();
    render(
      <CustomerListDialog customers={sampleCustomers} open onSearch={onSearch} searchValue="" />
    );
    await userEvent.type(screen.getByPlaceholderText('Search customers...'), 'Sa');
    expect(onSearch).toHaveBeenCalled();
  });

  it('renders default Cancel and Done buttons', () => {
    render(<CustomerListDialog customers={sampleCustomers} open />);
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument();
  });

  it('calls onOpenChange(false) when Cancel is clicked', async () => {
    const onOpenChange = vi.fn();
    render(
      <CustomerListDialog customers={sampleCustomers} open onOpenChange={onOpenChange} />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('calls onOpenChange(false) when close button is clicked', async () => {
    const onOpenChange = vi.fn();
    render(
      <CustomerListDialog customers={sampleCustomers} open onOpenChange={onOpenChange} />
    );
    await userEvent.click(screen.getByRole('button', { name: 'Close dialog' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('renders custom cancelButton and actionButton', () => {
    render(
      <CustomerListDialog
        customers={sampleCustomers}
        open
        cancelButton={<button>Back</button>}
        actionButton={<button>Confirm</button>}
      />
    );
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
  });

  it('does not render when open is false', () => {
    render(<CustomerListDialog customers={sampleCustomers} open={false} />);
    expect(screen.queryByText('Customer List')).not.toBeInTheDocument();
  });

  it('renders an empty list without errors', () => {
    render(<CustomerListDialog customers={[]} open />);
    expect(screen.getByText('Customer List')).toBeInTheDocument();
  });

  it('renders full-width buttons with footerType="2 Full-width Buttons"', () => {
    render(<CustomerListDialog customers={sampleCustomers} open footerType="2 Full-width Buttons" />);
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument();
  });

  it('renders single button with footerType="Single Full-width Button"', () => {
    render(<CustomerListDialog customers={sampleCustomers} open footerType="Single Full-width Button" />);
    expect(screen.getByRole('button', { name: 'Done' })).toBeInTheDocument();
  });
});
