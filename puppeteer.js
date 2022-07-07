const puppeteer = require("puppeteer");

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log("goto..");

  await page.goto("todo:");

  console.log("ready..");

  await sleep();

  console.time("screenshot");
  await page.screenshot({ path: "./dist/example.png" });
  console.timeEnd("screenshot");

  await browser.close();
})();
