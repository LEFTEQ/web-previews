export const metadata = {
  title: "Sklo Leopold — sklenářství Brno | řezání skla, zrcadla, zasklívání",
  description:
    "Sklenářství Sklo Leopold v Brně: řezání skla na míru, zrcadla, bezpečnostní a kalené sklo, skleněné zástěny do kuchyní i koupelen, zasklívání oken a dveří. Přijedeme, zaměříme, zasklíme.",
  openGraph: {
    title: "Sklo Leopold — sklenářství Brno",
    description:
      "Řezání skla na míru, zrcadla, kalené sklo a zasklívání. Brněnské sklenářství s vlastní dílnou.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "FLOAT 4",
    nazev: "Řezání skla na míru",
    text: "Přineste rozměr, odnesete si sklo. Float, ornamentní i mléčné sklo řežeme na desetinu milimetru, hrany zabrousíme, ať se nepořežete. Většinu formátů máme skladem — počkáte si pár minut.",
    detail: "tloušťky 2–10 mm · broušení hran v ceně",
  },
  {
    kod: "ZRCADLO 5",
    nazev: "Zrcadla a fazety",
    text: "Zrcadlo do předsíně, nad umyvadlo nebo na celou stěnu fitka. Fazetované hrany, výřezy na zásuvky a světla, lepení přímo na zeď. Zaměříme u vás doma, montáž do týdne.",
    detail: "fazeta 10–40 mm · lepení i závěs",
  },
  {
    kod: "ESG 8",
    nazev: "Kalené a bezpečnostní sklo",
    text: "Kuchyňské zástěny za varnou desku, sprchové kouty, skleněné dveře a zábradlí. Kalené sklo ESG snese žár i ránu — a když praskne, rozpadne se na tupé kostičky, ne na střepy.",
    detail: "ESG, VSG (connex) · potisk a lakování",
  },
  {
    kod: "IZOL. DVOJSKLO",
    nazev: "Zasklívání a opravy",
    text: "Prasklé okno, rozbitá výloha, zamlžené dvojsklo. V Brně a okolí přijedeme zpravidla do 24 hodin, zaměříme na místě a vyměníme bez bourání rámu. Havárie řešíme přednostně.",
    detail: "okna · dveře · výlohy · dvojskla",
  },
];

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedeme k vám s laserem a šablonami. Šikmé zdi, staré rámy, výklenky — v Brně jich známe dost, měříme proto vždy na místě.",
  },
  {
    krok: "Řez a brus",
    text: "Sklo řežeme ve vlastní dílně na řezacím stole, hrany brousíme do matu nebo leštíme do čira. Kalení zajišťujeme u ověřené kalírny.",
  },
  {
    krok: "Montáž",
    text: "Přivezeme na přísavkách, usadíme, zasilikonujeme, uklidíme po sobě. Staré sklo odvezeme k recyklaci — střepy nenecháváme.",
  },
];

export default function Page() {
  return (
    <main className="gl">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-veil" />
        </div>

        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* diamantový řezák skla */}
              <svg viewBox="0 0 32 32" width="30" height="30" role="img">
                <path
                  d="M16 3 L26 16 L16 29 L6 16 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path d="M6 16 H26 M16 3 L16 29" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
              </svg>
            </span>
            <span className="brand-word">
              SKLO<em>LEOPOLD</em>
            </span>
            <span className="brand-loc">sklenářství · Brno</span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Řežeme sklo</span>
            <span className="line line-2">na desetinu</span>
            <span className="line line-3">
              milimetru<span className="cut-dot" aria-hidden="true">.</span>
            </span>
          </h1>

          <p className="hero-lead">
            Brněnské sklenářství s vlastní dílnou. Zrcadla, kuchyňské zástěny,
            sprchové kouty i výměna prasklého okna do 24 hodin — zaměříme u vás,
            zasklíme bez bourání.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420555000000">
              Zavolat do dílny
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co skleníme
            </a>
          </div>

          <dl className="hero-facts">
            <div>
              <dt>Havárie</dt>
              <dd>do 24 h v Brně</dd>
            </div>
            <div>
              <dt>Přesnost řezu</dt>
              <dd>± 0,1 mm</dd>
            </div>
            <div>
              <dt>Sklo skladem</dt>
              <dd>2–10 mm</dd>
            </div>
          </dl>
        </div>

        {/* signature: linie řezu napříč hranou hero sekce */}
        <div className="cut-line" aria-hidden="true" />
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Ceník podle tabule — jako v dílně</p>
          <h2 id="sluzby-h">Co pro vás nařežeme</h2>
          <p className="section-lead">
            Každou zakázku značíme jako v dílně: typem skla a tloušťkou.
            Vy řeknete, kam sklo patří — my poradíme, které tam patří.
          </p>
        </div>

        <ul className="karty" role="list">
          {sluzby.map((s) => (
            <li className="karta" key={s.nazev}>
              <span className="karta-kod">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.text}</p>
              <span className="karta-detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DÍLNA / DŮVĚRA ===== */}
      <section className="dilna" aria-labelledby="dilna-h">
        <div className="dilna-grid">
          <figure className="dilna-media">
            <img
              src="/section-2.webp"
              alt="Sklenář v dílně Sklo Leopold při řezání tabule skla na řezacím stole"
              className="dilna-img"
            />
            <figcaption>Řezací stůl v naší dílně — tady vzniká každá zakázka.</figcaption>
          </figure>

          <div className="dilna-text">
            <p className="eyebrow">Dílna v Brně, řemeslo v rodině</p>
            <h2 id="dilna-h">Sklo projde třemi páry rukou, než ho pustíme z dílny</h2>
            <p className="dilna-lead">
              Nejsme překupníci tabulí. Sklo u nás dostane přesný řez, zabroušenou
              hranu a kontrolu proti světlu — teprve pak jede k vám. Zákazníci se
              vracejí, protože víme, jak se chová sklo ve starém brněnském činžáku
              i v novostavbě.
            </p>

            <ol className="kroky" role="list">
              {kroky.map((k, i) => (
                <li key={k.krok}>
                  <span className="krok-cislo" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3>{k.krok}</h3>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <blockquote className="reference">
              <p>
                „Prasklá výloha v pátek večer, v sobotu ráno už měřili a v pondělí
                jsme otvírali s novým sklem. Víc netřeba.“
              </p>
              <cite>— pekařství na Veveří, Brno-střed</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
