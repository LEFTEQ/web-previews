const sluzby = [
  {
    nazev: "Tepelná čerpadla",
    znacka: "IVT · alpha innotec",
    popis:
      "Navrhneme čerpadlo přesně na tepelnou ztrátu vašeho domu — pro novostavbu i rekonstrukci, rodinný dům i bytový prostor. Jsme autorizované IVT centrum, takže ručíme za návrh, montáž i servis.",
    body: ["vzduch/voda i země/voda", "výpočet tepelné ztráty zdarma ke kalkulaci", "záruční i pozáruční servis"],
  },
  {
    nazev: "Fotovoltaika",
    znacka: "85 % účinnosti garantujeme 25 let",
    popis:
      "Elektrárna, která dává smysl s čerpadlem: přebytky ze střechy topí a ohřívají vodu. Baterie zvládnou až 12 000 nabíjecích cyklů, přidáme i nabíjení elektromobilu.",
    body: ["návrh podle spotřeby domácnosti", "kombinace s tepelným čerpadlem", "wallbox pro auto na přání"],
  },
  {
    nazev: "Podlahové topení",
    znacka: "MULTIBETON® — certifikovaná pokládka",
    popis:
      "Originální německý systém, na který nás výrobce sám proškolil. Nízká teplota vody, rovnoměrné teplo od podlahy — a v létě umí i chladit. Ideální dvojice k čerpadlu.",
    body: ["domy, byty i komerční prostory", "topí i ochlazuje", "nejnižší provozní teploty = nejlevnější provoz"],
  },
  {
    nazev: "Rekuperace",
    znacka: "čerstvý vzduch bez ztráty tepla",
    popis:
      "Řízené větrání, které vymění vzduch v celém domě a teplo si nechá. Žádné otevírání oken v mrazu, žádná vlhkost a plísně — a účet za topení nižší.",
    body: ["návrh rozvodů na míru dispozici", "tichý provoz i v ložnici", "filtrace pylů a prachu"],
  },
];

const servis = [
  {
    krok: "Návrh",
    text: "Přijedeme, změříme, spočítáme tepelnou ztrátu. Kalkulaci dostanete s pevnou cenou — od začátku víte, kolik zaplatíte za technologii i práci.",
  },
  {
    krok: "Dotace",
    text: "Žádost o dotaci z Nové zelené úsporám podáme za vás — od formulářů po doložení realizace. Vyřídíme i změnu sazby elektřiny přímo u dodavatele.",
  },
  {
    krok: "Montáž",
    text: "Instalaci dělají naši technici, ne subdodavatelé. Předáme funkční systém, srozumitelný návod a nastavené regulace.",
  },
  {
    krok: "Servis",
    text: "Pravidelné prohlídky i opravy všech technologií, které montujeme. Když v lednu něco vypadne, víte, komu volat.",
  },
];

export default function Page() {
  return (
    <main className="tc">
      {/* ---------- HERO ---------- */}
      <header className="tc-hero">
        <div className="tc-hero-top">
          <a className="tc-wordmark" href="#sluzby" aria-label="Tepelná čerpadla Čechy — úvod">
            <span className="tc-wordmark-mark" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            <span className="tc-wordmark-text">
              TČ&nbsp;ČECHY<em>tepelná čerpadla · Praha</em>
            </span>
          </a>
          <div className="tc-hero-contact">
            <a href="tel:+420778966708">+420 778 966 708</a>
            <span aria-hidden="true">·</span>
            <span>po–pá 8–17</span>
          </div>
        </div>

        <div className="tc-hero-body">
          <p className="tc-eyebrow">Autorizované IVT centrum · Jeremenkova 88, Praha 4</p>
          <h1 className="tc-h1">
            <span className="tc-h1-line">Teplo z&nbsp;venku,</span>
            <span className="tc-h1-line tc-h1-accent">klid uvnitř.</span>
          </h1>
          <p className="tc-hero-lead">
            Tepelné čerpadlo vezme energii ze vzduchu za vaším domem a udělá z ní
            teplo v obýváku. My ho navrhneme na míru, namontujeme, vyřídíme dotaci
            a budeme ho servisovat. Přes <strong>600 realizací</strong> po celých Čechách.
          </p>
          <div className="tc-hero-cta">
            <a className="tc-btn tc-btn-primary" href="tel:+420778966708">Zavolat pro kalkulaci</a>
            <a className="tc-btn tc-btn-ghost" href="mailto:info@tccechy.cz">Napsat e‑mail</a>
          </div>
        </div>

        {/* signature: teplotní křivka — z venkovního mrazu k pokojové teplotě */}
        <div className="tc-curve" aria-hidden="true">
          <svg viewBox="0 0 1200 220" preserveAspectRatio="none" focusable="false">
            <defs>
              <linearGradient id="tcgrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#7FB5D6" />
                <stop offset="0.55" stopColor="#1E5E8A" />
                <stop offset="1" stopColor="#E8613C" />
              </linearGradient>
            </defs>
            <path
              className="tc-curve-path"
              d="M0,190 C220,190 300,180 420,140 C560,92 640,60 800,44 C960,28 1080,26 1200,26"
              fill="none"
              stroke="url(#tcgrad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <div className="tc-curve-labels">
            <span className="tc-temp tc-temp-out">−15&nbsp;°C<em>venku, leden</em></span>
            <span className="tc-temp tc-temp-cop">1&nbsp;kWh&nbsp;→&nbsp;4&nbsp;kWh<em>tolik tepla čerpadlo vyrobí z jedné kilowatthodiny</em></span>
            <span className="tc-temp tc-temp-in">+22&nbsp;°C<em>u vás doma</em></span>
          </div>
        </div>
      </header>

      {/* ---------- SEKCE 1: ŘEŠENÍ ---------- */}
      <section className="tc-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="tc-section-head">
          <h2 className="tc-h2" id="sluzby-h">Jeden dům, jeden systém</h2>
          <p className="tc-section-lead">
            Čerpadlo, fotovoltaika, podlahovka a větrání od jedné party znamená,
            že všechno spolu mluví — a vy máte jedno číslo na servis.
          </p>
        </div>
        <div className="tc-grid">
          {sluzby.map((s) => (
            <article className="tc-card" key={s.nazev}>
              <p className="tc-card-brand">{s.znacka}</p>
              <h3 className="tc-h3">{s.nazev}</h3>
              <p className="tc-card-text">{s.popis}</p>
              <ul className="tc-card-list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- SEKCE 2: PRŮBĚH + DŮVĚRA ---------- */}
      <section className="tc-duvera" aria-labelledby="duvera-h">
        <div className="tc-section-head">
          <h2 className="tc-h2 tc-h2-invert" id="duvera-h">Od kalkulace po první zimu</h2>
          <p className="tc-section-lead tc-lead-invert">
            Nejsme překupníci krabic. Projekci, dotace, montáž i servis děláme
            sami — proto za výsledek můžeme ručit.
          </p>
        </div>

        <ol className="tc-kroky">
          {servis.map((k) => (
            <li className="tc-krok" key={k.krok}>
              <h3 className="tc-krok-nazev">{k.krok}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="tc-fakta" role="list">
          <div className="tc-fakt" role="listitem">
            <strong>600+</strong>
            <span>domů v Čechách topí s námi</span>
          </div>
          <div className="tc-fakt" role="listitem">
            <strong>IVT</strong>
            <span>autorizované centrum — návrh, montáž i servis pod zárukou výrobce</span>
          </div>
          <div className="tc-fakt" role="listitem">
            <strong>MULTIBETON®</strong>
            <span>certifikovaná pokládka podlahového topení přímo od výrobce</span>
          </div>
          <div className="tc-fakt" role="listitem">
            <strong>Praha 4</strong>
            <span>Jeremenkova 88 — a montujeme po celých Čechách, sesterská firma kryje Moravu</span>
          </div>
        </div>

        <blockquote className="tc-citace">
          <p>
            „Naši spokojení zákazníci vám u sebe doma rádi ukážou, jak topení od
            nás funguje. To je reference, která se nedá koupit.“
          </p>
          <footer>— tým TČ Čechy, Praha 4</footer>
        </blockquote>
      </section>
    </main>
  );
}
