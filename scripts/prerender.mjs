import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");
const htmlPath = path.join(root, "out", "index.html");

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();
const template = fs.readFileSync(htmlPath, "utf8");

if (!template.includes('<div id="root"></div>')) {
  throw new Error("Root placeholder not found in out/index.html");
}

fs.writeFileSync(
  htmlPath,
  template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
);
fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log("Prerendered out/index.html");
