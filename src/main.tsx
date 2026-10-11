import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./styles.css";

import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

const el = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (el.hasChildNodes() && el.innerHTML.trim() !== "<!--app-html-->") {
  hydrateRoot(el, app);
} else {
  createRoot(el).render(app);
}
