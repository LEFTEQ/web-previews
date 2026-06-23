import "./globals.css";
export const metadata = { title: "Nábytek Harašta", description: "Návrh moderního webu — Nábytek Harašta" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="cs"><body>{children}</body></html>);
}
