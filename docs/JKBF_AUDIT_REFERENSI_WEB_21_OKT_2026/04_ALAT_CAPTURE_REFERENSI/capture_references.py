#!/usr/bin/env python3
"""Capture real screenshots of public benchmark pages, locally with internet. No login, checkout, or bypass."""
import asyncio, csv, re, json, sys, time
from pathlib import Path
from playwright.async_api import async_playwright
SRC=Path(__file__).resolve().parent.parent/'02_DATA'/'REFERENCE_CAPTURE_MANIFEST.csv'
OUT=Path(__file__).resolve().parent/'OUTPUT_SCREENSHOTS_REAL'
OUT.mkdir(exist_ok=True)
REPORT=[]
VIEWS=[('DESKTOP',1440,900),('MOBILE',390,844)]
async def visit(browser,record,kind,w,h):
    ctx=await browser.new_context(viewport={'width':w,'height':h},device_scale_factor=1, locale='en-US', is_mobile=(kind=='MOBILE'), has_touch=(kind=='MOBILE'),ignore_https_errors=False)
    page=await ctx.new_page()
    label=record['slug']+'_'+kind.lower()
    info=dict(site=record['site'],url=record['url'],viewport=kind,status='UNKNOWN',note='',features=record['features'])
    try:
        resp=await page.goto(record['url'],wait_until='domcontentloaded',timeout=25000)
        await page.wait_for_timeout(2200)
        try: await page.locator('button:has-text("Accept")').first.click(timeout=800)
        except: pass
        status=resp.status if resp else -1
        info['http_status']=status
        if status>=400:
            info['status']='HTTP_'+str(status)
        else:
            info['status']='CAPTURED_PUBLIC_VIEW'
        for full,suffix in [(False,'first'),(True,'full')]:
            name=f'{label}_{suffix}.png'
            try:
                await page.screenshot(path=str(OUT/name),full_page=full,animations='disabled',timeout=20000)
                info[suffix+'_file']=name
            except Exception as e:
                info[suffix+'_error']=str(e)[:160]
        # Public tab/button state screenshot; never purchase, submit, login or buy.
        actions = {
            'Sónar':['Thursday 18','Friday 19','Saturday 20','Thursday','Friday'],
            'GLORY Kickboxing':['Main Card','Superfight Series'],
            'Gymshark':['filter & sort'],
            'UFC':['How to Watch'],
            'ONE Championship':['Upcoming Events'],
            'BYON Combat':[],
        }
        for n,txt in enumerate(actions.get(record['site'],[])[:3],1):
            try:
                target=page.get_by_role('button',name=txt,exact=True).first
                if await target.count() and await target.is_visible():
                    await target.click(timeout=1500)
                    await page.wait_for_timeout(500)
                    nm=f'{label}_state_{n}.png'
                    await page.screenshot(path=str(OUT/nm),full_page=False,animations='disabled')
            except Exception:pass
        info['final_url']=page.url
    except Exception as e:
        info['status']='BLOCKED_OR_FAILED';info['note']=str(e)[:240]
    await ctx.close()
    return info
async def main():
    with open(SRC,encoding='utf-8-sig',newline='') as f: recs=list(csv.DictReader(f))
    async with async_playwright() as p:
        browser=await p.chromium.launch(headless=True)
        for i,r in enumerate(recs,1):
            print(f'[{i}/{len(recs)}] {r["site"]}: {r["url"]}',flush=True)
            for kind,w,h in VIEWS:
                REPORT.append(await visit(browser,r,kind,w,h))
        await browser.close()
    (OUT/'CAPTURE_LOG.json').write_text(json.dumps(REPORT,indent=2,ensure_ascii=False),encoding='utf-8')
    import zipfile
    with zipfile.ZipFile(OUT.parent/'SCREENSHOTS_REFERENSI_ASLI.zip','w',compression=zipfile.ZIP_DEFLATED) as z:
        for pth in OUT.rglob('*'):
            if pth.is_file():z.write(pth,pth.relative_to(OUT.parent))
    print('SELESAI: ',OUT.parent/'SCREENSHOTS_REFERENSI_ASLI.zip')
if __name__=='__main__':asyncio.run(main())
