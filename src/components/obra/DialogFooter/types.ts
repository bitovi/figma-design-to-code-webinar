import type { ReactNode } from 'react';

export type DialogFooterType =
  | '2 Buttons Right'
  | '2 Full-width Buttons'
  | 'Single Full-width Button';

export interface DialogFooterProps {
  type?: DialogFooterType;
  cancelButton?: ReactNode;
  actionButton: ReactNode;
  className?: string;
}
