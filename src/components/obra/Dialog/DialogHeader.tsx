import { cn } from '@/lib/utils';
import type { DialogHeaderProps } from './types';

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden="true">
      <path
        d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DialogHeader({ title, onClose, className }: DialogHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-4 shrink-0 w-full border-b border-border',
        className
      )}
    >
      {title && (
        <span className="text-sm font-medium leading-5 text-foreground">{title}</span>
      )}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close dialog"
        className="ml-auto text-foreground hover:text-muted-foreground transition-colors"
      >
        <XIcon />
      </button>
    </div>
  );
}
