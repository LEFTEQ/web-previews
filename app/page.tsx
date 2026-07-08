import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Happy Model — modelová železnice a autíčka v Plzni",
  description:
    "Happy Model s.r.o., Plzeň: modely vlaků H0 a TT, autíčka 1:87, tvorba krajiny, budovy a figurky. Poradíme s kolejištěm i elektronikou. Osobní přístup, sortiment Piko, Roco, Brekina, Rietze.",
  openGraph: {
    title: "Happy Model — malý svět velké radosti",
    description:
      "Modelová železnice, autíčka a všechno pro stavbu vlastního miniaturního světa. Prodejna Nade Mží 2, Plzeň — Přední Skvrňany.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Modelová železnice Happy Model" }],
  },
};

const scale = [
  { epocha: "H0", pomer: "1:87", popis: "Nejrozšířenější měřítko. Lokomotivy ČSD, Škody i celá krajina okolo trati." },
  { epocha: "TT", pomer: "1:120", popis: "Menší kolejiště na míru bytu. Detail zůstává, místa ubyde." },
  { epocha: "N", pomer: "1:160", popis: "Rozlehlé scenérie, dlouhé vlaky, malý stůl." },
];

const obory = [
  {
    cislo: "01",
    nazev: "Modely vlaků",
    detail:
      "Dieselové lokomotivy Hektor T435 i T669 ČSD, osobní i rychlíkové vozy Rybák, sety plachtových vagónů. Skladem Piko a Roco.",
    znacky: "Piko · Roco · EL-HO · Brawa",
  },
  {
    cislo: "02",
    nazev: "Modely aut",
    detail:
      "Škoda Octavia IV kombi hned ve třech barvách, ročník 2019. Miniatury 1:87, které sednou vedle trati i do vitríny.",
    znacky: "Rietze · Brekina",
  },
  {
    cislo: "03",
    nazev: "Tvorba krajiny",
    detail:
      "Tráva, stromy, štěrk, voda i skály. Materiál i postup, jak z holé desky udělat kus českého kraje.",
    znacky: "Kolejiště na míru",
  },
  {
    cislo: "04",
    nazev: "Budovy a figurky",
    detail:
      "Nádražní budovy, výhybkářské domky a lidé, kteří je oživí. Doplňky, které dají scéně příběh.",
    znacky: "Detaily scény",
  },
  {
    cislo: "05",
    nazev: "Opravy",
    detail:
      "Rozjede se vám lokomotiva, přestane svítit vagón? Poradíme si i s elektronikou a DCC osvětlením.",
    znacky: "Servis na prodejně",
  },
  {
    cislo: "06",
    nazev: "Dárkový poukaz",
    detail:
      "Když nevíte, který model potěší nejvíc. Poukaz na cokoliv z nabídky — vybere si sám.",
    znacky: "Tip pro blízké",
  },
];

export default function Page() {
  return (
    <main className="hm">
      <header className="hm-top">
        <a className="hm-mark" href="#" aria-label="Happy Model, domů">
          <span className="hm-mark-rail" aria-hidden="true">
            <span className="hm-tie" />
            <span className="hm-tie" />
            <span className="hm-tie" />
            <span className="hm-tie" />
          </span>
          <span className="hm-mark-name">
            <span className="hm-mark-happy">Happy</span>
            <span className="hm-mark-model">Model</span>
          </span>
        </a>
        <div className="hm-top-meta">
          <a href="tel:+420774327139">+420 774 327 139</a>
          <span aria-hidden="true">·</span>
          <span>Po–Pá 11–17, So 9–12</span>
        </div>
      </header>

      <section className="hm-hero" aria-labelledby="hm-hero-title">
        <div className="hm-hero-copy">
          <p className="hm-eyebrow">Modelová železnice a autíčka · Plzeň</p>
          <h1 id="hm-hero-title">
            Malý svět,
            <br />
            <em>velká radost.</em>
          </h1>
          <p className="hm-lead">
            Lokomotivy Hektor, vozy Rybák, Škody v měřítku 1:87. U nás si postavíte
            vlastní kolejiště — od první kolejnice po poslední stromek. A když se něco
            zadrhne, poradíme i s elektronikou.
          </p>
          <div className="hm-hero-actions">
            <a className="hm-btn" href="#nabidka">Prohlédnout nabídku</a>
            <a className="hm-btn hm-btn-ghost" href="tel:+420774327139">Zavolat na prodejnu</a>
          </div>
          <dl className="hm-hero-facts">
            <div>
              <dt>Prodejna</dt>
              <dd>Nade Mží 2, Plzeň — Přední Skvrňany</dd>
            </div>
            <div>
              <dt>Skladem</dt>
              <dd>Piko · Roco · Rietze · Brekina</dd>
            </div>
          </dl>
        </div>
        <figure className="hm-hero-figure">
          <img
            src="/hero.webp"
            width={1200}
            height={1400}
            alt="Detail modelového kolejiště Happy Model s lokomotivami a krajinou"
            className="hm-hero-img"
          />
          <figcaption>Kolejiště se rodí kus po kuse — a pak už nechce přestat růst.</figcaption>
        </figure>
      </section>

      <section className="hm-nabidka" id="nabidka" aria-labelledby="hm-nabidka-title">
        <div className="hm-sec-head">
          <p className="hm-eyebrow">Co u nás najdete</p>
          <h2 id="hm-nabidka-title">Šest cest k vlastnímu miniaturnímu světu</h2>
        </div>

        <div className="hm-scale" role="list" aria-label="Měřítka modelové železnice">
          {scale.map((s) => (
            <div className="hm-scale-chip" role="listitem" key={s.epocha}>
              <span className="hm-scale-name">{s.epocha}</span>
              <span className="hm-scale-ratio">{s.pomer}</span>
              <span className="hm-scale-desc">{s.popis}</span>
            </div>
          ))}
        </div>

        <ol className="hm-grid">
          {obory.map((o) => (
            <li className="hm-card" key={o.cislo}>
              <span className="hm-card-num" aria-hidden="true">{o.cislo}</span>
              <h3>{o.nazev}</h3>
              <p>{o.detail}</p>
              <p className="hm-card-tag">{o.znacky}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="hm-duvera" aria-labelledby="hm-duvera-title">
        <figure className="hm-duvera-figure">
          <img
            src="/section-2.webp"
            width={1000}
            height={1200}
            alt="Modely a doplňky pro stavbu kolejiště v prodejně Happy Model"
            className="hm-duvera-img"
          />
        </figure>
        <div className="hm-duvera-copy">
          <p className="hm-eyebrow">Slovo majitele</p>
          <h2 id="hm-duvera-title">
            Koníček, ze kterého se stalo řemeslo
          </h2>
          <p className="hm-owner">
            „Miniaturní svět mi učaroval od dětství. Mohlo by se zdát, že se v něm nic
            neděje — opak je pravdou. Pokrok dosáhl i sem a pořád je co se učit. Baví mě
            poznávat nové modely, technologie i postupy a podělit se o to s vámi.“
          </p>
          <p className="hm-owner-sign">Vladimír Švígler, majitel</p>

          <blockquote className="hm-quote">
            <p>
              „Když jsem budoval kolejiště, byli výborným pomocníkem při řešení spousty
              úskalí. Poradili i s elektronikou — je vidět, že tomu rozumějí. Co nemají
              skladem, seženou. Prima partner při modelaření.“
            </p>
            <footer>
              <span className="hm-quote-name">Míra</span>
              <span className="hm-quote-place">spokojený zákazník z Teplic</span>
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
