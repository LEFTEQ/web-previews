import type { ReactNode } from "react";

export const metadata = {
  title: "CITY \u2013 spr\u00e1va dom\u016f | 260 dom\u016f v Ostrav\u011b pod jednou spr\u00e1vou",
  description:
    "Komplexn\u00ed spr\u00e1va bytov\u00fdch dom\u016f v Ostrav\u011b \u2013 \u00fa\u010detnictv\u00ed, vy\u00fa\u010dtov\u00e1n\u00ed slu\u017eeb, technick\u00e1 spr\u00e1va i pr\u00e1vn\u00ed servis. Star\u00e1me se o 260 dom\u016f dru\u017estev, SVJ i \u00fa\u0159ad\u016f.",
  openGraph: {
    title: "CITY \u2013 spr\u00e1va dom\u016f, s.r.o.",
    description:
      "260 bytov\u00fdch dom\u016f v Ostrav\u011b pod jednou spr\u00e1vou. \u00da\u010detnictv\u00ed, technika i bytov\u00e9 pr\u00e1vo od jedn\u00e9 firmy.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "\u00da",
    nazev: "\u00da\u010detnictv\u00ed a vy\u00fa\u010dtov\u00e1n\u00ed slu\u017eeb",
    popis:
      "Vedeme kompletn\u00ed \u00fa\u010detnictv\u00ed domu, ka\u017edoro\u010dn\u00ed vy\u00fa\u010dtov\u00e1n\u00ed tepla, vody a slu\u017eeb a p\u0159ehled plateb do fondu oprav. V\u0161e ve specializovan\u00e9m softwaru, kter\u00fd pravideln\u011b aktualizujeme.",
  },
  {
    cislo: "T",
    nazev: "Technick\u00e1 spr\u00e1va domu",
    popis:
      "Odstra\u0148ujeme z\u00e1vady, hl\u00edd\u00e1me revize v\u00fdtah\u016f, komín\u016f a rozvod\u016f a organizujeme opravy s prov\u011b\u0159en\u00fdmi \u0159emesln\u00edky. Vy \u0159e\u0161\u00edte jednu firmu, ne deset dodavatel\u016f.",
  },
  {
    cislo: "Z",
    nazev: "Zakl\u00e1d\u00e1n\u00ed dru\u017estev a SVJ",
    popis:
      "Zalo\u017e\u00edme bytov\u00e9 dru\u017estvo i spole\u010denstv\u00ed vlastn\u00edk\u016f jednotek, p\u0159iprav\u00edme stanovy a proveden\u00ed zm\u011bn v obchodn\u00edm rejst\u0159\u00edku dot\u00e1hneme a\u017e do konce.",
  },
  {
    cislo: "P",
    nazev: "Bytov\u00e9 pr\u00e1vo a vym\u00e1h\u00e1n\u00ed dluh\u016f",
    popis:
      "Jednatelka s mnohaletou prax\u00ed v bytov\u00e9m pr\u00e1vu vede soudn\u00ed vym\u00e1h\u00e1n\u00ed dluh\u016f, pr\u00e1vn\u00ed konzultace i p\u0159\u00edpravu stanov. Nadstandard, kter\u00fd jinde \u0159e\u0161\u00edte extern\u011b.",
  },
];

type Klient = {
  typ: string;
  poznamka: string;
};

const klienti: Klient[] = [
  { typ: "Bytov\u00e1 dru\u017estva", poznamka: "od men\u0161\u00edch dom\u016f po velk\u00e9 celky" },
  { typ: "Spole\u010denstv\u00ed vlastn\u00edk\u016f jednotek", poznamka: "veden\u00ed i \u00fa\u010detnictv\u00ed SVJ" },
  { typ: "Fyzick\u00e9 a pr\u00e1vnick\u00e9 osoby", poznamka: "soukrom\u00ed vlastn\u00edci dom\u016f" },
  { typ: "\u00da\u0159ady m\u011bstsk\u00fdch obvod\u016f", poznamka: "obecn\u00ed bytov\u00fd fond" },
];

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="CITY \u2013 spr\u00e1va dom\u016f, dom\u016f na hlavn\u00ed">
          <span className="wordmark__city">CITY</span>
          <span className="wordmark__rest">spr\u00e1va&nbsp;dom\u016f</span>
        </a>
        <a className="topbar__tel" href="tel:+420702009018">
          +420&nbsp;702&nbsp;009&nbsp;018
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Bytov\u00e9 domy v Ostrav\u011b, o kter\u00e9 se star\u00e1 CITY \u2013 spr\u00e1va dom\u016f"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Spr\u00e1va nemovitost\u00ed \u00b7 Ostrava</p>
          <h1 className="hero__nadpis" id="hero-nadpis">
            <span className="hero__cislo">260</span>
            <span className="hero__cislo-popis">
              bytov\u00fdch dom\u016f v Ostrav\u011b spravujeme jako jeden \u2013 od \u00fa\u010detnictv\u00ed a\u017e po soudn\u00ed vym\u00e1h\u00e1n\u00ed dluh\u016f.
            </span>
          </h1>
          <p className="hero__text">
            Dru\u017estva, SVJ, soukrom\u00ed vlastn\u00edci i m\u011bstsk\u00e9 obvody. Jedno
            m\u00edsto, kde se dozv\u00edte, kolik je ve fondu oprav, kdy p\u0159ijde
            revize a co d\u011bl\u00e1 star\u00fd dluh sousedn\u00edho bytu.
          </p>
          <div className="hero__akce">
            <a className="btn btn--primary" href="tel:+420702009018">
              Zavolat spr\u00e1vci
            </a>
            <a className="btn btn--ghost" href="mailto:info@cityspravadomu.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlavicka">
          <p className="sekce-eyebrow">Co pro d\u016fm d\u011bl\u00e1me</p>
          <h2 className="sekce-nadpis" id="sluzby-nadpis">
            \u010cty\u0159i agendy, jeden spr\u00e1vce
          </h2>
          <p className="sekce-perex">
            \u00da\u010detnictv\u00ed, technika, zakl\u00e1d\u00e1n\u00ed dru\u017estev i bytov\u00e9 pr\u00e1vo
            nejsou \u010dty\u0159i r\u016fzn\u00e9 firmy. U n\u00e1s to dr\u017e\u00ed pohromad\u011b jeden
            t\u00fdm se znalost\u00ed p\u0159\u00edslu\u0161n\u00fdch p\u0159edpis\u016f.
          </p>
        </div>

        <ol className="sluzby__grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.nazev}>
              <span className="karta__znak" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="karta__nazev">{s.nazev}</h3>
              <p className="karta__popis">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__media">
          <img
            src="/section-1.webp"
            alt="Kancel\u00e1\u0159 spr\u00e1vy dom\u016f na Čujkovov\u011b v Ostrav\u011b-Z\u00e1b\u0159ehu"
            className="onas__img"
          />
        </div>

        <div className="onas__text">
          <p className="sekce-eyebrow">Komu spr\u00e1vu sv\u011b\u0159ili</p>
          <h2 className="sekce-nadpis" id="onas-nadpis">
            V Ostrav\u011b n\u00e1s zn\u00e1 260 dom\u016f
          </h2>
          <p className="sekce-perex">
            Zam\u011bstnanci maj\u00ed mnohalet\u00e9 zku\u0161enosti s komplexn\u00ed spr\u00e1vou
            dom\u016f, byt\u016f i nebytov\u00fdch prostor a pracuj\u00ed se znalost\u00ed z\u00e1kona.
            Pod jednou spr\u00e1vou dr\u017e\u00edme domy nejr\u016fzn\u011bj\u0161\u00edch vlastn\u00edk\u016f:
          </p>

          <ul className="vlastnici">
            {klienti.map((k) => (
              <li className="vlastnici__radek" key={k.typ}>
                <span className="vlastnici__typ">{k.typ}</span>
                <span className="vlastnici__pozn">{k.poznamka}</span>
              </li>
            ))}
          </ul>

          <dl className="sidlo">
            <div className="sidlo__radek">
              <dt className="sidlo__label">S\u00eddlo</dt>
              <dd className="sidlo__hod">
                \u010cujkovova 36, Ostrava-Z\u00e1b\u0159eh, 700 30
              </dd>
            </div>
            <div className="sidlo__radek">
              <dt className="sidlo__label">I\u010c</dt>
              <dd className="sidlo__hod">03033201</dd>
            </div>
            <div className="sidlo__radek">
              <dt className="sidlo__label">Telefon</dt>
              <dd className="sidlo__hod">
                <a href="tel:+420702009018">+420&nbsp;702&nbsp;009&nbsp;018</a>
              </dd>
            </div>
            <div className="sidlo__radek">
              <dt className="sidlo__label">E-mail</dt>
              <dd className="sidlo__hod">
                <a href="mailto:info@cityspravadomu.cz">
                  info@cityspravadomu.cz
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
