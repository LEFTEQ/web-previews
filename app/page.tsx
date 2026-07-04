import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servisman s.r.o. — opravna elektroniky v Praze 4",
  description:
    "Už 30 let opravujeme televize, notebooky, mikrovlnky, vysavače i staré gramofony a magnetofony. Přineste přístroj do dílny v Hausmannově ulici v Praze 4 — diagnostiku uděláme, řekneme cenu, opravíme.",
  openGraph: {
    title: "Servisman s.r.o. — opravna elektroniky, Praha 4",
    description:
      "Televize, notebooky, kuchyňské spotřebiče i letité magnetofony. Ruční servis s třicetiletou praxí. Hausmannova 3003/9, Praha 4.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const prijimame = [
  { skupina: "Obrazovky a zvuk", veci: "televize, zesilovače, věže, gramofony" },
  { skupina: "Počítače", veci: "notebooky, SET-TOP boxy, DVD přehrávače" },
  { skupina: "Kuchyň", veci: "mikrovlnky, mixéry, šlehače, lednice" },
  { skupina: "Domácnost", veci: "vysavače, žehličky, dálkové ovladače" },
  { skupina: "Staré páky", veci: "cívkové a kazetové magnetofony, rádia" },
];

const postup = [
  {
    krok: "Přinesete",
    text: "Zastavte se v dílně v Hausmannově ulici v úterý nebo ve čtvrtek odpoledne. Přístroj si prohlédneme s vámi u pultu.",
  },
  {
    krok: "Řekneme cenu",
    text: "Nejdřív zjistíme, co je špatně, a teprve pak vám řekneme, kolik oprava stojí. Bez vašeho souhlasu nešroubujeme dál.",
  },
  {
    krok: "Opravíme",
    text: "Vyměníme, co dosloužilo, a přístroj proměříme. U nové televize ji zapojíme, naladíme a neodejdeme, dokud ji neumíte ovládat.",
  },
];

export default function Page() {
  return (
    <main className="sm-page">
      <header className="sm-top">
        <a className="sm-wordmark" href="#" aria-label="Servisman, opravna elektroniky">
          <span className="sm-wordmark-main">SERVIS<span className="sm-wordmark-accent">MAN</span></span>
          <span className="sm-wordmark-sub">opravna elektroniky · Praha 4</span>
        </a>
        <a className="sm-call" href="tel:+420241000000">
          <span className="sm-call-label">Zavolat do dílny</span>
          <span className="sm-call-num">241 00 00 00</span>
        </a>
      </header>

      <section className="sm-hero" aria-labelledby="sm-hero-title">
        <div className="sm-hero-copy">
          <p className="sm-eyebrow">Otevřeno út &amp; čt · 14–18 · Hausmannova 3003/9</p>
          <h1 id="sm-hero-title" className="sm-hero-title">
            Třicet let<br />
            <span className="sm-hero-em">rozebíráme,</span><br />
            aby to zase<br />
            <span className="sm-hero-em">hrálo.</span>
          </h1>
          <p className="sm-hero-lead">
            Televize, notebook, vysavač i letitý cívkový magnetofon po babičce.
            Než se zbavíte spotřebiče, který přestal fungovat, ukažte ho nám —
            spousta věcí se dá spravit levněji, než stojí nová.
          </p>
          <div className="sm-hero-actions">
            <a className="sm-btn sm-btn-primary" href="tel:+420241000000">Zavolat do dílny</a>
            <a className="sm-btn sm-btn-ghost" href="#postup">Jak oprava probíhá</a>
          </div>
        </div>
        <figure className="sm-hero-figure">
          <img
            src="/hero.webp"
            alt="Ponk v pražské opravně elektroniky s rozebraným přístrojem a servisním nářadím"
            className="sm-hero-img"
            width={960}
            height={720}
          />
          <figcaption className="sm-hero-caption">Náš ponk v Praze 4</figcaption>
        </figure>
      </section>

      <section className="sm-band" aria-label="Co opravujeme">
        <p className="sm-band-lead">Co vám u pultu vezmeme do ruky</p>
        <ul className="sm-list">
          {prijimame.map((r, i) => (
            <li className="sm-list-row" key={r.skupina}>
              <span className="sm-list-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="sm-list-name">{r.skupina}</span>
              <span className="sm-list-desc">{r.veci}</span>
            </li>
          ))}
        </ul>
        <p className="sm-band-note">
          Nevíte, jestli váš přístroj spravíme? Zavolejte a popište, co dělá.
          Poradíme rovnou po telefonu, jestli má cenu ho vozit.
        </p>
      </section>

      <section className="sm-postup" id="postup" aria-labelledby="sm-postup-title">
        <div className="sm-postup-head">
          <p className="sm-eyebrow sm-eyebrow-dark">Jak to u nás chodí</p>
          <h2 id="sm-postup-title" className="sm-h2">
            Žádné překvapení na účtence
          </h2>
        </div>
        <ol className="sm-steps">
          {postup.map((k, i) => (
            <li className="sm-step" key={k.krok}>
              <span className="sm-step-num">{i + 1}</span>
              <h3 className="sm-step-title">{k.krok}</h3>
              <p className="sm-step-text">{k.text}</p>
            </li>
          ))}
        </ol>
        <figure className="sm-postup-figure">
          <img
            src="/section-1.webp"
            alt="Detail měření elektroniky multimetrem během opravy"
            className="sm-postup-img"
            width={1200}
            height={640}
          />
        </figure>
      </section>

      <section className="sm-about" aria-labelledby="sm-about-title">
        <figure className="sm-about-figure">
          <img
            src="/section-2.webp"
            alt="Interiér opravny elektroniky Servisman s poličkami plnými spravovaných přístrojů"
            className="sm-about-img"
            width={900}
            height={1100}
          />
        </figure>
        <div className="sm-about-copy">
          <p className="sm-eyebrow">O dílně</p>
          <h2 id="sm-about-title" className="sm-h2">
            Malá dílna v Praze 4, kde se ještě pájí
          </h2>
          <p className="sm-about-text">
            Servisman opravuje domácí elektroniku už třicet let. Za tu dobu
            nám pod rukama prošly televize všech generací, první DVD přehrávače
            i cívkové magnetofony, ke kterým už dnes skoro nikdo nesežene součástky.
            Bavíme se tím dodnes.
          </p>
          <p className="sm-about-text">
            Nejsme řetězec ani výdejní okénko. Přístroj u nás otevře člověk, který
            ho pak i spraví — a řekne vám na rovinu, jestli se to vyplatí, nebo je
            čas na nový kus.
          </p>
          <dl className="sm-facts">
            <div className="sm-fact">
              <dt>Kde nás najdete</dt>
              <dd>Hausmannova 3003/9, 143 00 Praha 4</dd>
            </div>
            <div className="sm-fact">
              <dt>Kdy máme otevřeno</dt>
              <dd>úterý a čtvrtek, 14–18 hodin</dd>
            </div>
            <div className="sm-fact">
              <dt>Praxe v oboru</dt>
              <dd>30 let oprav domácí elektroniky</dd>
            </div>
          </dl>
          <p className="sm-updated">Ceník a informace aktualizovány v únoru 2025.</p>
        </div>
      </section>
    </main>
  );
}
