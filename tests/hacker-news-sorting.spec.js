const { test, expect } = require("@playwright/test");
const { HackerNewsPage } = require("../pages/HackerNewsPage");

test("should validate that first 100 Hacker News articles are sorted from newest to oldest", async ({
  page,
}) => {
  const hackerNews = new HackerNewsPage(page);
  const articles = await hackerNews.collectFirst100Articles();

  expect(articles.length).toBe(100);

  for (let i = 0; i < articles.length - 1; i++) {
    const current = articles[i].timestamp?.getTime() || 0;
    const next = articles[i + 1].timestamp?.getTime() || 0;

    // Validate that articles are sorted from newest to oldest (descending timestamp)
    expect(current).toBeGreaterThanOrEqual(next);
  }
});
