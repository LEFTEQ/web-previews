const kroky = [
  {
    n: "1",
    titul: "Analýza vaší situace",
    text: "Setkáme se u kávy a vy nám řeknete, co potřebujete. Nejde jen o prodej nemovitosti — jde i o životní situaci, která je s ním spojena. Podělíme se o zkušenosti z podobných případů a navrhneme, jak postupovat právě u vás.",
    vysledek: "Získáte přehled o své situaci a o možnostech, jak ji nejlépe řešit.",
  },
  {
    n: "2",
    titul: "Návrh řešení",
    text: "Vyhotovíme odhad ceny nemovitosti a navrhneme startovní prodejní cenu. Poradíme, jak nemovitost připravit, jak oslovit zájemce a jakou zvolit formu prezentace. Předem vás seznámíme s každým krokem, který bude následovat.",
    vysledek: "Budete vědět, jaký postup zvolit — a proč.",
  },
  {
    n: "3",
    titul: "Komplexní zajištění",
    text: "Zastoupíme vás ve všech fázích prodeje — od profesionálního nafocení a videa přes jednání se zájemci a právní servis až po asistenci při předání novému majiteli. Záda nám kryjí renomovaní advokáti, odhadci a finanční poradci.",
    vysledek: "Pro vás pohodlné, přitom máte o všem přehled a kontrolu.",
  },
];

const principy = [
  {
    nazev: "Důvěra",
    text: "Prodej nemovitosti je významný krok. Vyslechneme si vaši situaci, navrhneme nejlepší postup a vysvětlíme každý krok i jeho význam. Budete přesně vědět, co se děje a proč.",
  },
  {
    nazev: "Zodpovědnost",
    text: "Pracujeme, jako bychom prodávali nemovitost vlastní. Hlídáme postupy i termíny a máte jistotu, že pro váš případ děláme vše potřebné.",
  },
  {
    nazev: "Profesionalita",
    text: "Přístup, který jde dál, než je obvyklé. Zařídíme vše potřebné a efektivně vyřešíme případné komplikace. Jste v dobrých rukou — a je to znát.",
  },
];

const reference = [
  {
    text: "Doporučujeme!! S RK Hruška jsme provedli akci „kulový blesk“. Na jaře jsme začali hledat byt, jejich nabídka nás zaujala a byt jsme koupili — a zároveň díky nim prodali ten náš. Vše trvalo jen pár měsíců, i díky skvělé prezentaci bytu (nafocení, působivé video). Za nás 6 hvězdiček z 5.",
    jmeno: "Magda Vrbová",
    misto: "Ostrava-Zábřeh",
  },
  {
    text: "Tak a je hotovo. Rozhodli jsme se prodat naši nemovitost, oslovili RK Hruška a dotáhli to s nimi do zdárného konce. Velmi kladný a zároveň profesionální přístup nás mile potěšil. Děkuji paní Hruškové za perfektní realizaci — prezentaci i právní služby.",
    jmeno: "Marek Okonský",
    misto: "Pržno",
  },
];

export default function Page() {
  return (
    <main className="hr-page">
      {/* ===== HERO ===== */}
      <header className="hr-hero">
        <div className="hr-hero-inner">
          <div className="hr-brandline">
            <span className="hr-wordmark">
              Hruška<em>realitní</em>
            </span>
            <span className="hr-loc">Ostrava · od roku 2013</span>
          </div>

          <h1 className="hr-title">
            <span className="hr-title-row hr-t1">Prodejte</span>
            <span className="hr-title-row hr-t2">nemovitost</span>
            <span className="hr-title-row hr-t3">
              <span className="hr-klic" aria-hidden="true">
                {/* klíč — symbol předání nemovitosti */}
                <svg viewBox="0 0 120 40" role="presentation" focusable="false">
                  <circle cx="18" cy="20" r="11" fill="none" stroke="currentColor" strokeWidth="5" />
                  <line x1="29" y1="20" x2="112" y2="20" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <line x1="96" y1="20" x2="96" y2="31" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <line x1="108" y1="20" x2="108" y2="33" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="hr-klid">s&nbsp;klidem</span>
            </span>
          </h1>

          <p className="hr-lead">
            Osobní realitní kancelář pro Ostravu a okolí. Od odhadu ceny přes
            prezentaci až po předání klíčů — vše zařídíme za vás a vy máte celou
            dobu přehled a kontrolu.
          </p>

          <div className="hr-hero-cta">
            <a href="tel:+420654480261" className="hr-btn hr-btn-plna">
              Zavolat a probrat prodej
            </a>
            <a href="#jak-postupujeme" className="hr-btn hr-btn-linka">
              Jak postupujeme
            </a>
          </div>

          <ul className="hr-hero-fakta" aria-label="Základní fakta o kanceláři">
            <li>V realitách od roku 2013</li>
            <li>Právní servis advokátů v ceně</li>
            <li>Profi fotografie a video bytu</li>
          </ul>
        </div>

        {/* signature: půdorysná mřížka bytu — vizuální svět realit */}
        <div className="hr-pudorys" aria-hidden="true">
          <svg viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice" role="presentation" focusable="false">
            <g className="hr-pud-lines" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="20" y="20" width="360" height="480" />
              <line x1="20" y1="200" x2="230" y2="200" />
              <line x1="230" y1="20" x2="230" y2="320" />
              <line x1="120" y1="200" x2="120" y2="500" />
              <line x1="120" y1="320" x2="380" y2="320" />
              <line x1="280" y1="320" x2="280" y2="500" />
              {/* dveře — čtvrtkruhy */}
              <path d="M 230 240 A 40 40 0 0 1 190 200" />
              <path d="M 120 360 A 40 40 0 0 1 160 320" />
              <path d="M 320 320 A 40 40 0 0 1 280 360" />
            </g>
            <g className="hr-pud-labels" fill="currentColor">
              <text x="52" y="116">obývací pokoj</text>
              <text x="262" y="116">ložnice</text>
              <text x="44" y="420">kuchyň</text>
              <text x="162" y="420">koupelna</text>
              <text x="306" y="420">hala</text>
            </g>
            <circle className="hr-pud-bod" cx="230" cy="200" r="6" fill="currentColor" />
          </svg>
        </div>
      </header>

      {/* ===== SEKCE 1: JAK POSTUPUJEME ===== */}
      <section className="hr-sekce hr-postup" id="jak-postupujeme" aria-labelledby="postup-h">
        <div className="hr-sekce-inner">
          <p className="hr-eyebrow">Prodej krok za krokem</p>
          <h2 id="postup-h" className="hr-h2">
            Tři kroky od první kávy k&nbsp;předání klíčů
          </h2>

          <ol className="hr-kroky">
            {kroky.map((k) => (
              <li key={k.n} className="hr-krok">
                <span className="hr-krok-cislo" aria-hidden="true">
                  {k.n}
                </span>
                <div className="hr-krok-obsah">
                  <h3>{k.titul}</h3>
                  <p>{k.text}</p>
                  <p className="hr-krok-vysledek">
                    <strong>Co z toho máte:</strong> {k.vysledek}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="hr-principy" role="list" aria-label="Na čem stavíme">
            {principy.map((p) => (
              <div key={p.nazev} className="hr-princip" role="listitem">
                <h3>{p.nazev}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: KDO JSEM + REFERENCE ===== */}
      <section className="hr-sekce hr-duvera" aria-labelledby="duvera-h">
        <div className="hr-sekce-inner">
          <div className="hr-duvera-grid">
            <div className="hr-kdo">
              <p className="hr-eyebrow hr-eyebrow-svetly">Kdo za tím stojí</p>
              <h2 id="duvera-h" className="hr-h2 hr-h2-svetly">
                Ing. Tomáš Hruška
              </h2>
              <p>
                V realitách jsem začal v roce 2013 ve společnosti BytyJih. Nic mi
                nedalo víc než praxe — viděl jsem spoustu případů a řešil
                komplikace, jaké jsem si dřív ani nedovedl představit. Vždy jsme si
                s nimi poradili a posunulo nás to dál.
              </p>
              <blockquote className="hr-citat">
                „Když se na mě obrátíte, mé zkušenosti budou pracovat i pro vás.“
              </blockquote>
              <p className="hr-kdo-pozn">
                Realitní kancelář Hruška, Hlubočická 812/5, Ostrava. Působíme v
                Ostravě a širokém okolí — od Zábřehu po Pržno.
              </p>
            </div>

            <div className="hr-reference">
              <p className="hr-eyebrow hr-eyebrow-svetly">Napsali o nás klienti</p>
              {reference.map((r) => (
                <figure key={r.jmeno} className="hr-ref">
                  <blockquote>
                    <p>{r.text}</p>
                  </blockquote>
                  <figcaption>
                    <strong>{r.jmeno}</strong>
                    <span>{r.misto}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
