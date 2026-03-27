import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'mini' | 'small' | 'regular' | 'large';
  roundness?: 'default' | 'round';
  icon: React.ReactNode;
  'aria-label': string;
}
