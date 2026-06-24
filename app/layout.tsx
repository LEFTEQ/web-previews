import "./globals.css";
export const metadata = { title: "Skip to content", description: "Návrh moderního webu — Skip to content" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="cs"><body>{children}</body></html>);
}
