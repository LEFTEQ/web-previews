export const metadata = {
  title: "SEKÁNÍ ZELENĚ s.r.o. — Sekání trávy v Ústí nad Labem a okolí",
  description:
    "Profesionální sekání trávy, svahů a zanedbaných pozemků v Ústí nad Labem. Křovinořezy, mulčování, odvoz trávy. Zavolejte, do 48 hodin přijedeme naceňovat zdarma.",
  openGraph: {
    title: "SEKÁNÍ ZELENĚ s.r.o. — Sekání trávy v Ústí nad Labem",
    description:
      "Posekáme zahradu, svah i hektarový pozemek. Ústí nad Labem a okolí do 30 km. Nacenění zdarma do 48 hodin.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    nazev: "Zahrada u domu",
    vyska: "do 15 cm",
    stroj: "rotační sekačka",
    popis:
      "Pravidelná seč jednou za 14 dní nebo jednorázově. Posekáme, srovnáme okraje kolem záhonů a plotů, trávu odvezeme nebo necháme na kompost — jak chcete.",
  },
  {
    nazev: "Svah a mez",
    vyska: "do 60 cm",
    stroj: "křovinořez",
    popis:
      "Ústí je město do kopce — svahy nad garážemi, meze u cest a břehy sekáme křovinořezem s vyžínací hlavou i nožem. Bezpečně, i tam, kam sekačka nevyjede.",
  },
  {
    nazev: "Zanedbaný pozemek",
    vyska: "přes 1 m",
    stroj: "mulčovač / bubnová sekačka",
    popis:
      "Parcela před prodejem, pozemek po dědictví, výzva od úřadu kvůli zaplevelení. Vysokou trávu, kopřivy i nálety zvládneme na jeden zátah včetně odvozu hmoty.",
  },
  {
    nazev: "Plochy pro firmy a SVJ",
    vyska: "dle smlouvy",
    stroj: "traktorová sekačka",
    popis:
      "Areály, vnitrobloky a okolí bytových domů sekáme celou sezónu na smlouvu. Pevný termín, pevná cena, fotodokumentace po každé seči pro výbor či správce.",
  },
];

const duvody = [
  {
    titulek: "Přijedeme naceňovat do 48 hodin",
    text: "Napíšete nebo zavoláte, my se přijedeme podívat a řekneme cenu na místě. Zdarma a bez závazku — v Ústí nad Labem a do 30 km okolo.",
  },
  {
    titulek: "Cena za metr, ne za hodinu",
    text: "Cenu počítáme podle plochy a výšky porostu, ne podle toho, jak dlouho nám to trvá. Co si domluvíme, to platí — žádné položky navíc na faktuře.",
  },
  {
    titulek: "Po nás zůstane posekáno, ne nepořádek",
    text: "Trávu shrabeme a odvezeme na kompostárnu, chodníky a cesty profoukáme. Odjíždíme, až když by pozemek obstál na fotce.",
  },
];

const reference = [
  {
    citace:
      "Svah za domem na Střekově jsme deset let sekali sami a báli se o kotníky. Teď to za nás dvakrát do roka srovnají za dopoledne.",
    autor: "rodina Kučerova, Ústí nad Labem – Střekov",
  },
  {
    citace:
      "Pozemek v Chabařovicích byl rok neposekaný, metrová tráva a kopřivy. Domluvili jsme se v pondělí, ve čtvrtek bylo hotovo i s odvozem.",
    autor: "p. Vaněk, prodej parcely, Chabařovice",
  },
  {
    citace:
      "Jako SVJ máme konečně klid — pevný termín seče, pevnou cenu a po každé seči fotky do mailu. Výbor už neřeší stížnosti na trávník.",
    autor: "SVJ Krásné Březno, 3. sezóna spolupráce",
  },
];

export default function Page() {
  return (
    <main className="sz">
      {/* ===================== HERO ===================== */}
      <header className="sz-hero">
        <div className="sz-hero-top">
          <span className="sz-wordmark" aria-label="Sekání zeleně s.r.o.">
            SEKÁNÍ<b>ZELENĚ</b>
            <i>s.r.o. · Ústí nad Labem</i>
          </span>
          <a className="sz-hero-tel" href="tel:+420475000000">
            Zavolat a domluvit seč
          </a>
        </div>

        <h1 className="sz-hero-title">
          <span className="sz-line sz-line-1">POSEKÁME</span>
          <span className="sz-line sz-line-2">
            <em>VŠECHNO,</em>
          </span>
          <span className="sz-line sz-line-3">CO ROSTE.</span>
        </h1>

        {/* Signature: pás trávy – každé stéblo je jen CSS, jako řádek po seči */}
        <div className="sz-meadow" aria-hidden="true">
          {Array.from({ length: 48 }).map((_, i) => (
            <span
              key={i}
              className={`sz-blade ${i >= 18 && i <= 29 ? "sz-blade-cut" : ""}`}
              style={{
                height: `${
                  i >= 18 && i <= 29 ? 18 : 42 + ((i * 37) % 46)
                }px`,
                animationDelay: `${(i % 12) * 0.12}s`,
              }}
            />
          ))}
          <span className="sz-meadow-label">← posekáno · 18 cm → 4 cm</span>
        </div>

        <div className="sz-hero-foot">
          <p className="sz-hero-claim">
            Zahrada, svah nad garáží i hektar kopřiv. Sekáme trávu v{" "}
            <strong>Ústí nad Labem a do 30 km okolo</strong> — křovinořezem,
            sekačkou i mulčovačem. Nacenění na místě zdarma do 48 hodin.
          </p>
          <ul className="sz-hero-tags">
            <li>Střekov</li>
            <li>Klíše</li>
            <li>Krásné Březno</li>
            <li>Trmice</li>
            <li>Chabařovice</li>
            <li>Chlumec</li>
          </ul>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="sz-sluzby" aria-labelledby="sluzby-h">
        <div className="sz-section-head">
          <p className="sz-eyebrow">Podle výšky porostu</p>
          <h2 id="sluzby-h">
            Řekněte nám, co vám roste.
            <br />
            My víme, čím na to.
          </h2>
          <p className="sz-section-lead">
            Neúčtujeme „sekání jako sekání“. Cena i stroj se řídí tím, jak
            vysoko tráva vyrostla — proto naše služby řadíme od kotníků po
            ramena.
          </p>
        </div>

        <div className="sz-sluzby-grid">
          {sluzby.map((s) => (
            <article className="sz-karta" key={s.nazev}>
              <div className="sz-karta-head">
                <span className="sz-vyska">{s.vyska}</span>
                <span className="sz-stroj">{s.stroj}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>

        <figure className="sz-foto">
          <img
            src="/section-1.webp"
            alt="Čerstvě posekaný svažitý trávník v Ústí nad Labem, v pozadí křovinořez opřený o plot"
          />
          <figcaption>
            Svah na Střekově, dopoledne po seči. Tráva shrabaná, odvezená na
            kompostárnu, cesta profouknutá.
          </figcaption>
        </figure>
      </section>

      {/* ===================== DŮVĚRA / REFERENCE ===================== */}
      <section className="sz-duvera" aria-labelledby="duvera-h">
        <div className="sz-section-head">
          <p className="sz-eyebrow sz-eyebrow-light">Proč zrovna my</p>
          <h2 id="duvera-h">
            Malá parta z Ústí,
            <br />
            která drží slovo i termín.
          </h2>
        </div>

        <div className="sz-duvody">
          {duvody.map((d) => (
            <div className="sz-duvod" key={d.titulek}>
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <div className="sz-reference">
          <h3 className="sz-ref-title">Co říkají lidé, kterým sekáme</h3>
          <div className="sz-ref-grid">
            {reference.map((r) => (
              <blockquote key={r.autor}>
                <p>„{r.citace}“</p>
                <cite>{r.autor}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
