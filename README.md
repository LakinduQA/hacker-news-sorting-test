# Playwright Advanced Testing: Hacker News Sorting

This project demonstrates advanced end-to-end testing using [Playwright](https://playwright.dev/) for the [Hacker News "newest" page](https://news.ycombinator.com/newest). It validates that the first 100 articles are sorted from newest to oldest by timestamp, using robust automation and best practices.

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

