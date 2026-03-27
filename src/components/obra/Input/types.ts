import type React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'lg' | 'md' | 'sm' | 'xs';
  roundness?: 'default' | 'round';
  hasError?: boolean;
  prependText?: string;
  appendText?: string;
  leftDecoration?: React.ReactNode;
  rightDecoration?: React.ReactNode;
  className?: string;
}
