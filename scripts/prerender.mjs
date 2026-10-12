// Vloží serverově vyrenderovaný obsah do out/index.html,
// aby byl web čitelný i bez JavaScriptu.
import { readFile, writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ssrEntry = resolve("dist-ssr/entry-server.js");
const { render } = await import(pathToFileURL(ssrEntry).href);

const htmlPath = resolve("out/index.html");
const template = await readFile(htmlPath, "utf8");
if (!template.includes("<!--app-html-->")) {
  throw new Error("V out/index.html chybí značka <!--app-html-->");
}
const appHtml = render();
await writeFile(htmlPath, template.replace("<!--app-html-->", appHtml));
await rm(resolve("dist-ssr"), { recursive: true, force: true });
console.log("Prerender hotový: out/index.html");
