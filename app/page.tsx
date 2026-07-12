import type { ReactNode } from "react";

type Obor = {
  cislo: string;
  nazev: string;
  vyznam: string;
  body: string[];
};

const obory: Obor[] = [
  {
    cislo: "§ 1",
    nazev: "Rodinné právo",
    vyznam: "Rozvod, děti, majetek manželů",
    body: [
      "Rozvod sporný i nesporný — zastoupení od první schůzky po rozsudek",
      "Péče o děti a výživné, včetně vymáhání dlužného výživného",
      "Předmanželské smlouvy a zúžení společného jmění manželů",
    ],
  },
  {
    cislo: "§ 2",
    nazev: "Občanské právo",
    vyznam: "Nemovitosti a bezpečné převody",
    body: [
      "Převody nemovitostí s úschovou kupní ceny u advokáta",
      "Návrh na vklad vlastnického práva do katastru",
      "Kompletní právní servis pro realitní kanceláře",
    ],
  },
  {
    cislo: "§ 3",
    nazev: "Trestní právo",
    vyznam: "Obhajoba, když jde o všechno",
    body: [
      "Obhajoba v přípravném řízení i před soudem",
      "Obhajoba mladistvých a úkony k propuštění z vazby",
      "Příprava a podání trestního oznámení",
    ],
  },
  {
    cislo: "§ 4",
    nazev: "Zdravotnické právo",
    vyznam: "Odškodnění újmy na zdraví",
    body: [
      "Náhrada za bolest a ztížení společenského uplatnění",
      "Jednání s pojišťovnami a mimosoudní dohody",
      "Stížnosti k poskytovateli zdravotních služeb",
    ],
  },
  {
    cislo: "§ 5",
    nazev: "Obchodní a pracovní právo",
    vyznam: "Smlouvy, pohledávky, práce",
    body: [
      "Vymáhání pohledávek a uznání závazku",
      "Kupní smlouvy, smlouvy o dílo, úvěrové a leasingové",
      "Pracovní smlouvy — vznik, změny i skončení poměru",
    ],
  },
  {
    cislo: "§ 6",
    nazev: "Správní a ústavní právo",
    vyznam: "Spor se státem i dědictví",
    body: [
      "Přestupková, správní a stavební řízení",
      "Ústavní stížnost a zastoupení před Ústavním soudem ČR",
      "Závěti, dědické smlouvy a dědická řízení",
    ],
  },
];

type Zasada = {
  tvrzeni: string;
  vysvetleni: string;
};

const zasady: Zasada[] = [
  {
    tvrzeni: "Mluvím s vámi jako u kávy, ne jako v paragrafech.",
    vysvetleni:
      "Poslouchám, poradím, povzbudím. Dopředu řeknu všechna rizika sporu — na rovinu, srozumitelně, bez právnické mlhy.",
  },
  {
    tvrzeni: "Beru jen věci, kde vám dokážu pomoci.",
    vysvetleni:
      "Zakládám si na úspěchu ve věci. Když zastoupení nepřevezmu, řeknu proč — a kam se obrátit dál.",
  },
  {
    tvrzeni: "Odměnu znáte předem. Jasně a transparentně.",
    vysvetleni:
      "Cenu domluvíme na začátku a držím ji. Když je to potřeba, umožním hradit zastoupení ve splátkách.",
  },
  {
    tvrzeni: "Co slíbím, splním. A práce se mi nehromadí.",
    vysvetleni:
      "Jsem s vámi v denním kontaktu, když je potřeba. Právní služby poskytuji co nejdříve, ne až se dostane řada.",
  },
];

function Znacka(): ReactNode {
  return (
    <span className="wm" aria-label="JUDr. Petra Langerová — Olomoucký advokát">
      <span className="wm-l">Langerová</span>
      <span className="wm-r">olomoucký advokát</span>
    </span>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="page">
      <header className="topbar">
        <Znacka />
        <span className="topbar-meta">Advokátní kancelář · Olomouc</span>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">JUDr. Petra Langerová, Ph.D., LL.M.</p>
            <h1 id="hero-nadpis" className="hero-h1">
              Dvacet let
              <br />
              stojím
              <br />
              <em>na vaší straně</em>
            </h1>
            <p className="hero-lead">
              Advokátka v Olomouci se specializací na rodinné právo. Rozvody, péči o děti
              i majetek manželů vedu lidsky a bez zbytečných paragrafů — poslouchám, poradím
              a dopředu řeknu, do čeho jdeme.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420777761112">
                Zavolat 777 761 112
              </a>
              <a className="btn btn-ghost" href="mailto:langerova@olomouckyadvokat.cz">
                Napsat e-mail
              </a>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Praxe</dt>
                <dd>20 let u olomouckých soudů</dd>
              </div>
              <div>
                <dt>Úřední hodiny</dt>
                <dd>Po–Čt 8–17, Pá 8–14.30</dd>
              </div>
              <div>
                <dt>Domluva navíc</dt>
                <dd>i o víkendu a ve svátky</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Advokátka JUDr. Petra Langerová ve své kanceláři v Olomouci"
              className="hero-img"
              width={900}
              height={1100}
            />
            <figcaption className="hero-cap">
              „Nemluvím s klientem jako právník. Bavím se s ním jako se známým u kafe.“
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="eyebrow">Rejstřík oborů</p>
          <h2 id="sluzby-nadpis">S čím za mnou lidé chodí</h2>
          <p className="sec-lead">
            Rodinné právo je mé domácí pole, ale kancelář pokryje celý váš případ — od převodu
            bytu po obhajobu u soudu. Vyberte, co řešíte.
          </p>
        </div>

        <ol className="obory">
          {obory.map((o) => (
            <li key={o.cislo} className="obor">
              <span className="obor-cislo" aria-hidden="true">
                {o.cislo}
              </span>
              <h3 className="obor-nazev">{o.nazev}</h3>
              <p className="obor-vyznam">{o.vyznam}</p>
              <ul className="obor-body">
                {o.body.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera-grid">
          <figure className="duvera-media">
            <img
              src="/section-1.webp"
              alt="Detail spisů a pracovního stolu advokátní kanceláře v Olomouci"
              className="duvera-img"
              width={800}
              height={900}
            />
          </figure>

          <div className="duvera-text">
            <p className="eyebrow">Zásady kanceláře</p>
            <h2 id="duvera-nadpis">Pět vět, podle kterých pracuji</h2>
            <p className="sec-lead">
              Přednáším, učím a sama se dál vzdělávám — a spolupracuji jen s těmi nejlepšími.
              Zkušenost ale nic neznamená, když se s ní nedá mluvit. Proto tohle.
            </p>

            <ul className="zasady">
              {zasady.map((z, i) => (
                <li key={i} className="zasada">
                  <span className="zasada-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="zasada-tvrzeni">{z.tvrzeni}</p>
                    <p className="zasada-vysvetleni">{z.vysvetleni}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="duvera-band">
          <img
            src="/section-2.webp"
            alt="Advokátní kancelář JUDr. Petry Langerové v centru Olomouce"
            className="band-img"
            width={1400}
            height={600}
          />
          <div className="band-text">
            <p className="band-kicker">Kde mě najdete</p>
            <p className="band-line">
              Kancelář v centru Olomouce. Přijďte na schůzku, nebo mi nejdřív zavolejte —
              první hovor nezávazně probere, jestli a jak vám dokážu pomoci.
            </p>
            <a className="btn btn-primary" href="tel:+420777761112">
              Domluvit schůzku
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
