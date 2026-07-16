function Stamp({ prefix, className = "", label = "Razítko Antikvariát Olomouc, Univerzitní 14" }: { prefix: string; className?: string; label?: string }) {
  const top = `${prefix}-top`;
  const bottom = `${prefix}-bot`;
  const bleed = `${prefix}-bleed`;
  return (
    <svg className={`stamp ${className}`} viewBox="0 0 220 220" role="img" aria-label={label}>
      <defs>
        <path id={top} d="M 26 110 A 84 64 0 0 1 194 110" fill="none" />
        <path id={bottom} d="M 194 110 A 84 64 0 0 1 26 110" fill="none" />
        <filter id={bleed} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="1" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" />
        </filter>
      </defs>
      <g filter={`url(#${bleed})`} className="stamp-ink">
        <ellipse cx="110" cy="110" rx="97" ry="77" className="stamp-ring stamp-ring--out" />
        <ellipse cx="110" cy="110" rx="84" ry="64" className="stamp-ring stamp-ring--in" />
        <text className="stamp-arc">
          <textPath href={`#${top}`} startOffset="50%" textAnchor="middle">ANTIKVARIÁT · OLOMOUC</textPath>
        </text>
        <text className="stamp-arc">
          <textPath href={`#${bottom}`} startOffset="50%" textAnchor="middle">UNIVERZITNÍ 14</textPath>
        </text>
        <text x="110" y="98" className="stamp-star" textAnchor="middle">✦</text>
        <text x="110" y="121" className="stamp-mid" textAnchor="middle">KNIHY · LP · NOTY</text>
      </g>
    </svg>
  );
}

type Card = {
  call: string;
  tag: string;
  title: string;
  desc: string;
  stock: string;
};

const SHELVES: Card[] = [
  {
    call: "82-3 · BEL",
    tag: "Beletrie",
    title: "Beletrie a světová četba",
    desc: "Od Edice Kolumbus po Živá díla minulosti — romány, které si znovu hledají čtenáře.",
    stock: "foxed paper · dobrý až výborný stav",
  },
  {
    call: "94 · OLO",
    tag: "Olomouciana",
    title: "Historie a Olomouciana",
    desc: "Dějiny měst, kroniky a regionalia — Litovel, Olomouc a okolní Haná v pevných vazbách.",
    stock: "foxed paper · sběratelské kusy",
  },
  {
    call: "090 · BIB",
    tag: "Bibliofilie",
    title: "Bibliofilie a staré tisky",
    desc: "Grafické listy, obrazy, ex libris a tisky, které se drží za rohy, ne za hřbet.",
    stock: "ruční papír · antikvární",
  },
  {
    call: "78 · LP",
    tag: "Gramofon",
    title: "LP desky",
    desc: "Vinyly napříč žánry, přebrané a přehrané. Vykupujeme i jednotlivé desky.",
    stock: "vinyl · hodnoceno kus po kusu",
  },
  {
    call: "78N · NOT",
    tag: "Hudebniny",
    title: "Noty, partitury, klavírní výtahy",
    desc: "Zpěvníky i celé partitury — hudebniny, které patří zpátky na pult.",
    stock: "foxed paper · pro hráče",
  },
  {
    call: "76 · GRA",
    tag: "Grafika",
    title: "Svaté obrázky a grafické listy",
    desc: "Devoční obrázky, filmové plakáty do roku 1990 a drobná grafika do rámu.",
    stock: "list · ke sběru i do rámu",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <div className="mast-brand">
          <span className="mast-name">Antikvariát Olomouc</span>
          <span className="mast-addr">~ Univerzitní 14 ~</span>
        </div>
        <p className="mast-tel">
          Poradíme s výběrem <a href="tel:+420608873555">608&nbsp;873&nbsp;555</a>
        </p>
      </header>

      <section className="hero" aria-labelledby="hero-quote">
        <p className="hero-eyebrow">Second&nbsp;hand knihkupectví · centrum Olomouce</p>
        <blockquote id="hero-quote" className="hero-quote">
          <span className="hero-line">Knihy jsou pro lidi tím,</span>
          <span className="hero-line">čím jsou pro ptáky <em>křídla.</em></span>
        </blockquote>
        <cite className="hero-cite">— John Ruskin</cite>
        <p className="hero-lede">
          Kamenný antikvariát na Univerzitní 14 — knihy všech žánrů, LP desky, noty i svaté
          obrázky, srovnané jako v šuplíku kartotéky. Většina titulů je zároveň v prodejně
          i v našem e-shopu, tak si každý svazek užijte, dokud je na regále.
        </p>
        <div className="hero-stamp" aria-hidden="false">
          <Stamp prefix="hero" />
        </div>
      </section>

      <section className="sec sec-catalog" aria-labelledby="catalog-head">
        <div className="sec-head">
          <p className="sec-kicker">Kartotéka · co u nás najdete</p>
          <h2 id="catalog-head">Vytažené ze šuplíků katalogu</h2>
          <p className="sec-sub">
            Každá kategorie má svou signaturu jako karta v kartotéce. Zastavte se na Univerzitní 14
            a projděte celý regál — nebo si nechte poradit po telefonu.
          </p>
        </div>
        <ol className="drawer">
          {SHELVES.map((c, i) => (
            <li className="card" key={c.call}>
              <div className="card-top">
                <span className="card-call">{c.call}</span>
                <span className="card-tag">{c.tag}</span>
              </div>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-desc">{c.desc}</p>
              <p className="card-stock">{c.stock}</p>
              <span className="card-watermark" aria-hidden="true">
                <Stamp prefix={`card-${i}`} className="stamp--small" label="" />
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="sec sec-about" aria-labelledby="about-head">
        <div className="about-grid">
          <div className="about-lede">
            <p className="sec-kicker">Výkup · už od 500 knih</p>
            <h2 id="about-head">Máte doma větší knihovnu? Přijedeme za vámi.</h2>
            <p className="about-text">
              Máte-li doma přes 500 svazků, zavolejte na <a href="tel:+420608873555">608&nbsp;873&nbsp;555</a>
              {" "}nebo <a href="tel:+420728570608">728&nbsp;570&nbsp;608</a>. Přijedeme, knihy
              společně probereme, vybrané kusy hned na místě zaplatíme a odvezeme.
            </p>
            <ul className="buy-list">
              <li>Knihy všech žánrů a stáří</li>
              <li>Filmové plakáty do roku 1990</li>
              <li>LP desky</li>
              <li>Noty, partitury a zpěvníky</li>
            </ul>
          </div>

          <aside className="index-card" aria-label="Vizitka antikvariátu">
            <p className="index-heading">Kamenná prodejna</p>
            <dl className="index-fields">
              <div className="index-row">
                <dt>Majitelka</dt>
                <dd>Mgr. Monika Beková</dd>
              </div>
              <div className="index-row">
                <dt>Adresa</dt>
                <dd>Univerzitní 14<br />772&nbsp;00 Olomouc</dd>
              </div>
              <div className="index-row">
                <dt>Telefon</dt>
                <dd><a href="tel:+420608873555">608&nbsp;873&nbsp;555</a></dd>
              </div>
              <div className="index-row">
                <dt>E-mail</dt>
                <dd><a href="mailto:obchod@antikvariatolomouc.cz">obchod@antikvariatolomouc.cz</a></dd>
              </div>
            </dl>
            <p className="index-note">
              Aktuálně otevřeno pouze výjimečně, po domluvě — mateřská dovolená. Děkujeme za
              pochopení, na knihy se těšíme dál.
            </p>
            <span className="index-seal" aria-hidden="true">
              <Stamp prefix="about" className="stamp--seal" label="" />
            </span>
          </aside>
        </div>
      </section>
    </main>
  );
}
