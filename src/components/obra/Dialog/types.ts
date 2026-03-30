import type React from 'react';

export type DialogType =
  | 'Desktop'
  | 'Desktop Scrollable'
  | 'Mobile'
  | 'Mobile Full Screen Scrollable';

export interface DialogProps {
  type?: DialogType;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
  header?: React.ReactNode;
  cancelButton?: React.ReactNode;
  actionButton?: React.ReactNode;
  className?: string;
}

export interface DialogHeaderProps {
  type?: 'Header';
  title?: string;
  onClose?: () => void;
  className?: string;
}
