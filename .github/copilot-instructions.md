# Copilot instructions for todo-app-with-github-copilot

Purpose
- Short, static single-page Todo app. These notes help future Copilot sessions make targeted edits and tests.

Build / Test / Lint
- No build system, test suite, or linter configured in this repo.
- Run locally: open index.html in a browser.
- Serve locally (recommended for features requiring fetch/CORS):
  - Python: python3 -m http.server 8000
  - Node (if available): npx http-server . -p 8000
- Tests: none. When adding tests, include a command in package.json or a test runner script so Copilot can auto-detect how to run a single test (e.g., npm test -- <testname>).

High-level architecture
- Files:
  - index.html: minimal HTML shell and markup (input, add button, list container, theme toggle).
  - script.js: app logic — DOM manipulation, event wiring, localStorage persistence, theme handling.
  - style.css: visual styles and dark-mode theme via body.dark-mode.
- Data model: todos are objects { id: number, text: string, completed: boolean } persisted to localStorage under key "todos". IDs are generated using Date.now().
- Lifecycle:
  - On DOMContentLoaded -> loadTheme() and loadTodos().
  - Adding a todo: addTodo() creates an object, saves to localStorage, calls renderTodo(), and clears/focuses the input.
  - Rendering: renderTodo() uses innerHTML and inline onclick attributes referencing global functions (toggleTodo, deleteTodo).
  - Toggling theme: themeToggle toggles body.dark-mode and stores boolean string under key "darkMode".

Key conventions and repository-specific patterns
- Persistence keys: localStorage keys are authoritative: "todos" and "darkMode".
- IDs are numeric timestamps (Date.now()). Code assumes numeric equality for lookup.
- DOM event wiring: the app mixes addEventListener for some elements and inline onclick attributes in dynamically created HTML. Inline handlers depend on those functions being globally accessible.
- Safety: user text is escaped with escapeHtml() before insertion, but renderTodo uses innerHTML; keep escapeHtml when modifying the renderer.
- Small single-file SPA: logic is not modularized. Large edits are safer if done by extracting logic into named functions and avoiding reliance on globals.
- UX details that are relied on elsewhere:
  - Empty list shows a div.empty-message instead of an empty <ul>.
  - Checkbox inputs are created with a class .todo-checkbox and the text span uses .todo-text and .completed classes.
  - Theme toggle uses emoji text content to show state and expects "true"/"false" string in localStorage.

Guidance for Copilot sessions
- When modifying event wiring, update both inline onclick usage and global function names, or prefer converting inline handlers to addEventListener on created elements.
- When adding persistence (API/backend), change getTodosFromLocalStorage/addToLocalStorage/removeFromLocalStorage to an abstraction layer so search-and-replace is straightforward.
- If adding tests, refactor DOM logic into small, pure helpers (e.g., serialize/deserialize, renderItemNode(todo)) so Copilot can generate unit tests for pure functions.

Other AI assistant configs checked
- No CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, or .clinerules were found.

Files touched
- .github/copilot-instructions.md  (updated)
- package.json (added)
- playwright.config.js (added)
- tests/e2e.spec.js (added)
- .github/workflows/playwright.yml (added)

MCP servers
- Playwright configured: a minimal Playwright setup and an example E2E test were added.
  - Start a local server: npm start  (or python3 -m http.server 8000)
  - Run tests: npm run test:e2e
  - CI: .github/workflows/playwright.yml runs the tests on push/pull_request.

