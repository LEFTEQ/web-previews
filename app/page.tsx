const sluzby = [
  {
    nazev: "Sekční vrata",
    popis:
      "Nejčastější volba do pražských garáží. Panely 40 mm se zateplením, těsnění po celém obvodu, otevírání přímo vzhůru — nezaberou místo před garáží ani uvnitř.",
    tag: "do 6 m šířky",
  },
  {
    nazev: "Rolovací vrata",
    popis:
      "Hliníkové lamely 77 nebo 55 mm se navíjejí do kompaktního boxu nad otvorem. Ideální tam, kde strop garáže potřebujete nechat volný.",
    tag: "AL lamela 77 / 55 mm",
  },
  {
    nazev: "Výklopná a křídlová",
    popis:
      "Klasika pro starší garáže a řadovky. Vyměníme jedna ku jedné za stará vrata, včetně nového rámu a kování.",
    tag: "výměna za stará",
  },
  {
    nazev: "Průmyslová vrata a brány",
    popis:
      "Sekční průmyslová vrata, posuvné a křídlové brány, automatické závory. Pro bytové domy, firmy a areály v Praze a okolí.",
    tag: "firmy a SVJ",
  },
  {
    nazev: "Servis a prasklé pružiny",
    popis:
      "Prasklá pružina, vrata nejedou, ovladač mlčí? Servisujeme i vrata, která jsme nemontovali. Většinu závad opravíme na jeden výjezd.",
    tag: "i cizí značky",
  },
  {
    nazev: "Pohony a ovladače",
    popis:
      "Stropní pohony se záruk\u200bou 48 měsíců a čtyřkanálovým dálkovým ovladačem. Pohon dodáme i dodatečně k vašim stávajícím vratům.",
    tag: "záruka 48 měsíců",
  },
];

const kroky = [
  {
    krok: "Zaměření",
    text: "Přijedeme k vám, změříme otvor a doporučíme typ vrat, který do garáže opravdu patří. Zaměření a doprava do 50 km jsou zdarma.",
  },
  {
    krok: "Demontáž starých vrat",
    text: "Stará vrata sundáme, odvezeme a ekologicky zlikvidujeme. Zdarma — je to součást každé montáže, ne akce s hvězdičkou.",
  },
  {
    krok: "Montáž na klíč",
    text: "Nová vrata usadíme, zapojíme pohon, spárujeme ovladače a předvedeme nouzové odblokování. Odcházíme, až všechno jezdí.",
  },
  {
    krok: "Záruka a servis",
    text: "Na pohony dáváme záruku 48 měsíců. A až za pár let pružina doslouží, víte, komu zavolat — jsme pořád stejné číslo.",
  },
];

export default function Page() {
  return (
    <main className="vp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="topbar">
            <span className="wordmark">
              VRATA<span className="wm-slash">/</span>PRAHA
            </span>
            <a className="topbar-tel" href="tel:+420245008007">
              245 008 007
            </a>
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow">Garážová vrata · montáž a servis · Praha a okolí</p>
            <h1 className="hero-title">
              <span className="line line-1">Vrata, která</span>
              <span className="line line-2">každé ráno</span>
              <span className="line line-3">jen zvednete.</span>
            </h1>
            <p className="hero-sub">
              Sekční a rolovací garážová vrata na klíč. Stará vrata demontujeme a
              zlikvidujeme zdarma, nová dodáme do 5–7 týdnů — se zateplenými panely
              40&nbsp;mm a zárukou 48 měsíců na pohon.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420245008007">
                Zavolat 245 008 007
              </a>
              <a className="btn btn-ghost" href="mailto:info@garazova-vrata-praha.cz">
                Poslat nezávaznou poptávku
              </a>
            </div>
          </div>
        </div>

        {/* Signature: sekční vrata jako grafický prvek — lamely, které se "otevírají" */}
        <div className="door" aria-hidden="true">
          <div className="door-panel p1"><span className="door-label">panel 40 mm</span></div>
          <div className="door-panel p2"><span className="door-label">těsnění po obvodu</span></div>
          <div className="door-panel p3"><span className="door-label">stropní pohon</span></div>
          <div className="door-panel p4"><span className="door-label">záruka 48 měsíců</span></div>
          <div className="door-gap">
            <span className="door-gap-text">otevřeno za 12 vteřin</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Co u nás pořídíte</p>
          <h2 id="sluzby-h">
            Šest typů vrat.\u2028 Jedna montážní parta, která je zná všechny.
          </h2>
          <p className="section-lead">
            Neprodáváme katalog — doporučíme typ podle vaší garáže. Do řadovky na
            Proseku se hodí jiná vrata než do dvorku ve Vršovicích.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.nazev}>
              <div className="sluzba-rail" aria-hidden="true" />
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="sluzba-tag">{s.tag}</span>
            </article>
          ))}
        </div>
      </section>

      {/* ===== SEKCE 2: JAK TO PROBÍHÁ / DŮVĚRA ===== */}
      <section className="prubeh" aria-labelledby="prubeh-h">
        <div className="section-head section-head--light">
          <p className="section-eyebrow">Od zaměření k prvnímu zmáčknutí ovladače</p>
          <h2 id="prubeh-h">Jak vypadá výměna vrat s námi</h2>
          <p className="section-lead">
            Celé to trvá 5–7 týdnů od objednávky. Vy zvednete telefon, my zvedneme
            zbytek.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="krok-body">
                <h3>{k.krok}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <blockquote className="duvera-citace">
            <p>
              „Stará výklopná vrata drhla o rám patnáct let. Ve čtvrtek zaměřili, za
              šest týdnů montáž — a stará vrata si rovnou odvezli. Teď jen mačkám
              ovladač.“
            </p>
            <footer>— majitel řadové garáže, Praha 9</footer>
          </blockquote>
          <ul className="duvera-fakta">
            <li>
              <strong>48 měsíců</strong>
              <span>záruka na pohony vrat</span>
            </li>
            <li>
              <strong>0 Kč</strong>
              <span>demontáž a likvidace starých vrat</span>
            </li>
            <li>
              <strong>50 km</strong>
              <span>doprava a zaměření zdarma po Praze a okolí</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
