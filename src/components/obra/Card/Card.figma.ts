// url=https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=179-29234
// source=src/components/obra/Card/Card.tsx
// component=Card

import figma from "figma"

const slotNo = figma.selectedInstance.getEnum("Slot No.", {
  "1 Slot": "1 Slot",
  "2 Slots": "2 Slots",
  "3 Slots": "3 Slots",
})
const headerSlot = figma.selectedInstance
  .getInstanceSwap("Header Slot")
  ?.executeTemplate().example
const mainSlot = figma.selectedInstance
  .getInstanceSwap("Main Slot")
  ?.executeTemplate().example
const footerSlot = figma.selectedInstance
  .getInstanceSwap("Footer Slot")
  ?.executeTemplate().example

export default {
  id: "Card",
  imports: ["import { Card } from '@/components/Card';"],
  example: figma.code`<Card slotNo="${slotNo}" headerSlot={${headerSlot}} mainSlot={${mainSlot}} footerSlot={${footerSlot}}/>`,
  metadata: { nestable: true },
}
