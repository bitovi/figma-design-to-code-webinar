import type React from 'react';

export interface CardProps {
  slotNo?: '1 Slot' | '2 Slots' | '3 Slots';
  headerSlot?: React.ReactNode;
  mainSlot?: React.ReactNode;
  footerSlot?: React.ReactNode;
  className?: string;
}
