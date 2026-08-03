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

## Localization
- Any user-visible text in components, including button labels, titles, placeholders, and aria labels, must come from the i18n locale files.
- Reuse existing namespaces first; for header or layout controls, prefer adding keys under the most relevant existing section instead of hardcoding strings.

## Tailwind conventions
- Prefer canonical Tailwind arbitrary CSS variable class syntax.