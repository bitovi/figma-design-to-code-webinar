import { cn } from '@/lib/utils';
import type { AvatarProps } from './types';

const sizeClasses = {
  'extra-tiny': 'size-5',
  tiny: 'size-6',
  small: 'size-8',
  regular: 'size-10',
} as const;

const roundnessClasses: Record<AvatarProps['roundnessType'] & string, Record<AvatarProps['size'] & string, string>> = {
  round: {
    'extra-tiny': 'rounded-full',
    tiny: 'rounded-full',
    small: 'rounded-full',
    regular: 'rounded-full',
  },
  roundrect: {
    'extra-tiny': 'rounded-[4px]',
    tiny: 'rounded-[6px]',
    small: 'rounded-[10px]',
    regular: 'rounded-[10px]',
  },
} as const;

const initialsTextClasses = {
  'extra-tiny': 'text-[8px] leading-[12px] font-medium tracking-[0.12px]',
  tiny: 'text-xs leading-4 font-semibold',
  small: 'text-sm leading-5 font-semibold',
  regular: 'text-sm leading-5 font-semibold',
} as const;

export function Avatar({
  size = 'regular',
  roundnessType = 'round',
  picture = false,
  src,
  alt = '',
  initials = 'CN',
  className,
}: AvatarProps) {
  const sizeClass = sizeClasses[size];
  const roundClass = roundnessClasses[roundnessType][size];

  return (
    <div
      className={cn(
        'relative overflow-hidden shrink-0',
        sizeClass,
        roundClass,
        className
      )}
    >
      {picture && src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 size-full object-cover pointer-events-none"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[var(--accent,#f5f5f5)]" />
          <span
            className={cn(
              'absolute inset-0 flex items-center justify-center text-[var(--foreground,#0a0a0a)]',
              initialsTextClasses[size]
            )}
          >
            {initials}
          </span>
        </>
      )}
    </div>
  );
}
