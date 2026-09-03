import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const sharp = require("sharp");

const root = process.cwd();
const sourceRoot = path.join(root, "assets/source-images");
const appRoot = path.join(root, "app/exterior-systems");
const outputRoot = path.join(root, "public/images/source-library");
const raster = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const used = new Set();

const sourceForRoute = (route) => {
  if (route.startsWith("acm-acp/fabrication")) return "fabrication";
  if (route.startsWith("acm-acp")) return "acm-acp";
  if (route.startsWith("aluminum/architectural-battens")) return "aluminum/architectural-batten";
  if (route.startsWith("aluminum/cedar-renditions")) return "aluminum/cedar-rendition";
  if (route.startsWith("aluminum/fastplank")) return "aluminum/fastplank";
  if (route.startsWith("aluminum/longboard")) return "aluminum/longboard";
  if (route.startsWith("aluminum")) return "aluminum";
  if (route.startsWith("app")) return "app";
  if (route.startsWith("eavestroughs")) return "eavestrough";
  if (route.startsWith("fibre-cement")) return "fiber-cement";
  if (route.startsWith("imp")) return "imp";
  if (route.startsWith("natural-wood/board-and-batten")) return "natural-wood/board-and-batten";
  if (route.startsWith("natural-wood/cedar")) return "natural-wood/cedar";
  if (route.startsWith("natural-wood/charred-wood")) return "natural-wood/charred-wood";
  if (route.startsWith("natural-wood/engineered-wood")) return "natural-wood/engineered-wood";
  if (route.startsWith("natural-wood/genuine-wood")) return "natural-wood/genuine-wood-siding";
  if (route.startsWith("natural-wood")) return "natural-wood";
  if (route.startsWith("pvc/flat-panels")) return "pvc/fast-panels";
  if (route.startsWith("pvc/posts-beams")) return "pvc/post-and-beams";
  if (route.startsWith("pvc/shadow-series")) return "pvc/shadow-series";
  if (route.startsWith("pvc/soffit")) return "pvc/soffit";
  if (route.startsWith("pvc")) return "pvc";
  if (route.startsWith("steel/board-and-batten")) return "steel/HF (HIDDEN FASTENER SERIES)/BOARD AND BATTEN STEEL SIDING";
  if (route.startsWith("steel/corrugated") || route.startsWith("steel/exposed-fastener")) return "steel/EF (EXPOSED FASTENER) SERIES/CURROGATED SIDING & SOFFIT";
  if (route.startsWith("steel/distinction-galanta")) return "steel/HF (HIDDEN FASTENER SERIES)/GALANTA SIDING & SOFFIT";
  if (route.startsWith("steel/hidden-fastener")) return "steel/HF (HIDDEN FASTENER SERIES)/AGWAY SOFFIT";
  if (route.startsWith("steel")) return "steel";
  if (route.startsWith("trims-flashings")) return "trims-and-flashings";
  if (route.startsWith("wpc/beams")) return "wpc/beams";
  if (route.startsWith("wpc/fluted")) return "wpc/fluted";
  if (route.startsWith("wpc/shiplap")) return "wpc/shiplap";
  if (route.startsWith("wpc")) return "wpc";
  return null;
};

function filesBelow(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? filesBelow(full) : [full];
  });
}

async function candidates(dir, route) {
  const tokens = route.toLowerCase().split(/[\/-]+/).filter((x) => x.length > 2);
  const rows = [];
  for (const file of filesBelow(dir)) {
    if (!raster.has(path.extname(file).toLowerCase())) continue;
    try {
      const meta = await sharp(file).metadata();
      if ((meta.width ?? 0) < 850 || (meta.height ?? 0) < 500) continue;
      const name = path.basename(file).toLowerCase();
      if (/(^|[-_ ])(icon|menu)([-_ .]|$)/.test(name)) continue;
      const technical = /(profile|diagram|chart|colour|color|finish|trim|technical|legend|icon|menu|sample)/.test(name) ? -18 : 0;
      const landscape = (meta.width / meta.height) >= 1.2 ? 18 : 0;
      const match = tokens.reduce((sum, token) => sum + (name.includes(token) ? 8 : 0), 0);
      const fresh = used.has(file) ? -30 : 10;
      rows.push({ file, score: technical + landscape + match + fresh + Math.min((meta.width * meta.height) / 1_000_000, 10) });
    } catch {}
  }
  return rows.sort((a, b) => b.score - a.score);
}

async function makeImages(route, sourceDir) {
  const choices = await candidates(path.join(sourceRoot, sourceDir), route);
  if (!choices.length) return null;
  const destDir = path.join(outputRoot, route || "overview");
  fs.mkdirSync(destDir, { recursive: true });
  const names = ["hero.webp", "detail-01.webp", "detail-02.webp"];
  const selected = [];
  for (const choice of choices) {
    if (selected.length === 3) break;
    if (selected.some((x) => path.basename(x) === path.basename(choice.file))) continue;
    try {
      await sharp(choice.file).rotate().resize({ width: 1920, height: 1280, fit: "inside", withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(destDir, names[selected.length]));
      selected.push(choice.file);
      used.add(choice.file);
    } catch {}
  }
  if (!selected.length) return null;
  for (let i = selected.length; i < names.length; i++) fs.copyFileSync(path.join(destDir, names[i % selected.length]), path.join(destDir, names[i]));
  const web = `/images/source-library/${route || "overview"}`;
  return [`${web}/hero.webp`, `${web}/detail-01.webp`, `${web}/detail-02.webp`];
}

function pageFiles(dir) {
  return filesBelow(dir).filter((file) => path.basename(file) === "page.jsx");
}

let updated = 0;
for (const file of pageFiles(appRoot)) {
  const route = path.relative(appRoot, path.dirname(file)).split(path.sep).join("/");
  const sourceDir = sourceForRoute(route);
  if (!sourceDir) continue;
  const images = await makeImages(route, sourceDir);
  if (!images) continue;
  let text = fs.readFileSync(file, "utf8");
  const imageArray = `images={["${images[0]}","${images[1]}","${images[2]}"]}`;
  let next = text;
  if (/<CurrentSitePage\b/.test(next)) {
    if (/\bimages=\{\[/.test(next)) next = next.replace(/images=\{\[[^\]]*\]\}/, imageArray);
    else next = next.replace(/<CurrentSitePage\b/, `<CurrentSitePage\n  image="${images[0]}"\n  ${imageArray}`);
    if (/\bimage="[^"]*"/.test(next)) next = next.replace(/\bimage="[^"]*"/, `image="${images[0]}"`);
  } else if (/<ProductPage\b/.test(next) && /\bimages=\{\[/.test(next)) {
    next = next.replace(/images=\{\[[^\]]*\]\}/, imageArray);
  } else if (/<ProductPage\b/.test(next) && route.startsWith("aluminum/longboard/products/")) {
    next = next.replace(/<ProductPage\b/, `<ProductPage ${imageArray}`);
  } else if (/\bhero:\s*"[^"]+"/.test(next)) {
    next = next.replace(/\bhero:\s*"[^"]+"/, `hero:"${images[0]}"`);
    if (/\bfeatureImage:\s*"[^"]+"/.test(next)) next = next.replace(/\bfeatureImage:\s*"[^"]+"/, `featureImage:"${images[1]}"`);
  } else if (/backgroundImage:\s*["']url\(["'][^"']+["']\)["']/.test(next)) {
    next = next.replace(/backgroundImage:\s*["']url\(["'][^"']+["']\)["']/, `backgroundImage:"url('${images[0]}')"`);
  }
  if (next !== text) {
    fs.writeFileSync(file, next);
    updated++;
  }
}

console.log(JSON.stringify({ updatedPages: updated, generatedSets: used.size, output: path.relative(root, outputRoot) }));
