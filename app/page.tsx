import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitbike — kolo od nás podle vás | Praha 4",
  description:
    "Kitbike s.r.o. staví kola na míru s jednou komponentovou linií a diagnostikuje elektrokola Shimano, Bosch a Panasonic. Servis a prodej v Praze 4, Medkova 22.",
  metadataBase: new URL("https://kitbike.cz"),
  openGraph: {
    title: "Kitbike — kolo od nás podle vás",
    description:
      "Kola na míru s jednou komponentovou linií a servis elektrokol Shimano, Bosch a Panasonic. Praha 4.",
    type: "website",
    locale: "cs_CZ",
    siteName: "Kitbike s.r.o.",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Dílna Kitbike v Praze" }],
  },
  icons: {
    icon:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' fill='%230f0f0f'/><circle cx='10' cy='21' r='6' fill='none' stroke='%23E3242B' stroke-width='2'/><circle cx='23' cy='21' r='6' fill='none' stroke='%23E3242B' stroke-width='2'/><path d='M10 21 L16 12 L23 21 M16 12 L19 12' fill='none' stroke='white' stroke-width='2'/></svg>",
  },
};

const nav = ["Kola na míru", "Servis", "Helmy Casco", "Výplety", "Výprodej", "Kontakt"];

const buildSteps = [
  {
    n: "01",
    title: "Geometrie podle vás",
    body: "Horské, gravel nebo silničku? Vybereme rám a posadíme vás do sedla tak, aby kolo sedělo přesně na vaši postavu a styl ježdění.",
  },
  {
    n: "02",
    title: "Jedna komponentová linie",
    body: "Žádný mix dílů z bedny. Pohon, brzdy i přehazovačku držíme v jedné ucelené řadě — tak, jak to výrobce zamýšlel.",
  },
  {
    n: "03",
    title: "Váš design, náš stavěč",
    body: "Barvy a detaily navrhnete vy. My kolo poskládáme, seřídíme a předáme hotové. Každé kolo od nás je originál.",
  },
];

const servisRows = [
  { name: "Diagnostika e-pohonu", detail: "Shimano · Bosch · Panasonic", note: "čtení chyb, aktualizace, kontrola baterie" },
  { name: "Základní seřízení", detail: "řazení, brzdy, centrování", note: "na počkání v sezóně" },
  { name: "Servisní balíčky", detail: "od kontroly po kompletku", note: "online objednání předem" },
  { name: "Výplety kol", detail: "ruční stavba a centrování", note: "na míru k vašemu rámu" },
];

export default function Page() {
  return (
    <main className="kb">
      <header className="kb-top">
        <a className="kb-logo" href="#" aria-label="Kitbike — domů">
          <span className="kb-logo-mark" aria-hidden="true">
            <span className="kb-wheel" />
            <span className="kb-wheel" />
          </span>
          <span className="kb-logo-text">
            KIT<span className="kb-logo-accent">BIKE</span>
          </span>
        </a>
        <nav className="kb-nav" aria-label="Hlavní navigace">
          {nav.map((n) => (
            <a key={n} href="#">
              {n}
            </a>
          ))}
        </nav>
        <a className="kb-call kb-call--top" href="tel:+420603477263">
          Zavolat 603 477 263
        </a>
      </header>

      <section className="kb-hero">
        <div className="kb-hero-media">
          <img src="/hero.webp" alt="Dílna Kitbike v Praze — kolo rozestavěné na montážním stojanu" />
        </div>
        <div className="kb-hero-inner">
          <p className="kb-eyebrow">Medkova 22, Praha 4 · dílna &amp; prodejna</p>
          <h1 className="kb-hero-title">
            Kolo od nás,
            <br />
            <span className="kb-hero-title-accent">podle vás.</span>
          </h1>
          <p className="kb-hero-lead">
            Stavíme kola na míru z&nbsp;jedné komponentové linie — žádný mix dílů, žádné kompromisy.
            A&nbsp;diagnostikujeme elektrokola s&nbsp;pohony Shimano, Bosch i&nbsp;Panasonic.
          </p>
          <div className="kb-hero-cta">
            <a className="kb-btn" href="#stavba">
              Navrhnout si kolo
            </a>
            <a className="kb-btn kb-btn--ghost" href="#servis">
              Objednat servis
            </a>
          </div>
          <p className="kb-hero-note">Otevřeno od úterý 7.&nbsp;7. · Po–Pá 13–18&nbsp;h</p>
        </div>
      </section>

      <section className="kb-section" id="stavba" aria-labelledby="stavba-h">
        <div className="kb-section-head">
          <p className="kb-eyebrow kb-eyebrow--dark">Stavba na míru</p>
          <h2 id="stavba-h" className="kb-h2">
            Každé kolo je originál. Ten váš.
          </h2>
          <p className="kb-sub">
            Nekupujete kolo z&nbsp;regálu. Sestavíme ho krok po kroku tak, aby sedělo vaší postavě,
            terénu i&nbsp;vkusu.
          </p>
        </div>
        <div className="kb-build">
          <ol className="kb-steps">
            {buildSteps.map((s) => (
              <li key={s.n} className="kb-step">
                <span className="kb-step-n">{s.n}</span>
                <div>
                  <h3 className="kb-step-title">{s.title}</h3>
                  <p className="kb-step-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="kb-build-fig">
            <img
              src="/section-1.webp"
              alt="Detail komponent kola připravených ke stavbě v dílně Kitbike"
            />
            <figcaption>Jedna komponentová linie od pohonu po přehazovačku.</figcaption>
          </figure>
        </div>
      </section>

      <section className="kb-section kb-section--dark" id="servis" aria-labelledby="servis-h">
        <div className="kb-servis">
          <figure className="kb-servis-fig">
            <img
              src="/section-2.webp"
              alt="Servisní technik Kitbike při seřizování elektrokola"
            />
          </figure>
          <div className="kb-servis-body">
            <p className="kb-eyebrow">Servis &amp; elektrokola</p>
            <h2 id="servis-h" className="kb-h2 kb-h2--light">
              Špičkově vybavená dílna, poctivé seřízení.
            </h2>
            <p className="kb-sub kb-sub--light">
              Od základních úkonů po servisní balíčky. Elektrokola čteme diagnostikou přímo z&nbsp;pohonu
              — poznáme, co kolo trápí, dřív než sáhnete po klíči.
            </p>
            <ul className="kb-servis-list">
              {servisRows.map((r) => (
                <li key={r.name} className="kb-servis-item">
                  <div className="kb-servis-main">
                    <span className="kb-servis-name">{r.name}</span>
                    <span className="kb-servis-detail">{r.detail}</span>
                  </div>
                  <span className="kb-servis-note">{r.note}</span>
                </li>
              ))}
            </ul>
            <div className="kb-servis-facts">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Medkova 22/555, 149 00 Praha 4</dd>
              </div>
              <div>
                <dt>Otevírací doba (sezóna)</dt>
                <dd>Po–Pá 13–18 h · So, Ne zavřeno</dd>
              </div>
              <div>
                <dt>Objednání</dt>
                <dd>online předem nebo telefonicky</dd>
              </div>
            </div>
            <a className="kb-btn kb-btn--light" href="tel:+420603477263">
              Objednat servis · 603 477 263
            </a>
          </div>
        </div>
      </section>

      <a className="kb-call kb-call--float" href="tel:+420603477263">
        <span className="kb-call-dot" aria-hidden="true" />
        Zavolat do dílny
      </a>
    </main>
  );
}
