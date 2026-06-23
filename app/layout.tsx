import "./globals.css";
export const metadata = { title: "Úvod", description: "Návrh moderního webu — Úvod" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="cs"><body>{children}</body></html>);
}
