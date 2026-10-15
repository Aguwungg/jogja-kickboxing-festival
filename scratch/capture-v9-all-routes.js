const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const targetDir = path.join(process.cwd(), "docs/JKBF_V9_FULL_REDESIGN/screenshots");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const routes = [
  { name: "01_homepage", path: "/" },
  { name: "02_championship", path: "/championship" },
  { name: "03_fighters", path: "/fighters" },
  { name: "04_fighter_detail", path: "/fighters/agung" },
  { name: "05_bracket", path: "/bracket" },
  { name: "06_lineup", path: "/lineup" },
  { name: "07_jadwal", path: "/jadwal" },
  { name: "08_venue", path: "/venue" },
  { name: "09_tiket", path: "/tiket" },
  { name: "10_city_pride", path: "/city-pride" },
  { name: "11_creator_hub", path: "/creator" },
  { name: "12_creator_dashboard", path: "/creator/dashboard" },
  { name: "13_merch", path: "/merch" },
  { name: "14_merch_detail", path: "/merch/jkb-handwrap-red" },
  { name: "15_checkout", path: "/checkout" },
  { name: "16_ppv", path: "/ppv" },
  { name: "17_ppv_watch", path: "/ppv/watch" },
  { name: "18_tentang", path: "/tentang" },
  { name: "19_faq", path: "/faq" },
  { name: "20_kontak", path: "/kontak" },
  { name: "21_syarat_ketentuan", path: "/syarat-ketentuan" },
  { name: "22_kebijakan_privasi", path: "/kebijakan-privasi" },
];

async function run() {
  const port = 9530;
  const chrome = spawn("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", [
    "--headless=new",
    `--remote-debugging-port=${port}`,
    "--remote-allow-origins=*",
    `--user-data-dir=/tmp/c-v9-${Date.now()}`,
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

    const ss = await sendCDP("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: fullPage,
      clip
    });

    const buffer = Buffer.from(ss.data, "base64");
    fs.writeFileSync(path.join(targetDir, filename), buffer);
    console.log(`✅ [Captured] ${filename} (${buffer.length} bytes)`);
  }

  console.log("🚀 Starting V9 Full-Site Screenshot QA Capture...");

  for (const r of routes) {
    const fullUrl = `http://localhost:3000${r.path}`;
    // 1. Desktop Viewport
    await captureShot(`${r.name}_desktop_viewport.png`, fullUrl, 1440, 900, false, false);
    // 2. Desktop Fullpage
    await captureShot(`${r.name}_desktop_fullpage.png`, fullUrl, 1440, 900, false, true);
    // 3. Mobile Viewport (iPhone 14/15 390px)
    await captureShot(`${r.name}_mobile_viewport.png`, fullUrl, 390, 844, true, false);
    // 4. Mobile Fullpage
    await captureShot(`${r.name}_mobile_fullpage.png`, fullUrl, 390, 844, true, true);
  }

  chrome.kill();
  console.log("\n🎉 All V9 public route screenshots successfully captured to:", targetDir);
}

run().catch(err => {
  console.error("Capture Error:", err);
  process.exit(1);
});
