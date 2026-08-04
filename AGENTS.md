# Agents Configuration

## Overview

XPTO is a single-package full-stack TypeScript app (not a monorepo) built with [TanStack Start](https://tanstack.com/start/latest/docs/framework/react/overview) (React, Vite). It serves both frontend and API on port 3000.

## Key Libraries

| Area                 | Library                                                                  | Docs                                      |
| -------------------- | ------------------------------------------------------------------------ | ------------------------------------------|
| Frontend framework   | React                                                                    | https://react.dev                         |
| Full-stack framework | TanStack Start                                                           | https://tanstack.com/start/latest         |
| Router               | TanStack React Router                                                    | https://tanstack.com/router/latest        |
| Server state         | TanStack React Query                                                     | https://tanstack.com/query/latest         |
| Styling              | Tailwind CSS                                                             | https://tailwindcss.com                   |
| Icons                | React Icons                                                              | https://react-icons.github.io/react-icons |

### Key Config Files

- `vite.config.ts` — Vite + TanStack Start + Tailwind
- `tsconfig.json` — ES2022, strict mode, path alias `@/*` → `./src/*`

## Environment Variables

Copy `.env.example` to `.env` if not present. Key notes for local dev:

- `APP_URL` — local dev server origin on port 3000.

## Common Commands

| Task                          | Command                                                         |
| ----------------------------- | --------------------------------------------------------------- |
| Install dependencies          | `pnpm install`                                                  |
| Dev server (port 3000)        | `pnpm dev`                                                      |
| Start production server       | `pnpm start`                                                    |

## Dependency versioning
- Never use `latest` in `package.json` (`dependencies` or `devDependencies`).
- Always use explicit semver versions, either pinned (`1.170.18`) or caret ranges (`^1.170.18`), based on the currently installed lockfile-resolved version.
- Caret ranges are allowed and preferred for normal dependency updates.
- When adding or updating a package, avoid tags/ranges like `latest` and keep `package.json` aligned with `pnpm-lock.yaml`.


## Project Structure
```
src/
  components/     UI, resume, layout, animation, theme, locale components
  routes/         File-based routing (TanStack React Router)
  integrations/   Feature modules (auth, email, jobs, storage)
  utils/          Utility functions
  dialogs/        Modal/dialog components
  hooks/          Custom React hooks
  styles/         CSS and Tailwind configuration
```

## File and folder naming
- Files and folders should always be named in english.

## Components
- Component names should be concise and describe the section or utility they contain. They should not have irrelevant su/prefixes such as "Harmonized" or "Refactored".
- Avoid duplicating UI markup or logic when the same pattern appears more than once; extract a shared component or hook instead.
- Each sub component that is complex enough to have it's own file should also have it's own folder.
- Component file names should match their main component name. Use an `index.ts` to handle import/export of the component file easily like:
  ```
  import MyComponent from "./MyComponent";
  export default MyComponent;
  ```
- Always "export default" components.

## Separation of concerns
- Always separate concerns (UI/Logic) with a `use[ComponentName].ts` file/hook.

## Utilities
- Any new utility function under `src/utils/` must include a concise comment that explains what it does and its expected inputs/outputs.
- Avoid ambiguous utility names. Prefer descriptive names when the behavior is not obvious from usage.
- Group related utility functions into a single file when they are used together or share a common purpose. For example, `src/utils/formatters.ts` can contain multiple formatting functions.

## Localization
- Any user-visible text in components, including button labels, titles, placeholders, and aria labels, must come from the i18n locale files.
- Reuse existing namespaces first; for header or layout controls, prefer adding keys under the most relevant existing section instead of hardcoding strings.

## Tailwind conventions
- Prefer canonical Tailwind arbitrary CSS variable class syntax.
- Keep component-local styling in Tailwind utilities inside the component. Do not add single-use classes to `src/styles/app.css` for buttons, selects, icons, or other local UI controls unless a real CSS-only limitation makes it necessary.

## Design system
- Reusable UI primitives live in `src/components/ui/`.
- Prefer the shared UI primitives across routes and components.
- Before creating custom markup for a control or container, check whether an existing `ui` primitive already fits and extend it there first when the pattern is reused.
- Override `ui` primitives with `className` only when the existing API is close and the override is local; if the same override appears more than once, promote it into the design-system component API instead.
- Only add design-system components that are already used by the product or are required by an active feature. Do not scaffold unused primitives just to fill out a catalog.