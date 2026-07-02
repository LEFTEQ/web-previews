// DŘEVO TRUST, a.s. — Hradec Králové
// Návrhový koncept: „Nářez" — celý layout vychází z nářezového plánu velkoformátové desky.
// Signature prvek: hero jako řezaná deska LTD s kótami a řeznou linkou pily.

const sortiment = [
  {
    kod: "01 — PLOŠNÉ MATERIÁLY",
    nazev: "Desky LTD, MDF a kompakty",
    popis:
      "Přes 400 dekorů skladem — Egger, Fundermax, Rauvisio. Formáty až 2800 × 2070 mm, tloušťky 8–38 mm. Desky před expedicí čistíme.",
    detail: "od 1 352 Kč / ks s DPH",
  },
  {
    kod: "02 — NÁŘEZ NA MÍRU",
    nazev: "Nařežeme a olepíme hrany",
    popis:
      "Pošlete nářezový plán, my nařežeme s přesností na milimetr a olepíme hrany ABS. Hotové dílce si vyzvednete nebo je dovezeme na stavbu.",
    detail: "obvykle do 3 pracovních dnů",
  },
  {
    kod: "03 — PRACOVNÍ DESKY",
    nazev: "Kuchyňské desky a parapety",
    popis:
      "Postformingové i kompaktní pracovní desky délek až 4100 mm, dřezy Franke, úchytky a zásuvkové systémy. Vše na jednom místě.",
    detail: "skladem v Hradci Králové",
  },
  {
    kod: "04 — KOVÁNÍ A NÁŘADÍ",
    nazev: "Kování, chemie, Festool",
    popis:
      "Zásuvky, panty, pojezdy a profesionální nářadí Festool včetně akcí Bonus Weeks. Poradíme, co se hodí přesně na vaši zakázku.",
    detail: "pult pro řemeslníky i kutily",
  },
];

const duvody = [
  {
    cislo: "2 800 × 2 070",
    text: "Standardní formát desky, který u nás vždy najdete skladem — a odvezete si ho už nařezaný na dílce.",
  },
  {
    cislo: "±1 mm",
    text: "Přesnost nářezu na pilách v našem distribučním centru. Dílec sedne napoprvé, bez dořezávání na stavbě.",
  },
  {
    cislo: "FSC®",
    text: "Certifikované materiály z odpovědně obhospodařovaných lesů. Certifikáty a technické listy vám dáme k zakázce.",
  },
];

export default function Page() {
  return (
    <main className="dt">
      {/* ————— HLAVIČKA ————— */}
      <header className="dt-top">
        <div className="dt-wordmark" aria-label="Dřevo Trust">
          <span className="dt-wm-drevo">DŘEVO</span>
          <span className="dt-wm-cut" aria-hidden="true" />
          <span className="dt-wm-trust">TRUST</span>
        </div>
        <nav className="dt-nav" aria-label="Hlavní navigace">
          <a href="#sortiment">Sortiment</a>
          <a href="#proc">Proč k nám</a>
          <a className="dt-nav-tel" href="tel:+420495000111">
            495 000 111
          </a>
        </nav>
      </header>

      {/* ————— HERO: nářezový plán ————— */}
      <section className="dt-hero" aria-labelledby="hero-h">
        <div className="dt-hero-plan" aria-hidden="true">
          {/* kóty nářezového plánu */}
          <span className="dt-dim dt-dim-top">2 800 mm</span>
          <span className="dt-dim dt-dim-side">2 070 mm</span>
          <span className="dt-saw-line" />
          <span className="dt-saw-line dt-saw-line-2" />
        </div>

        <p className="dt-eyebrow">
          Stavebniny a plošné materiály · Hradec Králové
        </p>

        <h1 id="hero-h" className="dt-hero-title">
          <span className="dt-line dt-line-1">Deska.</span>
          <span className="dt-line dt-line-2">Řez.</span>
          <span className="dt-line dt-line-3">
            Hotový dílec<span className="dt-dot">.</span>
          </span>
        </h1>

        <p className="dt-hero-sub">
          Vyberete dekor z více než 400 skladem, pošlete rozměry — my nařežeme
          s přesností na milimetr, olepíme hrany a připravíme k odběru. Truhlářům,
          firmám i vám, když si děláte kuchyň sami.
        </p>

        <div className="dt-hero-cta">
          <a className="dt-btn dt-btn-primary" href="tel:+420495000111">
            Zavolat prodejnu
          </a>
          <a className="dt-btn dt-btn-ghost" href="mailto:hradec@drevotrust.cz">
            Poslat nářezový plán
          </a>
        </div>

        <dl className="dt-hero-facts">
          <div>
            <dt>Dekorů skladem</dt>
            <dd>400+</dd>
          </div>
          <div>
            <dt>Přesnost řezu</dt>
            <dd>±1&nbsp;mm</dd>
          </div>
          <div>
            <dt>Nářez hotový</dt>
            <dd>do 3 dnů</dd>
          </div>
        </dl>
      </section>

      {/* ————— SEKCE 1: SORTIMENT jako kusovník ————— */}
      <section className="dt-sortiment" id="sortiment" aria-labelledby="sort-h">
        <div className="dt-section-head">
          <h2 id="sort-h">Co u nás nakoupíte</h2>
          <p>
            Kusovník jako z výroby: od surové desky po poslední úchytku. Všechno
            pod jednou střechou v distribučním centru v Hradci Králové.
          </p>
        </div>

        <ol className="dt-kusovnik">
          {sortiment.map((p) => (
            <li key={p.kod} className="dt-polozka">
              <p className="dt-polozka-kod">{p.kod}</p>
              <h3>{p.nazev}</h3>
              <p className="dt-polozka-popis">{p.popis}</p>
              <p className="dt-polozka-detail">{p.detail}</p>
            </li>
          ))}
        </ol>

        <p className="dt-sortiment-pozn">
          Aktuální ceník najdete na prodejně — například LTD dub noma 18 mm od
          1 352 Kč, kompaktní deska Fundermax od 20 197 Kč s DPH. Ceny vám rádi
          spočítáme rovnou na váš nářezový plán.
        </p>
      </section>

      {/* ————— SEKCE 2: DŮVĚRA v rozměrech ————— */}
      <section className="dt-proc" id="proc" aria-labelledby="proc-h">
        <div className="dt-section-head dt-section-head-inverse">
          <h2 id="proc-h">Proč pro materiál do Hradce</h2>
          <p>
            Nejsme e-shop bez tváře. Jsme sklad, pila a pult, kde vám poradí
            lidé, kteří s deskami pracují dvacet let.
          </p>
        </div>

        <div className="dt-mirky">
          {duvody.map((d) => (
            <article key={d.cislo} className="dt-mirka">
              <p className="dt-mirka-cislo">{d.cislo}</p>
              <span className="dt-mirka-kota" aria-hidden="true" />
              <p className="dt-mirka-text">{d.text}</p>
            </article>
          ))}
        </div>

        <blockquote className="dt-reference">
          <p>
            „Poslal jsem výkres kuchyně v pátek, ve středu jsem si odvážel
            nařezané a olepené dílce. Sedlo to na milimetr — poprvé jsem na
            montáži nemusel nic dořezávat."
          </p>
          <cite>— Petr Vaněk, truhlář, Třebechovice pod Orebem</cite>
        </blockquote>
      </section>
    </main>
  );
}
