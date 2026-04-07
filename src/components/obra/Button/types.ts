import type React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
<<<<<<< Updated upstream
  size?: 'lg' | 'md' | 'sm' | 'xs';
  roundness?: 'default' | 'round';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
=======
  size?: 'mini' | 'sm' | 'default' | 'lg';
  roundness?: 'default' | 'round';
  children?: React.ReactNode;
>>>>>>> Stashed changes
  className?: string;
}
