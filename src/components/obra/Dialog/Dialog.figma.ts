// url=https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=151-12298
// source=src/components/obra/Dialog/Dialog.tsx
// component=Dialog

import figma from "figma"

const type = figma.selectedInstance.getEnum("Type", {
  Desktop: "Desktop",
  "Desktop Scrollable": "Desktop Scrollable",
  Mobile: "Mobile",
  "Mobile Full Screen Scrollable": "Mobile Full Screen Scrollable",
})

export default {
  id: "Dialog",
  imports: ["import { Dialog } from '@/components/Dialog';"],
  example: figma.code`<Dialog type="${type}" cancelButton={<button type="button">Cancel</button>} actionButton={<button type="button">Continue</button>}>
    <p>Dialog content</p>
  </Dialog>`,
  metadata: { nestable: true },
}
