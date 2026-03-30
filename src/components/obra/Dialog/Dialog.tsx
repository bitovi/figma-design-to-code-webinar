import { cn } from '@/lib/utils';
import type { DialogProps, DialogType } from './types';

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

const containerClasses: Record<DialogType, string> = {
  Desktop: 'w-[640px] h-[480px] border border-border rounded-[10px]',
  'Desktop Scrollable': 'w-[640px] h-[480px] border border-border rounded-[10px]',
  Mobile: 'w-[320px] h-[240px] border border-border rounded-[10px]',
  'Mobile Full Screen Scrollable': 'w-[320px] h-[640px]',
};

export function Dialog({
  type = 'Desktop',
  open,
  onOpenChange,
  children,
  onClose,
  header,
  cancelButton,
  actionButton,
  className,
}: DialogProps) {
  if (open === false) return null;

  const isScrollable =
    type === 'Desktop Scrollable' || type === 'Mobile Full Screen Scrollable';

  const handleClose = () => {
    onClose?.();
    onOpenChange?.(false);
  };

  return (
    <div
      className={cn(
        'bg-background flex flex-col overflow-hidden relative shadow-lg',
        containerClasses[type],
        className
      )}
    >
      {isScrollable ? (
        <>
          {header ?? (
            <div className="flex items-center justify-end p-4 shrink-0 w-full">
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close dialog"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                <XIcon />
              </button>
            </div>
          )}
          <div
            className={cn(
              'flex-1 min-h-0 overflow-hidden w-full',
              type === 'Mobile Full Screen Scrollable' && 'py-6'
            )}
          >
            {children}
          </div>
          <div className="flex items-center justify-end gap-2 p-4 shrink-0 w-full">
            {cancelButton}
            {actionButton}
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 flex items-center justify-center p-2 min-h-0 min-w-0 w-full">
            {children}
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="absolute top-[15px] right-[15px] text-foreground hover:text-muted-foreground transition-colors"
          >
            <XIcon />
          </button>
        </>
      )}
    </div>
  );
}
