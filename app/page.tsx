import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SH Moto — motoservis, ladění a stavby Harley-Davidson | Brno-Křenová",
  description:
    "Servis, tuning a stavba motocyklů v Brně na Křenové. Ladíme na motorové brzdě FUCHS, stavíme choppery na míru a vedeme oleje Motul, Panolin a filtry K&N.",
  openGraph: {
    title: "SH Moto — motoservis a ladění na dynu, Brno",
    description:
      "Ladíme na motorové brzdě FUCHS, stavíme choppery a servisujeme Harley-Davidson. Křenová 67b, Brno.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "SRV",
    nazev: "Servis a údržba",
    popis:
      "Sezónní prohlídky, výměny olejů, řetězů, svíček i baterií. Máme na skladě oleje Motul a Panolin, filtry HifloFiltro a K&N — nečekáte na díly týdny.",
  },
  {
    kod: "DYN",
    nazev: "Měření a ladění na dynu",
    popis:
      "Měříme skutečný výkon a moment na motorové brzdě FUCHS. Vidíte křivku před laděním i po něm — ne odhad, ale čísla z válce.",
  },
  {
    kod: "BLD",
    nazev: "Stavby a přestavby",
    popis:
      "Choppery a custom stroje od návrhu po zápis. Sání, výfukové systémy, karburátorové kity, řídicí jednotky — postavíme stroj podle vás, ne podle katalogu.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="SH Moto, úvodní stránka">
          <span className="wordmark__sh">SH</span>
          <span className="wordmark__moto">MOTO</span>
          <span className="wordmark__loc">Brno · Křenová</span>
        </a>
        <a className="topbar__call" href="tel:+420723328793">
          Zavolat Tondovi
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Motocykl na měřicí stolici v dílně SH Moto v Brně"
            className="hero__img"
          />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Motoservis · tuning · stavby — Brno, Křenová 67b</p>
          <h1 id="hero-title" className="hero__title">
            Ladíme na<br />
            <span className="hero__accent">motorové brzdě</span><br />
            FUCHS.
          </h1>
          <p className="hero__lede">
            Nehádáme, kolik koní stroj dává. Roztočíme ho na dynu a změříme skutečný
            výkon i moment — od servisu přes ladění až po stavbu chopperu na míru.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420723328793">
              Objednat na měření
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co všechno umíme
            </a>
          </div>

          <dl className="hero__dyno" aria-label="Průběh měření na motorové brzdě">
            <div className="dyno__row">
              <dt>Otáčky</dt>
              <dd><span className="dyno__bar" data-len="92" /></dd>
            </div>
            <div className="dyno__row">
              <dt>Výkon</dt>
              <dd><span className="dyno__bar" data-len="74" /></dd>
            </div>
            <div className="dyno__row">
              <dt>Moment</dt>
              <dd><span className="dyno__bar" data-len="58" /></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Tři stanoviště v dílně</p>
          <h2 id="sluzby-title" className="section-head__title">
            Od výměny oleje po vlastní stroj
          </h2>
        </div>

        <ol className="sluzby__list">
          {sluzby.map((s) => (
            <li className="sluzba" key={s.kod}>
              <span className="sluzba__kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="sluzba__body">
                <h3 className="sluzba__nazev">{s.nazev}</h3>
                <p className="sluzba__popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Detail práce na motoru Harley-Davidson v dílně SH Moto"
            className="foto__img"
          />
          <figcaption className="foto__cap">
            Sání, výfuky, karburátorové kity — díly vybíráme podle toho, co stroj na dynu ukáže.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-title">
        <figure className="onas__foto">
          <img
            src="/section-2.webp"
            alt="Chopper postavený na míru v dílně SH Moto v Brně"
            className="foto__img"
          />
        </figure>

        <div className="onas__panel">
          <p className="section-head__eyebrow">Kdo za tím stojí</p>
          <h2 id="onas-title" className="onas__title">
            Dílna, kde se o motorkách víc mluví než píše
          </h2>
          <p className="onas__text">
            SH Moto na brněnské Křenové servisuje, ladí a staví motocykly — s důrazem
            na Harley-Davidson a choppery. Máme moderní testovací i výrobní vybavení
            včetně motorové brzdy FUCHS, takže každou úpravu podložíme měřením.
          </p>

          <ul className="znacky" aria-label="Značky, se kterými pracujeme">
            <li>Motul</li>
            <li>Panolin</li>
            <li>Motor Factory</li>
            <li>HifloFiltro</li>
            <li>K&amp;N</li>
          </ul>

          <dl className="kontakt">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Křenová 67b, 602 00 Brno</dd>
            </div>
            <div>
              <dt>Domluvit termín</dt>
              <dd>
                <a href="tel:+420723328793">Tonda · 723 328 793</a>
              </dd>
            </div>
            <div>
              <dt>Napsat</dt>
              <dd>
                <a href="mailto:info@shmoto.cz">info@shmoto.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
