import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { InputProps } from './types';

const sizeClasses = {
  lg: {
    wrapper: 'min-h-[40px] px-4 py-[9.5px] gap-3',
    text: 'text-sm leading-5',
    icon: 'size-5',
  },
  md: {
    wrapper: 'min-h-[36px] px-3 py-[7.5px] gap-2',
    text: 'text-sm leading-5',
    icon: 'size-5',
  },
  sm: {
    wrapper: 'min-h-[32px] px-2 py-[5.5px] gap-[6px]',
    text: 'text-sm leading-5',
    icon: 'size-5',
  },
  xs: {
    wrapper: 'px-[6px] py-1 gap-1',
    text: 'text-xs leading-4',
    icon: 'size-5',
  },
} as const;

const roundnessClasses = {
  default: {
    lg: 'rounded-lg',
    md: 'rounded-lg',
    sm: 'rounded-lg',
    xs: 'rounded-sm',
  },
  round: {
    lg: 'rounded-full',
    md: 'rounded-full',
    sm: 'rounded-full',
    xs: 'rounded-full',
  },
} as const;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      roundness = 'default',
      hasError = false,
      prependText,
      appendText,
      leftDecoration,
      rightDecoration,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const { wrapper, text, icon } = sizeClasses[size];
    const radius = roundnessClasses[roundness][size];

    return (
      <div
        className={cn(
          'bg-[var(--input,#ffffff)] border border-solid flex items-center overflow-hidden w-full',
          'shadow-xs',
          'focus-within:shadow-[0_0_0_3px_var(--ring,#d4d4d4)] focus-within:border-[var(--border-4,#a3a3a3)]',
          hasError && 'border-[var(--destructive-border,#ef4444)] shadow-none',
          hasError && 'focus-within:shadow-[0_0_0_3px_var(--ring-error,#fca5a5)] focus-within:border-[var(--destructive-border,#ef4444)]',
          !hasError && 'border-[var(--border,#e5e5e5)]',
          disabled && 'opacity-50 cursor-not-allowed',
          wrapper,
          radius,
          className
        )}
      >
        {leftDecoration && (
          <span className={cn('flex items-center justify-center shrink-0 p-[2px]', icon)}>
            {leftDecoration}
          </span>
        )}

        <span className="flex flex-1 items-center gap-1 min-w-0 min-h-[1px]">
          {prependText && (
            <span
              className={cn(
                'shrink-0 text-[var(--muted-foreground,#737373)] whitespace-nowrap',
                text
              )}
            >
              {prependText}
            </span>
          )}
          <input
            ref={ref}
            disabled={disabled}
            className={cn(
              'flex-1 min-w-0 bg-transparent outline-none border-none',
              'text-[var(--foreground,#0a0a0a)] placeholder:text-[var(--muted-foreground,#737373)]',
              'disabled:cursor-not-allowed',
              text
            )}
            {...props}
          />
          {appendText && (
            <span
              className={cn(
                'shrink-0 text-[var(--muted-foreground,#737373)] whitespace-nowrap',
                text
              )}
            >
              {appendText}
            </span>
          )}
        </span>

        {rightDecoration && (
          <span className={cn('flex items-center justify-center shrink-0 p-[2px]', icon)}>
            {rightDecoration}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
