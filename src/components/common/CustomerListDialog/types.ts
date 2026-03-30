import type React from 'react';
import type { DialogFooterType } from '@/components/obra/DialogFooter';

export interface CustomerCardProps {
  name: string;
  role: string;
  initials?: string;
  avatarSrc?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export interface CustomerListDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  customers: CustomerCardProps[];
  searchValue?: string;
  onSearch?: (value: string) => void;
  onMessageCustomer?: (customer: CustomerCardProps) => void;
  footerType?: DialogFooterType;
  cancelButton?: React.ReactNode;
  actionButton?: React.ReactNode;
  className?: string;
}
