# GitHub Copilot Instructions

You are assisting in a **production-grade Next.js project** using:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (BaseUI-based components)

Your goal is to generate **clean, maintainable, idiomatic code** that aligns with the conventions below and apply changes incrementally.

## General Principles

- Prefer **clarity over cleverness**
- Follow **React + Next.js best practices**
- Keep code **simple, composable, and readable**
- Avoid premature abstractions
- Assume this code will be maintained by a senior engineer
- Always use the latest stable versions of libraries and frameworks
- `README.md` contains setup and architectural decisions
- Do not introduce features, tools, or patterns not justified by the README
- If something is unclear, choose the simplest reasonable default

## Mandatory Git Workflow

### Incremental Commits (Strict)

- Changes MUST be made in **small, logical steps**
- After each step:
  - Stage only relevant files
  - Create a commit immediately
- Never bundle unrelated changes
- Never wait until the end to commit

### Conventional Commits (Required)

Use the following format:

```

<type>: <short description>

```

Allowed types:

- feat
- fix
- chore
- docs
- refactor
- test

Examples:

- feat: initialize next.js app router
- chore: configure tailwind css
- feat: add shadcn ui button component
- docs: update readme setup steps

Rules:

- Use lowercase
- Be specific
- One concern per commit

## Tech Stack Rules

### Next.js

- Use the **App Router**
- Prefer **Server Components by default**
- Use `"use client"` only when required
- Follow `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` conventions
- Keep logic out of JSX where possible

### TypeScript

- Strict typing is required
- Avoid `any`
- Prefer explicit types for:
  - Component props
  - Function return values (when non-trivial)
- Prefer inference only when it improves clarity

### Styling (Tailwind CSS)

- Use Tailwind utility classes
- Avoid inline styles
- Avoid custom CSS unless unavoidable
- Group classes logically
- Use `cn()` for conditional class composition
- Use design token utilities for spacing, typography, color, and radius
- No hardcoded spacing values in components

### shadcn/ui

- Use shadcn/ui components when available
- Do not recreate existing shadcn components
- Extend via props instead of copying code
- Keep component APIs minimal and predictable

## Components & Structure

- Use **function components**
- Prefer named exports
- Keep components focused on a single responsibility
- Extract reusable logic into hooks
- Avoid deeply nested JSX
- Enforce atomic design structure:
  - atoms: layout primitives (Box/HBox/VBox), text, buttons, thin shadcn wrappers
  - molecules: small compositions with intent
  - organisms: page-level sections or forms
- Layout primitives are always atoms (layout ≠ intent)
- components/ui contains only shadcn/ui components
- Every component in components/ui must have a wrapper in atoms/molecules/organisms when used

## File & Folder Conventions

- Atomic component folders use `kebab-case` with lowercase files (e.g. `box/box.tsx`)
- Higher-level components may use `PascalCase.tsx` when appropriate
- Hooks: `useSomething.ts`
- Utilities: `kebab-case.ts`
- Keep related files close together
- Avoid large “utils” dumping grounds

## Data & Fetching

- Use server-side data fetching where possible
- Prefer `fetch` with caching semantics
- Handle loading and error states explicitly
- Do not assume client-side state unless required

## What to Avoid

- Large commits
- Over-engineered patterns
- Excessive abstractions
- Magic constants
- Premature abstractions
- Global state without justification
- Business logic inside JSX
- Unnecessary dependencies

## Code Quality Bar

Generated code should be:

- Professional
- Predictable
- Boring (in a good way)
- Easy to refactor
- Suitable for long-term maintenance
