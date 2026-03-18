import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/MQUbIrlfuM8qnr9XZ7jc82/Obra-shadcn-ui--Carton-?node-id=9-1071',
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Outline: 'outline',
        Ghost: 'ghost',
        Destructive: 'destructive',
        'Ghost Muted': 'ghost-muted',
      }),
      size: figma.enum('Size', {
        Large: 'large',
        Regular: 'regular',
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
      leftIcon: figma.boolean('showLeftIcon', {
        true: figma.instance('Left icon wrapper'),
        false: undefined,
      }),
      rightIcon: figma.boolean('showRightIcon', {
        true: figma.instance('Right icon wrapper'),
        false: undefined,
      }),
      children: figma.textContent('Label'),
    },
    example: ({ variant, size, roundness, disabled, leftIcon, rightIcon, children }) => (
      <Button
        variant={variant}
        size={size}
        roundness={roundness}
        disabled={disabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </Button>
    ),
  }
);
