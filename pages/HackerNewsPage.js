class HackerNewsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://news.ycombinator.com/newest");
  }

  async getArticlesFromPage() {
    // Collect article info from current page
    const articles = await this.page.$$eval(".athing", (nodes) => {
      return nodes.map((node) => {
        const id = node.getAttribute("id");
        const titleEl = node.querySelector(".titleline > a");
        const title = titleEl ? titleEl.textContent : "";
        const url = titleEl ? titleEl.href : "";

        // Get timestamp from sibling .subtext .age > a element's title attribute
        const subtext = node.nextElementSibling;
        let timestamp = null;
        if (subtext) {
          const ageLink = subtext.querySelector(".age > a");
          if (ageLink) {
            const titleAttr = ageLink.getAttribute("title");
            if (titleAttr) {
              // titleAttr example: "2025-06-11T09:20:51 1749633651"
              const isoDate = titleAttr.split(" ")[0];
              timestamp = new Date(isoDate);
            }
          }
        }

        return { id, title, url, timestamp };
      });
    });

    if (!articles.length) {
      console.warn(
        "No articles found on current page. Possibly reached an error page."
      );
    }

    return articles;
  }

  async collectFirst100Articles() {
    let collected = [];
    await this.goto();

    while (collected.length < 100) {
      const articlesOnPage = await this.getArticlesFromPage();

      collected = collected.concat(articlesOnPage);
      if (collected.length >= 100) break;

      const moreLink = await this.page.$("a.morelink");
      if (!moreLink) {
        console.warn('No "More" link found. Ending pagination.');
        break;
      }

      const href = await moreLink.getAttribute("href");
      if (!href) {
        console.warn(
          '"More" link exists but no href attribute found. Ending pagination.'
        );
        break;
      }

      const nextUrl = `https://news.ycombinator.com/${href}`;
      await this.page.goto(nextUrl);
    }

    // Return exactly first 100 articles if more collected
    return collected.slice(0, 100);
  }
}

module.exports = { HackerNewsPage };
