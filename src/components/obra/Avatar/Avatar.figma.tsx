import figma from '@figma/code-connect';
import { Avatar } from './Avatar';

figma.connect(Avatar, 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=18-1398', {
  props: {
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
    picture: figma.boolean('Picture'),
  },
  example: ({ size, roundnessType, picture }) => (
    <Avatar
      size={size}
      roundnessType={roundnessType}
      picture={picture}
      initials="CN"
    />
  ),
});
