import type { CSSProperties } from "react";

type Deal = "prodej" | "pronájem";

type Listing = {
  deal: Deal;
  price: string;
  title: string;
  kind: string;
  dims: string;
  place: string;
};

const listings: Listing[] = [
  {
    deal: "pronájem",
    price: "25 000 Kč/měs",
    title: "Rodinný dům v Plzni na Bručné",
    kind: "Rodinný dům · cihlová · samostatně stojící",
    dims: "100 m² zast. · 450 m² poz.",
    place: "Mezi Ploty 529/9, Plzeň",
  },
  {
    deal: "prodej",
    price: "2 650 000 Kč",
    title: "Kamenný dům ve Velharticích",
    kind: "Rodinný dům · kamenná · 4 místnosti",
    dims: "206 m² zast. · 206 m² poz.",
    place: "č.p. 41, Sušice",
  },
  {
    deal: "prodej",
    price: "4 670 000 Kč",
    title: "Stavební pozemek v Dobřanech",
    kind: "Pozemek pro bydlení · lokalita Dobřánky",
    dims: "1 004 m² pozemek",
    place: "Dobřánky 502, Dobřany",
  },
  {
    deal: "prodej",
    price: "10 500 000 Kč",
    title: "Dům 4+1+G s obchodním prostorem",
    kind: "Rodinný dům · cihlová · sklep, garáž",
    dims: "288 m² zast. · 529 m² poz.",
    place: "Pod Bručnou 278/2, Plzeň",
  },
  {
    deal: "pronájem",
    price: "8 000 Kč/měs",
    title: "Obchodní prostor v Dobřanech",
    kind: "Komerční prostor · centrum obce",
    dims: "48 m² obchodní plocha",
    place: "Vančurova, Dobřany",
  },
  {
    deal: "prodej",
    price: "365 000 €",
    title: "Apartmán 3+kk na ostrově Hvar",
    kind: "Novostavba · bezbariérový přístup",
    dims: "61 m² · 1. podlaží",
    place: "Sućuraj, Chorvatsko",
  },
];

const services = [
  {
    head: "Inzerce na ~20 portálech",
    body: "Vaši nemovitost vidí zájemci na dvaceti serverech včetně Seznamu — ne jen na jednom místě.",
  },
  {
    head: "Fotíme pořádnou technikou",
    body: "Kvalitní fotoaparáty a záběry, které ukážou nemovitost tak, jak vypadá ve skutečnosti.",
  },
  {
    head: "Poctivý popis, ne prázdná slova",
    body: "Každá nemovitost je pro nás důležitá. Píšeme přesně, s pravými čísly a bez ořezu pravdy.",
  },
  {
    head: "Inzerci držíme živou",
    body: "Nabídku průběžně aktualizujeme, aby byla opravdu vidět a neztratila se ve výpisu.",
  },
];

function Corners() {
  return (
    <>
      <span className="corner tl" aria-hidden="true" />
      <span className="corner tr" aria-hidden="true" />
      <span className="corner bl" aria-hidden="true" />
      <span className="corner br" aria-hidden="true" />
    </>
  );
}

function DimLine({ label }: { label: string }) {
  return (
    <div className="dimline" aria-hidden="true">
      <span className="dtick" />
      <span className="dline" />
      <span className="dlabel">{label}</span>
      <span className="dline" />
      <span className="dtick" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      <section className="section hero" aria-labelledby="hero-title">
        <div className="frame hero-frame">
          <Corners />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Realitní kancelář — Plzeň · od roku 2010</p>
              <p className="wordmark">
                Represent<span>Reality</span>
              </p>
              <h1 id="hero-title" className="hero-title">
                Slušnost<br />
                není slabost.
              </h1>
              <p className="hero-lead">
                Přes patnáct let měříme a rámujeme nemovitosti v Plzeňském
                kraji férově — byty, domy i komerční prostory. Ukážeme vám
                pravé rozměry, pravou cenu a jednáme na rovinu.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#nabidka">
                  Prohlédnout nabídku
                </a>
                <a className="btn btn-ghost" href="tel:+420737163003">
                  Zavolat 737 163 003
                </a>
              </div>
            </div>

            <figure className="drawing" aria-labelledby="drawing-cap">
              <div className="parcel">
                <span className="pdim ptop" aria-hidden="true">30,0 m</span>
                <span className="pdim pleft" aria-hidden="true">15,0 m</span>
                <div className="footprint">
                  <span className="parea">100 m²</span>
                  <span className="psub">zastavěno</span>
                </div>
                <span className="plabel">450 m² pozemek</span>
                <span className="pcoord">49°44′ S · 13°23′ V</span>
              </div>
              <figcaption id="drawing-cap" className="drawing-cap">
                Vzorový zákres parcely · Plzeň–Bručná
              </figcaption>
            </figure>
          </div>
          <DimLine label="Plzeňský kraj · 15+ let · stovky obchodů" />
        </div>
      </section>

      <section className="section offer" id="nabidka" aria-labelledby="offer-title">
        <header className="sec-head">
          <p className="eyebrow eyebrow-dark">Výběr z aktuální nabídky</p>
          <h2 id="offer-title" className="sec-title">
            Nemovitosti, které právě rámujeme
          </h2>
        </header>

        <ul className="cards">
          {listings.map((l, i) => (
            <li
              key={l.title}
              className="card frame"
              style={{ "--i": i } as CSSProperties}
            >
              <Corners />
              <div className="card-top">
                <span className={`tag tag-${l.deal === "prodej" ? "sale" : "rent"}`}>
                  {l.deal}
                </span>
                <span className="price">{l.price}</span>
              </div>
              <h3 className="card-title">{l.title}</h3>
              <p className="card-kind">{l.kind}</p>
              <p className="card-place">{l.place}</p>
              <DimLine label={l.dims} />
            </li>
          ))}
        </ul>
      </section>

      <section className="section trust" aria-labelledby="trust-title">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">Vše děláme trochu jinak</p>
            <h2 id="trust-title" className="sec-title light">
              Prodej i pronájem svěřte lidem, kteří to berou poctivě
            </h2>
            <p className="trust-lead">
              Neslibujeme neuskutečnitelné. Naším cílem je prodat nebo
              pronajmout vaši nemovitost co nejrychleji a odvést práci tak,
              abyste nás doporučili dál. Vy si užívejte života, starosti
              nechte na profesionálech.
            </p>

            <dl className="stats">
              <div className="stat">
                <dt className="stat-num">15+</dt>
                <dd className="stat-lab">let praxe v realitách</dd>
              </div>
              <div className="stat">
                <dt className="stat-num">stovky</dt>
                <dd className="stat-lab">realizovaných obchodů</dd>
              </div>
              <div className="stat">
                <dt className="stat-num">20+</dt>
                <dd className="stat-lab">realitních portálů</dd>
              </div>
            </dl>
          </div>

          <ul className="services">
            {services.map((s) => (
              <li key={s.head} className="service">
                <span className="service-mark" aria-hidden="true" />
                <div>
                  <h3 className="service-head">{s.head}</h3>
                  <p className="service-body">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
