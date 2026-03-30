import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(Button, 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=9-1071', {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary',
      Outline: 'outline',
      Ghost: 'ghost',
      Destructive: 'destructive',
    }),
    size: figma.enum('Size', {
      Large: 'lg',
      Default: 'md',
      Small: 'sm',
      Mini: 'xs',
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
    <Button
      variant={variant}
      size={size}
      roundness={roundness}
      disabled={disabled}
    >
      Label
    </Button>
  ),
});
