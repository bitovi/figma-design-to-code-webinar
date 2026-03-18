import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

figma.connect(
  Avatar,
  'https://www.figma.com/design/MQUbIrlfuM8qnr9XZ7jc82/Obra-shadcn-ui--Carton-?node-id=18-1398',
  {
    props: {
      picture: figma.boolean('picture'),
      size: figma.enum('Size', {
        Regular: 'regular',
        Small: 'small',
        Tiny: 'tiny',
        'Extra Tiny': 'extra-tiny',
      }),
      roundnessType: figma.enum('Roundness Type', {
        Round: 'round',
        Roundrect: 'roundrect',
      }),
    },
    example: ({ picture, size, roundnessType }) => (
      <Avatar
        picture={picture}
        size={size}
        roundnessType={roundnessType}
        initials="CN"
      />
    ),
  }
);
