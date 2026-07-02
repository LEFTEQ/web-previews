// Kelcom International Ostrava — kamerové systémy a bezpečnostní technika
// Návrh: „operátorské stanoviště" — tmavý dohledový monitor jako vizuální jazyk.
// Signature prvek: hero komponovaný jako záznam z bezpečnostní kamery —
// REC indikátor, časový kód, zaměřovací rámeček kolem klíčového slova.

const sluzby = [
  {
    kod: "CCTV",
    nazev: "Kamerové systémy",
    popis:
      "Návrh, montáž a servis IP kamer pro firmy, bytové domy i rodinné domy. Vidíte živý obraz i záznam v mobilu, kdekoliv jste.",
    detail: "Rozlišení až 4K · noční vidění · záznam 30+ dní",
  },
  {
    kod: "EZS",
    nazev: "Zabezpečovací systémy",
    popis:
      "Elektronické zabezpečení objektu — čidla pohybu, magnetické kontakty, ovládání klávesnicí nebo telefonem. Alarm, který hlásí dřív, než je pozdě.",
    detail: "Certifikované komponenty · napojení na PCO",
  },
  {
    kod: "EPS",
    nazev: "Požární signalizace",
    popis:
      "Elektrická požární signalizace včetně revizí a pravidelných kontrol. Splníte normy a pojišťovna nebude mít námitky.",
    detail: "Projekce · revize · pravidelný servis",
  },
  {
    kod: "PCO",
    nazev: "Pult centrální ochrany",
    popis:
      "Váš objekt hlídáme nepřetržitě my. Když se něco stane, vyjíždí zásahová jednotka — vy o všem víte ze zprávy v telefonu.",
    detail: "Dohled 24/7 · výjezd do minut · celá Ostrava a okolí",
  },
  {
    kod: "SKV",
    nazev: "Přístupové systémy",
    popis:
      "Vstup na čip, kartu nebo kód. Víte, kdo a kdy prošel dveřmi — do firmy, skladu i bytového domu.",
    detail: "Čipy a karty · evidence průchodů · videotelefony",
  },
];

const duvody = [
  {
    cislo: "30",
    jednotka: "let",
    text: "chráníme objekty v Ostravě a Moravskoslezském kraji. Od roku 1994, dřív než většina dnešních dodavatelů vůbec vznikla.",
  },
  {
    cislo: "24/7",
    jednotka: "hotline",
    text: "Nonstop servisní linka. Když kamera nebo alarm vypadne, řešíme to hned — ne v pondělí ráno.",
  },
  {
    cislo: "1",
    jednotka: "dodavatel",
    text: "Kamery, alarm, požárka i přístupy od jedné firmy. Jeden projekt, jeden servis, jedno telefonní číslo.",
  },
];

export default function Page() {
  return (
    <main className="kc">
      {/* ============ HERO — záběr z kamery ============ */}
      <header className="hero">
        <div className="hero-frame">
          {/* horní lišta monitoru */}
          <div className="cam-bar cam-bar-top">
            <span className="wordmark">
              KELCOM<span className="wordmark-thin">·OSTRAVA</span>
            </span>
            <span className="cam-rec" aria-hidden="true">
              <span className="rec-dot" /> REC
            </span>
          </div>

          <div className="hero-body">
            <p className="hero-eyebrow">Kamerové a bezpečnostní systémy · Ostrava</p>
            <h1 className="hero-title">
              Váš objekt máme{" "}
              <span className="target">
                <span className="target-corner tc-tl" aria-hidden="true" />
                <span className="target-corner tc-tr" aria-hidden="true" />
                <span className="target-corner tc-bl" aria-hidden="true" />
                <span className="target-corner tc-br" aria-hidden="true" />
                v záběru
              </span>
              <br />
              nepřetržitě.
            </h1>
            <p className="hero-sub">
              Kamery, alarmy a požární signalizace pro firmy i domácnosti.
              Navrhneme, namontujeme a hlídáme na vlastním pultu centrální
              ochrany — už od roku 1994.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420596611887">
                Zavolat 596 611 887
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Co všechno hlídáme
              </a>
            </div>
          </div>

          {/* spodní lišta monitoru */}
          <div className="cam-bar cam-bar-bottom">
            <span className="cam-meta">CAM 01 · DALIBOROVA 42, OSTRAVA</span>
            <span className="cam-meta cam-meta-right">NONSTOP DOHLED · PCO AKTIVNÍ</span>
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Systémy, které montujeme a servisujeme</p>
          <h2 id="sluzby-h">
            Jedna firma, celé zabezpečení
          </h2>
          <p className="section-lead">
            Zkratky jako CCTV nebo EZS znát nemusíte — stačí říct, co chcete
            ohlídat. My navrhneme řešení, které dává smysl pro váš objekt i
            rozpočet.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="karta" key={s.kod}>
              <div className="karta-head">
                <span className="karta-kod">{s.kod}</span>
                <span className="karta-live" aria-hidden="true" />
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </li>
          ))}
          <li className="karta karta-cta">
            <h3>Nevíte, co potřebujete?</h3>
            <p>
              Přijedeme, projdeme objekt a navrhneme řešení na míru. Prohlídka a
              nabídka jsou zdarma a bez závazku.
            </p>
            <a className="btn btn-outline" href="tel:+420596611887">
              Domluvit prohlídku objektu
            </a>
          </li>
        </ul>
      </section>

      {/* ============ DŮVĚRA ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head">
          <p className="section-eyebrow section-eyebrow-dark">Proč Kelcom</p>
          <h2 id="duvera-h">Bezpečnost není projekt na jedno léto</h2>
        </div>

        <div className="duvody-grid">
          {duvody.map((d) => (
            <div className="duvod" key={d.jednotka}>
              <p className="duvod-cislo">
                {d.cislo}
                <span className="duvod-jednotka"> {d.jednotka}</span>
              </p>
              <p className="duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="duvera-pas">
          <div className="duvera-pas-text">
            <h3>Najdete nás na Daliborově 42 v Ostravě-Mariánských Horách</h3>
            <p>
              Nejsme e-shop ani anonymní callcentrum. Kamery a alarmy, které
              vám namontujeme, servisujeme sami — technik k vám jede z Ostravy,
              ne z druhého konce republiky. Hlídáme sklady v Porubě, bytové
              domy ve Vítkovicích i rodinné domy po celém kraji.
            </p>
            <ul className="duvera-kontakty">
              <li>
                <span className="kontakt-label">Kancelář</span>
                <a href="tel:+420596611887">596 611 887</a>
              </li>
              <li>
                <span className="kontakt-label">Nonstop hotline</span>
                <a href="tel:+420602240491">602 240 491</a>
              </li>
              <li>
                <span className="kontakt-label">E-mail</span>
                <a href="mailto:info@kelcomov.cz">info@kelcomov.cz</a>
              </li>
            </ul>
          </div>
          <div className="duvera-monitor" aria-hidden="true">
            <div className="mini-cam">
              <span className="mini-cam-label">CAM 02 · SKLAD PORUBA</span>
              <span className="mini-cam-ok">● ZÁZNAM BĚŽÍ</span>
            </div>
            <div className="mini-cam">
              <span className="mini-cam-label">CAM 03 · VJEZD VÍTKOVICE</span>
              <span className="mini-cam-ok">● ZÁZNAM BĚŽÍ</span>
            </div>
            <div className="mini-cam">
              <span className="mini-cam-label">EZS · HALA MAR. HORY</span>
              <span className="mini-cam-ok">● ZASTŘEŽENO</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
