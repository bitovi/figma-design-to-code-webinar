import { cn } from '@/lib/utils';
import type { ButtonProps } from './types';

const variantClasses = {
  primary: [
    'bg-[var(--primary)] text-[var(--primary-foreground)]',
    'hover:bg-[var(--primary-hover)]',
    'focus-visible:ring-[var(--ring)]',
  ],
  secondary: [
    'bg-[var(--secondary)] text-[var(--secondary-foreground)]',
    'hover:bg-[var(--secondary-hover)]',
    'focus-visible:ring-[var(--ring)]',
  ],
  outline: [
    'bg-transparent text-[var(--foreground)]',
    'border border-[var(--border-3)] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
    'hover:bg-[var(--outline-hover)] active:bg-[var(--outline-active)]',
    'focus-visible:ring-[var(--ring)]',
  ],
  ghost: [
    'bg-transparent text-[var(--ghost-foreground)]',
    'hover:bg-[var(--ghost-hover)]',
    'focus-visible:ring-[var(--ring)]',
  ],
  destructive: [
    'bg-[var(--destructive)] text-white',
    'hover:bg-red-700',
    'focus-visible:ring-[var(--ring-error)]',
  ],
} as const;

const sizeClasses = {
  lg: {
    wrapper: 'min-h-[40px] px-6 py-[10px] gap-2',
    text: 'text-sm leading-5',
    icon: 'size-4',
  },
  md: {
    wrapper: 'min-h-[36px] px-4 py-2 gap-2',
    text: 'text-sm leading-5',
    icon: 'size-4',
  },
  sm: {
    wrapper: 'min-h-[32px] px-3 py-[6px] gap-[6px]',
    text: 'text-sm leading-5',
    icon: 'size-4',
  },
  xs: {
    wrapper: 'min-h-[24px] px-2 py-[3px] gap-[6px]',
    text: 'text-xs leading-4',
    icon: 'size-3',
  },
} as const;

const roundnessClasses = {
  default: 'rounded-lg',
  round: 'rounded-full',
} as const;

export function Button({
  variant = 'primary',
  size = 'md',
  roundness = 'default',
  leftIcon,
  rightIcon,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const { wrapper, text, icon } = sizeClasses[size];

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        roundnessClasses[roundness],
        ...variantClasses[variant],
        wrapper,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <span className={cn('inline-flex shrink-0', icon)}>{leftIcon}</span>
      )}
      <span className={text}>{children}</span>
      {rightIcon && (
        <span className={cn('inline-flex shrink-0', icon)}>{rightIcon}</span>
      )}
    </button>
  );
}
