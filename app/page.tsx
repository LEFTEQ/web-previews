import { HeroHeadline, Curtain } from "./motion";

function GrigneMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      role="img"
      aria-label="Nářez do chleba"
      fill="none"
    >
      <path d="M14 32 L44 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M42 32 L72 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M70 32 L100 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function Pin() {
  return (
    <svg className="pin" viewBox="0 0 48 40" aria-hidden="true" fill="none">
      <path d="M8 30 L22 8" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M20 32 L34 10" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M32 30 L44 12" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

const offer = [
  {
    k: "Kváskový chléb",
    d: "Zaděláváme ve čtyři ráno. Dlouhé kynutí, tmavá kůrka, měkká střída — a nářez rukou přímo před pecí. Čerstvý bochník každé dopoledne.",
  },
  {
    k: "Pečivo z pece",
    d: "Rohlíky, housky, dalamánky, koláče a buchty. Pečeme průběžně celé dopoledne, ať na pult přijde pořád jen to teplé.",
  },
  {
    k: "Voňavá káva",
    d: "K pečivu si dejte espresso, nebo si ho vezměte s sebou. V Antonínově kavárně ve Vršovicích u něj i posedíte.",
  },
  {
    k: "Aktuální nabídka",
    d: "Co vaříme a pečeme tento týden, píšeme na Instagram a Facebook. Sezóna a nálada pekaře rozhodují, co bude navíc.",
  },
];

const places = [
  { c: "Praha 2 — Vinohrady", a: "Náměstí Míru 585/11", t: "+420 603 816 942" },
  { c: "Praha 3 — Vinohrady", a: "Laubova 4", t: "+420 605 202 861" },
  { c: "Praha 5 — Smíchov", a: "Štefánikova 339/39", t: "+420 734 140 650", nove: true },
  { c: "Praha 6 — Bubeneč", a: "Československé armády 729/28", t: "+420 739 027 750" },
  { c: "Praha 7 — Holešovice", a: "Strossmayerovo náměstí 11", t: "+420 734 783 443" },
  { c: "Praha 8 — Karlín", a: "Sokolovská 55", t: "+420 731 611 812" },
  { c: "Praha 10 — Vršovice", a: "Moskevská 38", t: "+420 733 593 925" },
  { c: "Antonínova kavárna", a: "Vršovice, Košická 32/17", t: "+420 739 083 241", cafe: true },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <Curtain />
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__inner">
          <div className="wordmark">
            <span className="wordmark__a">Antonínovo</span>
            <span className="wordmark__b">pekařství</span>
            <GrigneMark className="wordmark__cut" />
          </div>

          <p className="hero__eyebrow">Praha · pečeme od 4:00 ráno · sedm pekařství</p>

          <HeroHeadline />

          <p className="hero__sub">
            Pečeme přímo před vašima očima — žádné fotky z fotobanky, jen těsto,
            ruce a žiletka. Zastavte se pro čerstvý bochník do jedné ze sedmi
            pražských pekáren.
          </p>

          <div className="hero__cta">
            <a className="btn btn--copper" href="#pekarny">Najít nejbližší pekárnu</a>
            <a className="btn btn--ghost" href="#nabidka">Co vytáhneme z pece</a>
          </div>
        </div>
      </section>

      <section className="offer" id="nabidka">
        <header className="sec-head">
          <GrigneMark className="sec-cut" />
          <h2 className="sec-title">Co vytáhneme z pece</h2>
          <p className="sec-lead">
            Poctivé řemeslo bez zkratek. Mouka, voda, sůl, kvásek a čas — a k tomu
            dobrá káva.
          </p>
        </header>

        <ul className="offer__grid">
          {offer.map((o) => (
            <li className="card" key={o.k}>
              <h3 className="card__title">{o.k}</h3>
              <p className="card__text">{o.d}</p>
            </li>
          ))}
        </ul>

        <div className="band">
          <div className="band__col">
            <p className="band__label">Nechcete ven?</p>
            <p className="band__text">
              Pošleme pečivo až domů přes <strong>Wolt</strong> a{" "}
              <strong>Bolt Food</strong>. Objednejte v aplikaci a snídani máte
              za dveřmi.
            </p>
          </div>
          <div className="band__col band__col--hire">
            <p className="band__label">Máte chuť dělat poctivé řemeslo?</p>
            <p className="band__text">
              Hledáme pekaře do našich pražských pekáren. Práce rukama, brzké
              ráno, chleba, na který je vidět.
            </p>
            <a className="btn btn--copper" href="mailto:info@antoninovopekarstvi.cz?subject=Hled%C3%A1m%20pr%C3%A1ci%20peka%C5%99e">
              Napsat, že mám zájem
            </a>
          </div>
        </div>
      </section>

      <section className="places" id="pekarny">
        <header className="sec-head">
          <GrigneMark className="sec-cut sec-cut--amber" />
          <h2 className="sec-title sec-title--light">Sedm pekařství a jedna kavárna po Praze</h2>
          <p className="sec-lead sec-lead--light">
            Vinohrady, Vršovice, Karlín, Holešovice, Bubeneč — a nově Smíchov.
            Každý zářez do bochníku děláme rukou a žiletkou; ten nářez, grigne,
            dá chlebu v peci prostor se rozvinout a je náš podpis.
          </p>
        </header>

        <ul className="places__grid">
          {places.map((p) => (
            <li className={"place" + (p.cafe ? " place--cafe" : "")} key={p.c}>
              <span className="place__pin"><Pin /></span>
              <div className="place__body">
                <h3 className="place__city">
                  {p.c}
                  {p.nove && <span className="tag">nově</span>}
                </h3>
                <p className="place__addr">{p.a}</p>
                <a className="place__tel" href={"tel:" + p.t.replace(/\s/g, "")}>
                  Zavolat {p.t}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
