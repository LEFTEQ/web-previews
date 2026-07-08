import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MANUTAN Ostrava — železářství a vybavení dílen, skladů a provozů",
  description:
    "Regály, dílenský nábytek, šatní skříně, zábrany i kartotéky pro ostravské firmy. Poradíme, přivezeme na zkoušku a doručíme. 10 let záruka, doprava zdarma nad 2 500 Kč.",
  openGraph: {
    title: "MANUTAN Ostrava — vybavení dílen, skladů a provozů",
    description:
      "Kov, který drží. Regály, skříně a dílenský nábytek s desetiletou zárukou. Poradíme a přivezeme na zkoušku po celém Ostravsku.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Regály a dílenské skříně Manutan" }],
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='5' fill='%23222528'/%3E%3Crect x='6' y='6' width='20' height='20' rx='1.5' fill='none' stroke='%23F2A900' stroke-width='2.5'/%3E%3Cpath d='M6 16h20M16 6v20' stroke='%23F2A900' stroke-width='2.5'/%3E%3C/svg%3E",
  },
};

const sortiment = [
  {
    kod: "RG",
    nazev: "Policové a paletové regály",
    popis:
      "Únosnost 150 až 2 000 kg na polici. Zaměříme sklad, spočítáme rozteče a smontujeme na místě — od garáže po vysokoregálový sklad.",
    detail: "nosnost do 2 t/police",
  },
  {
    kod: "DN",
    nazev: "Dílenský nábytek a skříně na nářadí",
    popis:
      "Svařované skříně, ponky s pracovní deskou, zásuvkové boxy s plným výsuvem. Kov, který vydrží každodenní provoz dílny.",
    detail: "200 × 150 × 45 cm",
  },
  {
    kod: "ŠS",
    nazev: "Šatní a šatnové skříně",
    popis:
      "Svařované DURO PROFI s cylindrickým zámkem, 2 až 15 boxů. Do šaten haly, dílny i směnného provozu.",
    detail: "cylindrický zámek",
  },
  {
    kod: "ZS",
    nazev: "Zábrany, sloupky a bezpečnost",
    popis:
      "Pozemní kovové zábrany, mobilní ohrazení, záchytné vany a dopravní zrcadla. Ohlídáme provoz i sklad kapalin.",
    detail: "kov i mobilní plast",
  },
];

const duvody = [
  {
    cislo: "01",
    titul: "Přivezeme na zkoušku",
    text:
      "Židli i regál si vyzkoušíte u sebe v provozu, ne z fotky. Přivezeme, vyneseme a odvezeme zpět, když nesedne.",
  },
  {
    cislo: "02",
    titul: "3D model skladu nebo dílny",
    text:
      "Než něco objednáte, připravíme rozvržení místnosti či skladu v 3D — uvidíte rozteče regálů i průchozí uličky předem.",
  },
  {
    cislo: "03",
    titul: "10 let záruka na kov",
    text:
      "Na produkty značky Manutan dáváme desetiletou záruku. Spolupracujeme jen s prověřenými výrobci.",
  },
];

export default function Page() {
  return (
    <main className="mn">
      <header className="mn-top">
        <a href="#" className="mn-brand" aria-label="MANUTAN Ostrava, domů">
          <span className="mn-brand-mark" aria-hidden="true">
            <span className="mn-brand-bolt" />
          </span>
          <span className="mn-brand-word">
            MANUTAN<span className="mn-brand-city">Ostrava</span>
          </span>
        </a>
        <a className="mn-phone" href="tel:800242424">
          <span className="mn-phone-label">Bezplatná linka</span>
          <span className="mn-phone-num">800 24 24 24</span>
        </a>
      </header>

      <section className="mn-hero" aria-labelledby="mn-hero-title">
        <div className="mn-hero-media">
          <img
            src="/hero.webp"
            alt="Řada kovových policových regálů a dílenských skříní připravených k vybavení provozu"
            className="mn-hero-img"
            width={1600}
            height={1100}
          />
          <div className="mn-hero-tape" aria-hidden="true">
            <span>NOSNOST&nbsp;·&nbsp;2000&nbsp;KG</span>
            <span>ZÁRUKA&nbsp;·&nbsp;10&nbsp;LET</span>
            <span>ROZVOZ&nbsp;·&nbsp;OSTRAVSKO</span>
          </div>
        </div>

        <div className="mn-hero-body">
          <p className="mn-eyebrow">Železářství &amp; vybavení provozů · Ostrava</p>
          <h1 id="mn-hero-title" className="mn-hero-title">
            Kov, který <span className="mn-accent">unese</span> celou&nbsp;dílnu.
          </h1>
          <p className="mn-hero-lead">
            Regály, ponky, šatní skříně a zábrany pro ostravské haly, sklady a
            provozy. Zaměříme, smontujeme a přivezeme na zkoušku — vy jen řeknete,
            kam to postavit.
          </p>
          <div className="mn-hero-cta">
            <a className="mn-btn mn-btn-primary" href="tel:800242424">
              Zavolat 800 24 24 24
            </a>
            <a className="mn-btn mn-btn-ghost" href="#sortiment">
              Prohlédnout sortiment
            </a>
          </div>
          <dl className="mn-hero-facts">
            <div>
              <dt>Odpověď na poptávku</dt>
              <dd>do 24 hodin</dd>
            </div>
            <div>
              <dt>Doprava zdarma</dt>
              <dd>nad 2 500 Kč</dd>
            </div>
            <div>
              <dt>Vrácení zboží</dt>
              <dd>do 30 dní</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="mn-sortiment" id="sortiment" aria-labelledby="mn-sort-title">
        <div className="mn-sec-head">
          <p className="mn-eyebrow">Co u nás pořídíte</p>
          <h2 id="mn-sort-title">Vybavení pro sklad, dílnu i provoz</h2>
          <p className="mn-sec-lead">
            Všechno na jednom místě a na pár kliknutí. Kódy vlevo jsou naše
            skladové skupiny — podle nich se v katalogu i telefonu domluvíme
            rychleji.
          </p>
        </div>

        <ul className="mn-cards">
          {sortiment.map((s) => (
            <li key={s.kod} className="mn-card">
              <span className="mn-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="mn-card-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <span className="mn-card-detail">{s.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="mn-sec-figure">
          <img
            src="/section-1.webp"
            alt="Svařované dílenské skříně a zásuvkové boxy na nářadí"
            width={1400}
            height={900}
          />
          <figcaption>
            Dílenské skříně DURO PROFI — svařovaná konstrukce, cylindrický zámek,
            plný výsuv zásuvek.
          </figcaption>
        </figure>
      </section>

      <section className="mn-trust" aria-labelledby="mn-trust-title">
        <div className="mn-trust-media">
          <img
            src="/section-2.webp"
            alt="Naložený vozík s regály a nábytkem připravený k rozvozu po Ostravě"
            width={1400}
            height={1000}
          />
        </div>
        <div className="mn-trust-body">
          <p className="mn-eyebrow">Proč s námi</p>
          <h2 id="mn-trust-title">
            Poradíme, přivezeme a zajistíme první i&nbsp;poslední
          </h2>
          <p className="mn-sec-lead">
            Víme, že nákupčí potřebuje hlavně šetřit čas. Odpovíme na technické
            dotazy osobně, po telefonu i e-mailem a poradíme, podle čeho vybírat.
          </p>
          <ol className="mn-steps">
            {duvody.map((d) => (
              <li key={d.cislo} className="mn-step">
                <span className="mn-step-num">{d.cislo}</span>
                <div>
                  <h3>{d.titul}</h3>
                  <p>{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mn-hours">
            Jsme tu každý pracovní den <strong>7–16 h</strong>. Volejte{" "}
            <a href="tel:800242424">800 24 24 24</a> nebo pište{" "}
            <a href="mailto:prodej@manutan.cz">prodej@manutan.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
