import type { CSSProperties } from "react";

export const metadata = {
  title: "SK Chválkovice z.s. — fotbalový klub v Olomouci",
  description:
    "Fotbalový klub SK Chválkovice z Olomouce. Přípravky, žáci, dorost i muži — tréninky na hřišti v Chválkovicích, zápasy, turnaje a 54. ročník Memoriálu. Přijď si zahrát nebo fandit.",
  openGraph: {
    title: "SK Chválkovice z.s. — fotbalový klub v Olomouci",
    description:
      "Přípravky až muži, tréninky ve Chválkovicích, tradiční Memoriál. Náš klub, naše hřiště, náš Olomouc.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Tým SK Chválkovice na hřišti" }],
  },
};

type Age = { cat: string; born: string; kdy: string; note: string };

const kategorie: Age[] = [
  { cat: "Přípravka", born: "2017–2019", kdy: "út + čt · 16:30", note: "První kopačky, hry s míčem, žádné lavičkování — hraje se pořád." },
  { cat: "Mladší žáci", born: "2013–2014", kdy: "po + st · 17:00", note: "Krajský přebor. Základ techniky a týmové hry." },
  { cat: "Starší žáci", born: "2011–2012", kdy: "po + st + pá · 17:30", note: "Tady padlo 57 gólů za sezonu. Ambice a tvrdý trénink." },
  { cat: "Dorost", born: "2008–2010", kdy: "út + čt · 18:00", note: "Přechod do velkého fotbalu, cesta do mužů." },
  { cat: "Muži — „benfika“", born: "18+", kdy: "út + čt · 18:30", note: "Chválkovická benfika. Okresní soutěž a plné hřiště." },
  { cat: "Staří páni", born: "35+", kdy: "pá · 19:00", note: "Legendy, co si zahrály i proti Sigmě. Fotbal a pak udírna." },
];

export default function Page() {
  return (
    <main className="kl">
      <header className="kl-top">
        <a className="kl-mark" href="#" aria-label="SK Chválkovice, domů">
          <span className="kl-mark-crest" aria-hidden="true">SK</span>
          <span className="kl-mark-txt">
            <b>Chválkovice</b>
            <i>z.s. · Olomouc</i>
          </span>
        </a>
        <nav className="kl-nav" aria-label="Hlavní">
          <a href="#kategorie">Kdo trénuje</a>
          <a href="#klub">O klubu</a>
          <a className="kl-nav-cta" href="#kategorie">Přijď na trénink</a>
        </nav>
      </header>

      <section className="kl-hero">
        <div className="kl-hero-media">
          <img
            src="/hero.webp"
            alt="Fotbalisté SK Chválkovice na domácím hřišti"
            width={1600}
            height={1000}
            className="kl-hero-img"
          />
        </div>
        <div className="kl-hero-body">
          <p className="kl-eyebrow">Fotbal ve Chválkovicích od přípravky po staré pány</p>
          <h1 className="kl-h1">
            Naše hřiště.<br />
            Náš <span className="kl-hl">Olomouc</span>.<br />
            Tvůj tým.
          </h1>
          <p className="kl-lead">
            SK Chválkovice z.s. — klub, kde se šest kategorií schází na jedné trávě.
            Přijď si kopnout, nebo se v neděli postav k plotu a fanди „benfice“.
          </p>
          <div className="kl-hero-actions">
            <a className="kl-btn" href="#kategorie">Chci trénovat</a>
            <a className="kl-btn kl-btn-ghost" href="#klub">Kdo jsme</a>
          </div>
          <dl className="kl-scoreline">
            <div><dt>Kategorie</dt><dd>6</dd></div>
            <div><dt>Ročník Memoriálu</dt><dd>54.</dd></div>
            <div><dt>Gólů starších žáků</dt><dd>57</dd></div>
          </dl>
        </div>
      </section>

      <section className="kl-sec" id="kategorie">
        <div className="kl-sec-head">
          <p className="kl-eyebrow">Kdo u nás hraje</p>
          <h2 className="kl-h2">Od prvních kopaček po staré pány</h2>
          <p className="kl-sub">
            Šest kategorií, jedno hřiště. Vyber ročník a přijď se rozkoukat — první trénink je nezávazný.
          </p>
        </div>
        <ol className="kl-teams">
          {kategorie.map((k, i) => (
            <li className="kl-team" key={k.cat} style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}>
              <span className="kl-team-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="kl-team-body">
                <h3 className="kl-team-name">{k.cat}</h3>
                <p className="kl-team-born">Ročníky {k.born}</p>
                <p className="kl-team-note">{k.note}</p>
              </div>
              <span className="kl-team-kdy">{k.kdy}</span>
            </li>
          ))}
        </ol>
        <figure className="kl-fig">
          <img
            src="/section-1.webp"
            alt="Mladí fotbalisté SK Chválkovice při tréninku"
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption>Trénujeme za každého počasí. Kabiny a šatny přímo u hřiště ve Chválkovicích.</figcaption>
        </figure>
      </section>

      <section className="kl-sec kl-sec-club" id="klub">
        <div className="kl-club-grid">
          <div className="kl-club-txt">
            <p className="kl-eyebrow">O klubu</p>
            <h2 className="kl-h2">Víc než zápas o víkendu</h2>
            <p className="kl-body">
              Ve Chválkovicích se fotbal hraje po generacích. Každé léto k nám na
              <strong> Memoriál Miloslava Mikšíka a Vladimíra Lakomého</strong> přijedou
              týmy z okolí — Hodolany, Černovír, Dolany — a mezi zápasy se představí i
              legendy SK Sigma Olomouc proti našim starým pánům.
            </p>
            <p className="kl-body">
              Po utkáních se nesedí doma. Rozehřeje se udírna a gril, natočí pivo
              i limča pro děti, a fotbal pokračuje u plotu ještě dlouho po hvizdu.
              Tomu tady říkáme klub.
            </p>
            <ul className="kl-facts">
              <li><span>Kde</span> Hřiště SK Chválkovice, Olomouc–Chválkovice</li>
              <li><span>Přijď</span> na kterýkoli trénink své kategorie, stačí kopačky</li>
              <li><span>Zápasy</span> víkendy — muži, žáci i dorost doma na trávě</li>
            </ul>
            <a className="kl-btn" href="#kategorie">Přidat se ke klubu</a>
          </div>
          <figure className="kl-club-fig">
            <img
              src="/section-2.webp"
              alt="Tým SK Chválkovice pohromadě po zápase"
              width={1200}
              height={1400}
              loading="lazy"
            />
            <figcaption>Chválkovická „benfika“ — muži a jejich fanoušci.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
