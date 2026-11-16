# AGENTS.md — Agent Operations & Architectural Boundaries

This file is tailored for AI agents, automated coding assistants, and subagents operating within the `10x-js-handson` repository.

---

## 1. Project Mission & Identity

- **Scope:** Pure vanilla JavaScript hands-on exercise demonstrating basic language primitives.
- **Complexity Level:** Minimal / Educational.
- **Dependencies:** **Zero external dependencies.** Do not install npm packages, create `package.json`, or introduce bundling/transpilation unless explicitly instructed by the user.

---

## 2. Directory Layout & Key Files

| Path | Purpose | Modification Policy |
| :--- | :--- | :--- |
| `index.html` | Minimal HTML5 canvas hosting `<script src="script.js"></script>` | Keep minimal; do not add CSS or frameworks unless asked |
| `script.js` | Executable JavaScript containing console operations | Maintain clean step numbering and explicit console statements |
| `README.md` | Human-facing guide | Keep updated if steps or output change |
| `AGENTS.md` | This document | Update if agent workflows or project boundaries evolve |
| `CLAUDE.md` | Symlink to `AGENTS.md` | Keep pointed to `AGENTS.md` |
| `plans/` | Task planners and TODO checklists | Ignored by Git; follow `lavi-plan-first` conventions |

---

## 3. Core Behavioral Constraints

1. **Keep it Vanilla:**
   - Do NOT introduce build tools (e.g., Webpack, Vite, Babel).
   - Do NOT add Node modules, `package.json`, or npm/yarn commands.
   - Ensure `script.js` runs identically in browser DevTools and via CLI (`node script.js`).

2. **Dual-Environment Compatibility:**
   - Avoid Node-specific APIs (`fs`, `path`, `process`).
   - Avoid browser-specific APIs (`window`, `document`, DOM manipulations) inside `script.js` unless requested.
   - Rely strictly on standard ECMAScript console output and language primitives.

3. **Step Integrity:**
   - Maintain sequential step annotations (e.g., `// Step 1: ...`, `// Step 2: ...`).
   - Any addition should follow the numeric step pattern.

---

## 4. Verification Workflow

Before reporting completion on any changes to `script.js`, execute the verification command:

```bash
node script.js
```

### Expected Baseline Output (Exact Match):
```text
script.js is running
undefined
undefined
48
16
8
3
124
12$4
8
```

Verify that:
- Exit code is `0`.
- No runtime errors or unhandled exceptions are thrown.
- Exactly 10 lines of output are generated.

---

## 5. Coding Standards

- **Variables:** Use `const` by default, `let` when reassignment is needed, and `var` only when deliberately illustrating hoisting/historical scope mechanics (as in Step 2).
- **Style:** 2-space indentation, trailing semicolons, double or single quotes used consistently.
- **Comments:** Concise step headers explaining the language mechanic being exercised.
