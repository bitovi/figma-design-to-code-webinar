import { cn } from '@/lib/utils';
import type { CardProps } from './types';

export function Card({
  slotNo = '1 Slot',
  headerSlot,
  mainSlot,
  footerSlot,
  className,
}: CardProps) {
  const showHeader = slotNo === '2 Slots' || slotNo === '3 Slots';
  const showFooter = slotNo === '3 Slots';

  return (
    <div
      className={cn(
        'bg-card border border-border rounded-lg shadow-sm flex flex-col',
        className
      )}
    >
      {showHeader && headerSlot}
      {mainSlot}
      {showFooter && footerSlot}
    </div>
  );
}
