import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { IconButtonProps } from './types';

export const iconButtonVariants = cva(
  'inline-flex items-center justify-center transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
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
      },
      size: {
        large: 'h-10 w-10',
        regular: 'h-9 w-9',
        small: 'h-8 w-8',
        mini: 'h-6 w-6',
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

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'primary',
      size = 'regular',
      roundness = 'default',
      icon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(iconButtonVariants({ variant, size, roundness }), className)}
        {...props}
      >
        <span className="inline-flex shrink-0 size-4">{icon}</span>
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
