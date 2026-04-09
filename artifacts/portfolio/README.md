# Portfolio Website

A polished single-page portfolio built with React + Vite and Tailwind CSS.

## Customization

Every placeholder is marked with a `// TODO` comment. Search the `src/` directory for `TODO` to find:

- Your name and initials (Hero section)
- Your tagline and about paragraph
- Project titles, descriptions, and links
- Your email address
- Social media profile URLs (Twitter/X, LinkedIn, GitHub)

## Development

### Requirements

This project runs as part of a Replit pnpm workspace. Two environment variables are required:

- `PORT` — the local port to bind the dev server (set automatically by Replit)
- `BASE_PATH` — the URL base path prefix (set automatically by Replit, defaults to `/`)

These are set automatically when running through the Replit artifact system. For local development outside Replit:

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio run dev
```

### Commands

```bash
# Start dev server
pnpm --filter @workspace/portfolio run dev

# Type check
pnpm --filter @workspace/portfolio run typecheck

# Build for production
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/portfolio run build
```

## Structure

```
src/
  pages/
    home.tsx        # Main portfolio page (all sections)
    not-found.tsx   # 404 page
  lib/
    use-scroll-reveal.ts  # IntersectionObserver scroll animation hook
    utils.ts
  components/ui/    # shadcn/ui component library
  App.tsx           # Router setup
  index.css         # Theme, palette, and global styles
```

## Sections

1. **Hero** — Name, title, and headline
2. **Philosophy** — Core values statement
3. **About** — Background and experience
4. **Selected Work** — Project showcase with AI-generated thumbnails
5. **Approach** — Working style and process
6. **Contact** — Email and social links
