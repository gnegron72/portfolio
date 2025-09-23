# Repository Guidelines

## Project Structure & Module Organization
Core screens live in `app/`; `page.tsx` composes sections while `layout.tsx` owns metadata and theming. Shared UI sits in `components/layout`, narrative sections in `components/sections`, and reusable primitives in `components/ui`. Global CSS belongs in `styles/globals.css`, static files in `public/`, and product framing notes in `CLAUDE.md`. Never check in `.next/` artifacts or Docker build output.

## Build, Test, and Development Commands
Install dependencies with `npm install`. `npm run dev` launches the local Next.js server with hot reload. Build production assets via `npm run build` and validate them either with `npm run start` or the standalone Docker flow. Run `npm run lint` before every commit for TypeScript, accessibility, and link checks. Container work uses `npm run docker:build`, `npm run docker:start`, and `npm run docker:stop`.

## Coding Style & Naming Conventions
Write TypeScript-first React components; add `'use client'` only when interactivity demands it. Follow the prevailing two-space indentation and favor functional, stateless components. Name component files in `PascalCase.tsx`, utilities in `camelCase.ts`, and colocate styles or data constants beside the consumer. ESLint (`next/core-web-vitals`) is the source of truth—resolve warnings rather than suppressing them.

## Testing Guidelines
No automated suite exists yet, so introduce React Testing Library with Vitest or Jest as coverage grows. Place component tests next to their sources (`components/sections/HeroSection.test.tsx`) and broader integration specs under `app/__tests__/`. Until tests are configured, document manual verification in pull requests and rerun `npm run lint` after significant UI changes.

## Commit & Pull Request Guidelines
Use short, present-tense Conventional Commit messages (`feat: add skills matrix animation`) and keep the subject under 72 characters. Pull requests should explain the problem, the solution, affected routes, and manual test evidence. Include screenshots or recordings for visual updates, link any related product notes in `CLAUDE.md`, and request a peer review before merging.

## Environment & Security Notes
Store local secrets in `.env.local` and reference required keys in documentation instead of committing them. When using Docker, provide the same env file via `--env-file`. Treat analytics IDs or API tokens as configuration, rotate exposed credentials immediately, and describe mitigation steps in the corresponding pull request.
