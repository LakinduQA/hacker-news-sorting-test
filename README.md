# **Hacker News Sorting Test with Playwright**

This project uses **[Playwright](https://playwright.dev/)** to test whether the **first 100 articles** on the [Hacker News "newest"](https://news.ycombinator.com/newest) page are sorted from **newest to oldest** by timestamp.

---

## **What Does It Test?**

* Navigates through Hacker News pagination
* Collects the **first 100 unique articles**
* Verifies that articles are sorted in **descending order** by their published timestamp

---

## **Technologies**

* **Playwright**
* **JavaScript (Node.js)**
* **Modern Web Automation Practices**

---

## **Setup**

### 1. **Clone the Repository**

```bash
git clone https://github.com/LakinduQA/hackernews-playwright-test.git
cd hackernews-playwright-test
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Install Playwright**

```bash
npm init playwright@latest
```

---

## **Run the Test**

```bash
npx playwright test
```

To run in **headed mode** (browser visible):

```bash
npx playwright test --headed --project=chromium
```

---

## **View Test Report**

```bash
npx playwright show-report
```

---

## ⚠️ **Note on Live Data & Test Flakiness**

Hacker News is a **live website** with constantly updating, user-submitted content. This means the test may occasionally **fail** due to:

* Articles being **added or removed** during the test run
* Pagination or data not loading completely
* Temporary site hiccups

If this happens, simply **re-run the test**.
For more reliability, you can also use Playwright’s retry option:

```bash
npx playwright test --retries=2
```

---

