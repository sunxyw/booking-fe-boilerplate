import { expect, test } from "@playwright/test";

test.describe("HomePage", () => {
  test.describe("Switch locale", () => {
    test("should default to English", async ({ page }) => {
      await page.goto("/");
      await expect(page).toHaveURL("/");
      await expect(page.locator("h1")).toContainText("Automated AI");
    });

    test("should switch to Traditional Chinese", async ({ page }) => {
      await page.goto("/");
      await page.click("text=Switch to Traditional Chinese");
      await page.waitForURL("/zh-hk");
    });

    test("should switch to English", async ({ page }) => {
      await page.goto("/zh-hk");
      await page.click("text=Switch to English");
      await page.waitForURL("/");
    });
  });
});
