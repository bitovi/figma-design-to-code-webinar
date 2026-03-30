import { cn } from '@/lib/utils';
import type { DialogFooterProps } from './types';

export function DialogFooter({
  type = '2 Buttons Right',
  cancelButton,
  actionButton,
  className,
}: DialogFooterProps) {
  if (type === 'Single Full-width Button') {
    return (
      <div className={cn('flex p-4', className)}>
        <div className="w-full">{actionButton}</div>
      </div>
    );
  }

  if (type === '2 Full-width Buttons') {
    return (
      <div className={cn('flex gap-2 p-4', className)}>
        <div className="flex-1">{cancelButton}</div>
        <div className="flex-1">{actionButton}</div>
      </div>
    );
  }

  return (
    <div className={cn('flex justify-end gap-2 p-4', className)}>
      {cancelButton}
      {actionButton}
    </div>
  );
}
