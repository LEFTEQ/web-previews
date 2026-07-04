import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ELKOT Brno — elektroinstalace a revize | Nezamyslova, Brno",
  description:
    "Elektroinstalace, hromosvody a revize vyhrazených zařízení v Brně. Rekonstrukce rozvodů bytů a panelových domů, elektrorevize objektů, projektová dokumentace. ELKOT Brno s.r.o.",
  metadataBase: new URL("https://elkot.cz"),
  openGraph: {
    title: "ELKOT Brno — elektroinstalace a revize",
    description:
      "Elektroinstalace, hromosvody a revize v Brně. Rekonstrukce rozvodů, elektrorevize objektů, veřejné osvětlení.",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Rozvaděč a měření při revizi elektroinstalace" }],
  },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230A0E1A'/%3E%3Cpath d='M18 6 L9 18 h6 l-2 8 l10-13 h-6 z' fill='%23FFD23F'/%3E%3C/svg%3E",
      },
    ],
  },
};

const faze = [
  {
    kod: "L1",
    nadpis: "Elektroinstalace",
    lead: "Kompletní rozvody od jističe po zásuvku.",
    body: [
      "Rekonstrukce elektrických rozvodů bytů a panelových domů",
      "Montáž, opravy a zkoušky vyhrazených elektrických zařízení",
      "Montážní dozor a ověřovací zkoušky navržených soustav a obvodů",
      "Údržba veřejného osvětlení",
    ],
  },
  {
    kod: "L2",
    nadpis: "Hromosvody a uzemnění",
    lead: "Aby do vás blesk uhodil bez následků.",
    body: [
      "Instalace hromosvodů a uzemňovacích soustav",
      "Projektová dokumentace k hromosvodům a elektroinstalacím",
      "Kontroly a opravy stávající jímací soustavy",
    ],
  },
  {
    kod: "L3",
    nadpis: "Revize",
    lead: "Papír od nás, klid ve vaší hlavě.",
    body: [
      "Revize elektroinstalací, hromosvodů, ručního nářadí a spotřebičů",
      "Elektrorevize hal, škol, úřadů, skladů a kanceláří",
      "Revize elektrických strojů a průmyslových objektů",
    ],
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="mark" href="#" aria-label="ELKOT Brno — úvod">
          <span className="mark__bolt" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path d="M14 2 L5 14 h6 l-2 8 l10-13 h-6 z" fill="currentColor" />
            </svg>
          </span>
          <span className="mark__word">
            EL<span className="mark__kot">KOT</span>
          </span>
          <span className="mark__loc">Brno</span>
        </a>
        <a className="nav__call" href="tel:+420728558307">
          Zavolat 728 558 307
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" /> Elektro · revize · Brno-jih
            </p>
            <h1 id="hero-h">
              Fáze, nulák,
              <br />
              <span className="hero__accent">ochranný vodič.</span>
              <br />
              Zapojíme to správně.
            </h1>
            <p className="hero__lead">
              ELKOT Brno tahá rozvody, staví hromosvody a dělá revize s razítkem
              už léta — od bytového jádra po výrobní halu. Sídlíme na Nezamyslově
              a jezdíme po celém Brně.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="tel:+420728558307">
                Zavolat elektrikáře
              </a>
              <a className="btn btn--ghost" href="tel:+420734622372">
                Objednat revizi
              </a>
            </div>
            <dl className="hero__meta">
              <div>
                <dt>Elektro</dt>
                <dd>+420 728 558 307</dd>
              </div>
              <div>
                <dt>Revize</dt>
                <dd>+420 734 622 372</dd>
              </div>
              <div>
                <dt>Kde</dt>
                <dd>Nezamyslova 2799/28, Brno</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Detail rozvaděče a měřicího přístroje během revize elektroinstalace"
              width={880}
              height={1040}
            />
            <figcaption className="hero__tag">
              <span>Rozvaděč</span> pod napětím i pod kontrolou
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="work" aria-labelledby="work-h">
        <div className="sec__head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" /> Co u vás uděláme
          </p>
          <h2 id="work-h">Tři fáze, jedno napětí</h2>
          <p className="sec__lead">
            Od nového rozvodu přes ochranu před bleskem po revizní zprávu, kterou
            vám bez řečí vezme pojišťovna i hasič.
          </p>
        </div>

        <ol className="cards">
          {faze.map((f) => (
            <li className="card" key={f.kod}>
              <span className="card__kod" aria-hidden="true">
                {f.kod}
              </span>
              <h3 className="card__h">{f.nadpis}</h3>
              <p className="card__lead">{f.lead}</p>
              <ul className="card__list">
                {f.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="work__strip">
          <img
            src="/section-1.webp"
            alt="Elektrikář ELKOT při práci na rozvodech v rekonstruovaném objektu"
            width={1400}
            height={620}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-h">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Hotová instalace a měření na stavbě v Brně"
              width={780}
              height={900}
              loading="lazy"
            />
          </figure>
          <div className="trust__text">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" /> O nás
            </p>
            <h2 id="trust-h">
              Brněnská firma, která to za sebou umí
              <span className="trust__pipe"> uklidit.</span>
            </h2>
            <p className="trust__body">
              ELKOT Brno s.r.o. zvládne elektro komplexně — u bytu i u celého
              paneláku, u kanceláře i výrobní haly. Když je potřeba, umíme kolem
              elektra pokrýt i navazující stavební práce, takže neřešíte pět
              firem najednou.
            </p>
            <ul className="trust__facts">
              <li>
                <span className="trust__label">Rozvody</span>
                Byty, panelové domy i průmyslové objekty
              </li>
              <li>
                <span className="trust__label">Papíry v pořádku</span>
                Revizní zprávy, projektová dokumentace, ověřovací zkoušky
              </li>
              <li>
                <span className="trust__label">Ochrana</span>
                Hromosvody, uzemnění, veřejné osvětlení
              </li>
            </ul>
            <div className="trust__ident">
              <span>IČ 283 25 818</span>
              <span className="trust__sep" aria-hidden="true">/</span>
              <span>Nezamyslova 2799/28, 615 00 Brno</span>
              <span className="trust__sep" aria-hidden="true">/</span>
              <a href="mailto:elkot@elkot.cz">elkot@elkot.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
