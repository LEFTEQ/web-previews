import "./globals.css";
export const metadata = { title: "SAS nábytek (stolařství) | Ing. Pavel Sedláček", description: "Návrh moderního webu — SAS nábytek (stolařství) | Ing. Pavel Sedláček" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="cs"><body>{children}</body></html>);
}
