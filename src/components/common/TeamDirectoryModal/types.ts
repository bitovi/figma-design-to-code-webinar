export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarSrc?: string;
}

export interface TeamDirectoryModalProps {
  /**
   * Whether the modal is open.
   */
  open: boolean;

  /**
   * Callback to change open state.
   */
  onOpenChange: (open: boolean) => void;

  /**
   * List of team members to display.
   */
  members: TeamMember[];
}
