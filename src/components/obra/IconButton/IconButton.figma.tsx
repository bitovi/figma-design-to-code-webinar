import figma from '@figma/code-connect';
import { IconButton } from './IconButton';

figma.connect(
  IconButton,
  'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=9-775',
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Outline: 'outline',
        Ghost: 'ghost',
        Destructive: 'destructive',
      }),
      size: figma.enum('Size', {
        Large: 'large',
        Default: 'regular',
        Small: 'small',
        Mini: 'mini',
      }),
      roundness: figma.enum('Roundness', {
        Default: 'default',
        Round: 'round',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
      }),
    },
    example: ({ variant, size, roundness, disabled }) => (
      <IconButton
        variant={variant}
        size={size}
        roundness={roundness}
        disabled={disabled}
        icon={<span />}
        aria-label="icon button"
      />
    ),
  }
);
