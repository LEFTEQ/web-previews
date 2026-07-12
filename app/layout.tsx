import "./globals.css";
import "./_lovinka.css";
export const metadata = { title: "K.B.A. Tour s.r.o. - dopravní a cestovní agentura", description: "Návrh moderního webu — K.B.A. Tour s.r.o. - dopravní a cestovní agentura" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        {children}
      <section className="lv-cta" aria-label="Nabídka nového webu" style={{ ["--lv-accent" as string]: "#C6472E", ["--lv-accent-text" as string]: "#ffffff" }}>
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
        <p>Toto je nezávazný designový návrh studia lovinka — ne oficiální web firmy K.B.A. Tour s.r.o. - dopravní a cestovní agentura. Návrh nepoužívá skutečné logo firmy.</p>
      </footer>
      </body>
    </html>
  );
}
