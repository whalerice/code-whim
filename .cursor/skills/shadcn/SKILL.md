---
name: shadcn
description: Manages shadcn/ui in this monorepo — CLI, components.json, presets, registries, and composition. Use when working with shadcn/ui, `components.json`, `packages/ui`, adding or updating primitives, or when the user mentions shadcn init, presets, or registries.
disable-model-invocation: false
---

# shadcn/ui (Cursor)

## Canonical instructions

Read and follow the full skill at **`.claude/skills/shadcn/SKILL.md`** in this repository. Use its linked references:

- `.claude/skills/shadcn/rules/` — styling, forms, composition, icons, base-vs-radix
- `.claude/skills/shadcn/cli.md`, `customization.md`, `mcp.md`

Those files include workflows, CLI commands, preset/merge rules, and Incorrect/Correct examples.

## This monorepo

- **Package manager:** `pnpm`. Prefer **`pnpm dlx shadcn@latest`** wherever the canonical skill shows `npx shadcn@latest`.
- **configs:** `apps/web/components.json` and `packages/ui/components.json` exist — run CLI from the directory whose `components.json` you are changing, or use flags documented in `cli.md`.

## CLI notes (Cursor)

The `.claude` SKILL may reference ``!`npx shadcn@latest info --json` `` style injection — that is Claude Code–specific. In Cursor, run **`pnpm dlx shadcn@latest info --json`** yourself when you need live project context.
