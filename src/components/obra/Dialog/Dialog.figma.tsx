import figma from '@figma/code-connect';
import { Dialog } from './Dialog';

figma.connect(Dialog, 'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=151-12298', {
  props: {
    type: figma.enum('Type', {
      Desktop: 'Desktop',
      'Desktop Scrollable': 'Desktop Scrollable',
      Mobile: 'Mobile',
      'Mobile Full Screen Scrollable': 'Mobile Full Screen Scrollable',
    }),
    cancelButton: <button type="button">Cancel</button>,
    actionButton: <button type="button">Continue</button>,
  },
  example: ({ type, cancelButton, actionButton }) => (
    <Dialog type={type} cancelButton={cancelButton} actionButton={actionButton}>
      <p>Dialog content</p>
    </Dialog>
  ),
});
