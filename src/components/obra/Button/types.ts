import type React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'lg' | 'md' | 'sm' | 'xs';
  roundness?: 'default' | 'round';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}
