const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const targetDir = path.join(process.cwd(), "docs/JKBF_V9_2_SPACIOUS_UI/screenshots");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const routes = [
  { name: "01_home", path: "/" },
  { name: "02_jadwal", path: "/jadwal" },
  { name: "03_fighters", path: "/fighters" },
  { name: "04_fighter_profile", path: "/fighters/agung" },
  { name: "05_championship", path: "/championship" },
  { name: "06_bracket", path: "/bracket" },
  { name: "07_lineup", path: "/lineup" },
  { name: "08_city_pride", path: "/city-pride" },
  { name: "09_creator", path: "/creator" },
  { name: "10_creator_dashboard", path: "/creator/dashboard" },
  { name: "11_merch", path: "/merch" },
  { name: "12_merch_detail", path: "/merch/jkb-tee-black" },
  { name: "13_tiket", path: "/tiket" },
  { name: "14_venue", path: "/venue" },
  { name: "15_tentang", path: "/tentang" },
  { name: "16_faq", path: "/faq" },
  { name: "17_kontak", path: "/kontak" },
  { name: "18_syarat", path: "/syarat-ketentuan" },
  { name: "19_privasi", path: "/kebijakan-privasi" },
  { name: "20_checkout", path: "/checkout" },
  { name: "21_order_success", path: "/checkout/success/cmv3vsisx000ejbo8u2fwp0zo" },
  { name: "22_ppv", path: "/ppv" },
  { name: "23_ppv_watch", path: "/ppv/watch" },
];

async function run() {
  const port = 9545;
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    "--remote-allow-origins=*",
    `--user-data-dir=/tmp/c-v92-${Date.now()}`,
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

  async function captureShot(filename, url, width, height, isMobile = false, fullPage = false) {
    await sendCDP("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: isMobile
    });

    await sendCDP("Page.navigate", { url });
    await new Promise(r => setTimeout(r, 1200));

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

    const screenshot = await sendCDP("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: fullPage,
      clip
    });

    const buffer = Buffer.from(screenshot.data, "base64");
    fs.writeFileSync(path.join(targetDir, filename), buffer);
    console.log(`Captured: ${filename} (${buffer.length} bytes)`);
  }

  console.log("Starting V9.2 screenshot captures across all 23 routes...");

  for (const r of routes) {
    const url = `http://localhost:3000${r.path}`;
    
    // 1. Desktop Viewport
    await captureShot(`${r.name}_desktop_viewport.png`, url, 1440, 900, false, false);
    // 2. Desktop Fullpage
    await captureShot(`${r.name}_desktop_fullpage.png`, url, 1440, 900, false, true);

    // 3. Mobile Viewport (iPhone 14/15/16 standard 390x844)
    await captureShot(`${r.name}_mobile_viewport.png`, url, 390, 844, true, false);
    // 4. Mobile Fullpage
    await captureShot(`${r.name}_mobile_fullpage.png`, url, 390, 844, true, true);
  }

  console.log("All V9.2 screenshots captured successfully!");
  ws.close();
  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error("Screenshot error:", err);
  process.exit(1);
});
