import type { ReactNode } from "react";

type Price = { label: string; note: string; value: string };
type Pillar = { k: string; title: string; body: string };
type Review = { name: string; place: string; text: string };

const prices: Price[] = [
  { label: "Příjezd a diagnostika u vás doma", note: "po celé Praze", value: "v ceně opravy" },
  { label: "Práce technika", note: "účtujeme jen skutečný čas", value: "400 Kč / hod" },
  { label: "Výměna ložisek a hřídele", note: "včetně demontáže bubnu", value: "od 1 200 Kč" },
  { label: "Výměna vypouštěcího čerpadla", note: "pračka zase odčerpá vodu", value: "od 800 Kč" },
  { label: "Výměna topného tělesa", note: "studená voda, nedopírá", value: "od 700 Kč" },
  { label: "Výměna gumového těsnění dveří", note: "protéká z bubnu", value: "od 900 Kč" },
];

const brands: string[] = [
  "Bosch", "Siemens", "Whirlpool", "Electrolux", "AEG", "Candy",
  "Beko", "LG", "Samsung", "Gorenje", "Zanussi", "Indesit",
];

const pillars: Pillar[] = [
  {
    k: "01",
    title: "Přes 10 let jen pračky",
    body: "Od začátku se specializujeme na jednu věc — opravy praček. Za tu dobu tisíce spravených bubnů a spokojených domácností po celé Praze.",
  },
  {
    k: "02",
    title: "Nejde to spravit? Neplatíte",
    body: "Přijedeme, najdeme příčinu a poradíme, jestli se oprava vůbec vyplatí. Když pračku spravit nelze, za náš příjezd a čas nic neplatíte.",
  },
  {
    k: "03",
    title: "Většinou do druhého dne",
    body: "Voláte dnes, díl vezeme zítra. Snažíme se přijet co nejdřív — běžně opravíme do 1 až 3 dnů, často hned napoprvé.",
  },
];

const reviews: Review[] = [
  { name: "Honza", place: "Praha 5", text: "Naše pračka nešla najednou vůbec zapnout. Technik přijel druhý den, pračku opravil a zase můžeme prát. Děkujeme za pomoc." },
  { name: "Daniela", place: "Praha 3", text: "V sobotu jsem volala kvůli nefunkční pračce, ještě v sobotu pán přijel a spravil ji. Kéžby takhle fungoval každý servis!" },
  { name: "Pepa", place: "Praha 7", text: "Pračka při praní nahlásila chybu. Opraváře jsme sháněli rychle, přijel na čas dle domluvy a spravil ji. Cena byla rozumná." },
  { name: "Aleš", place: "Praha 10", text: "Napřed se přijel na pračku podívat, druhý den dorazil s novými díly a opravil ji. Přesně tak, jak jsme se domluvili." },
  { name: "Jirka", place: "Praha 1", text: "Pračka AEG nám přestala napouštět vodu. Den po zavolání přijel ochotný pán a bez problémů ji spravil. Děkujeme." },
];

function Dial({ n }: { n: string }): ReactNode {
  return (
    <span className="dial" aria-hidden="true">
      <span className="dial__num">{n}</span>
    </span>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Novotný — servis praček, Praha">
          <span className="wordmark__dot" aria-hidden="true" />
          <span className="wordmark__name">NOVOTNÝ</span>
          <span className="wordmark__sub">servis praček · Praha</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#cenik">Ceník</a>
          <a href="#reference">Reference</a>
          <a className="topnav__call" href="tel:+420777111222">777 111 222</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="eyebrow__pip" aria-hidden="true" />
            Opravy praček · Praha · NONSTOP
          </p>
          <h1 className="hero__title">
            Vaše pračka<br />
            <em>zase pere.</em><br />
            Nejčastěji hned<br />
            druhý&nbsp;den.
          </h1>
          <p className="hero__lede">
            Opravujeme pračky téměř všech značek přímo u vás doma v Praze.
            Zjistíme příčinu, poradíme, jestli se oprava vyplatí — a když ji
            spravit nejde, za náš příjezd nic neplatíte.
          </p>
          <div className="hero__actions">
            <a className="btn btn--call" href="tel:+420777111222">
              <span className="btn__k">Zavolat technikovi</span>
              <span className="btn__num">777 111 222</span>
            </a>
            <a className="btn btn--ghost" href="#cenik">Prohlédnout ceník</a>
          </div>
        </div>

        <div className="porthole" aria-hidden="true">
          <div className="porthole__ring" />
          <div className="porthole__face">
            <span className="porthole__label">Volejte NONSTOP</span>
            <span className="porthole__num">777&nbsp;111&nbsp;222</span>
            <span className="porthole__foot">i o víkendu a svátcích</span>
          </div>
        </div>
      </section>

      <div className="perf-edge perf-edge--onlight" aria-hidden="true" />

      <section className="band band--dark" id="cenik">
        <div className="band__inner">
          <header className="band__head">
            <Dial n="01" />
            <div>
              <p className="eyebrow eyebrow--light">Ceník oprav — orientační</p>
              <h2 className="band__title">Co na pračce opravíme a kolik to stojí</h2>
            </div>
          </header>

          <ul className="pricelist holes">
            {prices.map((p) => (
              <li className="pricelist__row" key={p.label}>
                <span className="pricelist__label">
                  {p.label}
                  <span className="pricelist__note">{p.note}</span>
                </span>
                <span className="pricelist__lead" aria-hidden="true" />
                <span className="pricelist__value">{p.value}</span>
              </li>
            ))}
          </ul>

          <div className="brands">
            <p className="brands__title">Opravujeme značky</p>
            <ul className="brands__list">
              {brands.map((b) => (
                <li className="brands__item" key={b}>{b}</li>
              ))}
            </ul>
            <p className="brands__more">…a další. Nevíte si rady se svojí? Zavolejte, poznáme závadu už podle popisu.</p>
          </div>
        </div>
      </section>

      <div className="perf-edge perf-edge--ondark" aria-hidden="true" />

      <section className="band band--light" id="reference">
        <div className="band__inner">
          <header className="band__head">
            <Dial n="02" />
            <div>
              <p className="eyebrow">Proč zrovna nás</p>
              <h2 className="band__title">Jeden opravář, jedno řemeslo, žádné překvapení na faktuře</h2>
            </div>
          </header>

          <div className="pillars">
            {pillars.map((p) => (
              <article className="pillar" key={p.k}>
                <span className="pillar__k" aria-hidden="true">{p.k}</span>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__body">{p.body}</p>
              </article>
            ))}
          </div>

          <div className="reviews">
            <p className="reviews__title">Co říkají zákazníci po opravě</p>
            <ul className="reviews__grid holes">
              {reviews.map((r, i) => (
                <li className="review" key={r.name + i}>
                  <p className="review__text">{r.text}</p>
                  <p className="review__by">
                    <span className="review__name">{r.name}</span>
                    <span className="review__place">{r.place}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
