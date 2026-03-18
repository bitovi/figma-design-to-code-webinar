# figma-design-to-code-webinar Development Guidelines

## Project Overview

This is a focused component library and Storybook showcasing the Figura Design to Code workflow.
It contains the Obra UI component system and a `TeamDirectoryModal` example built during the webinar.

## Skills

Before implementing any feature:
1. Review the skills table below and read relevant documentation in `.github/skills/`
2. Apply skills that match your task
3. Follow skill workflows to prevent common mistakes

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| `component-reuse` | Ensure existing UI components are reused before creating new ones | Before implementing any UI from Figma |
| `validate-implementation` | Validate implementations for runtime errors and API compliance | Before marking any feature complete |
| `figma-implement-component` | Implement React components from Figma designs | After component-reuse confirms no existing component |
| `figma-design-react` | Design React components from Figma files | When analyzing Figma designs to propose component architecture |
| `figma-component-sync` | Check React components against Figma design source | When reviewing implementations or auditing visual accuracy |
| `figma-connect-component` | Generate Figma Code Connect mapping for components | When linking React components to their Figma counterparts |
| `figma-connect-shadcn` | Connect shadcn/ui components to Figma | After adding shadcn components |
| `figma-explore` | Explore Figma files to discover pages and components | When you need to find component node IDs |
| `create-react-modlet` | Create React components following the modlet pattern | When creating any new component |

## Project Structure

```text
src/
├── components/
│   ├── obra/            # Obra design system UI components
│   └── common/          # Shared reusable components
│       └── TeamDirectoryModal/
├── lib/
│   └── utils.ts         # cn() utility
├── index.css            # Global styles + CSS design tokens
└── main.tsx             # App entry point
```

## Commands

- **Storybook**: `npm run storybook` — View components at http://localhost:6006
- **Unit Tests**: `npm test`
- **Type Checking**: `npm run typecheck`
- **Figma Publish**: `npm run figma:publish` — Publish Code Connect mappings

## Code Style

TypeScript 5.x / React 18+

## Coding Standards

- No inline comments in tsx/ts files
- All styling via Tailwind CSS classes (no inline styles)
- Every component must have a `.test.tsx` and `.stories.tsx`
- Use `cn()` from `@/lib/utils` for conditional class merging

### Component Architecture

- **Component Structure**: Follow the modlet pattern — each component lives in its own folder with:
  - `ComponentName.tsx`
  - `ComponentName.test.tsx`
  - `ComponentName.stories.tsx`
  - `index.ts`
  - `types.ts` (optional, for complex types)
- **Obra components**: Live in `src/components/obra/` — these are Figma-connected primitives
- **Common components**: Live in `src/components/common/` — these are composed higher-level components

### Shadcn UI

- Use Obra components from `src/components/obra/` wherever possible
- Install new shadcn primitives via `npx shadcn@latest add [component-name]` if a primitive is missing

### Import Alias

Use `@/` for all src-relative imports:

```ts
import { cn } from '@/lib/utils';
import { Button } from '@/components/obra/Button';
import { Avatar } from '@/components/obra/Avatar';
```
