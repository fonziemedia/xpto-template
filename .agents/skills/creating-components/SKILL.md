---
name: creating-components
description: Use when creating new components in src/components. Covers component structure, tests, and what to avoid.
---

# Creating Components

## Component Structure

```
src/components/MyComponent/
├── MyComponent.tsx      # Implementation
├── useMyComponent.ts    # Hook for translated data and derived values
├── MyComponent.test.tsx # Tests
├── index.ts             # Re-exports
└── __snapshots__/       # Vitest snapshots (auto-generated)
```

After creating, export from `src/components/index.ts`.

## Implementation Pattern

Use a small, focused component plus a dedicated hook for translated data or derived values. Keep the component mostly presentational, compose existing UI primitives, and expose `className` for local styling overrides.

```tsx
// src/components/MyComponent/MyComponent.tsx
import { Button } from "@/components/UI";
import mergeClassNames from "@/utils/componentStyling";
import useMyComponent from "./useMyComponent";

type MyComponentProps = {
  className?: string;
};

export default function MyComponent({ className }: MyComponentProps) {
  const { title, description, primaryCta, secondaryCta } = useMyComponent();

  return (
    <section className={mergeClassNames("space-y-4", className)}>
      <p className="island-kicker">{title}</p>
      <h2 className="display-title">{title}</h2>
      <p className="text-(--sea-ink-soft)">{description}</p>

      <div className="flex flex-wrap gap-3">
        <Button href="#contact">{primaryCta}</Button>
        <Button href="#what-we-do" variant="secondary">
          {secondaryCta}
        </Button>
      </div>
    </section>
  );
}
```

```tsx
// src/components/MyComponent/useMyComponent.ts
import { useTranslation } from "react-i18next";

export default function useMyComponent() {
  const { t } = useTranslation();

  return {
    title: t("home.title"),
    description: t("home.description"),
    primaryCta: t("home.ctaPrimary"),
    secondaryCta: t("home.ctaSecondary")
  };
}
```

```ts
// src/components/MyComponent/index.ts
export { default } from "./MyComponent";
```

Patterns to follow:

- Prefer existing primitives such as `Button`, `Card`, and `IconButton` from `@/components/UI`.
- Keep data fetching, translations, and derived lists in a sibling `use[ComponentName].ts` hook.
- Use `mergeClassNames` for local class composition instead of ad-hoc string logic.
- Keep user-facing text in i18n, not hardcoded in the component. Prefer `useTranslation()` and existing locale namespaces over passing raw strings through props.
- Export the component from the feature folder and from the top-level component barrel when needed.

## Tests

**What to test:**

- Snapshots (1-2 covering key variants)
- User interactions
- Behavior (callbacks called with correct args)

**What NOT to test:**

- CSS classes, attributes (use snapshots instead)
- Internal state
- Things TypeScript already enforces

**Consolidate tests.** One test can cover multiple related assertions. An exception to that is snapshot tests - one snapshot per variant/state.

## Avoiding Duplication

Before creating a new component, check if an existing one can be extended.

**Pattern: Discriminated unions for mode variants**

Example: Instead of creating `SingleSelect` and `MultiSelect` components:

```tsx
type Props =
  | { multiple?: false; selected: string; onChange: (id: string) => void }
  | { multiple: true; selected: string[]; onChange: (ids: string[]) => void };
```

TypeScript enforces correct types based on the `multiple` prop.

## Classes for customization

Where it's likely that a component will need custom styling, expose a `className` prop.

If there are many parts that may need styling, consider exposing a `classes` prop with specific class names for each part. Define a type for the `classes` prop.

## Strings

All user-facing strings go through i18n - no hardcoded UI text.
Prefer `useTranslation()` and existing locale namespaces for component text. Only use a `labels` prop when the text is truly a reusable primitive API concern and not part of the project’s standard translation flow.

## Accessibility

Make sure all interactive elements are accessible via keyboard and screen readers.
Use semantic HTML elements whenever possible.
Provide appropriate ARIA attributes for custom components.

## Checklist

- [ ] Component in `src/components/MyComponent/`
- [ ] Exported from `src/components/index.ts`
- [ ] UI component in `src/components/UI/MyComponent/` (if applicable)
- [ ] Exported from `src/components/UI/index.ts` (if applicable)
- [ ] Dialog component in `src/components/Dialogs/MyComponent/` (if applicable)
- [ ] Exported from `src/components/Dialogs/index.ts` (if applicable)
- [ ] Tests cover behavior, not implementation
- [ ] Tests consolidated (not one per variant)
- [ ] No CSS class assertions in tests
- [ ] No duplicate component when extending existing one works
