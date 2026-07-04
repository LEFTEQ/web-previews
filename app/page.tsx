import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SH Moto — motoservis, ladění a stavby motorek | Brno, Křenová",
  description:
    "Motoservis v Brně na Křenové. Servis, tuning a stavby motocyklů, měření na motorové brzdě FUCHS. Oleje Motul a Panolin, díly pro Harley-Davidson.",
  openGraph: {
    title: "SH Moto — motoservis a ladění motorek v Brně",
    description:
      "Servisní, tuningová a výrobní činnost. Měření výkonu na dynu FUCHS, stavby a přestavby, díly pro H-D.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Servis a údržba",
    popis:
      "Běžný servis, seřízení a opravy motocyklů. Karburátorové kity, zapalovací svíčky, řetězy, baterie i filtry HifloFiltro a K&N — díly máme skladem na prodejně.",
  },
  {
    kod: "02",
    nazev: "Měření a ladění",
    popis:
      "Měříme reálný výkon na motorové brzdě FUCHS. Doladíme sání, výfukový systém i řídicí jednotku, abyste z motorky dostali přesně to, co v ní je.",
  },
  {
    kod: "03",
    nazev: "Stavby a přestavby",
    popis:
      "Choppery a přestavby na míru. Od jednotlivého dílu po kompletní custom stavbu — s vlastním výrobním vybavením a citem pro Harley-Davidson.",
  },
];

const znacky = [
  { jmeno: "FUCHS", role: "motorová brzda / dyno" },
  { jmeno: "Motul", role: "oleje" },
  { jmeno: "Panolin", role: "oleje" },
  { jmeno: "Motor Factory", role: "díly pro H-D" },
  { jmeno: "HifloFiltro", role: "filtry" },
  { jmeno: "K&N", role: "filtry" },
];

export default function Page() {
  return (
    <main className="sh">
      <header className="sh-top">
        <a className="sh-mark" href="#" aria-label="SH Moto, domů">
          <span className="sh-mark__sh">SH</span>
          <span className="sh-mark__moto">MOTO</span>
        </a>
        <p className="sh-loc">Křenová 67b · Brno</p>
        <a className="sh-call" href="tel:+420723328793">
          Zavolat Tondovi
        </a>
      </header>

      <section className="sh-hero" aria-labelledby="hero-nadpis">
        <div className="sh-hero__media">
          <img
            src="/hero.webp"
            alt="Motocykl na měřicí stolici v dílně SH Moto v Brně"
            className="sh-hero__img"
          />
        </div>
        <div className="sh-hero__panel">
          <p className="sh-eyebrow">Motoservis · Brno · od roku 2007</p>
          <h1 id="hero-nadpis" className="sh-hero__title">
            Změříme, co
            <br />
            v ní <em>doopravdy</em> je.
          </h1>
          <p className="sh-hero__lead">
            Servis, ladění a stavby motorek na Křenové. Motorku posadíme na
            brzdu FUCHS, přečteme čísla a doladíme sání, výfuk i jednotku —
            žádné odhady, jen naměřený výkon.
          </p>
          <div className="sh-hero__actions">
            <a className="sh-btn" href="tel:+420723328793">
              Objednat na měření
            </a>
            <a className="sh-btn sh-btn--ghost" href="mailto:info@shmoto.cz">
              Napsat do dílny
            </a>
          </div>
          <dl className="sh-dyno" aria-label="Naše vybavení v číslech">
            <div>
              <dt>Motorová brzda</dt>
              <dd>FUCHS</dd>
            </div>
            <div>
              <dt>Specializace</dt>
              <dd>Harley-Davidson</dd>
            </div>
            <div>
              <dt>Dílna i prodejna</dt>
              <dd>pod jednou střechou</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sh-sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sh-sec-head">
          <p className="sh-eyebrow">Co u nás motorka projde</p>
          <h2 id="sluzby-nadpis">Tři zastávky v dílně</h2>
        </div>
        <ol className="sh-cards">
          {sluzby.map((s) => (
            <li className="sh-card" key={s.kod}>
              <span className="sh-card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="sh-card__nazev">{s.nazev}</h3>
              <p className="sh-card__popis">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sh-duvera" aria-labelledby="duvera-nadpis">
        <div className="sh-duvera__media">
          <img
            src="/section-1.webp"
            alt="Detail práce na motoru při stavbě custom motorky"
            className="sh-duvera__img"
          />
          <img
            src="/section-2.webp"
            alt="Prodejna SH Moto s oleji a díly pro motocykly"
            className="sh-duvera__img sh-duvera__img--sec"
          />
        </div>
        <div className="sh-duvera__text">
          <p className="sh-eyebrow">Kdo vám motorku vezme do ruky</p>
          <h2 id="duvera-nadpis">
            Servis, tuning a výroba — od jednoho dílu po celou stavbu.
          </h2>
          <p className="sh-duvera__lead">
            SH Moto je brněnská dílna, která žije choppery a Harley-Davidson.
            Děláme servisní, tuningovou i výrobní práci a stavby motorek na
            míru. Na prodejně vedeme oleje, filtry, díly a všechno kolem —
            takže co doladíme na brzdě, hned i naservisujeme.
          </p>
          <ul className="sh-znacky" aria-label="Značky, se kterými pracujeme">
            {znacky.map((z) => (
              <li className="sh-znacka" key={z.jmeno}>
                <span className="sh-znacka__jmeno">{z.jmeno}</span>
                <span className="sh-znacka__role">{z.role}</span>
              </li>
            ))}
          </ul>
          <p className="sh-kontakt-radek">
            Křenová 67b, 602 00 Brno · <a href="tel:+420545221000">545 221 000</a>
          </p>
        </div>
      </section>
    </main>
  );
}
