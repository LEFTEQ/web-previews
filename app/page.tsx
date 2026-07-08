import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UL*KRAS — řezání panelu a interiérové práce | Ústí nad Labem",
  description:
    "Rozšíříme dveře, vyřízneme okno, vybouráme příčku v panelu. Bezprašné řezání betonu chlazené vodou i vzduchem, statické zajištění HELIFIX. Ústí nad Labem, od roku 1995. Pojištěno na 2 miliony.",
};

const rez = [
  {
    kod: "Ø15",
    nazev: "Vyříznutí otvoru",
    popis:
      "Nový otvor v betonové zdi až do tloušťky 15 cm — nosné i nenosné. Rovná hrana, žádné odsekávání kladivem.",
  },
  {
    kod: "+",
    nazev: "Rozšíření otvoru",
    popis:
      "Úzké dveře do koupelny nebo do kuchyně? Stávající otvor rozšíříme přesně na rozměr, který potřebujete.",
  },
  {
    kod: "⊘",
    nazev: "Vybourání příčky",
    popis:
      "Částečně, úplně, nebo jen výřez okna mezi místnosti. I betonová šatna, která překáží.",
  },
  {
    kod: "⌐",
    nazev: "Vyříznutí zárubně",
    popis:
      "Zárubeň z příčky do 7 cm i ze stěny do 15 cm. Vybourání zárubně ze stěny až do 20 cm.",
  },
  {
    kod: "⌂",
    nazev: "Statické zajištění",
    popis:
      "Systém HELIFIX i ocelová stojka pro zajištění stávajících konstrukcí. Aby zeď nad novým otvorem držela.",
  },
  {
    kod: "≈",
    nazev: "Otloukání a úklid",
    popis:
      "Strojové otloukání starých omítek na zdech i stropech, odvoz suti a základní úklid včetně chodeb.",
  },
];

const kroky = [
  {
    n: "01",
    t: "Napíšete nám záměr",
    d: "Popíšete, co chcete změnit. Odpovíme, co bude potřeba, a domluvíme zaměření na místě.",
  },
  {
    n: "02",
    t: "Dostanete rozpočet",
    d: "Vypracujeme cenový návrh formou položkového rozpočtu — víte předem, za co platíte.",
  },
  {
    n: "03",
    t: "Papíry a povolení",
    d: "Zajistíme projektovou dokumentaci a vyřídíme stavební povolení. Pak domluvíme termín.",
  },
  {
    n: "04",
    t: "Přijedeme a uděláme to",
    d: "Ráno dorazí dva pracovníci, práci provedou, odvezou suť a uklidí. Předávací protokol na závěr.",
  },
];

export default function Page() {
  return (
    <main className="ul">
      <header className="ul-top">
        <a className="ul-mark" href="#" aria-label="UL*KRAS, úvod">
          UL<span className="ul-star" aria-hidden="true">✳</span>KRAS
        </a>
        <nav className="ul-nav" aria-label="Hlavní">
          <a href="#prace">Co řežeme</a>
          <a href="#postup">Jak to chodí</a>
          <a href="#duvera">O firmě</a>
        </nav>
        <a className="ul-call" href="tel:+420603246795">
          <span className="ul-call-lbl">Zavolat</span>
          <span className="ul-call-num">603 246 795</span>
        </a>
      </header>

      <section className="ul-hero" aria-labelledby="hero-h">
        <img
          className="ul-hero-img"
          src="/hero.webp"
          alt="Řezání otvoru do nosné betonové stěny v panelovém bytě"
          width={1600}
          height={1100}
        />
        <div className="ul-hero-wrap">
          <p className="ul-eyebrow">Ústí nad&nbsp;Labem &middot; od&nbsp;roku&nbsp;1995</p>
          <h1 id="hero-h" className="ul-hero-h">
            Prořízneme <span className="ul-hl">nosnou betonovou&nbsp;stěnu</span> tam, kde ostatní jen bourají.
          </h1>
          <p className="ul-hero-lead">
            Diamantový kotouč chlazený vodou i vzduchem. Řez do tloušťky 15&nbsp;cm,
            bez otřesů, bez rozbitého panelu. Změníme dispozici vašeho panelového bydlení — a uklidíme po&nbsp;sobě.
          </p>
          <div className="ul-hero-cta">
            <a className="ul-btn" href="tel:+420603246795">Zavolat a poradit se</a>
            <a className="ul-btn-ghost" href="#prace">Co dokážeme vyříznout</a>
          </div>
          <dl className="ul-spec">
            <div><dt>Max. tloušťka řezu</dt><dd>15&nbsp;cm</dd></div>
            <div><dt>Přesnost</dt><dd>±&thinsp;2&nbsp;mm</dd></div>
            <div><dt>Prašnost</dt><dd>téměř nulová</dd></div>
            <div><dt>Pojištění škody</dt><dd>2&nbsp;mil.&nbsp;Kč</dd></div>
          </dl>
        </div>
      </section>

      <section className="ul-prace" id="prace" aria-labelledby="prace-h">
        <div className="ul-sec-head">
          <p className="ul-kicker">Odborná činnost</p>
          <h2 id="prace-h">Co v panelu řešíme</h2>
          <p className="ul-sec-lead">
            Nevyhovuje vám uspořádání panelových stěn? Není to bezvýchodné.
            Otvor, příčka, zárubeň — přesně a bez zbytečného nepořádku.
          </p>
        </div>

        <ul className="ul-grid">
          {rez.map((r) => (
            <li className="ul-card" key={r.nazev}>
              <span className="ul-card-kod" aria-hidden="true">{r.kod}</span>
              <h3>{r.nazev}</h3>
              <p>{r.popis}</p>
            </li>
          ))}
        </ul>

        <div className="ul-metody">
          <img
            className="ul-metody-img"
            src="/section-1.webp"
            alt="Bezprašné řezání betonu diamantovým kotoučem chlazeným vodou"
            width={1200}
            height={900}
          />
          <div className="ul-metody-txt">
            <p className="ul-kicker">Dvě metody, obě umíme</p>
            <h3 className="ul-metody-h">Vodou, nebo vzduchem — poradíme která do vašeho bytu</h3>
            <div className="ul-cols">
              <div className="ul-col">
                <h4>Chlazení vzduchem</h4>
                <p className="ul-plus">Použitelné všude, skoro bezprašné, stačí zásuvka 220&nbsp;V a malý manipulační prostor.</p>
                <p className="ul-minus">Pomalejší, přesnost řezu do&nbsp;±&thinsp;20&nbsp;mm.</p>
              </div>
              <div className="ul-col">
                <h4>Chlazení vodou</h4>
                <p className="ul-plus">Rychlejší a zcela bezprašné.</p>
                <p className="ul-minus">Potřebuje přívod vody a 380&nbsp;V; vodu z podlahy odsáváme, aby nezatekla do bytu&nbsp;pod&nbsp;vámi.</p>
              </div>
            </div>
            <p className="ul-metody-note">
              Za roky praxe jsme řezali oběma způsoby — víme, kdy se který vyplatí, a řekneme vám to na&nbsp;rovinu.
            </p>
          </div>
        </div>
      </section>

      <section className="ul-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="ul-duvera-inner">
          <div className="ul-duvera-txt">
            <p className="ul-kicker ul-kicker-lt">O firmě &amp; jak to chodí</p>
            <h2 id="duvera-h">Rodinná parta z Ústí, která do bytu chodí od&nbsp;roku 1995</h2>
            <p className="ul-duvera-lead">
              Interiérové práce děláme téměř třicet let. Přijedeme dva, práci provedeme za&nbsp;domluvenou
              cenu z položkového rozpočtu a po&nbsp;sobě uklidíme — včetně přístupových chodeb.
              Pro případ škody jsme pojištěni na&nbsp;2&nbsp;miliony korun.
            </p>

            <ol className="ul-kroky" id="postup" aria-label="Jak spolupráce probíhá">
              {kroky.map((k) => (
                <li key={k.n}>
                  <span className="ul-kroky-n" aria-hidden="true">{k.n}</span>
                  <div>
                    <h3>{k.t}</h3>
                    <p>{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="ul-vizit" aria-label="Kontaktní a firemní údaje">
            <img
              className="ul-vizit-img"
              src="/section-2.webp"
              alt="Hotový čistý otvor v panelové stěně po řezání"
              width={900}
              height={700}
            />
            <div className="ul-vizit-body">
              <p className="ul-vizit-firma">UL✳KRAS stavební společnost&nbsp;s.r.o.</p>
              <dl className="ul-vizit-dl">
                <div><dt>Sídlo, dílny a sklady</dt><dd>Slovanská 753/1<br />400&nbsp;01 Ústí nad&nbsp;Labem</dd></div>
                <div><dt>UL✳KRAS studio</dt><dd>Krušnohorská 2821<br />400&nbsp;11 Ústí nad&nbsp;Labem</dd></div>
                <div><dt>IČO / DIČ</dt><dd>254 41 761 / CZ25441761</dd></div>
              </dl>
              <a className="ul-btn ul-btn-block" href="tel:+420603246795">
                Zavolat: 603&nbsp;246&nbsp;795
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
