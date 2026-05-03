# Todo App with GitHub Copilot

A simple, static single-page Todo application built with vanilla JavaScript, HTML, and CSS. This app allows users to add, toggle, and delete todos, with persistence using localStorage and a dark mode theme toggle.

## Features

- ✅ Add new todos
- ✅ Mark todos as completed/incomplete
- ✅ Delete todos
- ✅ Persistent storage (localStorage)
- ✅ Dark mode toggle
- ✅ Responsive design
- ✅ End-to-end tests with Playwright

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js (optional, for running tests or serving locally with npm)

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/allx1m1k/todo-app-with-github-copilot.git
   cd todo-app-with-github-copilot
   ```

2. Open `index.html` directly in your browser:
   - Double-click the file or drag it into your browser window
   - Or use your browser's "Open File" feature

For features requiring fetch/CORS (if extended in the future), serve locally:

**Using Python:**
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using Node.js:**
```bash
npx http-server . -p 8000
```
Then open `http://localhost:8000` in your browser.

**Using npm (if package.json has a dev script):**
```bash
npm run dev
```

## Usage

- **Add a Todo:** Type in the input field and press Enter or click the "Add Todo" button.
- **Mark as Complete:** Click the checkbox next to a todo.
- **Delete a Todo:** Click the "Delete" button next to a todo.
- **Toggle Theme:** Click the theme toggle button (sun/moon icon) to switch between light and dark modes.

Todos are automatically saved to your browser's localStorage and will persist between sessions.

## Project Structure

```
todo-app-with-github-copilot/
├── index.html          # Main HTML file
├── script.js           # Application logic
├── style.css           # Styles and themes
├── package.json        # Dependencies and scripts
├── playwright.config.js # Playwright configuration
├── tests/
│   └── e2e.spec.js     # End-to-end tests
└── .github/
    └── workflows/
        └── playwright.yml  # CI workflow
```

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling and dark mode
- **Vanilla JavaScript** - Logic and DOM manipulation
- **localStorage** - Data persistence
- **Playwright** - End-to-end testing

## Testing

The project includes end-to-end tests using Playwright.

### Running Tests

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the tests:
   ```bash
   npm run test:e2e
   ```

Tests will run in headless mode by default. Results are saved in the `test-results/` directory.

### CI/CD

Tests are automatically run on push and pull requests via GitHub Actions (see `.github/workflows/playwright.yml`).

## Development

This is a simple static app with no build process. Edit the files directly:

- `index.html` - Modify the HTML structure
- `script.js` - Update application logic
- `style.css` - Change styling and themes

For development with live reload, use a local server as described in "Running Locally".

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run tests: `npm run test:e2e`
6. Submit a pull request

## License

This project is open source. Feel free to use and modify as needed.