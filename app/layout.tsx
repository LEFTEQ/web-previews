import "./globals.css";
export const metadata = { title: "hammer and screwdriver", description: "Návrh moderního webu — hammer and screwdriver" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="cs"><body>{children}</body></html>);
}
