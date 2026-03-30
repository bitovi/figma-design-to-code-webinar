import { cn } from '@/lib/utils';
import { Avatar } from '@/components/obra/Avatar';
import { Button } from '@/components/obra/Button';
import { Dialog, DialogHeader } from '@/components/obra/Dialog';
import { DialogFooter } from '@/components/obra/DialogFooter';
import { Input } from '@/components/obra/Input';
import type { CustomerCardProps, CustomerListDialogProps } from './types';

function CustomerCard({
  name,
  role,
  initials,
  avatarSrc,
  actionLabel = 'Message',
  onAction,
}: CustomerCardProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b border-border last:border-b-0">
      <Avatar
        size="regular"
        roundnessType="round"
        initials={initials ?? name.slice(0, 2).toUpperCase()}
        picture={Boolean(avatarSrc)}
        src={avatarSrc}
        alt={name}
      />
      <div className="flex flex-col flex-1 min-w-0 gap-0.5">
        <span className="text-sm font-semibold leading-5 text-foreground truncate">{name}</span>
        <span className="text-xs font-normal leading-4 text-muted-foreground truncate">{role}</span>
      </div>
      <Button variant="outline" size="sm" type="button" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  );
}

export function CustomerListDialog({
  open,
  onOpenChange,
  title = 'Customer List',
  customers,
  searchValue,
  onSearch,
  onMessageCustomer,
  footerType = '2 Buttons Right',
  cancelButton,
  actionButton,
  className,
}: CustomerListDialogProps) {
  const handleClose = () => onOpenChange?.(false);

  return (
    <Dialog
      type="Desktop Scrollable"
      open={open}
      onOpenChange={onOpenChange}
      header={<DialogHeader title={title} onClose={handleClose} />}
      footer={
        <DialogFooter
          type={footerType}
          cancelButton={
            cancelButton ?? (
              <Button variant="outline" size="sm" type="button" onClick={handleClose}>
                Cancel
              </Button>
            )
          }
          actionButton={
            actionButton ?? (
              <Button variant="primary" size="sm" type="button">
                Done
              </Button>
            )
          }
        />
      }
      className={cn(className)}
    >
      <div className="flex flex-col h-full">
        <div className="px-4 py-3 border-b border-border shrink-0">
          <Input
            placeholder="Search customers..."
            value={searchValue}
            onChange={(e) => onSearch?.(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="rounded-lg border border-border shadow-sm mx-4 my-3 overflow-hidden">
            {customers.map((customer, i) => (
              <CustomerCard
                key={`${customer.name}-${i}`}
                {...customer}
                onAction={() => onMessageCustomer?.(customer)}
              />
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
