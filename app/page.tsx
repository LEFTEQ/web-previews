const cars = [
  { trida: "Malé vozy", priklad: "Škoda Fabia, Hyundai i20", info: "Do města i po Praze. Nízká spotřeba, snadné parkování." },
  { trida: "Střední třída", priklad: "Škoda Octavia, VW Golf", info: "Na služební cesty i rodinné víkendy. Nejčastější náhradní vůz." },
  { trida: "Vyšší třída", priklad: "Škoda Superb, BMW 3", info: "Když si pojistka žádá rovnocennou náhradu za váš vůz." },
  { trida: "Užitkové vozy", priklad: "VW Transporter, Ford Transit", info: "Firma nesmí stát. Dodávku přistavíme do druhého dne." },
];

const kroky = [
  {
    cislo: "1",
    nazev: "Zavoláte nám",
    text: "Nehoda, porucha, servis. Stačí jeden telefonát na naši nonstop linku — ostatní vyřídíme my.",
  },
  {
    cislo: "2",
    nazev: "Přistavíme náhradní vůz",
    text: "Vůz odpovídající třídy přivezeme k vám — k nehodě, do servisu nebo domů. V Praze obvykle do 90 minut.",
  },
  {
    cislo: "3",
    nazev: "Účet pošleme pojišťovně",
    text: "Půjčovné účtujeme podle platného ceníku vaší pojišťovny. U nás nikdy nic nedoplácíte.",
  },
];

export default function Page() {
  return (
    <main className="fofr">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-stripe s1" />
              <span className="brand-stripe s2" />
              <span className="brand-stripe s3" />
            </span>
            <span className="brand-word">
              FOFR <em>CAR4YOU</em>
            </span>
          </div>

          <p className="hero-eyebrow">Autopůjčovna &amp; náhradní vozidla · Praha</p>

          <h1 className="hero-title">
            <span className="line line-1">Bourali jste?</span>
            <span className="line line-2">
              Do <b className="strike-word">90&nbsp;minut</b>
            </span>
            <span className="line line-3">jedete dál.</span>
          </h1>

          <p className="hero-lead">
            Přistavíme vám náhradní vůz kamkoli po Praze a půjčovné vyúčtujeme
            přímo vaší pojišťovně — podle jejího ceníku, bez doplatků.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420733530007">
              Zavolat 733 530 007
            </a>
            <a className="btn btn-ghost" href="#jak-to-funguje">
              Jak to funguje
            </a>
          </div>

          <p className="hero-note">Nonstop dispečink 365 / 24 / 7 · Marešova 643/6, Praha 9</p>
        </div>

        {/* signature: rychlostní pruhy protínající hero */}
        <div className="speedlines" aria-hidden="true">
          <span className="speedline sl-1" />
          <span className="speedline sl-2" />
          <span className="speedline sl-3" />
          <span className="speedline sl-4" />
        </div>
      </header>

      {/* ================= JAK TO FUNGUJE + FLOTILA ================= */}
      <section className="section section-kroky" id="jak-to-funguje" aria-labelledby="kroky-h">
        <div className="section-inner">
          <h2 className="section-title" id="kroky-h">
            Od nehody k volantu <span className="accent">ve třech krocích</span>
          </h2>

          <ol className="kroky">
            {kroky.map((k) => (
              <li className="krok" key={k.cislo}>
                <span className="krok-cislo" aria-hidden="true">{k.cislo}</span>
                <h3 className="krok-nazev">{k.nazev}</h3>
                <p className="krok-text">{k.text}</p>
              </li>
            ))}
          </ol>

          <div className="flotila" role="list" aria-label="Třídy vozidel v naší flotile">
            {cars.map((c) => (
              <article className="vuz" role="listitem" key={c.trida}>
                <h3 className="vuz-trida">{c.trida}</h3>
                <p className="vuz-priklad">{c.priklad}</p>
                <p className="vuz-info">{c.info}</p>
              </article>
            ))}
          </div>

          <p className="flotila-pozn">
            Náhradní vůz dostanete vždy ve třídě odpovídající vašemu vozidlu —
            přesně tak, jak to určuje vaše pojistná smlouva.
          </p>
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="section section-duvera" aria-labelledby="duvera-h">
        <div className="section-inner">
          <h2 className="section-title" id="duvera-h">
            Proč pražské servisy posílají klienty <span className="accent">k nám</span>
          </h2>

          <div className="duvera-grid">
            <div className="duvera-hlavni">
              <p className="duvera-velka">
                „U nás se vám nestane, že budete něco doplácet.“
              </p>
              <p className="duvera-text">
                Likvidaci pojistné události vyřídíme za vás — komunikujeme přímo
                s pojišťovnou, hlídáme termíny a dokládáme vše, co likvidátor
                potřebuje. Vy mezitím normálně jezdíte.
              </p>
              <p className="duvera-text">
                Spolupracujeme s velkými autorizovanými servisy, pojišťovnami
                i asistenčními službami v Praze a okolí. Přes UniCredit Leasing
                vám navíc připravíme financování nového i ojetého vozu do stáří
                5 let — nabídku ušijeme podle vašich možností.
              </p>
            </div>

            <ul className="duvera-fakta">
              <li className="fakt">
                <span className="fakt-cislo">4×</span>
                <span className="fakt-popis">po sobě ocenění Spolehlivá firma</span>
              </li>
              <li className="fakt">
                <span className="fakt-cislo">0 Kč</span>
                <span className="fakt-popis">doplatek — účtujeme dle ceníku pojišťovny</span>
              </li>
              <li className="fakt">
                <span className="fakt-cislo">24/7</span>
                <span className="fakt-popis">dispečink pro pomoc při nehodě, celý rok</span>
              </li>
              <li className="fakt fakt-karta">
                <span className="fakt-cislo">FOFR karta</span>
                <span className="fakt-popis">stálí zákazníci čerpají slevy na půjčovné i servis</span>
              </li>
            </ul>
          </div>

          <div className="kontakt-pas">
            <p className="kontakt-pas-text">Stojíte u nehody právě teď?</p>
            <a className="btn btn-primary" href="tel:+420733530007">
              Zavolat 733 530 007
            </a>
            <a className="btn btn-ghost" href="mailto:info@fofrcar4you.cz">
              Napsat e‑mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
