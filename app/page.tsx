const sluzby = [
  {
    tag: "Mechanika",
    nazev: "Servisní prohlídky a opravy",
    popis:
      "Pravidelný servis přesně podle plánu výrobce, diagnostika, brzdy, rozvody, spojky. Pracujeme jen s originálními díly Škoda a na opravu dostanete záruku.",
    detail: "Objednání online i telefonicky, termín obvykle do 3 dnů",
  },
  {
    tag: "Pneuservis",
    nazev: "Pneuservis a uskladnění kol",
    popis:
      "Přezutí, vyvážení i uskladnění celé sady u nás v Černicích. Před sezónou vám sami zavoláme, že je čas se objednat — kola hlídáme za vás.",
    detail: "Uskladnění včetně mytí kol a kontroly vzorku",
  },
  {
    tag: "Karosárna",
    nazev: "Karosárna a řešení pojistných událostí",
    popis:
      "Od odřeného nárazníku po řešení celé pojistné události. S pojišťovnou komunikujeme my, vy jen předáte klíče. Po dobu opravy půjčíme náhradní vůz.",
    detail: "Likvidaci s pojišťovnou vyřídíme za vás",
  },
  {
    tag: "Elektro",
    nazev: "Servis elektromobilů a hybridů",
    popis:
      "Certifikovaní technici pro modely Enyaq, Elroq i mild-hybridní pohony. Kontrola trakční baterie, aktualizace softwaru, servis nabíjecí výbavy.",
    detail: "Jediné autorizované pracoviště eMobility Škoda v Plzni-Černicích",
  },
  {
    tag: "Starší vozy",
    nazev: "Šeková knížka pro vozy 4+",
    popis:
      "Máte Fabii, Octavii nebo Yeti starší čtyř let? Šeková knížka vám dá slevy na díly i práci — poctivý servis nemusí stát jako u nového vozu.",
    detail: "Slevy až 20 % na vybrané servisní úkony",
  },
  {
    tag: "STK",
    nazev: "Příprava a zajištění STK",
    popis:
      "Vůz projdeme, opravíme co je potřeba a na stanici technické kontroly ho odvezeme sami. Vy si přijedete už jen pro platnou známku.",
    detail: "Kompletně bez vašeho čekání na lince",
  },
];

const kroky = [
  {
    cas: "7:00",
    titulek: "Předáte klíče",
    text: "Otevíráme v sedm ráno, ať stihnete práci. Vůz převezmeme, sepíšeme zakázku a domluvíme, na čem se ozveme.",
  },
  {
    cas: "dopoledne",
    titulek: "Zavoláme s cenou",
    text: "Po diagnostice voláme s přesnou cenou a nic neděláme bez vašeho souhlasu. Žádné položky navíc na faktuře.",
  },
  {
    cas: "17:00",
    titulek: "Odjíždíte hotoví",
    text: "Vyměněné díly vám ukážeme, vysvětlíme co jsme dělali a proč. Většinu zakázek vracíme týž den.",
  },
];

const reference = [
  {
    text: "Octavii sem vozím dvanáct let. Vždycky mi řeknou dopředu, co to bude stát, a ta cena pak sedí. To je dneska vzácnost.",
    autor: "Pavel H., Plzeň-Slovany",
    vuz: "Octavia Combi 2.0 TDI",
  },
  {
    text: "Po nehodě jsem nemusela řešit vůbec nic — pojišťovnu, prohlídku, náhradní auto, všechno zařídili. Fabia vypadá jak nová.",
    autor: "Jana K., Starý Plzenec",
    vuz: "Fabia 1.0 TSI",
  },
  {
    text: "Enyaq servisují jako jediní v okolí opravdu odborně. Aktualizace, kontrola baterie, hotovo za dopoledne.",
    autor: "Martin V., Plzeň-Černice",
    vuz: "Enyaq 85",
  },
];

export default function Page() {
  return (
    <main className="an-page">
      {/* ===== HERO ===== */}
      <header className="an-hero">
        <div className="an-hero-top">
          <div className="an-wordmark">
            <span className="an-wordmark-main">NEDVĚD</span>
            <span className="an-wordmark-sub">autoservis · Plzeň-Černice</span>
          </div>
          <a className="an-hero-tel" href="tel:+420377243146">
            +420 377 243 146
          </a>
        </div>

        <div className="an-hero-grid">
          <div className="an-hero-copy">
            <p className="an-eyebrow">Autorizovaný servis Škoda · Štefanikova 104</p>
            <h1 className="an-h1">
              Vaše škodovka.
              <br />
              <em>Naše řemeslo</em>
              <br />
              už přes 30 let.
            </h1>
            <p className="an-hero-lead">
              Rodinný autorizovaný servis Škoda v Plzni-Černicích. Řekneme cenu
              předem, nic neděláme bez vašeho souhlasu a vyměněné díly vám
              ukážeme v ruce.
            </p>
            <div className="an-hero-cta">
              <a className="an-btn an-btn-primary" href="tel:+420730512081">
                Objednat do servisu
              </a>
              <a className="an-btn an-btn-ghost" href="mailto:servis@autoservisnedved.cz">
                Napsat servisu
              </a>
            </div>
            <dl className="an-hero-facts">
              <div>
                <dt>Otevřeno dnes</dt>
                <dd>7:00 – 17:00</dd>
              </div>
              <div>
                <dt>Termín opravy</dt>
                <dd>obvykle do 3 dnů</dd>
              </div>
              <div>
                <dt>Díly</dt>
                <dd>Škoda Originální</dd>
              </div>
            </dl>
          </div>

          <figure className="an-hero-media">
            <img
              src="/hero.webp"
              alt="Mechanik autoservisu Nedvěd při práci na voze Škoda na zvedáku v dílně v Plzni-Černicích"
            />
            <figcaption className="an-hero-plate" aria-hidden="true">
              <span className="an-plate-flag">CZ</span>
              <span className="an-plate-text">3P·NEDVĚD</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="an-section an-sluzby" aria-labelledby="sluzby-h">
        <div className="an-section-head">
          <p className="an-eyebrow">Co u nás vyřešíte</p>
          <h2 className="an-h2" id="sluzby-h">
            Poctivý servis znamená: cena předem, díl v ruce, záruka na papíře.
          </h2>
        </div>

        <div className="an-sluzby-grid">
          <ul className="an-sluzby-list">
            {sluzby.map((s) => (
              <li key={s.nazev} className="an-sluzba">
                <span className="an-sluzba-tag">{s.tag}</span>
                <h3 className="an-h3">{s.nazev}</h3>
                <p>{s.popis}</p>
                <p className="an-sluzba-detail">{s.detail}</p>
              </li>
            ))}
          </ul>

          <figure className="an-sluzby-media">
            <img
              src="/section-1.webp"
              alt="Dílna autoservisu Nedvěd — diagnostika a servis vozů Škoda"
            />
            <figcaption>
              Šest zvedáků, diagnostika Škoda a sklad originálních dílů přímo
              v Černicích. Na většinu oprav máme díl skladem týž den.
            </figcaption>
          </figure>
        </div>

        <div className="an-den" role="list" aria-label="Jak probíhá den v servisu">
          {kroky.map((k) => (
            <div className="an-den-krok" role="listitem" key={k.cas}>
              <span className="an-den-cas">{k.cas}</span>
              <h3 className="an-h3">{k.titulek}</h3>
              <p>{k.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="an-section an-duvera" aria-labelledby="duvera-h">
        <div className="an-duvera-grid">
          <figure className="an-duvera-media">
            <img
              src="/section-2.webp"
              alt="Přejímka vozu v autoservisu Nedvěd — technik předává klíče zákazníkovi"
            />
          </figure>

          <div className="an-duvera-copy">
            <p className="an-eyebrow">Rodinná firma z Černic</p>
            <h2 className="an-h2" id="duvera-h">
              Znáte nás jménem. My známe váš vůz podle VIN.
            </h2>
            <p>
              AUTOSERVIS NEDVĚD je rodinný podnik na Štefanikově ulici
              v Plzni-Černicích. Ke každému vozu vedeme kompletní servisní
              historii — když zavoláte, víme, co jsme dělali minule a co vůz
              čeká příště. Servisujeme nové elektrické modely stejně pečlivě
              jako Fabii z roku 2008.
            </p>
            <ul className="an-duvera-body">
              <li>
                <strong>Autorizace Škoda Auto</strong> — školení technici,
                originální díly, zachování záruky vozu
              </li>
              <li>
                <strong>Škoda Handy</strong> — úpravy a servis vozů pro řidiče
                s hendikepem
              </li>
              <li>
                <strong>Náhradní vůz</strong> — po dobu opravy odjedete naší
                škodovkou
              </li>
            </ul>
          </div>
        </div>

        <div className="an-reference">
          <h3 className="an-reference-title">Co říkají řidiči z Plzně</h3>
          <div className="an-reference-grid">
            {reference.map((r) => (
              <blockquote className="an-ref" key={r.autor}>
                <p>„{r.text}“</p>
                <footer>
                  <cite>{r.autor}</cite>
                  <span className="an-ref-vuz">{r.vuz}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
