const sluzby = [
  {
    kod: "L1",
    nazev: "Elektroinstalace",
    popis:
      "Kompletní rozvody v novostavbách i rekonstrukcích — od rozvaděče po poslední zásuvku. Rodinné domy, byty, dílny a provozovny v Tachově a okolí.",
    detail: "Rozvaděče · zásuvkové a světelné okruhy · hromosvody",
  },
  {
    kod: "L2",
    nazev: "Revize",
    popis:
      "Výchozí i pravidelné revize elektroinstalací a spotřebičů s protokolem, který obstojí u pojišťovny i inspekce. Termín hlídáme za vás.",
    detail: "Revizní zpráva do 5 dnů · hlídání lhůt · protokoly ČSN",
  },
  {
    kod: "L3",
    nazev: "Opravy a servis",
    popis:
      "Vypadává jistič? Nefunguje polovina zásuvek? Najdeme příčinu měřením, ne zkoušením. Běžné závady odstraníme na místě při první návštěvě.",
    detail: "Diagnostika závad · výměny jističů a proudových chráničů",
  },
  {
    kod: "PE",
    nazev: "Montáže",
    popis:
      "Svítidla, ohřívače vody, nabíječky elektromobilů, přípojky pro tepelná čerpadla. Zapojíme, změříme, předáme s dokladem.",
    detail: "Wallboxy · bojlery · osvětlení · datové rozvody",
  },
];

const zasady = [
  {
    cislo: "230 V",
    text: "Než sáhneme do rozvaděče, měříme. Každý obvod předáváme s naměřenými hodnotami, ne s odhadem.",
  },
  {
    cislo: "20+ let",
    text: "Elektroinstalace děláme v Tachově přes dvě dekády. Většina zakázek k nám chodí na doporučení sousedů.",
  },
  {
    cislo: "48 h",
    text: "Na poptávku odpovídáme do dvou pracovních dnů — s termínem prohlídky a orientační cenou, ne s výmluvou.",
  },
];

export default function Page() {
  return (
    <main className="es">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Elektrospektrumservis">
            <span className="wm-bolt" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="22" height="30" role="presentation">
                <path d="M15 0 2 19h7L7 32l15-20h-8L15 0Z" fill="currentColor" />
              </svg>
            </span>
            <span className="wm-text">
              ELEKTRO<b>SPEKTRUM</b>SERVIS
            </span>
          </div>
          <p className="hero-adresa">Sokolovská 2105 · Tachov</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Elektroservis · revize · montáže</p>
            <h1>
              Elektrika, na kterou se dá
              <span className="h1-spektrum"> spolehnout</span>.
            </h1>
            <p className="hero-lead">
              Elektroinstalace, revize a opravy pro domácnosti i firmy
              v Tachově a okolí. Přijedeme, změříme, opravíme —
              a předáme s protokolem v ruce.
            </p>
            <div className="hero-akce">
              <a className="btn btn-hlavni" href="mailto:info@elektrospektrumservis.cz">
                Poptat zakázku
              </a>
              <a className="btn btn-vedlejsi" href="#sluzby">
                Co všechno děláme
              </a>
            </div>
            <ul className="hero-fakta">
              <li>Revizní technik s osvědčením</li>
              <li>Tachovsko a západní Čechy</li>
              <li>Práce s dokladem a zárukou</li>
            </ul>
          </div>

          <figure className="hero-foto">
            <img
              src="/hero.webp"
              alt="Elektrikář firmy Elektrospektrumservis pracuje na rozvaděči"
            />
            <figcaption className="foto-stitek">
              <span className="stitek-led" aria-hidden="true" />
              Rozvaděč pod napětím — měříme před každým zásahem
            </figcaption>
          </figure>
        </div>

        {/* signature: fázový pás L1 / L2 / L3 / N / PE */}
        <div className="faze-pas" aria-hidden="true">
          <span className="faze f-l1">L1</span>
          <span className="faze f-l2">L2</span>
          <span className="faze f-l3">L3</span>
          <span className="faze f-n">N</span>
          <span className="faze f-pe">PE</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Rozvaděč služeb</p>
          <h2 id="sluzby-nadpis">
            Čtyři okruhy, které jistíme za vás
          </h2>
          <p className="sekce-uvod">
            Každou zakázku vedeme jako samostatný okruh — s jasným rozsahem,
            termínem a cenou předem. Značení znáte z vlastního rozvaděče.
          </p>
        </div>

        <div className="sluzby-mrizka">
          {sluzby.map((s) => (
            <article className="okruh" key={s.kod}>
              <div className="okruh-hlava">
                <span className={`okruh-kod kod-${s.kod.toLowerCase()}`}>{s.kod}</span>
                <h3>{s.nazev}</h3>
              </div>
              <p className="okruh-popis">{s.popis}</p>
              <p className="okruh-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <figure className="sluzby-foto">
          <img
            src="/section-1.webp"
            alt="Detail zapojeného domovního rozvaděče s jističi a proudovými chrániči"
          />
          <figcaption>
            Předání každé instalace: popsaný rozvaděč, revizní zpráva, naměřené hodnoty.
          </figcaption>
        </figure>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera-grid">
          <figure className="duvera-foto">
            <img
              src="/section-2.webp"
              alt="Technik Elektrospektrumservis měří elektroinstalaci multimetrem"
            />
          </figure>

          <div className="duvera-copy">
            <p className="sekce-eyebrow sekce-eyebrow--svetla">O nás</p>
            <h2 id="duvera-nadpis">
              Řemeslo z Tachova.
              <br />
              Žádný callcentrový servis.
            </h2>
            <p>
              Elektrospektrumservis vede Robert Janda — elektrikář, kterého
              v Tachově potkáte na stavbě, ne za přepážkou. Když voláte,
              mluvíte rovnou s člověkem, který k vám přijede a práci sám
              provede nebo ohlídá.
            </p>
            <p>
              Sídlíme na Sokolovské 2105, takže na Tachovsku jsme obvykle
              do hodiny. Pracujeme podle platných norem ČSN a ke každé
              zakázce dáváme doklad i záruku — bez toho od nás rozvaděč
              neodchází.
            </p>

            <dl className="duvera-cisla">
              {zasady.map((z) => (
                <div className="cislo-blok" key={z.cislo}>
                  <dt>{z.cislo}</dt>
                  <dd>{z.text}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="reference">
              <p>
                „Po rekonstrukci nám v domě padal proud, nikdo nevěděl proč.
                Pan Janda závadu našel měřením za hodinu a rovnou ji opravil.
                Od té doby k nám chodí i na pravidelné revize.“
              </p>
              <cite>— rodinný dům, Tachov-Rapotín</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
