import type { CSSProperties } from "react";

export const metadata = {
  title: "Prague International Transfers — soukromé dálkové transfery z Prahy",
  description:
    "Soukromý řidič pro dálkové transfery po Česku a Evropě. Fixní cena předem, sledování letu, voda a wi-fi ve voze. Praha — Karlovy Vary, Český Krumlov, Drážďany.",
};

type Route = {
  from: string;
  to: string;
  km: number;
  time: string;
  note: string;
};

const routes: Route[] = [
  {
    from: "Praha",
    to: "Karlovy Vary",
    km: 127,
    time: "1 h 45 min",
    note: "Kolonáda a lázně bez přesedání",
  },
  {
    from: "Praha",
    to: "Český Krumlov",
    km: 172,
    time: "2 h 25 min",
    note: "Od letiště až k penzionu v centru",
  },
  {
    from: "Praha",
    to: "Drážďany",
    km: 150,
    time: "2 h 05 min",
    note: "Přes hranici, německy i anglicky",
  },
];

type Step = {
  n: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Rezervace s cenou předem",
    body: "Napíšete odkud a kam. Obratem dostanete potvrzení s konečnou cenou. Žádné skryté příplatky — na trasách od 60 km máte obzvlášť příznivou sazbu.",
  },
  {
    n: "02",
    title: "Vyzvednutí a sledování letu",
    body: "Řidič, který mluví česky i anglicky, na vás počká na domluveném místě a pomůže se zavazadly. Váš let sledujeme online — když má zpoždění, čekáme dál.",
  },
  {
    n: "03",
    title: "Klidná jízda door to door",
    body: "Business Class vůz, wi-fi zdarma, balená voda a tablet. Kdykoli zastavíme na kávu nebo protažení. Vystoupíte přesně u dveří, kam potřebujete.",
  },
];

export default function Page() {
  return (
    <main className="pit">
      <header className="pit-nav" aria-label="Hlavní">
        <a className="pit-brand" href="#top" aria-label="Prague International Transfers, domů">
          <span className="pit-brand-mark" aria-hidden="true">
            <span className="pit-brand-arrow">→</span>
          </span>
          <span className="pit-brand-word">
            <span className="pit-brand-line">Prague</span>
            <span className="pit-brand-line pit-brand-line--mid">International</span>
            <span className="pit-brand-line">Transfers</span>
          </span>
        </a>
        <a className="pit-nav-cta" href="tel:+420721104000">
          +420 721 104 000
        </a>
      </header>

      <section className="pit-hero" id="top">
        <img
          className="pit-hero-img"
          src="/hero.webp"
          alt="Řidič Prague International Transfers u čistého vozu Business Class připraveného na dálkovou jízdu z Prahy"
          width={1600}
          height={1000}
          decoding="async"
        />
        <div className="pit-hero-shade" aria-hidden="true" />
        <div className="pit-hero-inner">
          <p className="pit-eyebrow">Praha · soukromé dálkové transfery</p>
          <h1 className="pit-hero-title">
            Nastoupíte v&nbsp;Praze,<br />
            vystoupíte přesně<br />
            <span className="pit-hero-em">u&nbsp;dveří cíle.</span>
          </h1>
          <p className="pit-hero-sub">
            Jeden vůz, jeden řidič, jedna cena domluvená předem. Vozíme vás po
            Česku i Evropě — bezpečně, včas a bez stresu z přestupů.
          </p>
          <div className="pit-hero-actions">
            <a className="pit-btn pit-btn--solid" href="#trasy">
              Spočítat trasu
            </a>
            <a className="pit-btn pit-btn--ghost" href="tel:+420721104000">
              Zavolat řidiči
            </a>
          </div>
        </div>

        <dl className="pit-hero-strip" aria-label="Co je v ceně každé jízdy">
          <div className="pit-strip-item">
            <dt>Cena předem</dt>
            <dd>bez skrytých poplatků</dd>
          </div>
          <div className="pit-strip-item">
            <dt>Sledování letu</dt>
            <dd>počkáme na zpoždění</dd>
          </div>
          <div className="pit-strip-item">
            <dt>Wi-fi a voda</dt>
            <dd>v každém voze zdarma</dd>
          </div>
          <div className="pit-strip-item">
            <dt>Česky &amp; anglicky</dt>
            <dd>řidič, se kterým se domluvíte</dd>
          </div>
        </dl>
      </section>

      <section className="pit-routes" id="trasy" aria-labelledby="trasy-nadpis">
        <div className="pit-section-head">
          <p className="pit-eyebrow pit-eyebrow--dark">Nejčastější trasy z Prahy</p>
          <h2 id="trasy-nadpis" className="pit-h2">
            Tabule odjezdů, ne ceník plný hvězdiček
          </h2>
          <p className="pit-lead">
            Specializujeme se na dálkové jízdy od 60&nbsp;km, kde umíme dát
            opravdu příznivou cenu. Vyberte směr — přesnou částku pošleme obratem
            po rezervaci.
          </p>
        </div>

        <ol className="pit-board" aria-label="Přehled tras">
          {routes.map((r) => (
            <li className="pit-row" key={r.to}>
              <span className="pit-row-track" aria-hidden="true">
                <span className="pit-dot" />
                <span className="pit-line" />
                <span className="pit-dot pit-dot--end" />
              </span>
              <span className="pit-row-cities">
                <span className="pit-row-from">{r.from}</span>
                <span className="pit-row-to">{r.to}</span>
              </span>
              <span className="pit-row-meta">
                <span className="pit-flip" data-label="vzdálenost">
                  {r.km} km
                </span>
                <span className="pit-flip" data-label="jízdní doba">
                  {r.time}
                </span>
              </span>
              <span className="pit-row-note">{r.note}</span>
              <a
                className="pit-row-cta"
                href="tel:+420721104000"
                aria-label={`Objednat transfer ${r.from} — ${r.to}`}
              >
                Objednat →
              </a>
            </li>
          ))}
        </ol>

        <p className="pit-board-foot">
          Jedete jinam po Česku nebo Evropě?{" "}
          <a href="mailto:info@prague-international-transfers.cz">
            Napište nám cíl a spočítáme to.
          </a>
        </p>
      </section>

      <section className="pit-story" aria-labelledby="onas-nadpis">
        <div className="pit-story-media">
          <img
            src="/section-2.webp"
            alt="Interiér vozu Business Class Prague International Transfers s balenou vodou a připojením wi-fi pro cestující"
            width={1200}
            height={1400}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="pit-story-text">
          <p className="pit-eyebrow pit-eyebrow--dark">Jak to u nás funguje</p>
          <h2 id="onas-nadpis" className="pit-h2">
            Tři kroky od objednávky ke dveřím
          </h2>

          <ol className="pit-steps">
            {steps.map((s) => (
              <li className="pit-step" key={s.n}>
                <span className="pit-step-n" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="pit-step-title">{s.title}</h3>
                  <p className="pit-step-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pit-fleet">
            <p className="pit-fleet-label">Vozový park</p>
            <p className="pit-fleet-body">
              Jezdíme se Škodou Superb III a Volkswagenem Passat — vozy Business
              Class, pravidelně servisované, vždy čisté. Péče o auta nás baví a
              je to na jízdě znát.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
