import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default 'primary'
   * @figma Variant: Variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'ghost-muted';

  /**
   * Size variant
   * @default 'regular'
   * @figma Variant: Size
   */
  size?: 'mini' | 'small' | 'regular' | 'large';

  /**
   * Border radius style
   * @default 'default'
   * @figma Variant: Roundness
   */
  roundness?: 'default' | 'round';

  /**
   * Optional icon displayed before the label
   * @figma Boolean: showLeftIcon
   */
  leftIcon?: React.ReactNode;

  /**
   * Optional icon displayed after the label
   * @figma Boolean: showRightIcon
   */
  rightIcon?: React.ReactNode;

  /**
   * Button label content
   * @figma Text: Label
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}
