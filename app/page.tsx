export const metadata = {
  title: "SAŠ GLASS — Sklenářství Praha 6 | Řezání skla, zrcadla, zasklívání",
  description:
    "Sklenářství SAŠ GLASS na Praze 6, Myslbekova 5. Řezání skla na míru, zrcadla, zasklívání oken a dveří, kalené sklo, akvária. Zavolejte, sklo připravíme na počkání.",
  openGraph: {
    title: "SAŠ GLASS — Sklenářství Praha 6",
    description:
      "Řezání skla na míru, zrcadla, zasklívání a kalené sklo. Myslbekova 5, Praha 6 — Střešovice.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    nazev: "Řezání skla na míru",
    tloustka: "2–10 mm",
    popis:
      "Přineste rozměry, my nařežeme. Float, matné i ornamentní sklo — běžné formáty připravíme na počkání, hrany zabrousíme, ať se nepořežete.",
  },
  {
    nazev: "Zrcadla",
    tloustka: "3–6 mm",
    popis:
      "Zrcadlo do koupelny, předsíně nebo na celou stěnu posilovny. Řežeme na milimetr přesně, včetně fazety, otvorů pro světla a lepení přímo na zeď.",
  },
  {
    nazev: "Zasklívání oken a dveří",
    tloustka: "jednoduché i dvojsklo",
    popis:
      "Prasklá tabule v okně, výloze nebo dveřích? Zaměříme u vás, staré sklo vyndáme a nové zasklíme — i v činžácích se špaletovými okny, kterých je na Praze 6 plno.",
  },
  {
    nazev: "Kalené a vrstvené sklo",
    tloustka: "4–12 mm",
    popis:
      "Sprchové kouty, skleněné dveře, zábradlí a kuchyňské zástěny za linku. Bezpečnostní sklo na zakázku včetně vrtání a výřezů pro zásuvky.",
  },
  {
    nazev: "Akvária a terária",
    tloustka: "lepené UV lepidlem",
    popis:
      "Lepíme akvária na míru podle vašich rozměrů — do obýváku i pro chovatele. Spoje čisté, těsné a bez bublin.",
  },
  {
    nazev: "Obrazové sklo a rámování",
    tloustka: "2 mm, antireflex",
    popis:
      "Sklo do rámu na diplom, fotku i olej po babičce. Nařežeme přesně podle rámu, na přání antireflexní, hned s sebou.",
  },
];

const duvody = [
  {
    heslo: "Na počkání",
    text: "Běžné řezání a broušení uděláme, zatímco počkáte. Do dílny to od tramvaje Malovanka máte dvě minuty pěšky.",
  },
  {
    heslo: "Na milimetr",
    text: "Sklo je neúprosný materiál — buď sedí, nebo praskne. Měříme dvakrát, řežeme jednou a hrany brousíme do hladka.",
  },
  {
    heslo: "U vás doma",
    text: "Zasklívání a montáž zrcadel děláme po celé Praze 6 i okolí. Zaměříme, přivezeme, namontujeme a uklidíme po sobě střepy.",
  },
];

export default function Page() {
  return (
    <main className="sg">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Sklenářství SAŠ GLASS">
        <header className="hero-top">
          <span className="wordmark">
            SAŠ<span className="wordmark-cut" aria-hidden="true"></span>GLASS
          </span>
          <span className="hero-top-note">Sklenářství · Praha 6</span>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Řemeslná dílna, Myslbekova 5, Střešovice</p>
          <h1 className="hero-title">
            <span className="line line-1">Sklo řežeme</span>
            <span className="line line-2">
              na&nbsp;<em className="glass-word">milimetr</em>.
            </span>
            <span className="line line-3">A na počkání.</span>
          </h1>

          {/* signature: řezná linie diamantu napříč herem */}
          <div className="cutline" aria-hidden="true">
            <span className="cutline-track"></span>
            <span className="cutline-diamond"></span>
            <span className="cutline-label">← linie řezu · diamantový řezák</span>
          </div>

          <p className="hero-lead">
            Zrcadla, zasklívání oken, kalené sklo do sprchy i sklo do rámu na
            obraz. Přijďte s rozměry, nebo zavolejte — zaměříme u vás.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420220513015">
              Zavolat do dílny
            </a>
            <a className="btn btn-ghost" href="mailto:info@sasglass.cz">
              Poslat rozměry e-mailem
            </a>
          </div>

          <dl className="hero-facts">
            <div className="fact">
              <dt>Tloušťky skla</dt>
              <dd>2–12 mm</dd>
            </div>
            <div className="fact">
              <dt>Běžný řez</dt>
              <dd>na počkání</dd>
            </div>
            <div className="fact">
              <dt>Montáž</dt>
              <dd>celá Praha 6</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co vám nařežeme, zabrousíme a zasklíme</h2>
          <p className="section-sub">
            U každé práce uvádíme tloušťku skla, se kterou počítáme — ať víte,
            co dostanete do ruky.
          </p>
        </div>

        <ul className="tabule-grid">
          {sluzby.map((s) => (
            <li className="tabule" key={s.nazev}>
              <span className="tabule-mm">{s.tloustka}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head">
          <h2 id="duvera-h">Sklenářství, jak má být</h2>
          <p className="section-sub">
            Malá dílna pod Strahovem. Žádné call centrum — telefon bere ten,
            kdo vám sklo pak opravdu nařeže.
          </p>
        </div>

        <div className="duvera-grid">
          {duvody.map((d) => (
            <article className="duvera-card" key={d.heslo}>
              <span className="duvera-cut" aria-hidden="true"></span>
              <h3>{d.heslo}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <div className="dilna">
          <div className="dilna-mapa" aria-hidden="true">
            <span className="dilna-pin"></span>
          </div>
          <div className="dilna-info">
            <h3>Kde nás najdete</h3>
            <p className="dilna-adresa">
              Myslbekova 5, 169 00 Praha 6 — Střešovice
            </p>
            <p>
              Dvě minuty pěšky od zastávky Malovanka (tram 22, 23, 25).
              Autem zastavíte přímo před dílnou — sklo vám pomůžeme naložit.
            </p>
            <p className="dilna-hodiny">
              Po–Pá 8:00–17:00 · větší zakázky po telefonu i mimo otevírací dobu
            </p>
            <a className="btn btn-solid" href="tel:+420220513015">
              Zavolat: 220 513 015
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
