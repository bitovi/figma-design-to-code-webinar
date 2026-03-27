import figma from '@figma/code-connect';
import { Input } from './Input';

figma.connect(Input, 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=16-1738', {
  props: {
    size: figma.enum('Size', {
      Large: 'lg',
      Regular: 'md',
      Small: 'sm',
      Mini: 'xs',
    }),
    roundness: figma.enum('Roundness', {
      Default: 'default',
      Round: 'round',
    }),
    hasError: figma.enum('State', {
      Error: true,
      'Error Focus': true,
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    leftDecoration: figma.boolean('Show decoration left', {
      true: figma.instance('Decoration left'),
      false: undefined,
    }),
    rightDecoration: figma.boolean('Show decoration right', {
      true: figma.instance('Decoration right'),
      false: undefined,
    }),
    prependText: figma.boolean('Show prepend text', {
      true: 'Prepend',
      false: undefined,
    }),
    appendText: figma.boolean('Show append text', {
      true: 'Append',
      false: undefined,
    }),
  },
  example: ({ size, roundness, hasError, disabled, leftDecoration, rightDecoration, prependText, appendText }) => (
    <Input
      size={size}
      roundness={roundness}
      hasError={hasError}
      disabled={disabled}
      leftDecoration={leftDecoration}
      rightDecoration={rightDecoration}
      prependText={prependText}
      appendText={appendText}
      placeholder="Value"
    />
  ),
});
