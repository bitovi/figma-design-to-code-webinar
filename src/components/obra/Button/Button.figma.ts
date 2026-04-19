// url=https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=9-1071
// source=src/components/obra/Button/Button.tsx
// component=Button

import figma from "figma"

const variant = figma.selectedInstance.getEnum("Variant", {
  Primary: "primary",
  Secondary: "secondary",
  Outline: "outline",
  Ghost: "ghost",
  Destructive: "destructive",
})
const size = figma.selectedInstance.getEnum("Size", {
  Large: "lg",
  Default: "md",
  Small: "sm",
  Mini: "xs",
})
const roundness = figma.selectedInstance.getEnum("Roundness", {
  Default: "default",
  Round: "round",
})
const disabled = figma.selectedInstance.getEnum("State", {
  Disabled: true,
})

export default {
  id: "Button",
  imports: ["import { Button } from '@/components/Button';"],
  example: figma.code`<Button variant="${variant}" size="${size}" roundness="${roundness}"${figma.helpers.react.renderProp('disabled', disabled)}>
    Label
  </Button>`,
  metadata: { nestable: true },
}
