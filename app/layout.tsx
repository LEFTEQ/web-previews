import "./globals.css";
import "./_lovinka.css";
export const metadata = { title: "Stand by energy s.r.o.", description: "Návrh moderního webu — Stand by energy s.r.o." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        {children}
      <section className="lv-cta" aria-label="Nabídka nového webu" style={{ ["--lv-accent" as string]: "#f5b301", ["--lv-accent-text" as string]: "#111827" }}>
        <div className="lv-cta__inner">
          <span className="lv-cta__mark" aria-hidden="true" />
          <p className="lv-cta__eyebrow">Návrh studia <a className="lv-cta__brand" href="https://vyrobna.ai">vyrobna.ai</a></p>
          <h2 className="lv-cta__title">Líbí se vám nová podoba webu?</h2>
          <p className="lv-cta__sub">Tohle je teprve ukázka. Pojďme ji dotáhnout do plné podoby — kompletní web na míru od 8 500 Kč.</p>
          <div className="lv-cta__actions">
            <a className="lv-btn lv-btn--primary" href="mailto:weby@vyrobna.ai">Napsat e-mail</a>
          </div>
        </div>
      </section>
      <footer className="lv-foot">
        <p>Toto je nezávazný designový návrh studia vyrobna.ai — ne oficiální web firmy Stand by energy s.r.o.. Návrh nepoužívá skutečné logo firmy.</p>
      </footer>
      </body>
    </html>
  );
}
