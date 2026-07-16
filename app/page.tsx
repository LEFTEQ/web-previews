import { Figure } from "./motion";

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wrap topbar-in">
          <a href="#uvod" className="wm" aria-label="MK Fineco, daňový poradce">
            <span className="wm-mk">MK</span>
            <span className="wm-txt">
              <span className="wm-name">FINECO</span>
              <span className="wm-sub">daňový poradce · s.r.o.</span>
            </span>
          </a>
          <a className="btn btn-sm" href="tel:+420387310729">
            Zavolat 387 310 729
          </a>
        </div>
      </header>

      <section className="band hero" id="uvod">
        <div className="wrap">
          <p className="eyebrow">Daňový poradce · České Budějovice · od roku 1994</p>
          <h1 className="h1">
            Účetnictví, které<br />
            sedí na&nbsp;haléř.
          </h1>
          <p className="lede">
            Daňová přiznání, mzdy i&nbsp;kompletní účetnictví vedeme tak, aby každá
            koruna měla svůj řádek. Přes třicet let stavíme čísla, na&nbsp;kterých
            finanční úřad nenajde chybu — a&nbsp;vy máte klid.
          </p>

          <div className="ledger-mini" aria-hidden="false">
            <div className="lm-cols lm-head">
              <span>Má dáti</span>
              <span>Dal</span>
            </div>
            <div className="lm-cols lm-figs">
              <span className="fig">
                <Figure value={1248500} group /> Kč
              </span>
              <span className="fig">
                <Figure value={1248500} group /> Kč
              </span>
            </div>
            <div className="rule1" />
            <div className="lm-cols lm-total">
              <span>Rozdíl</span>
              <span className="fig zero">0 Kč</span>
            </div>
            <div className="rule2 draw" />
            <p className="lm-cap">Rozvaha sedí — na haléř.</p>
          </div>
        </div>
      </section>

      <section className="band services">
        <div className="wrap">
          <p className="eyebrow">01 — Dvě knihy</p>
          <h2 className="h2">Dvě kanceláře, jeden standard přesnosti.</h2>
          <p className="section-lede">
            Vyberte si stranu, která patří vám. Obě se sejdou u&nbsp;stejné
            pečlivosti — a&nbsp;u&nbsp;stejného telefonu, když je potřeba.
          </p>

          <div className="books">
            <article className="ledger">
              <div className="ledger-head">
                <span className="ledger-no">Kniha I</span>
                <h3 className="ledger-title">Software Helios</h3>
                <div className="seal" aria-label="Helios Gold Partner">
                  <span className="seal-top">Helios</span>
                  <span className="seal-mid">Gold</span>
                  <span className="seal-bot">Partner</span>
                </div>
              </div>
              <ul className="items">
                <li className="item"><span>Implementace ERP Helios iNuvio</span></li>
                <li className="item"><span>Servisní hotline pro uživatele</span></li>
                <li className="item"><span>Upgrady podle aktuální legislativy</span></li>
                <li className="item"><span>Zaškolení a&nbsp;metodická podpora</span></li>
              </ul>
              <div className="rule1" />
              <div className="total">
                <span className="total-label">Spojte se — kancelář Helios</span>
                <a className="total-phone fig" href="tel:+420387310729">
                  387 310 729
                </a>
              </div>
              <div className="rule2 draw" />
              <div className="total-meta">
                <a href="mailto:helios@mkfineco.cz">helios@mkfineco.cz</a>
                <span>Karolíny Světlé 2447, 370 04 České Budějovice</span>
              </div>
              <a className="btn" href="tel:+420387310729">Zavolat kancelář Helios</a>
            </article>

            <article className="ledger">
              <div className="ledger-head">
                <span className="ledger-no">Kniha II</span>
                <h3 className="ledger-title">Daně a&nbsp;účetnictví</h3>
              </div>
              <ul className="items">
                <li className="item"><span>Zpracování daňových přiznání</span></li>
                <li className="item"><span>Vedení účetnictví a&nbsp;daňové evidence</span></li>
                <li className="item"><span>Mzdy a&nbsp;personalistika</span></li>
                <li className="item"><span>Zastupování před finančním úřadem</span></li>
              </ul>
              <div className="rule1" />
              <div className="total">
                <span className="total-label">Spojte se — kancelář Daně</span>
                <a className="total-phone fig" href="tel:+420387428256">
                  387 428 256
                </a>
              </div>
              <div className="rule2 draw" />
              <div className="total-meta">
                <a href="mailto:info@mkfineco.cz">info@mkfineco.cz</a>
                <span>Česká 17/49, 370 01 České Budějovice</span>
              </div>
              <a className="btn" href="tel:+420387428256">Zavolat kancelář Daně</a>
            </article>
          </div>
        </div>
      </section>

      <section className="band trust">
        <div className="wrap">
          <p className="eyebrow eyebrow-light">02 — Rozvaha firmy</p>
          <h2 className="h2 h2-light">
            Proč nám jihočeské firmy svěří svá čísla.
          </h2>
          <p className="section-lede section-lede-light">
            Nejsme anonymní portál. Jsme dva stoly v&nbsp;Českých Budějovicích, u&nbsp;kterých
            sedí lidé, kteří vaše přiznání podepíšou vlastním jménem. Tady jsou
            čísla, která za&nbsp;nás mluví.
          </p>

          <dl className="stats">
            <div className="stat">
              <dd className="stat-fig fig"><Figure value={30} /></dd>
              <dt className="stat-label">let daňové praxe — nepřetržitě od&nbsp;roku 1994</dt>
            </div>
            <div className="stat">
              <dd className="stat-fig fig"><Figure value={2} /></dd>
              <dt className="stat-label">kanceláře v&nbsp;centru Českých Budějovic</dt>
            </div>
            <div className="stat">
              <dd className="stat-fig fig"><Figure value={6} /></dd>
              <dt className="stat-label">specialistů na&nbsp;daně, mzdy a&nbsp;Helios v&nbsp;týmu</dt>
            </div>
            <div className="stat">
              <dd className="stat-fig fig"><Figure value={100} suffix=" %" /></dd>
              <dt className="stat-label">přiznání podaných v&nbsp;řádném termínu</dt>
            </div>
          </dl>

          <div className="rule1 rule1-light" />
          <div className="trust-total">
            <span className="trust-total-label">Součet</span>
            <span className="trust-total-val">Účet sedí — a&nbsp;vy máte klid.</span>
          </div>
          <div className="rule2 rule2-light draw" />
        </div>
      </section>
    </main>
  );
}
