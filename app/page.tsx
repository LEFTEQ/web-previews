import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOMGIPS — sádrokartony a suchá výstavba, Praha",
  description:
    "Sádrokartonář v Praze. Příčky, podhledy, akustické stěny a zapravení do finální stěrky Q3–Q4. Rovné hrany, čisté styky, termín, který platí.",
  openGraph: {
    title: "DOMGIPS — sádrokartony a suchá výstavba, Praha",
    description:
      "Příčky, podhledy a akustické konstrukce v pražských bytech i provozovnách. Postaveno na rovinu, zapraveno do stěrky.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23E9E4DA'/%3E%3Crect x='6' y='6' width='20' height='20' fill='none' stroke='%231D4E6B' stroke-width='2'/%3E%3Cline x1='16' y1='6' x2='16' y2='26' stroke='%231D4E6B' stroke-width='2'/%3E%3C/svg%3E",
  },
};

const sluzby = [
  {
    tloustka: "100 mm",
    nazev: "Dělicí příčky",
    popis:
      "Dvojitě opláštěná příčka W112 s minerální izolací — oddělí pokoj, ložnici nebo kancelář a nepustí zvuk sousedovi. Rovnost hlídám latí, ne okem.",
    detail: "Profil CW/UW · dvě desky z každé strany · izolace 60 mm",
  },
  {
    tloustka: "12,5 mm",
    nazev: "Zavěšené podhledy",
    popis:
      "Rovný strop tam, kde původní není — schová rozvody, vzduchotechniku i bodovky. Osazení světel a revizních dvířek řeším při montáži, ne dodatečně.",
    detail: "Křížový rošt · přímé závěsy · výřezy pro svítidla",
  },
  {
    tloustka: "50 dB",
    nazev: "Akustické stěny",
    popis:
      "Předstěna nebo příčka stavěná na útlum — do bytu k rušné ulici, do ordinace, do nahrávacího koutu. Skladbu navrhnu podle toho, co má utichnout.",
    detail: "Oddělený rošt · dvojité opláštění · akustická izolace",
  },
  {
    tloustka: "Q3–Q4",
    nazev: "Zapravení do stěrky",
    popis:
      "Spáry, hrany i hlavičky vrutů vytmelím a přebrousím do kvality pod finální malbu. Předám stěnu, na které nepoznáte, kde končí deska.",
    detail: "Výztužná páska · dvě vrstvy tmelu · přebroušení",
  },
];

export default function Page() {
  return (
    <main className="dg">
      <header className="dg-nav">
        <a className="dg-mark" href="#top" aria-label="DOMGIPS — úvod">
          <span className="dg-mark-dom">DOM</span>
          <span className="dg-mark-seam" aria-hidden="true" />
          <span className="dg-mark-gips">GIPS</span>
        </a>
        <a className="dg-nav-call" href="tel:+420776112050">
          776&nbsp;112&nbsp;050
        </a>
      </header>

      <section className="dg-hero" id="top">
        <div className="dg-hero-copy">
          <p className="dg-eyebrow">Sádrokartonář · Praha a okolí</p>
          <h1 className="dg-h1">
            Rovná stěna
            <br />
            <span className="dg-h1-accent">za tři dny.</span>
          </h1>
          <p className="dg-lead">
            Postavím příčku, zavěsím podhled a zapravím spáry do stěrky, na
            které nepoznáte styk desek. Suchá výstavba v bytech, kancelářích i
            provozovnách po celé Praze.
          </p>
          <div className="dg-hero-actions">
            <a className="dg-btn" href="tel:+420776112050">
              Zavolat a domluvit termín
            </a>
            <a className="dg-btn dg-btn-ghost" href="mailto:poptavka@domgips.cz">
              Napsat s rozměry
            </a>
          </div>
        </div>
        <figure className="dg-hero-media">
          <img
            src="/hero.webp"
            alt="Sádrokartonová příčka s viditelnou CW/UW konstrukcí rozestavěná v pražském bytě"
            className="dg-hero-img"
          />
          <figcaption className="dg-hero-spec">
            <span className="dg-spec-line">W112 · 100 mm · útlum ~47 dB</span>
          </figcaption>
        </figure>
      </section>

      <section className="dg-services" aria-labelledby="sluzby-nadpis">
        <div className="dg-section-head">
          <p className="dg-eyebrow">Co postavím</p>
          <h2 id="sluzby-nadpis" className="dg-h2">
            Od profilu po hotovou stěrku
          </h2>
        </div>

        <ul className="dg-cards">
          {sluzby.map((s) => (
            <li className="dg-card" key={s.nazev}>
              <span className="dg-card-tloustka" aria-hidden="true">
                {s.tloustka}
              </span>
              <h3 className="dg-card-nazev">{s.nazev}</h3>
              <p className="dg-card-popis">{s.popis}</p>
              <p className="dg-card-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="dg-about" aria-labelledby="onas-nadpis">
        <figure className="dg-about-media">
          <img
            src="/section-1.webp"
            alt="Detail zapravené spáry sádrokartonu vytmelené a přebroušené do hladké roviny"
            className="dg-about-img"
          />
        </figure>
        <div className="dg-about-copy">
          <p className="dg-eyebrow">Jak pracuju</p>
          <h2 id="onas-nadpis" className="dg-h2">
            Jeden řemeslník, jeden termín, jedna odpovědnost
          </h2>
          <p className="dg-about-text">
            Do bytu chodím sám nebo s jedním kolegou — víte, kdo vám staví
            stěnu, a mluvíte s ním, ne s dispečinkem. Nábytek zakryju,
            odřezky a prach uklidím na konci každého dne. Odpad z desek
            odvezu, po sobě nechám prostor připravený k malbě.
          </p>

          <dl className="dg-facts">
            <div className="dg-fact">
              <dt>Kde stavím</dt>
              <dd>Praha a Středočeský kraj do 30 km</dd>
            </div>
            <div className="dg-fact">
              <dt>Běžný termín</dt>
              <dd>Byt do 3–5 dnů, po dohodě i o víkendu</dd>
            </div>
            <div className="dg-fact">
              <dt>Předání</dt>
              <dd>Stěny ve kvalitě Q3–Q4, uklizeno, odpad odvezen</dd>
            </div>
          </dl>

          <figure className="dg-quote">
            <blockquote>
              „Přišel na hodinu přesně, příčku v ložnici postavil za dva dny a
              stěrku zapravil tak, že po malování nebylo vidět jediný spoj.“
            </blockquote>
            <figcaption>
              — Petra H., rekonstrukce bytu, Praha&nbsp;10 Vršovice
            </figcaption>
          </figure>

          <img
            src="/section-2.webp"
            alt="Hotový zavěšený podhled s osazenými bodovými svítidly v pražské kanceláři"
            className="dg-about-img dg-about-img-wide"
          />
        </div>
      </section>
    </main>
  );
}
