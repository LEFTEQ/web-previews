export default function Page() {
  const sluzby = [
    {
      id: "S1",
      tag: "Prodej",
      nazev: "Chci prodat",
      popis:
        "Rychle, bezpečně a za nejvyšší možnou cenu. Připravíme nemovitost, smlouvy, úschovu i katastr — vy jen podepisujete.",
    },
    {
      id: "S2",
      tag: "Pronájem",
      nazev: "Chci pronajmout",
      popis:
        "Bez starostí a pouze slušným nájemcům. Prověříme zájemce, nastavíme smlouvu a pohlídáme kauci.",
    },
    {
      id: "S3",
      tag: "Koupě",
      nazev: "Chci koupit",
      popis:
        "Prověřené nemovitosti po celé České republice. Právní vady odhalíme dřív, než se stanou vaším problémem.",
    },
    {
      id: "S4",
      tag: "Nájem",
      nazev: "Chci bydlet v nájmu",
      popis:
        "Byty, domy i komerční prostory od solidních majitelů v Plzni a okolí. Na prohlídku zajdeme spolu, nově i na dálku.",
    },
    {
      id: "S5",
      tag: "Správa",
      nazev: "Chci správu nájmu",
      popis:
        "Hlídáme, aby ve vašem bytě bydleli jen prověření nájemníci. Nájemné, opravy i komunikaci řešíme za vás.",
    },
  ];

  const specializace = [
    {
      nazev: "Komplikované nemovitosti",
      popis:
        "Exekuce, věcná břemena, právní vady, nejasná historie převodů. Vyhodnotíme rizika, navrhneme postup a dotáhneme obchod do bezpečného konce.",
    },
    {
      nazev: "Právo & mediace v jednom",
      popis:
        "Neřešíme jen nemovitost, ale i vztahy kolem ní. Právní přístup kombinujeme s mediací, aby dohoda dávala smysl právně i lidsky.",
    },
    {
      nazev: "Spoluvlastnictví & rodina",
      popis:
        "Vypořádání podílů, výkupy spoluvlastníků, citlivé situace v rodině. Hledáme cesty, které minimalizují konflikt a drží dlouhodobě.",
    },
    {
      nazev: "Sousedské spory",
      popis:
        "Imise, přístupové cesty, hranice pozemků. Zaměřujeme se na rozumný kompromis místo vleklých soudů, které stojí čas, peníze i nervy.",
    },
    {
      nazev: "Bezpečný převod od A do Z",
      popis:
        "Smlouvy, financování, úschova, katastr, rozdělení peněz. Celý proces vedeme my — vy máte po celou dobu jistotu, že vše probíhá správně.",
    },
  ];

  return (
    <main className="ir">
      {/* ===================== HERO ===================== */}
      <header className="ir-hero">
        <div className="ir-hero-top">
          <div className="ir-wordmark" aria-label="Instinkt reality">
            <span className="ir-wordmark-main">INSTINKT</span>
            <span className="ir-wordmark-sub">reality · Plzeň</span>
          </div>
          <a className="ir-phone" href="tel:+420800737303">
            <span className="ir-phone-label">Zdarma z celé ČR</span>
            <span className="ir-phone-number">800 73 73 03</span>
          </a>
        </div>

        <div className="ir-hero-body">
          <p className="ir-eyebrow">Realitní kancelář · právo · mediace — od roku 2010</p>
          <h1 className="ir-h1">
            <span className="ir-h1-line">Váš</span>
            <span className="ir-h1-line ir-h1-accent">šestý&nbsp;smysl</span>
            <span className="ir-h1-line">ve&nbsp;světě nemovitostí.</span>
          </h1>
          <p className="ir-hero-lead">
            Exekuce, věcná břemena, spoluvlastnictví, spory v&nbsp;rodině. Pro nás to
            není důvod obchod vzdát — je to zadání. Vidíme řešení, která jiní nevidí.
          </p>
          <div className="ir-hero-actions">
            <a className="ir-btn ir-btn-solid" href="tel:+420800737303">
              Zavolat zdarma
            </a>
            <a className="ir-btn ir-btn-ghost" href="#sluzby">
              Co pro vás vyřešíme
            </a>
          </div>
        </div>

        {/* Signature: katastrální mapa — parcely, hranice a jedna „naše" parcela */}
        <div className="ir-katastr" aria-hidden="true">
          <svg viewBox="0 0 560 560" className="ir-katastr-svg" role="presentation">
            <g className="ir-parcely">
              <path d="M40 40 L250 60 L230 210 L60 190 Z" />
              <path d="M250 60 L470 30 L500 180 L230 210 Z" />
              <path d="M60 190 L230 210 L210 380 L90 360 Z" />
              <path d="M500 180 L520 330 L360 360 L340 220 Z" />
              <path d="M90 360 L210 380 L190 520 L110 500 Z" />
              <path d="M360 360 L520 330 L540 480 L390 510 Z" />
              <path d="M210 380 L340 360 L360 490 L190 520 Z" />
            </g>
            {/* parcela, kterou drží Instinkt */}
            <path className="ir-parcela-nase" d="M230 210 L340 220 L360 360 L210 380 Z" />
            <g className="ir-parcela-cisla">
              <text x="135" y="130">128/4</text>
              <text x="360" y="115">129/1</text>
              <text x="140" y="290">130/7</text>
              <text x="430" y="280">131/2</text>
              <text x="150" y="450">132/9</text>
              <text x="450" y="420">133/5</text>
            </g>
            <g className="ir-parcela-znacka">
              <text x="285" y="290" className="ir-znacka-cislo">73/3</text>
              <text x="285" y="318" className="ir-znacka-text">vyřešeno</text>
            </g>
          </svg>
        </div>

        <div className="ir-hero-strip" aria-hidden="true">
          <span>k. ú. Plzeň</span>
          <span>·</span>
          <span>list vlastnictví bez vad</span>
          <span>·</span>
          <span>úschova</span>
          <span>·</span>
          <span>vklad do katastru</span>
          <span>·</span>
          <span>od roku 2010</span>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="ir-sekce ir-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ir-sekce-hlava">
          <p className="ir-eyebrow">Nabídka služeb</p>
          <h2 className="ir-h2" id="sluzby-h">
            Řekněte, co potřebujete.<br />
            Zbytek je naše práce.
          </h2>
        </div>

        <ul className="ir-sluzby-list">
          {sluzby.map((s) => (
            <li key={s.id} className="ir-sluzba">
              <span className="ir-sluzba-tag">{s.tag}</span>
              <h3 className="ir-sluzba-nazev">{s.nazev}</h3>
              <p className="ir-sluzba-popis">{s.popis}</p>
            </li>
          ))}
          <li className="ir-sluzba ir-sluzba-cta">
            <p className="ir-sluzba-cta-text">
              Nevíte, kam váš případ patří? Zavolejte — za pět minut to víme.
            </p>
            <a className="ir-btn ir-btn-solid" href="tel:+420800737303">
              800 73 73 03
            </a>
          </li>
        </ul>
      </section>

      {/* ===================== SPECIALIZACE / DŮVĚRA ===================== */}
      <section className="ir-sekce ir-spec" aria-labelledby="spec-h">
        <div className="ir-spec-uvod">
          <p className="ir-eyebrow ir-eyebrow-svetly">Proč Instinkt</p>
          <h2 className="ir-h2 ir-h2-svetly" id="spec-h">
            Tam, kde ostatní končí,<br />my začínáme.
          </h2>
          <p className="ir-spec-lead">
            Rozumíme smlouvám, vadám nemovitostí i konfliktům mezi spoluvlastníky.
            Díky tomu bezpečně převedeme i nemovitosti, na které si jiné kanceláře
            netroufnou. Realitní praxe, právo a mediace — v jednom týmu, v Plzni.
          </p>
          <div className="ir-spec-fakta">
            <div className="ir-fakt">
              <span className="ir-fakt-cislo">2010</span>
              <span className="ir-fakt-popis">na trhu od tohoto roku</span>
            </div>
            <div className="ir-fakt">
              <span className="ir-fakt-cislo">3 v 1</span>
              <span className="ir-fakt-popis">reality + právo + mediace</span>
            </div>
            <div className="ir-fakt">
              <span className="ir-fakt-cislo">Plzeň</span>
              <span className="ir-fakt-popis">a celá ČR, případy i v SRN</span>
            </div>
          </div>
        </div>

        <ol className="ir-spec-list">
          {specializace.map((sp, i) => (
            <li key={sp.nazev} className="ir-spec-polozka">
              <span className="ir-spec-parcela">{`p. č. ${73 + i}/${i + 1}`}</span>
              <div>
                <h3 className="ir-spec-nazev">{sp.nazev}</h3>
                <p className="ir-spec-popis">{sp.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <blockquote className="ir-citace">
          <p>
            „Dům po rodičích jsme se sestrou nedokázali rozdělit šest let. Instinkt
            nás posadil k jednomu stolu, vyřešil podíly a za čtyři měsíce bylo
            prodáno. Bez soudu.“
          </p>
          <cite>— klienti z Plzně-Bolevce, vypořádání spoluvlastnictví, 2024</cite>
        </blockquote>
      </section>
    </main>
  );
}
