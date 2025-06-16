# Playwright : Hacker News Sorting Test

---

## About This Assignment

This project was completed as part of a take-home assignment for the [QA Engineer role at QA Wolf](https://www.task-wolf.com/apply-qae). The assignment required building an automated Playwright test in JavaScript to demonstrate technical skills in web automation, debugging, and best practices. The goal was to validate the sorting of articles on Hacker News, reflecting real-world QA tasks such as:

- Creating and maintaining Playwright tests
- Debugging with browser tools
- Communicating results clearly
- Delivering reliable, maintainable automation

For more details on the role and assignment, see the [QA Wolf job description](https://www.task-wolf.com/apply-qae).

---

## Features

- **Automated Pagination:** Navigates through multiple pages to collect the first 100 unique articles.
- **Sorting Validation:** Ensures articles are sorted in descending order by published timestamp.
- **Page Object Model:** Encapsulates page logic in a reusable `HackerNewsPage` class.
- **Modern Playwright Setup:**
  - Parallel test execution
  - HTML reporting
  - CI integration via GitHub Actions
- **Linting:** Enforced code quality with ESLint.

---

## Project Structure

- `pages/HackerNewsPage.js` — Page object for scraping and paginating Hacker News.
- `tests/hacker-news-sorting.spec.js` — Main Playwright test for sorting validation.
- `playwright.config.js` — Playwright configuration (parallelism, retries, reporting, etc).
- `eslint.config.mjs` — ESLint configuration for code quality.
- `.github/workflows/playwright.yml` — GitHub Actions workflow for CI.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

---

## Running Tests

Run all tests (headless by default):

```bash
npx playwright test
```

Run in headed mode (browser visible):

```bash
npx playwright test --headed --project=chromium
```

---

## Viewing Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

---

## Test Reports

The test-result-png folder contains screenshot of the current test result that have passed. This image provide a visual reference of the report and can be useful for documentation or sharing test outcome.

---

## Linting

Check and auto-fix code style issues:

```bash
npm run lint
```

---


## Notes on Live Data & Flakiness

Hacker News is a live site with constantly changing content. Test failures may occur if articles are added/removed during a run, or due to network/pagination issues. If a test fails, simply re-run it. For more reliability, use Playwright's retry option:

```bash
npx playwright test --retries=2
```

---

## License

MIT

