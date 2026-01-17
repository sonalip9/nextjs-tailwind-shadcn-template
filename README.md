# Next.js + Tailwind + shadcn/ui Starter Template

A **production-ready GitHub template** for building modern web apps with:

- ⚡ Next.js (App Router)
- 🎨 Tailwind CSS
- 🧩 shadcn/ui (Radix-based components)
- 🔒 TypeScript (strict by default)

Designed to give you **strong defaults without getting in your way**.

---

## Why This Template

This template is opinionated in the right places:

- Uses **Next.js App Router**
- Encourages **server-first architecture**
- Avoids unnecessary abstractions
- Plays nicely with shadcn/ui’s component model
- Optimized for long-term maintainability

You can start building immediately without spending an afternoon setting things up.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide (via shadcn)
- **Linting**: ESLint
- **Formatting**: Prettier (optional)

---

## Project Structure

```txt
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── atoms/
│   │   ├── box/        # Box, HBox, VBox
│   │   ├── button/
│   │   ├── input/
│   │   ├── switch/
│   │   ├── text/
│   │   └── index.ts
│   ├── molecules/
│   │   └── theme-toggle/
│   ├── organisms/
│   └── ui/            # shadcn components only
├── lib/
│   └── utils.ts       # shared utilities (cn, helpers)
├── public/
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Then open:
👉 [http://localhost:3000](http://localhost:3000)

---

## Using shadcn/ui

Add components as needed:

```bash
npx shadcn@latest add button
```

- Components are added to `components/ui`
- Styling is handled via Tailwind
- Customization happens via props and class names

---

## Styling Philosophy

- Tailwind for layout, spacing, typography
- Minimal custom CSS
- Design consistency via utility classes
- Components stay flexible and composable

## Design Tokens

- Tokens live in `app/globals.css` as CSS variables
- Tailwind maps colors, spacing, typography, and radius to tokens
- Use semantic utilities like `text-h1`, `p-md`, `gap-sm`
- Dark mode swaps token values via the `.dark` class

## Atomic Structure

- Atoms: layout primitives (Box/HBox/VBox), text, buttons, thin shadcn wrappers
- Molecules: small composed UI blocks with intent
- Organisms: page-level sections or forms
- `components/ui` is for shadcn/ui components only

---

## Deployment

This template works out of the box with:

- Vercel
- Netlify
- Self-hosted Node.js

No platform-specific code included.

---

## Recommended Practices

- Server Components first
- Client Components only when needed
- Keep components small and focused
- Extract logic into hooks
- Avoid global state unless required

---

## Who This Is For

- Developers who value **clean architecture**
- Teams building **real products**, not demos
- People who prefer boring, reliable code

---

## License

MIT — do whatever you want, just don’t make it worse.
