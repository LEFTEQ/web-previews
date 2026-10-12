// Vloží serverově vyrenderovaný obsah do out/index.html,
// aby byl veškerý obsah čitelný i bez JavaScriptu.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ssrEntry = path.resolve('.ssr/entry-server.js');
const { render } = await import(pathToFileURL(ssrEntry).href);

const file = path.resolve('out/index.html');
const html = fs.readFileSync(file, 'utf8');
if (!html.includes('<!--app-html-->')) {
  throw new Error('Chybí značka <!--app-html--> v out/index.html');
}
fs.writeFileSync(file, html.replace('<!--app-html-->', render()));
fs.rmSync(path.resolve('.ssr'), { recursive: true, force: true });
console.log('Prerender hotov: out/index.html');
