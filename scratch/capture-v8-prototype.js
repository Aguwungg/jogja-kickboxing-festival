const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const targetDir = path.join(process.cwd(), "docs/JKB_HOMEPAGE_V8_PROTOTYPE/screenshots");
const previewUrl = "http://localhost:3000/preview/homepage-v8";

async function run() {
  const port = 9520;
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    "--remote-allow-origins=*",
    `--user-data-dir=/tmp/c-v8-${Date.now()}`,
    "--window-size=1440,900"
  ]);

  for (let i = 0; i < 30; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) break;
    } catch {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  const listRes = await fetch(`http://127.0.0.1:${port}/json/list`);
  const targets = await listRes.json();
  const page = targets.find(t => t.type === "page");
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  function sendCDP(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = Math.floor(Math.random() * 1000000);
      const msg = JSON.stringify({ id, method, params });
      const handler = (evt) => {
        const resp = JSON.parse(evt.data);
        if (resp.id === id) {
          ws.removeEventListener("message", handler);
          if (resp.error) reject(resp.error);
          else resolve(resp.result);
        }
      };
      ws.addEventListener("message", handler);
      ws.send(msg);
    });
  }

  await sendCDP("Page.enable");
  await sendCDP("DOM.enable");

  async function captureShot(filename, width, height, isMobile = false, fullPage = false, action = null) {
    console.log(`📸 Capturing: ${filename} (${width}x${height}, mobile=${isMobile}, fullPage=${fullPage})`);
    
    await sendCDP("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: isMobile
    });

    await sendCDP("Page.navigate", { url: previewUrl });
    await new Promise(r => setTimeout(r, 2500));

    if (action) {
      await action();
      await new Promise(r => setTimeout(r, 800));
    }

    let clip = undefined;
    if (fullPage) {
      const metrics = await sendCDP("Page.getLayoutMetrics");
      clip = {
        x: 0,
        y: 0,
        width: metrics.cssContentSize.width || width,
        height: metrics.cssContentSize.height,
        scale: 1
      };
    }

    const ss = await sendCDP("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: fullPage,
      clip
    });

    const buffer = Buffer.from(ss.data, "base64");
    fs.writeFileSync(path.join(targetDir, filename), buffer);
    console.log(`   Saved: ${filename} (${buffer.length} bytes)`);
  }

  // 1. Homepage desktop first viewport — 1440px
  await captureShot("01_homepage_desktop_first_viewport_1440px.png", 1440, 900, false, false);

  // 2. Homepage desktop full page — 1440px
  await captureShot("02_homepage_desktop_fullpage_1440px.png", 1440, 900, false, true);

  // 3. Homepage mobile first viewport — 390px
  await captureShot("03_homepage_mobile_first_viewport_390px.png", 390, 844, true, false);

  // 4. Homepage mobile full page — 390px
  await captureShot("04_homepage_mobile_fullpage_390px.png", 390, 844, true, true);

  // 5. Small mobile — 320px
  await captureShot("05_small_mobile_320px.png", 320, 640, true, false);

  // 6. Tablet — 768px
  await captureShot("06_tablet_768px.png", 768, 1024, false, false);

  // 7. Mobile navigation open — 390px
  await captureShot("07_mobile_navigation_open_390px.png", 390, 844, true, false, async () => {
    await sendCDP("Runtime.evaluate", {
      expression: `
        const btn = document.querySelector('button[aria-label="Buka menu navigasi"]');
        if (btn) btn.click();
      `
    });
  });

  // 8. Interactive state: Day 2 tab click on Plan Your Visit section — 1440px
  await captureShot("08_interactive_day2_switch_1440px.png", 1440, 900, false, false, async () => {
    await sendCDP("Runtime.evaluate", {
      expression: `
        const btns = Array.from(document.querySelectorAll('button'));
        const day2Btn = btns.find(b => b.textContent.includes('HARI 2'));
        if (day2Btn) {
          day2Btn.scrollIntoView({ behavior: 'instant', block: 'center' });
          day2Btn.click();
        }
      `
    });
  });

  chrome.kill();
  console.log("\n✅ All 8 Required Viewport Screenshots Successfully Captured!");
}

run().catch(err => {
  console.error("Capture Error:", err);
  process.exit(1);
});
