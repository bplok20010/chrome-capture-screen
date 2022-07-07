const { chromium, firefox, webkit } = require("playwright");

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

(async () => {
  const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto("todo:");

  console.log("ready..");

  await sleep();

  console.time("screenshot");
  await page
    .locator(".viewer")
    .screenshot({ path: "./dist/screenshot.png", fullPage: true });
  console.timeEnd("screenshot");

  await browser.close();
})();
