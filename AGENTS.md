## Engineering principles

- Prefer simple, focused changes that solve the underlying problem without unrelated refactors.
- Preserve existing behavior unless the task explicitly calls for a behavior change.
- Reuse existing components, utilities, and patterns before introducing new abstractions or dependencies.
- Keep changes readable, maintainable, and consistent with the surrounding code.

## Architecture and code organization

- Keep route composition in `app/`, feature UI and behavior in `templates/`, reusable UI primitives in `components/`, and shared helpers in `lib/`.
- Keep Prisma schema changes in `prisma/schema.prisma`; treat `generated/` as generated output and do not edit it by hand.
- Keep feature-specific components and server actions near their feature. Promote code to shared locations only when it has multiple genuine consumers.
- Use the `@/*` path alias for project imports.

## TypeScript standards

- Keep strict typing; prefer explicit domain types, inferred return types, and narrow unions over `any` or unchecked casts.
- Validate and narrow values received from external sources before treating them as trusted domain data.
- Keep types close to the feature that owns them; share them only when multiple features need them.
- Do not suppress type errors to make a build pass. Fix the underlying mismatch or explain why a narrow suppression is necessary.

## React and Next.js standards

- Follow the installed Next.js version's documentation and the generated Next.js guidance below; do not assume APIs from other versions.
- Default to Server Components. Add `"use client"` only where browser APIs, state, effects, or event handlers require a client boundary.
- Keep client boundaries small and avoid moving server-only work into the browser.
- Use semantic HTML, keep components focused, and derive values instead of duplicating state where practical.
- Follow existing Tailwind CSS and shared UI component patterns; keep layouts responsive and handle loading, empty, and error states.

## Testing and TDD

- For behavior changes, add or update focused Jest tests and follow a red-green-refactor cycle where practical.
- Prefer tests that verify observable behavior; avoid tests coupled to implementation details.
- Run the relevant tests with `npm test -- --runInBand`, and run `npm run lint` and `npm run build` when appropriate to the change.
- If no suitable test exists or a check cannot run, state that clearly and explain the limitation; do not claim unrun checks passed.

## Error handling and validation

- Treat request bodies, URL parameters, database input, and third-party responses as untrusted; validate them at system boundaries.
- Handle expected failures explicitly and return errors in the established shape. Do not silently swallow errors or substitute success-shaped defaults.
- Catch errors only when the code can recover, translate them, or add useful context; preserve cancellation behavior for aborted requests.
- Avoid exposing secrets, internal details, or raw stack traces to users.

## Accessibility

- Use semantic landmarks and native controls; give interactive elements clear accessible names and keyboard behavior.
- Do not make a non-interactive element clickable without providing appropriate semantics and keyboard support.
- Preserve visible focus, sufficient contrast, and meaningful labels for form fields and status messages.
- Check responsive layouts and accessible states when changing UI.

## AI agent workflow

- Read the relevant source files and existing conventions before editing; keep the diff focused and preserve unrelated work.
- For Next.js code changes, consult the relevant guide under `node_modules/next/dist/docs/` before implementation.
- Use available project skills when relevant: Playwright CLI for browser-level UI verification and Matt Pocock guidance for TypeScript-specific questions. These are supplementary to the installed framework docs and repository conventions.
- Do not assume a planned skill or tool is installed; use it only when available.
- Ask for clarification when a requirement has materially different reasonable interpretations; otherwise make the smallest safe assumption.

## Definition of done

- The requested behavior or documentation is complete, and related states or affected surfaces are handled consistently.
- Changes follow these instructions and do not introduce unrelated modifications.
- Relevant tests, lint, and build checks have been run when feasible; report exactly what passed, failed, or was not run.

## Agent skills

### Issue tracker

Issues and specs live under `.scratch/<feature>/` as Markdown; see `docs/agents/issue-tracker.md`.

### Triage labels

Use the canonical labels `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`; see `docs/agents/triage-labels.md`.

### Domain docs

Use the single-context layout with a root `GLOSSARY.md` and `docs/adr/`; see `docs/agents/domain.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
