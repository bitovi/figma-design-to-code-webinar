# Button

Obra UI button primitive with 5 variants, 4 sizes, and 2 roundness modes.

## Figma Source

https://www.figma.com/design/z6KFvMeKnhIAGbQP7tOSkE/Obra-shadcn-ui--Figma-to-code-webinar-?node-id=9-1071

## Design-to-Code Mapping

```mermaid
flowchart LR
    subgraph Figma["Figma Variants"]
        FVariant["Variant"]
        FSize["Size"]
        FRoundness["Roundness"]
        FState["State"]
    end

    subgraph React["React Props"]
        RVariant["variant"]
        RSize["size"]
        RRoundness["roundness"]
        RDisabled["disabled (native)"]
    end

    FVariant -->|"Primary → 'primary'<br>Secondary → 'secondary'<br>Outline → 'outline'<br>Ghost → 'ghost'<br>Destructive → 'destructive'"| RVariant
    FSize -->|"Mini → 'mini'<br>Small → 'sm'<br>Default → 'default'<br>Large → 'lg'"| RSize
    FRoundness -->|"Default → 'default'<br>Round → 'round'"| RRoundness
    FState -->|"Disabled → disabled attr<br>Hover/Focus → CSS :pseudo-classes"| RDisabled

    style Figma fill:#f3e8ff,stroke:#9333ea
    style React fill:#dbeafe,stroke:#3b82f6
```

### Variant Mappings

| Figma Property | Figma Value | React Prop | React Value |
|---------------|-------------|------------|-------------|
| Variant | Primary | `variant` | `'primary'` |
| Variant | Secondary | `variant` | `'secondary'` |
| Variant | Outline | `variant` | `'outline'` |
| Variant | Ghost | `variant` | `'ghost'` |
| Variant | Destructive | `variant` | `'destructive'` |
| Size | Mini | `size` | `'mini'` |
| Size | Small | `size` | `'sm'` |
| Size | Default | `size` | `'default'` |
| Size | Large | `size` | `'lg'` |
| Roundness | Default | `roundness` | `'default'` |
| Roundness | Round | `roundness` | `'round'` |
| State | Disabled | `disabled` | `true` |
| State | Hover & Active | — | CSS `:hover` |
| State | Focus | — | CSS `:focus-visible` |

## Usage

```tsx
import { Button } from '@/components/obra/Button';

<Button>Label</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline" size="sm">Small Outline</Button>
<Button variant="destructive" size="lg">Delete</Button>
<Button roundness="round">Pill Button</Button>
<Button disabled>Disabled</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive'` | `'primary'` | Visual style |
| `size` | `'mini' \| 'sm' \| 'default' \| 'lg'` | `'default'` | Size (height: 24/32/36/40px) |
| `roundness` | `'default' \| 'round'` | `'default'` | Corner radius shape |
| `children` | `ReactNode` | — | Button content |
| `className` | `string` | — | Additional Tailwind classes |
| `...rest` | `ButtonHTMLAttributes` | — | Native button attributes |
