import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { AvatarProps } from './types';

export const avatarVariants = cva(
  'relative inline-flex shrink-0 overflow-hidden',
  {
    variants: {
      size: {
        regular: 'size-10',
        small: 'size-8',
        tiny: 'size-6',
        'extra-tiny': 'size-5',
      },
      roundnessType: {
        round: 'rounded-full',
        roundrect: '',
      },
    },
    compoundVariants: [
      { roundnessType: 'roundrect', size: 'regular', className: 'rounded-lg' },
      { roundnessType: 'roundrect', size: 'small', className: 'rounded-[10px]' },
      { roundnessType: 'roundrect', size: 'tiny', className: 'rounded-md' },
      { roundnessType: 'roundrect', size: 'extra-tiny', className: 'rounded-sm' },
    ],
    defaultVariants: {
      size: 'regular',
      roundnessType: 'round',
    },
  }
);

const initialsTextVariants = cva(
  'absolute inset-0 flex items-center justify-center font-semibold text-foreground',
  {
    variants: {
      size: {
        regular: 'text-sm tracking-[0.07px]',
        small: 'text-sm tracking-[0.07px]',
        tiny: 'text-xs tracking-[0.018em]',
        'extra-tiny': 'text-[8px] tracking-[0.015em]',
      },
    },
    defaultVariants: {
      size: 'regular',
    },
  }
);

export type AvatarVariantProps = VariantProps<typeof avatarVariants>;

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      picture = false,
      src,
      alt = '',
      initials = 'CN',
      size = 'regular',
      roundnessType = 'round',
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, roundnessType }), className)}
      >
        {picture ? (
          <img
            src={src}
            alt={alt}
            className="size-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-accent" />
            <span className={initialsTextVariants({ size })}>
              {initials}
            </span>
          </>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
