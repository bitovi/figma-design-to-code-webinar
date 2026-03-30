export interface AvatarProps {
  size?: 'extra-tiny' | 'tiny' | 'small' | 'regular';
  roundnessType?: 'round' | 'roundrect';
  picture?: boolean;
  src?: string;
  alt?: string;
  initials?: string;
  className?: string;
}
