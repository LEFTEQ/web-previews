const ANTLER_PATH =
  "M120 70C120 46 130 34 154 30M138 36C142 24 140 16 132 8M154 30C176 26 194 18 204 6M176 24C182 16 182 8 178 0M120 70C120 46 110 34 86 30M102 36C98 24 100 16 108 8M86 30C64 26 46 18 36 6M64 24C58 16 58 8 62 0";

function AntlerDefs() {
  return (
    <svg
      className="antler-defs"
      viewBox="0 0 240 72"
      aria-hidden="true"
      focusable="false"
    >
      <symbol id="antler" viewBox="0 0 240 72">
        <path
          d={ANTLER_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  );
}

function HeroAntler() {
  return (
    <svg
      className="hero-antler"
      viewBox="0 0 240 72"
      aria-hidden="true"
      focusable="false"
    >
      <path
        pathLength={1}
        d={ANTLER_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardAntler() {
  return (
    <svg
      className="card-antler"
      viewBox="0 0 240 72"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={ANTLER_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const specimens = [
  {
    no: "01",
    name: "Lemon Curd",
    price: "99",
    chip: "lemon",
    desc:
      "Křehký korpus, vrstva domácího citronového krému a lehká pusinka. Kyselé, svěží, vůbec ne přeslazené.",
    note: "Nejsvěžejší z trojice",
  },
  {
    no: "02",
    name: "Salty Caramel",
    price: "99",
    chip: "caramel",
    desc:
      "Vláčný piškot, hluboký slaný karamel a špetka mořské soli navrch. Náš nejprodávanější dortík.",
    note: "Bestseller od pultu",
  },
  {
    no: "03",
    name: "Pecan Mascarpone",
    price: "119",
    chip: "rose",
    desc:
      "Pražené pekanové ořechy, hedvábný mascarpone a karamelizovaná kůrka. Nejbohatší kousek v kolekci.",
    note: "Nejbohatší chuť",
  },
];

export default function Page() {
  return (
    <main className="page">
      <AntlerDefs />

      <section className="hero" aria-labelledby="wordmark">
        <p className="kicker">Pekařství &middot; Purkyňova 3, Praha 1 &middot; Otevřeno denně</p>

        <div className="wordmark">
          <HeroAntler />
          <h1 id="wordmark">
            <span className="oh">Oh</span>
            <span className="deer">Deer</span>
          </h1>
        </div>

        <p className="lede">
          Malá pražská pekárna na Purkyňově. Každé ráno pečeme jen tři podpisové
          dortíky &mdash; a nic víc, aby byl každý dokonalý.
        </p>

        <div className="hero-actions">
          <a className="btn btn--solid" href="tel:+420737730090">
            Objednat: 737&nbsp;730&nbsp;090
          </a>
          <a className="btn btn--ghost" href="#nabidka">
            Prohlédnout kolekci
          </a>
        </div>
      </section>

      <section className="section" id="nabidka" aria-labelledby="nabidka-h">
        <header className="section-head">
          <p className="eyebrow">Kolekce &mdash; tři kusy</p>
          <h2 id="nabidka-h">Podpisové dortíky</h2>
          <p className="section-sub">
            Každý dort vedeme jako vzorek z jedné sbírky: pojmenovaný, očíslovaný
            a označený barevnou cenovkou podle chuti.
          </p>
        </header>

        <ol className="specimens">
          {specimens.map((s) => (
            <li className="specimen" key={s.no}>
              <CardAntler />
              <div className={`plate plate--${s.chip}`} aria-hidden="true">
                <span className="plate-no">No.&nbsp;{s.no}</span>
              </div>
              <div className="specimen-body">
                <h3 className="flavour">{s.name}</h3>
                <p className="flavour-note">{s.note}</p>
                <p className="specimen-desc">{s.desc}</p>
                <div className="specimen-foot">
                  <span className={`chip chip--${s.chip}`}>
                    {s.price}&nbsp;Kč
                  </span>
                  <a className="buy" href="tel:+420737730090">
                    Objednat
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section about" id="o-nas" aria-labelledby="o-nas-h">
        <header className="section-head">
          <p className="eyebrow">O pekárně</p>
          <h2 id="o-nas-h">Čerstvé každé ráno, na jednom rohu Nového Města</h2>
        </header>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              Oh Deer je poctivá malá pekárna kousek od Karlova náměstí. Nesázíme
              na dlouhé menu &mdash; místo toho pečeme tři dortíky, které umíme
              opravdu dobře, a každý den je připravujeme od základu.
            </p>
            <p>
              Přijďte si sednout s kávou, nebo si dort rezervujte telefonicky a
              vyzvedněte cestou domů. Rádi upečeme i celý dort na oslavu &mdash;
              stačí zavolat den dopředu.
            </p>
            <a className="btn btn--solid" href="tel:+420737730090">
              Zavolat pekárně
            </a>
          </div>

          <aside className="info-card" aria-label="Otevírací doba a kontakt">
            <div className="info-row">
              <span className="info-label">Otevírací doba</span>
              <span className="info-value">Pondělí &ndash; neděle</span>
              <span className="info-hours">08:00 &ndash; 20:00</span>
            </div>
            <div className="info-row">
              <span className="info-label">Kde nás najdete</span>
              <span className="info-value">Purkyňova 3, Nové Město</span>
              <span className="info-sub">110 00 Praha 1</span>
            </div>
            <div className="info-row">
              <span className="info-label">Objednávky</span>
              <a className="info-link" href="tel:+420737730090">
                +420 737 730 090
              </a>
              <a className="info-link" href="mailto:order@ohdeerbakery.cz">
                order@ohdeerbakery.cz
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
