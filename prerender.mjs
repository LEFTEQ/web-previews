// Vloží serverově vyrenderované HTML do out/index.html, aby byl obsah
// čitelný i bez JavaScriptu. Spouští se přes Node (bez sítě).
import { readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const candidates = ["dist-ssr/entry-server.js", "dist-ssr/entry-server.mjs"];
const entry = candidates.find((p) => existsSync(p));
if (!entry) throw new Error("SSR entry nebyl nalezen v dist-ssr/");

const { render } = await import(pathToFileURL(resolve(entry)).href);
const appHtml = render();

const file = "out/index.html";
let html = readFileSync(file, "utf8");
if (html.includes("<!--app-html-->")) {
  html = html.replace("<!--app-html-->", appHtml);
} else {
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${appHtml}</div>`);
}
writeFileSync(file, html);
rmSync("dist-ssr", { recursive: true, force: true });
console.log("Prerender hotov: out/index.html");
