# Hands-on JS (10x-js-handson)

A clean, zero-dependency hands-on project demonstrating fundamental JavaScript language mechanics: variable declarations, arithmetic operations, type coercion, string concatenation, and helper functions.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [How to Run](#how-to-run)
  - [Option A: In the Browser](#option-a-in-the-browser)
  - [Option B: In Node.js](#option-b-in-nodejs)
- [Code Walkthrough](#code-walkthrough)
- [Expected Output](#expected-output)
- [Documentation](#documentation)

---

## Project Structure

```text
10x-js-handson/
├── index.html        # HTML5 entry point linking script.js
├── script.js         # JavaScript execution logic
├── README.md         # Human-oriented project documentation
├── AGENTS.md         # Instructions and operational constraints for AI agents
├── CLAUDE.md         # Symlink to AGENTS.md
├── .gitignore        # Ignores plans/ directory
└── plans/            # Planning and task tracking files
```

---

## Prerequisites

- **Browser:** Any modern web browser (Google Chrome, Firefox, Safari, Microsoft Edge).
- **Node.js (Optional):** Node.js v14+ if running from the command line.

No package manager (`npm` or `yarn`) or build step is required.

---

## How to Run

### Option A: In the Browser
1. Open `index.html` in your web browser (double-click the file or open it via your browser's file menu).
2. Open Developer Tools:
   - **macOS:** `Cmd + Option + I`
   - **Windows / Linux:** `F12` or `Ctrl + Shift + I`
3. Switch to the **Console** tab to view the logged output.

### Option B: In Node.js
Open your terminal in this repository directory and run:

```bash
node script.js
```

---

## Code Walkthrough

The script executes 4 primary steps in sequence:

1. **Step 1 — Connection Check:** Confirms the script loaded properly.
2. **Step 2 — Uninitialized Variables:** Declares `var first;` and `let second;` without values and prints them, demonstrating that unassigned variables evaluate to `undefined`.
3. **Step 3 — Operations on Numbers:** Evaluates operations using numbers `12` and `4`:
   - `12 * 4` = `48` (Multiplication)
   - `12 + 4` = `16` (Addition)
   - `12 - 4` = `8` (Subtraction)
   - `12 / 4` = `3` (Division)
   - `12 + "" + 4` = `"124"` (String concatenation via empty string coercion)
   - `12 + "$" + 4` = `"12$4"` (String concatenation with delimiter)
4. **Step 4 (Bonus) — Average Function:** Declares an `average(a, b)` function returning `(a + b) / 2` and logs `average(12, 4)` = `8`.

---

## Expected Output

Both the browser developer console and terminal will produce:

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

---

## Documentation

- **[AGENTS.md](AGENTS.md):** Guidelines, technical boundaries, and verification instructions for automated AI coding agents.
