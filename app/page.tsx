import type { CSSProperties } from "react";

const sluzby = [
  {
    cas: "90 s",
    nazev: "Geometrie kol HawkEye Elite",
    popis:
      "Změříme sbíhavost a odklon za 90 sekund. Auto jede rovně, pneumatiky se nesžírají do klínu a volant drží tam, kde ho pustíte.",
  },
  {
    cas: "30 min",
    nazev: "Přezutí a uskladnění",
    popis:
      "Demontáž, vyvážení, dotažení na předepsaný moment. Letní sadu vám přes zimu uložíme ve skladu — domů vozíte jen auto.",
  },
  {
    cas: "15 min",
    nazev: "TPMS a tlak",
    popis:
      "Naprogramujeme a oživíme senzory tlaku v pneumatikách, srovnáme tlaky podle zátěže. Kontrolka na palubce zhasne.",
  },
  {
    cas: "20 min",
    nazev: "Plnění klimatizace",
    popis:
      "Doplníme chladivo, najdeme netěsnost, vydezinfikujeme výparník. V létě zase fouká studený vzduch, ne plíseň.",
  },
];

const provozovny = [
  { mesto: "Olomouc", detail: "Hlavní servis · geometrie HawkEye Elite" },
  { mesto: "Přerov — Lýsky", detail: "Pneuservis · sklad pneumatik" },
  { mesto: "Přerov — Havlíčkova", detail: "Pneuservis · prodej" },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="pg-nav">
        <a className="pg-mark" href="#" aria-label="Sibom pneuservis Olomouc">
          <span className="pg-mark-s">SIBOM</span>
          <span className="pg-mark-sub">PNEUSERVIS · OLOMOUC</span>
        </a>
        <a className="pg-tel" href="tel:+420777777020">777&nbsp;777&nbsp;020</a>
      </header>

      <section className="pg-hero">
        <img className="pg-hero-img" src="/hero.webp" alt="Pneumatika na vyvažovačce v servisní hale Sibom v Olomouci" />
        <div className="pg-hero-veil" aria-hidden="true" />
        <div className="pg-hero-body">
          <p className="pg-eyebrow">Geometrie změřená za</p>
          <h1 className="pg-hero-num">
            90<span className="pg-hero-unit">sekund</span>
          </h1>
          <p className="pg-hero-lead">
            Rovná stopa, klidný volant, pneumatiky, které se neojedou do klínu.
            Přijeďte přezout — a odjeďte s autem, co jede přesně tam, kam míříte.
          </p>
          <div className="pg-hero-actions">
            <a className="pg-btn" href="#objednat">Objednat termín</a>
            <a className="pg-btn pg-btn-ghost" href="#sluzby">Co umíme</a>
          </div>
        </div>
        <div className="pg-tread" aria-hidden="true">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties} />
          ))}
        </div>
      </section>

      <section className="pg-sec" id="sluzby">
        <div className="pg-sec-head">
          <p className="pg-eyebrow pg-eyebrow-dark">Servis na minuty</p>
          <h2 className="pg-h2">Víme, kolik vám to vezme času</h2>
          <p className="pg-sec-intro">
            U nás se neptáte „jak dlouho ještě?“. Každá služba má svůj reálný čas
            v servisní hale — řekneme ho dopředu a dodržíme.
          </p>
        </div>

        <ol className="pg-list">
          {sluzby.map((s) => (
            <li className="pg-item" key={s.nazev}>
              <span className="pg-item-cas">{s.cas}</span>
              <div className="pg-item-text">
                <h3 className="pg-item-nazev">{s.nazev}</h3>
                <p className="pg-item-popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pg-trust">
        <div className="pg-trust-media">
          <img src="/section-1.webp" alt="Servisman Sibom při vyvažování kola" />
        </div>
        <div className="pg-trust-body">
          <p className="pg-eyebrow">Třicet sezon na hřídeli</p>
          <h2 className="pg-h2 pg-h2-light">
            Přezouváme Hanou už <em>30 let</em>
          </h2>
          <p className="pg-trust-lead">
            Začínali jsme jako malá dílna a dnes nás na třech provozovnách najdete
            32 — mechaniků, servismanů i lidí u pultu, kteří poradí, jakou gumu na
            vaše auto a jaký rozpočet.
          </p>
          <dl className="pg-stats">
            <div><dt>30 let</dt><dd>v olomouckém pneuservisu</dd></div>
            <div><dt>32 lidí</dt><dd>v dílně i na prodejně</dd></div>
            <div><dt>3 pobočky</dt><dd>Olomouc &amp; Přerov</dd></div>
          </dl>

          <ul className="pg-pobocky">
            {provozovny.map((p) => (
              <li key={p.mesto}>
                <span className="pg-pobocky-mesto">{p.mesto}</span>
                <span className="pg-pobocky-detail">{p.detail}</span>
              </li>
            ))}
          </ul>

          <img className="pg-trust-img2" src="/section-2.webp" alt="Regál s uskladněnými sadami pneumatik" />
        </div>
      </section>
    </main>
  );
}
