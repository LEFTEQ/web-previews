const sluzby = [
  {
    kod: "SVJ",
    nazev: "Správa pro SVJ a bytová družstva",
    popis:
      "Vedeme účetnictví domu, hlídáme fond oprav, připravujeme shromáždění vlastníků a jednou ročně vám předložíme srozumitelné vyúčtování — bez tabulek, kterým nikdo nerozumí.",
    polozky: ["Účetnictví a předpisy plateb", "Vyúčtování služeb do 30. 4.", "Podklady pro shromáždění", "Evidence vlastníků a nájemců"],
  },
  {
    kod: "TECH",
    nazev: "Technická správa domu",
    popis:
      "Revize, servis kotelen, výtahů a společných prostor. Termíny hlídáme my, ne vy — a když v neděli praskne stoupačka, víte, komu volat.",
    polozky: ["Povinné revize v termínu", "Havarijní služba 24/7", "Pasport domu a plán oprav", "Dozor nad dodavateli"],
  },
  {
    kod: "NÁJEM",
    nazev: "Správa nájemních bytů",
    popis:
      "Vlastníte byt v Plzni a nechcete řešit nájemníky? Najdeme prověřené nájemce, sepíšeme smlouvu, vybereme nájem a předáme byt s protokolem — vy jen dostáváte peníze na účet.",
    polozky: ["Výběr a prověření nájemců", "Nájemní smlouvy a předávací protokoly", "Výběr nájemného a upomínky", "Kontroly stavu bytu"],
  },
];

const duvody = [
  {
    cislo: "310",
    jednotka: "bytových jednotek",
    text: "ve správě napříč Plzní — od Slovan přes Bory po Doubravku. Známe domy postavené za první republiky i panelové domy ze sedmdesátých let.",
  },
  {
    cislo: "48 h",
    jednotka: "na odpověď",
    text: "Na e-mail nebo telefon reagujeme do dvou pracovních dnů. Na havárii okamžitě — dispečink jede nonstop.",
  },
  {
    cislo: "1×",
    jednotka: "ročně osobně",
    text: "Každý dům ve správě projdeme minimálně jednou ročně od sklepa po střechu a výboru předáme zprávu o stavu s doporučením oprav.",
  },
];

const reference = [
  {
    citace:
      "Převzali dům po správci, který dva roky neudělal vyúčtování. Za tři měsíce bylo všechno srovnané a poprvé jsme na shromáždění rozuměli číslům.",
    autor: "pí. Vaňková, předsedkyně SVJ",
    dum: "Klatovská třída, 24 jednotek",
  },
  {
    citace:
      "Praskla nám voda v sobotu večer. Do hodiny byl v domě instalatér a v pondělí jsme měli protokol pro pojišťovnu. To za předchozí správy nebylo myslitelné.",
    autor: "p. Šimek, výbor SVJ",
    dum: "Slovany, 48 jednotek",
  },
];

export default function Page() {
  return (
    <main className="rkc">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="Správa nemovitostí RKC">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="brand-name">
              RKC <em>správa nemovitostí</em>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="line line-1">Váš dům</span>
            <span className="line line-2">v pořádku.</span>
            <span className="line line-3">
              Od sklepa <span className="po">po střechu.</span>
            </span>
          </h1>

          <p className="hero-lead">
            Spravujeme bytové domy, SVJ a nájemní byty v Plzni. Účetnictví, revize,
            havárie i shromáždění vlastníků — všechno na jednom místě, s jedním
            telefonním číslem.
          </p>

          <div className="hero-meta">
            <a className="hero-cta" href="tel:+420388903101">
              Zavolat správci
            </a>
            <p className="hero-note">
              Havarijní dispečink <strong>24/7</strong> · Plzeň a okolí
            </p>
          </div>
        </div>

        {/* signature: štítová fasáda plzeňského činžáku z čistých CSS ploch */}
        <div className="facade" aria-hidden="true">
          <div className="facade-roof" />
          <div className="facade-grid">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className={`okno okno-${i % 5}`} />
            ))}
          </div>
          <div className="facade-parter">
            <span className="dvere" />
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="eyebrow">Co pro váš dům děláme</p>
          <h2 id="sluzby-h">Tři agendy. Jeden správce.</h2>
          <p className="sekce-lead">
            Každý dům potřebuje trojí péči: peníze, techniku a lidi. My držíme
            všechny tři pohromadě, abyste je nemuseli hlídat vy.
          </p>
        </div>

        <div className="sluzby-mriz">
          {sluzby.map((s) => (
            <article key={s.kod} className="karta">
              <p className="karta-kod">{s.kod}</p>
              <h3>{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
              <ul>
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava--svetla">
          <p className="eyebrow eyebrow--svetly">Proč nám domy svěřují klíče</p>
          <h2 id="duvera-h">Správa, u které víte, na čem jste</h2>
        </div>

        <div className="duvody-mriz">
          {duvody.map((d) => (
            <div key={d.cislo} className="duvod">
              <p className="duvod-cislo">
                {d.cislo} <span>{d.jednotka}</span>
              </p>
              <p className="duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="reference-mriz">
          {reference.map((r) => (
            <figure key={r.autor} className="reference">
              <blockquote>
                <p>„{r.citace}“</p>
              </blockquote>
              <figcaption>
                <strong>{r.autor}</strong>
                <span>{r.dum}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
