const sluzby = [
  {
    kod: "BYT",
    nazev: "Stěhování bytů a domů",
    popis:
      "Od garsonky na Dukle po rodinný dům ve Svítkově. Nábytek rozebereme, zabalíme do dek a fólií a u vás znovu složíme. Nic netaháme po schodech nadivoko.",
    detail: "vč. demontáže a montáže nábytku",
  },
  {
    kod: "FIR",
    nazev: "Stěhování firem a kanceláří",
    popis:
      "Kancelář přestěhujeme přes víkend, ať v pondělí sedíte u svých stolů. Techniku a dokumenty vezeme označené po místnostech — krabice K-12 skončí přesně tam, kam patří.",
    detail: "o víkendu i po pracovní době",
  },
  {
    kod: "TĚŽ",
    nazev: "Těžká břemena",
    popis:
      "Klavír, trezor, akvárium, dílenský stroj. Na těžké kusy máme popruhy, rudl se šplhacími koly na schody a hlavně chlapy, kteří to dělají roky.",
    detail: "pianina, trezory, stroje",
  },
  {
    kod: "VYK",
    nazev: "Vyklízení a odvoz",
    popis:
      "Sklep, půdu nebo byt po babičce vyklidíme do posledního šuplíku. Co jde, odvezeme do sběrného dvora nebo na charitu — vy jen odemknete a zamknete.",
    detail: "vč. ekologické likvidace",
  },
];

const kroky = [
  {
    cislo: "1",
    titul: "Zavoláte nebo napíšete",
    text: "Řeknete nám odkud, kam a co se stěhuje. Do 24 hodin máte cenu — pevnou, ne odhad, který se pak nafoukne.",
  },
  {
    cislo: "2",
    titul: "Přijedeme a zabalíme",
    text: "Dorazíme na minutu přesně s dekami, fóliemi a krabicemi. Křehké věci balíme my, vy nemusíte nic chystat.",
  },
  {
    cislo: "3",
    titul: "Složíme a uklidíme",
    text: "Na nové adrese vše vyneseme, smontujeme nábytek a odvezeme obalový materiál. Odjíždíme, až když jste spokojení.",
  },
];

const reference = [
  {
    text:
      "Stěhovali nám třípokojový byt z Polabin do Rosic. Dva chlapi, tři hodiny, ani škrábanec na nové podlaze. Pianino vzali jako pírko.",
    autor: "Marie K., Pardubice-Polabiny",
  },
  {
    text:
      "Firmu jsme stěhovali v sobotu, v pondělí ráno všechno fungovalo. Krabice byly popsané po místnostech, nemuseli jsme nic hledat.",
    autor: "Petr H., účetní kancelář, Zelené Předměstí",
  },
  {
    text:
      "Vyklízeli byt po dědečkovi. Ohleduplní, rychlí a férová cena přesně podle domluvy. Doporučuju každému v Pardubicích.",
    autor: "Jana S., Pardubičky",
  },
];

export default function Page() {
  return (
    <main className="hanc">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-topbar">
          <span className="wordmark">
            STĚHOVÁNÍ<b>HANČ</b>
          </span>
          <a className="topbar-tel" href="tel:+420777000000">
            Zavolat: 777 000 000
          </a>
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">Stěhovací služba · Pardubice a okolí</p>

          <h1 className="hero-title" aria-label="Odvezeme to. Celý byt, celou firmu, celý život v krabicích.">
            <span className="hero-line l1">ODVEZEME&nbsp;TO.</span>
            <span className="hero-line l2">Celý byt, celou firmu,</span>
            <span className="hero-line l3">celý život v krabicích.</span>
          </h1>

          {/* Signature: pás "přepravních dek" – šrafovaný pruh jako stěhovací deka s popruhem */}
          <div className="deka-pas" aria-hidden="true">
            <div className="deka"></div>
            <div className="popruh">
              <span>PARDUBICE → KAMKOLIV</span>
              <span>KŘEHKÉ — TOUTO STRANOU NAHORU</span>
              <span>PARDUBICE → KAMKOLIV</span>
            </div>
          </div>

          <p className="hero-sub">
            Rodinná stěhovací parta z Pardubic. Přijedeme na minutu, zabalíme do
            dek, vyneseme, převezeme a složíme. Cenu řekneme předem — a platí.
          </p>

          <div className="hero-cta">
            <a className="btn btn-plna" href="tel:+420777000000">
              Zavolat hned
            </a>
            <a className="btn btn-obrys" href="mailto:info@stehovani-hanc.cz">
              Poslat poptávku e-mailem
            </a>
          </div>

          <ul className="hero-fakta">
            <li>
              <strong>Pevná cena</strong>
              <span>do 24 hodin od poptávky</span>
            </li>
            <li>
              <strong>Pojištění nákladu</strong>
              <span>až do 1&nbsp;000&nbsp;000&nbsp;Kč</span>
            </li>
            <li>
              <strong>7 dní v týdnu</strong>
              <span>i víkendy a svátky</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h">
            Každá krabice má svůj štítek.
            <br />
            Každá služba svou cenu předem.
          </h2>
        </div>

        <div className="krabice-mrizka">
          {sluzby.map((s) => (
            <article className="krabice" key={s.kod}>
              <div className="krabice-stitek">
                <span className="stitek-kod">{s.kod}</span>
                <span className="stitek-sipky" aria-hidden="true">
                  ▲▲
                </span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="krabice-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <div className="kroky">
          <h3 className="kroky-titul">Jak stěhování s Hančem probíhá</h3>
          <ol className="kroky-seznam">
            {kroky.map((k) => (
              <li key={k.cislo}>
                <span className="krok-cislo" aria-hidden="true">
                  {k.cislo}
                </span>
                <div>
                  <strong>{k.titul}</strong>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava-svetla">
          <p className="sekce-eyebrow">Kdo za tím stojí</p>
          <h2 id="duvera-h">
            V Pardubicích nás potkáte skoro každý den.
          </h2>
          <p className="duvera-uvod">
            Stěhování Hanč je rodinná parta z Pardubic. Známe tady každý
            panelák v Polabinách, úzké schodiště na Zeleném Předměstí i
            zákaz vjezdu u Pernštýnského náměstí. Proto umíme říct cenu
            dopředu — a dodržet ji.
          </p>
        </div>

        <div className="reference-mrizka">
          {reference.map((r) => (
            <figure className="reference" key={r.autor}>
              <blockquote>
                <p>„{r.text}“</p>
              </blockquote>
              <figcaption>{r.autor}</figcaption>
            </figure>
          ))}
        </div>

        <dl className="duvera-cisla">
          <div>
            <dt>Odstěhovaných domácností ročně</dt>
            <dd>300+</dd>
          </div>
          <div>
            <dt>Průměrné hodnocení zákazníků</dt>
            <dd>4,9 / 5</dd>
          </div>
          <div>
            <dt>Vlastní dodávky a skříňové vozy</dt>
            <dd>4</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
