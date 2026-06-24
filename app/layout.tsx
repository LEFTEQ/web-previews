import "./globals.css";
export const metadata = { title: "O NÁS", description: "Návrh moderního webu — O NÁS" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="cs"><body>{children}</body></html>);
}
