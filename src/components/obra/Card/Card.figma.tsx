import figma from '@figma/code-connect';
import { Card } from './Card';

figma.connect(Card, 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=179-29234', {
  props: {
    slotNo: figma.enum('Slot No.', {
      '1 Slot': '1 Slot',
      '2 Slots': '2 Slots',
      '3 Slots': '3 Slots',
    }),
    headerSlot: figma.instance('Header Slot'),
    mainSlot: figma.instance('Main Slot'),
    footerSlot: figma.instance('Footer Slot'),
  },
  example: ({ slotNo, headerSlot, mainSlot, footerSlot }) => (
    <Card
      slotNo={slotNo}
      headerSlot={headerSlot}
      mainSlot={mainSlot}
      footerSlot={footerSlot}
    />
  ),
});
