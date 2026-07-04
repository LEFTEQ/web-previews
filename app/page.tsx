import type { CSSProperties } from "react";

export const metadata = {
  title: "ARBYD — nábytek na míru z Plzně",
  description:
    "Truhlářská dílna ARBYD v Chotíkově u Plzně. Kuchyně, bytový nábytek a atypické interiéry na míru. Návrh, výroba a montáž pod jednou střechou.",
};

type Cut = {
  no: string;
  name: string;
  what: string;
  detail: string;
};

const cuts: Cut[] = [
  {
    no: "01",
    name: "Kuchyně",
    what: "Srdce domu, kde se počítá každý milimetr.",
    detail:
      "Dvířka z pravé dýhy i lakovaného MDF, tichý dovřez, pracovní desky, které vydrží roky vaření.",
  },
  {
    no: "02",
    name: "Bytový nábytek",
    what: "Skříně, knihovny a postele šité na vaše stěny.",
    detail:
      "Vestavěné úložné prostory od podlahy ke stropu — bez spár, bez kompromisů, bez zbytečně ztraceného rohu.",
  },
  {
    no: "03",
    name: "Kanceláře",
    what: "Recepce a stoly, které drží dojem firmy.",
    detail:
      "Reprezentativní pulty, akustické stěny a zasedačky navržené tak, aby vydržely každodenní provoz.",
  },
  {
    no: "04",
    name: "Veřejné budovy",
    what: "Interiéry, které projdou davem i normou.",
    detail:
      "Robustní řešení pro školy, úřady a knihovny — materiály v protipožární i hygienické normě.",
  },
  {
    no: "05",
    name: "Hotely",
    what: "Pokoje na klíč, desítky kusů ve stejném rukopisu.",
    detail:
      "Sériová výroba pokojového nábytku s ruční přesností — recepce, lobby i každý noční stolek.",
  },
  {
    no: "06",
    name: "Interiérové dveře",
    what: "Poslední detail, který slyšíte při každém zavření.",
    detail:
      "Dveře na míru zárubní i stylu bytu, sladěné s obklady a nábytkem do posledního odstínu.",
  },
];

type Step = {
  phase: string;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    phase: "Návrh",
    title: "Sedneme si nad váš prostor",
    body: "Designér přijede, změří a nakreslí. Uvidíte vizualizaci dřív, než sáhneme na pilu.",
  },
  {
    phase: "Výroba",
    title: "3 000 m² dílny v Chotíkově",
    body: "Řežeme, dýhujeme a lakujeme pod jednou střechou. Nic nepodáváme cizímu subdodavateli.",
  },
  {
    phase: "Montáž",
    title: "Přivezeme a postavíme",
    body: "Naši montážníci nábytek osadí a seřídí. Vy dostanete klíč a hotový interiér.",
  },
];

export default function Page() {
  return (
    <main className="arb">
      <header className="arb-top">
        <a className="arb-mark" href="#top" aria-label="ARBYD — úvod">
          <span className="arb-mark-name">ARBYD</span>
          <span className="arb-mark-sub">truhlářská dílna · Plzeň</span>
        </a>
        <span className="arb-since">od 1993</span>
      </header>

      <section className="arb-hero" id="top">
        <div className="arb-hero-copy">
          <p className="arb-eyebrow">
            <span className="arb-grain" aria-hidden="true" />
            Návrh · Výroba · Montáž
          </p>
          <h1 className="arb-h1">
            Nábytek se u nás
            <br />
            <em>řeže na míru</em>
            <br />
            vašeho prostoru.
          </h1>
          <p className="arb-lead">
            Jsme dílna v Chotíkově u Plzně. Přes třicet let děláme kuchyně a
            interiéry na zakázku — od prvního nákresu po poslední tichý dovřez
            dvířek.
          </p>
          <div className="arb-hero-actions">
            <a className="arb-btn arb-btn-solid" href="#produkty">
              Prohlédnout, co umíme
            </a>
            <a className="arb-btn arb-btn-line" href="tel:+420377958019">
              Zavolat do dílny
            </a>
          </div>
        </div>

        <figure className="arb-hero-media">
          <img
            src="/hero.webp"
            alt="Interiér s nábytkem na míru od dílny ARBYD"
            width={1200}
            height={1500}
            className="arb-hero-img"
          />
          <figcaption className="arb-hero-tag">
            <span>Realizace</span>
            Chotíkov u Plzně
          </figcaption>
        </figure>
      </section>

      <div className="arb-facts" role="list">
        <div className="arb-fact" role="listitem">
          <span className="arb-fact-num">3 000 m²</span>
          <span className="arb-fact-lab">vlastní výrobní areál</span>
        </div>
        <div className="arb-fact" role="listitem">
          <span className="arb-fact-num">30+ let</span>
          <span className="arb-fact-lab">za pilou i rýsovacím prknem</span>
        </div>
        <div className="arb-fact" role="listitem">
          <span className="arb-fact-num">stovky</span>
          <span className="arb-fact-lab">realizací napříč Evropou</span>
        </div>
      </div>

      <section className="arb-products" id="produkty" aria-labelledby="produkty-nadpis">
        <div className="arb-sec-head">
          <p className="arb-sec-kicker">Šest řezů jednoho řemesla</p>
          <h2 className="arb-h2" id="produkty-nadpis">
            Od kuchyně po kliku dveří
          </h2>
        </div>

        <ul className="arb-cutlist">
          {cuts.map((c) => (
            <li className="arb-cut" key={c.no}>
              <span className="arb-cut-no" aria-hidden="true">
                {c.no}
              </span>
              <div className="arb-cut-body">
                <h3 className="arb-cut-name">{c.name}</h3>
                <p className="arb-cut-what">{c.what}</p>
                <p className="arb-cut-detail">{c.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="arb-band">
          <img
            src="/section-1.webp"
            alt="Detail dřevěného nábytku vyrobeného v dílně ARBYD"
            width={1400}
            height={800}
            className="arb-band-img"
          />
        </figure>
      </section>

      <section className="arb-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="arb-about-grid">
          <figure className="arb-about-media">
            <img
              src="/section-2.webp"
              alt="Truhláři ARBYD při práci ve výrobním areálu v Chotíkově"
              width={1000}
              height={1200}
              className="arb-about-img"
            />
          </figure>

          <div className="arb-about-copy">
            <p className="arb-sec-kicker">Kdo za nábytkem stojí</p>
            <h2 className="arb-h2" id="o-nas-nadpis">
              Český výrobce, ne prostředník
            </h2>
            <p className="arb-about-lead">
              Návrh, výrobu i montáž držíme uvnitř firmy. Designéra, který vás
              provede, potkáte na začátku i na stavbě. Žádné přeposílání zakázky
              dál — za výsledek ručíme my.
            </p>

            <ol className="arb-steps">
              {steps.map((s, i) => (
                <li className="arb-step" key={s.phase}>
                  <span className="arb-step-phase">
                    {String(i + 1).padStart(2, "0")} · {s.phase}
                  </span>
                  <h3 className="arb-step-title">{s.title}</h3>
                  <p className="arb-step-body">{s.body}</p>
                </li>
              ))}
            </ol>

            <div className="arb-visit" style={{ "--d": "0ms" } as CSSProperties}>
              <p className="arb-visit-lead">Přijďte si sáhnout na materiály.</p>
              <address className="arb-visit-addr">
                Showroom Chotíkov 388, 330 17 Chotíkov u Plzně
                <br />
                Po–Pá 9:00–17:00, sobota po domluvě
              </address>
              <a className="arb-btn arb-btn-line" href="tel:+420377958019">
                Zavolat: 377 958 019
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
