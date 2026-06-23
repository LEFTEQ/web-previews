import "./globals.css";
export const metadata = { title: "Kontakty", description: "Návrh moderního webu — Kontakty" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="cs"><body>{children}</body></html>);
}
