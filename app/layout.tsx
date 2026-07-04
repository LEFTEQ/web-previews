import "./globals.css";
import "./_lovinka.css";
export const metadata = { title: "M - STAV HK s.r.o.", description: "Návrh moderního webu — M - STAV HK s.r.o." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        {children}
      <section className="lv-cta" aria-label="Nabídka nového webu">
        <div className="lv-cta__blur" aria-hidden="true"><span /><span /><span /></div>
        <div className="lv-cta__panel">
          <p className="lv-cta__eyebrow">Návrh studia lovinka</p>
          <h2 className="lv-cta__title">Líbí se vám nová podoba webu?</h2>
          <p className="lv-cta__sub">Tohle je teprve ukázka. Pojďme ji dotáhnout do plné podoby — kompletní web na míru od 9 900 Kč.</p>
          <div className="lv-cta__actions">
            <a className="lv-btn lv-btn--primary" href="mailto:ahoj@lovinka.com">Napsat e-mail</a>
          </div>
        </div>
      </section>
      <footer className="lv-foot">
        <p>Toto je nezávazný designový návrh studia lovinka — ne oficiální web firmy M - STAV HK s.r.o.. Návrh nepoužívá skutečné logo firmy.</p>
      </footer>
      </body>
    </html>
  );
}
