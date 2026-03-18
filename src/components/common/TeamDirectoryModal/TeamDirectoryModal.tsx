import { Dialog, DialogHeader } from '@/components/obra/Dialog';
import { Avatar } from '@/components/obra/Avatar';
import type { TeamDirectoryModalProps } from './types';

export function TeamDirectoryModal({
  open,
  onOpenChange,
  members,
}: TeamDirectoryModalProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      type="Desktop Scrollable"
      header={
        <DialogHeader
          type="Header"
          title="Team Directory"
          onClose={() => onOpenChange(false)}
        />
      }
    >
      <ul className="flex flex-col divide-y divide-border px-4 pb-4">
        {members.map((member) => (
          <li key={member.id} className="flex items-center gap-3 py-3">
            <Avatar
              size="regular"
              roundnessType="round"
              picture={!!member.avatarSrc}
              src={member.avatarSrc}
              alt={member.name}
              initials={member.name
                .split(' ')
                .slice(0, 2)
                .map((n) => n[0])
                .join('')
                .toUpperCase()}
            />
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold leading-[21px] text-foreground truncate">
                {member.name}
              </span>
              <span className="text-xs leading-4 text-muted-foreground truncate">
                {member.role}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Dialog>
  );
}
