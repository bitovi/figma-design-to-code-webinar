import * as React from 'react';

export interface AvatarProps {
  /**
   * Whether to display a profile picture image.
   * When false, renders `initials` as a fallback.
   * @default false
   * @figma Boolean: picture
   */
  picture?: boolean;

  /**
   * Image URL shown when picture=true.
   * @figma Image slot
   */
  src?: string;

  /**
   * Accessible alt text for the profile picture.
   * @default ''
   */
  alt?: string;

  /**
   * 1–2 character string shown in initials (fallback) mode.
   * @default 'CN'
   * @figma Text layer: initials
   */
  initials?: string;

  /**
   * Size of the avatar.
   * @default 'regular'
   * @figma Variant: Size
   */
  size?: 'regular' | 'small' | 'tiny' | 'extra-tiny';

  /**
   * Border radius style.
   * @default 'round'
   * @figma Variant: Roundness Type
   */
  roundnessType?: 'round' | 'roundrect';

  /**
   * Additional CSS class names.
   */
  className?: string;
}
