// url=https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=18-1398
// source=src/components/obra/Avatar/Avatar.tsx
// component=Avatar

import figma from "figma"

const size = figma.selectedInstance.getEnum("Size", {
  Regular: "regular",
  Small: "small",
  Tiny: "tiny",
  "Extra Tiny": "extra-tiny",
})
const roundnessType = figma.selectedInstance.getEnum("Roundness Type", {
  Round: "round",
  Roundrect: "roundrect",
})
const picture = figma.selectedInstance.getBoolean("Picture")

export default {
  id: "Avatar",
  imports: ["import { Avatar } from '@/components/Avatar';"],
  example: figma.code`<Avatar size="${size}" roundnessType="${roundnessType}" picture={${picture}} initials="CN"/>`,
  metadata: { nestable: true },
}
