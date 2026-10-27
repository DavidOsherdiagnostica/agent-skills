// Renders invitation.html to PNG and JPG at the background image's native size.
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1696, height: 2496 } });
  await page.goto('file://' + path.join(__dirname, 'invitation.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(__dirname, 'invitation.png') });
  await page.screenshot({ path: path.join(__dirname, 'invitation.jpg'), type: 'jpeg', quality: 95 });
  await browser.close();
})();
