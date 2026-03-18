import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { ButtonProps } from './types';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold text-sm leading-[21px] tracking-[0.07px] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 focus-visible:shadow-[0_0_0_3px_var(--focus-ring,#CBD5E1)]',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 focus-visible:shadow-[0_0_0_3px_var(--focus-ring,#CBD5E1)]',
        outline:
          'border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80 focus-visible:shadow-[0_0_0_3px_var(--focus-ring,#CBD5E1)]',
        ghost:
          'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80 focus-visible:shadow-[0_0_0_3px_var(--focus-ring,#CBD5E1)]',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 active:bg-destructive/80 focus-visible:shadow-[0_0_0_3px_var(--focus-ring-error,#FCA5A5)]',
        'ghost-muted':
          'bg-transparent text-muted-foreground hover:bg-accent hover:text-foreground active:bg-accent/80 focus-visible:shadow-[0_0_0_3px_var(--focus-ring,#CBD5E1)]',
      },
      size: {
        large: 'h-10 px-6 text-sm',
        regular: 'h-9 px-4 text-sm',
        small: 'h-8 px-3 text-sm',
        mini: 'h-6 px-2 text-xs leading-4',
      },
      roundness: {
        default: 'rounded-lg',
        round: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular',
      roundness: 'default',
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'regular',
      roundness = 'default',
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, roundness }), className)}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
