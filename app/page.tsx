import type { ReactNode } from "react";

type Family = {
  name: string;
  count: string;
  note: string;
  items: { label: string; shop?: boolean }[];
};

const families: Family[] = [
  {
    name: "Na komín a střechu",
    count: "vlajkový sortiment",
    note: "Skládaná vlna z pozinkovaného plechu — profil, který lisujeme od padesátých let a podle kterého nás poznáte.",
    items: [
      { label: "Komínové stříšky „vlny\u201c", shop: true },
      { label: "Stříšky se vsuvkou do komína", shop: true },
      { label: "Komínové hlavice Ekon", shop: true },
    ],
  },
  {
    name: "Do kuchyně a spíže",
    count: "poctivé mechaniky",
    note: "Kovové strojky, které dědily babičky po babičkách. Pořád je brousíme a montujeme tady v dílně.",
    items: [
      { label: "Mlýnky na mák", shop: true },
      { label: "Strojky na strouhání", shop: true },
      { label: "Obouvátka" },
    ],
  },
  {
    name: "Na chatu a do kempu",
    count: "na sezení",
    note: "Sklápěcí i pevné — plech a trubka, které vydrží déšť i sezónu na dvorku.",
    items: [
      { label: "Kempinkové sedačky", shop: true },
      { label: "Kempinkové stolky", shop: true },
      { label: "Kovové lavičky", shop: true },
    ],
  },
  {
    name: "Do veřejného prostoru",
    count: "pro obce a firmy",
    note: "Kolostavy, madla i stojany na míru — svaříme a nalakujeme podle vaší dokumentace.",
    items: [
      { label: "Vozíky", shop: true },
      { label: "Madla a věšáky" },
      { label: "Reklamní stojany a kolostavy", shop: true },
    ],
  },
];

const stats: { big: string; small: string }[] = [
  { big: "1951", small: "rok, kdy jsme založili družstvo" },
  { big: "3", small: "generace kovářů na jedné adrese" },
  { big: "družstvo", small: "rozhodují ti, kdo u strojů stojí" },
  { big: "e-shop", small: "rozvezeme po celém Česku" },
];

function Seam({ variant }: { variant: "load" | "scroll" }): ReactNode {
  return <div className={`seam seam--${variant}`} aria-hidden="true" />;
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wrap topbar-in">
          <span className="wordmark">
            JIHO<span className="kov">KOV</span>
          </span>
          <span className="tag">výrobní družstvo · České Budějovice</span>
        </div>
      </header>

      <section className="hero band">
        <div className="wrap">
          <p className="eyebrow">Kovodělné výrobní družstvo · jižní Čechy · od roku 1951</p>

          <div className="hero-figure">
            <Seam variant="load" />
            <div className="num-row">
              <span className="num">74</span>
              <span className="num-side">
                <em>let</em>
                <span>ohýbáme, lisujeme a svařujeme plech</span>
              </span>
            </div>
            <Seam variant="load" />
          </div>

          <h1 className="hero-h1">
            Komínové stříšky, které přežijí střechu pod sebou.
          </h1>
          <p className="hero-sub">
            Jsme kováři a klempíři z Českých Budějovic. Z jednoho pozinkovaného
            plechu ohneme vlnu na komín, mlýnek na mák i lavičku na dvůr — a
            stojíme si za tím už tři generace.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#sortiment">Prohlédnout výrobky</a>
            <a className="btn btn-ghost" href="#sortiment">Otevřít e-shop</a>
          </div>
        </div>
      </section>

      <Seam variant="scroll" />

      <section className="band" id="sortiment">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow">Sortiment</p>
            <h2 className="sec-title">Přes sedmdesát druhů z ohýbaného plechu</h2>
            <p className="sec-lead">
              Tohle jsou čtyři rodiny výrobků, pro které si k nám lidé chodí
              nejčastěji. Většinu koupíte hned v e-shopu, atypické kusy uděláme na
              zakázku podle vaší dokumentace.
            </p>
          </header>

          <div className="fam-grid">
            {families.map((f) => (
              <article className="fam" key={f.name}>
                <div className="fam-head">
                  <span className="fam-mark" aria-hidden="true" />
                  <h3 className="fam-name">{f.name}</h3>
                  <span className="fam-count">{f.count}</span>
                </div>
                <p className="fam-note">{f.note}</p>
                <ul className="fam-list">
                  {f.items.map((it) => (
                    <li key={it.label}>
                      <span>{it.label}</span>
                      {it.shop ? <span className="chip">e-shop</span> : null}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Seam variant="scroll" />

      <section className="band about" id="o-druzstvu">
        <div className="wrap about-grid">
          <div className="about-text">
            <p className="eyebrow">O družstvu</p>
            <h2 className="sec-title">
              74 let na jedné adrese v Českých Budějovicích
            </h2>
            <p>
              JIHOKOV vznikl v roce 1951 jako kovodělné výrobní družstvo. Od té
              doby lisujeme a ohýbáme plech pořád tady, v jižních Čechách, a pořád
              jako družstvo — podnik, kde o práci rozhodují ti, kdo ji dělají.
            </p>
            <p>
              Nejznámější je naše skládaná vlna na komín. Stejný fold, který
              vidíte na každé stříšce, se v téhle stránce vrací jako linka mezi
              sekcemi — je to profil, který z plechu tvarujeme dennodenně.
            </p>
          </div>

          <ul className="stats">
            {stats.map((s) => (
              <li key={s.small}>
                <b>{s.big}</b>
                <span>{s.small}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
