# Figma Design to Code Webinar

A focused React component library demonstrating the Figma → Code workflow using GitHub Copilot and the Obra design system.

## Components

### Obra UI Primitives (`src/components/obra/`)

Ready-to-use, Figma-connected components:

| Component | Description |
|-----------|-------------|
| `Accordion` | Collapsible content sections |
| `Alert` | Status alert banners |
| `AlertDialog` | Confirmation modals |
| `Avatar` | User avatars (initials or picture) — *built live in webinar* |
| `Badge` | Status/label badges |
| `Button` | Primary action button with variants |
| `Calendar` | Date picker calendar |
| `Card` | Content card container |
| `Checkbox` | Checkbox input |
| `Dialog` | Modal dialog |
| `HoverCard` | Hover-triggered info card |
| `Input` | Text input |
| `Label` | Form label |
| `Popover` | Floating popover |
| `Select` | Dropdown select |
| `Sheet` | Slide-in panel |
| `Skeleton` | Loading skeleton |
| `Textarea` | Multi-line text input |
| `Tooltip` | Hover tooltip |

### Common Components (`src/components/common/`)

| Component | Description |
|-----------|-------------|
| `TeamDirectoryModal` | Scrollable team member list modal — *built live in webinar* |

## Getting Started

```bash
npm install
npm run storybook    # Browse components at http://localhost:6006
npm test             # Run unit tests
npm run typecheck    # TypeScript check
```

## Figma Code Connect

To publish component mappings back to Figma:

```bash
npm run figma:publish
```

## Workflow

This project uses the **Figma to React Agent** (`.github/agents/figma-to-react.agent.md`) and supporting skills for a structured 3-phase workflow:

1. **Design API** — Analyze Figma design, propose component API, wait for approval
2. **Implement** — Build production-ready component with tests and stories
3. **Connect** — Generate Figma Code Connect mapping

Provide a Figma URL to the agent to get started.
