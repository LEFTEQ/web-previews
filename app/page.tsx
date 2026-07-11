import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collegium Dentalis — zubní ordinace v Olomouci",
  description:
    "Soukromá zubní praxe v Olomouci. Preventivní péče, implantologie, parodontologie i estetická stomatologie pod jednou střechou na Nezvalově. Objednejte se telefonicky nebo e‑mailem.",
  openGraph: {
    title: "Collegium Dentalis — zubní ordinace v Olomouci",
    description:
      "Soukromá zubní praxe v Olomouci. Prevence, implantologie, parodontologie a estetická stomatologie. Objednejte se ještě dnes.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const pece = [
  {
    kod: "Dg",
    nazev: "Prevence a vstupní vyšetření",
    popis:
      "Kompletní prohlídka, intraorální snímky a plán péče na míru. U nás poznáte, na čem jste — bez zbytečných zákroků.",
  },
  {
    kod: "Im",
    nazev: "Implantologie",
    popis:
      "Náhrada chybějícího zubu titanovým implantátem. Ošetření vede tým se specializací a zázemím pracoviště perioimplants.",
  },
  {
    kod: "Pa",
    nazev: "Parodontologie",
    popis:
      "Léčba dásní a závěsného aparátu zubu. Zastavíme uvolňování zubů dřív, než o ně přijdete.",
  },
  {
    kod: "Es",
    nazev: "Estetická stomatologie",
    popis:
      "Kompozitní výplně v barvě zubu, bělení a fasety. Aby úsměv vypadal přirozeně, ne opraveně.",
  },
];

const lekari = [
  {
    jmeno: "doc. MUDr. Martin Starosta, Ph.D.",
    role: "Soukromá zubní praxe · vedoucí lékař",
  },
  {
    jmeno: "MUDr. Miroslav Havlík",
    role: "Zubní lékař",
  },
  {
    jmeno: "MUDr. Vendula Miklová",
    role: "Zubní lékařka",
  },
  {
    jmeno: "Bc. Renata Benešová",
    role: "Dentální hygienistka",
  },
];

export default function Page() {
  return (
    <main className="cd">
      <header className="cd-top">
        <a className="cd-mark" href="#" aria-label="Collegium Dentalis, úvod">
          <span className="cd-mark-glyph" aria-hidden="true">
            CD
          </span>
          <span className="cd-mark-word">
            Collegium <em>Dentalis</em>
          </span>
        </a>
        <span className="cd-loc">Olomouc · Nezvalova 1293/2a</span>
      </header>

      <section className="cd-hero" aria-labelledby="cd-hero-h">
        <div className="cd-hero-copy">
          <p className="cd-eyebrow">Soukromá zubní praxe · od roku 2004</p>
          <h1 id="cd-hero-h">
            Péče o zuby, které vydrží
            <span className="cd-hero-accent"> celý život.</span>
          </h1>
          <p className="cd-lede">
            Collegium Dentalis je sdružení zkušených stomatologů v centru
            Olomouce. Prevence, implantologie i parodontologie na jednom
            pracovišti — s časem na klidné vysvětlení každého kroku.
          </p>
          <div className="cd-hero-cta">
            <a className="cd-btn" href="tel:+420739200311">
              Zavolat na recepci
            </a>
            <a className="cd-btn cd-btn-ghost" href="mailto:recepce@collegiumdentalis.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>

        <figure className="cd-hero-figure">
          <img
            src="/hero.webp"
            alt="Ošetřovna zubní ordinace Collegium Dentalis v Olomouci"
            className="cd-hero-img"
            width={1200}
            height={1400}
          />
          <figcaption className="cd-chart" aria-hidden="true">
            <span className="cd-chart-num">18↑↓</span>
            <span className="cd-chart-lbl">zubů v péči jednoho chrupu</span>
          </figcaption>
        </figure>
      </section>

      <section className="cd-sec" aria-labelledby="cd-pece-h">
        <div className="cd-sec-head">
          <p className="cd-eyebrow">Co u nás zvládneme</p>
          <h2 id="cd-pece-h">Péče podle toho, co váš chrup potřebuje</h2>
          <p className="cd-sec-sub">
            Od pravidelné prohlídky až po náhradu chybějícího zubu. Vždy s tím,
            že vám dopředu řekneme, co vás čeká a proč.
          </p>
        </div>

        <ol className="cd-cards">
          {pece.map((p) => (
            <li className="cd-card" key={p.kod}>
              <span className="cd-card-kod" aria-hidden="true">
                {p.kod}
              </span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="cd-sec-figure">
          <img
            src="/section-1.webp"
            alt="Zubní lékař při ošetření pacienta v ordinaci Collegium Dentalis"
            className="cd-sec-img"
            width={1400}
            height={900}
          />
        </figure>
      </section>

      <section className="cd-sec cd-sec-trust" aria-labelledby="cd-trust-h">
        <div className="cd-trust-grid">
          <div className="cd-trust-copy">
            <p className="cd-eyebrow">Kdo se o vás postará</p>
            <h2 id="cd-trust-h">
              Tým lékařů, který v Olomouci ošetřuje už přes dvacet let
            </h2>
            <p className="cd-sec-sub">
              Na Nezvalově najdete stabilní tým, který se navzájem doplňuje —
              od preventivní péče přes implantologii až po hygienu. Když je
              potřeba, spolupracujeme se specializovaným pracovištěm
              perioimplants.
            </p>

            <ul className="cd-lekari">
              {lekari.map((l) => (
                <li key={l.jmeno}>
                  <span className="cd-lekar-jmeno">{l.jmeno}</span>
                  <span className="cd-lekar-role">{l.role}</span>
                </li>
              ))}
            </ul>

            <dl className="cd-kontakt">
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Nezvalova 1293/2a, 779 00 Olomouc</dd>
              </div>
              <div>
                <dt>Recepce</dt>
                <dd>
                  <a href="tel:+420739200311">+420 739 200 311</a>
                </dd>
              </div>
              <div>
                <dt>E‑mail</dt>
                <dd>
                  <a href="mailto:recepce@collegiumdentalis.cz">
                    recepce@collegiumdentalis.cz
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <figure className="cd-trust-figure">
            <img
              src="/section-2.webp"
              alt="Recepce a prostředí zubní ordinace Collegium Dentalis v Olomouci"
              className="cd-sec-img"
              width={1000}
              height={1200}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
