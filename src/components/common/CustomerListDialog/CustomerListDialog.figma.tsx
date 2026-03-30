import figma from '@figma/code-connect';
import { CustomerListDialog } from './CustomerListDialog';

figma.connect(
  CustomerListDialog,
  'https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Carton-Latest-?node-id=3122-97',
  {
    example: () => (
      <CustomerListDialog
        open
        customers={[
          { name: 'Sarah Chen', role: 'Product Manager', initials: 'SC' },
          { name: 'Marcus Johnson', role: 'Senior Developer', initials: 'MJ' },
          { name: 'Emily Rodriguez', role: 'UX Designer', initials: 'ER' },
          { name: 'James Williams', role: 'QA Engineer', initials: 'JW' },
          { name: 'Priya Sharma', role: 'DevOps Lead', initials: 'PS' },
        ]}
      />
    ),
  }
);
