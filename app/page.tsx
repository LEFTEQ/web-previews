import type { CSSProperties } from "react";

export const metadata = {
  title: "LCL Servis s.r.o. — Revize elektro, hromosvodů a FVE v Brně",
  description:
    "Revizní technici z Brna. Provádíme revize elektroinstalací, hromosvodů, fotovoltaiky i spotřebičů. Revizní zpráva s razítkem, kterou úřad i pojišťovna uznají.",
  openGraph: {
    title: "LCL Servis s.r.o. — Revize elektro v Brně",
    description:
      "Revize elektroinstalací, hromosvodů a FVE. Autorizovaní revizní technici, Cejl 20, Brno.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

type Sluzba = {
  cislo: string;
  norma: string;
  nazev: string;
  popis: string;
  detail: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "A",
    norma: "ČSN 33 2000",
    nazev: "Revize elektroinstalací",
    popis:
      "Pevné rozvody v objektech třídy A bez nebezpečí výbuchu — rozvaděče, zásuvkové okruhy, jištění.",
    detail: "Výchozí i pravidelné revize",
  },
  {
    cislo: "⚡",
    norma: "ČSN EN 62305",
    nazev: "Revize hromosvodů",
    popis:
      "Jímací soustava, svody, uzemnění. Změříme přechodové odpory a najdeme přerušené spoje dřív než blesk.",
    detail: "Objekty třídy A",
  },
  {
    cislo: "☼",
    norma: "ČSN EN 62446",
    nazev: "Revize fotovoltaiky (FVE)",
    popis:
      "Kontrola DC i AC části, měničů a jištění. Podklad pro dotaci, pojištění i připojení k distribuci.",
    detail: "Střešní i pozemní elektrárny",
  },
  {
    cislo: "1000",
    norma: "do 1000 V AC",
    nazev: "Stroje a spotřebiče",
    popis:
      "Revize strojů a zařízení do 1000 V AC / 1500 V DC, spotřebičů a ručního nářadí na pracovištích.",
    detail: "Elektromontáže, opravy, údržba",
  },
];

const technici = [
  {
    jmeno: "Ing. Zdeněk Lukeš",
    role: "revizní technik",
    evc: "ev. č. 2248/24/R-EZ-E2A",
    tel: "+420 603 511 618",
  },
  {
    jmeno: "Ing. Petr Svoboda",
    role: "revizní technik",
    evc: "ev. č. 3663/25/R-EZ-E2A",
    tel: "+420 608 880 924",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="LCL Servis, domů">
          <span className="wordmark__mark" aria-hidden="true">
            L<span className="wordmark__bolt">C</span>L
          </span>
          <span className="wordmark__sub">SERVIS s.r.o.</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Revize</a>
          <a href="#duvera">O technicích</a>
          <a className="topnav__cta" href="tel:+420530501999">
            530 501 999
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" /> Revizní technici · Brno, Cejl 20
            </p>
            <h1 className="hero__title">
              Aby vám ta<br />
              instalace <span className="hl">nezhasla</span>
              <br />v nejhorší chvíli.
            </h1>
            <p className="hero__lead">
              LCL Servis dělá revize elektroinstalací, hromosvodů a fotovoltaiky. Přijedeme,
              proměříme, a odjedete s revizní zprávou, kterou uzná úřad, distribuce i pojišťovna.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420603511618">
                Zavolat technikovi
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Co revidujeme
              </a>
            </div>
            <dl className="hero__stats">
              <div>
                <dt>od roku 2012</dt>
                <dd>měříme v Brně</dd>
              </div>
              <div>
                <dt>2 technici</dt>
                <dd>s platným oprávněním</dd>
              </div>
              <div>
                <dt>A · FVE · LPS</dt>
                <dd>tři obory revizí</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Revizní technik LCL Servis při měření elektroinstalace přístrojem v rozvaděči"
              className="hero__img"
              width={900}
              height={1100}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-k">měřeno</span> přechodový odpor · napětí · izolace
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="eyebrow">Podle příslušné normy</p>
          <h2 id="sluzby-nadpis" className="sec-title">
            Čtyři věci, na které si vás<br />pozvou — a my je proměříme.
          </h2>
        </div>
        <div className="sluzby__wrap">
          <ul className="cards">
            {sluzby.map((s) => (
              <li className="card" key={s.nazev} style={{ "--mark": `"${s.cislo}"` } as CSSProperties}>
                <div className="card__mark" aria-hidden="true">
                  {s.cislo}
                </div>
                <p className="card__norma">{s.norma}</p>
                <h3 className="card__title">{s.nazev}</h3>
                <p className="card__desc">{s.popis}</p>
                <p className="card__detail">{s.detail}</p>
              </li>
            ))}
          </ul>
          <figure className="sluzby__figure">
            <img
              src="/section-1.webp"
              alt="Detail měřicího přístroje a rozvaděče při revizi elektroinstalace"
              width={800}
              height={600}
            />
            <figcaption>
              Každá zakázka končí razítkem a zprávou v ruce — ne slibem, že „to pošleme“.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <figure className="duvera__figure">
            <img
              src="/section-2.webp"
              alt="Technici LCL Servis při kontrole hromosvodu na střeše objektu v Brně"
              width={800}
              height={900}
            />
          </figure>
          <div className="duvera__text">
            <p className="eyebrow">O nás · lidé s evidenčním číslem</p>
            <h2 id="duvera-nadpis" className="sec-title sec-title--light">
              Revizi podepisuje<br />konkrétní člověk.
            </h2>
            <p className="duvera__lead">
              Nejsme call centrum. K vám přijede jeden ze dvou techniků, kteří ručí za výsledek svým
              evidenčním číslem u organizace udělující oprávnění. Firma sídlí na Cejlu 20 a v obchodním
              rejstříku je od května 2012.
            </p>
            <ul className="lidé">
              {technici.map((t) => (
                <li className="osoba" key={t.jmeno}>
                  <div>
                    <p className="osoba__jmeno">{t.jmeno}</p>
                    <p className="osoba__role">
                      {t.role} · {t.evc}
                    </p>
                  </div>
                  <a className="osoba__tel" href={`tel:${t.tel.replace(/\s/g, "")}`}>
                    {t.tel}
                  </a>
                </li>
              ))}
            </ul>
            <div className="duvera__doklady">
              <span>Výpis z OR</span>
              <span>Osvědčení ČMI</span>
              <span>Živnostenský list</span>
            </div>
            <p className="duvera__pozn">
              LCL Servis s.r.o., IČ 29356636 · nejsme plátci DPH · Krajský soud v Brně, sp. zn. C 74893.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
