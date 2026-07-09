import "./globals.css";
import "./_lovinka.css";
export const metadata = { title: "Střední odborná škola, Liberec, Jablonecká 999, příspěvková organizace", description: "Návrh moderního webu — Střední odborná škola, Liberec, Jablonecká 999, příspěvková organizace" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        {children}
      <section className="lv-cta" aria-label="Nabídka nového webu" style={{ ["--lv-accent" as string]: "#3E6B41", ["--lv-accent-text" as string]: "#ffffff" }}>
        <div className="lv-cta__inner">
          <span className="lv-cta__mark" aria-hidden="true" />
          <p className="lv-cta__eyebrow">Návrh studia lovinka</p>
          <h2 className="lv-cta__title">Líbí se vám nová podoba webu?</h2>
          <p className="lv-cta__sub">Tohle je teprve ukázka. Pojďme ji dotáhnout do plné podoby — kompletní web na míru od 5 000 Kč.</p>
          <div className="lv-cta__actions">
            <a className="lv-btn lv-btn--primary" href="mailto:lukas.pribik.dev@gmail.com">Napsat e-mail</a>
          </div>
        </div>
      </section>
      <footer className="lv-foot">
        <p>Toto je nezávazný designový návrh studia lovinka — ne oficiální web firmy Střední odborná škola, Liberec, Jablonecká 999, příspěvková organizace. Návrh nepoužívá skutečné logo firmy.</p>
      </footer>
      </body>
    </html>
  );
}
