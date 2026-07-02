// Bauer Česká spedice s.r.o. — autodoprava, Ústí nad Labem
// Návrhový koncept: „Ložná plocha" — celý web je postavený na vizuálním jazyku
// nákladní dopravy: reflexní šrafování (výstražné pruhy z korby), plachtovina,
// dopravní značení a tachograf. Signature prvek: diagonální reflexní pruh,
// který protíná hero jako plachta kamionu.

const sluzby = [
  {
    kod: "FTL",
    nazev: "Celovozové přepravy",
    popis:
      "Celý kamion jen pro váš náklad. Plachtové návěsy do 24 tun, přímá jízda bez překládek — z rampy na rampu po celé ČR a Německu.",
    detail: "do 24 t / 13,6 m ložné plochy",
  },
  {
    kod: "LTL",
    nazev: "Dokládky a sběrná služba",
    popis:
      "Nemáte na celý vůz? Vezeme vaše palety společně s dalším zbožím. Platíte jen za místo, které skutečně zaberete.",
    detail: "od 1 palety, svoz z Ústecka denně",
  },
  {
    kod: "EXP",
    nazev: "Expresní přepravy",
    popis:
      "Stojí vám linka kvůli chybějícímu dílu? Dodávka nebo solo vůz vyjíždí do 90 minut od objednávky, jede přímo a bez zastávek.",
    detail: "výjezd do 90 minut, 24/7",
  },
  {
    kod: "D–CZ",
    nazev: "Linka Německo — Čechy",
    popis:
      "Z Ústí je to na hranici 25 kilometrů — jezdíme je denně. Pravidelné relace Drážďany, Lipsko, Berlín a zpět, celně odbaveno.",
    detail: "pravidelné relace, česky i německy",
  },
];

const duvody = [
  {
    cislo: "25 km",
    text: "na německou hranici. Sídlíme v Ústí nad Labem, přímo na tahu E442 — do Drážďan jsme dřív, než jinde naloží.",
  },
  {
    cislo: "90 min",
    text: "od vašeho telefonátu k výjezdu expresního vozu. Dispečink bere telefon i v noci a o víkendu.",
  },
  {
    cislo: "0 překládek",
    text: "u celovozových přeprav. Zboží naložíme u vás a vyložíme u příjemce — nikdo další se ho nedotkne.",
  },
];

const reference = [
  {
    citace:
      "Vozí nám palety do Saska třikrát týdně už čtvrtým rokem. Dispečer ví, co vezeme, ještě než zavoláme.",
    kdo: "vedoucí expedice, strojírenská výroba, Ústí nad Labem",
  },
  {
    citace:
      "V pátek v 16:40 nám stála linka kvůli dílu z Chomutova. V 18:10 byl u nás na rampě. Tohle si pamatujete.",
    kdo: "mistr výroby, automotive, Teplice",
  },
];

export default function Page() {
  return (
    <main className="bs">
      {/* ===== HERO ===== */}
      <header className="bs-hero">
        <div className="bs-hero-top">
          <div className="bs-wordmark" aria-label="Bauer Česká spedice">
            <span className="bs-wordmark-bauer">BAUER</span>
            <span className="bs-wordmark-sub">česká spedice · Ústí n. L.</span>
          </div>
          <a className="bs-hero-call" href="tel:+420475200100">
            <span className="bs-hero-call-label">Dispečink 24/7</span>
            <span className="bs-hero-call-num">+420 475 200 100</span>
          </a>
        </div>

        <div className="bs-hero-body">
          <p className="bs-hero-eyebrow">Autodoprava · palety · Čechy ⇄ Německo</p>
          <h1 className="bs-hero-title">
            <span className="bs-hero-line bs-hero-line-1">Naložíme</span>
            <span className="bs-hero-line bs-hero-line-2">v&nbsp;Ústí,</span>
            <span className="bs-hero-line bs-hero-line-3">
              vyložíme <em>kdekoli.</em>
            </span>
          </h1>
          <p className="bs-hero-lead">
            Vlastní plachtové soupravy do 24 tun, dispečink, který bere telefon,
            a hranice s Německem 25 kilometrů od naší rampy. Přepravy po ČR a do
            Německa — celovozové, dokládky i expres.
          </p>
          <div className="bs-hero-actions">
            <a className="bs-btn bs-btn-primary" href="tel:+420475200100">
              Zavolat dispečink
            </a>
            <a className="bs-btn bs-btn-ghost" href="mailto:doprava@bauer-spedice.cz">
              Poptat přepravu e-mailem
            </a>
          </div>
        </div>

        {/* signature: reflexní výstražný pruh — jako zadní čelo návěsu */}
        <div className="bs-chevrons" aria-hidden="true">
          <div className="bs-chevrons-inner" />
        </div>

        <div className="bs-hero-strip" aria-hidden="true">
          <span>E442</span>
          <span>·</span>
          <span>D8</span>
          <span>·</span>
          <span>A17 Dresden</span>
          <span>·</span>
          <span>13,6 m</span>
          <span>·</span>
          <span>24 t</span>
          <span>·</span>
          <span>33 palet</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="bs-sluzby" aria-labelledby="sluzby-h">
        <div className="bs-section-head">
          <h2 id="sluzby-h">Co vozíme a jak</h2>
          <p>
            Čtyři způsoby, jak dostat vaše zboží na místo. Řekněte dispečerovi,
            co a kam vezete — poradí ten nejlevnější, který stihne váš termín.
          </p>
        </div>
        <div className="bs-sluzby-grid">
          {sluzby.map((s) => (
            <article className="bs-karta" key={s.kod}>
              <div className="bs-karta-kod" aria-hidden="true">
                {s.kod}
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="bs-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="bs-duvera" aria-labelledby="duvera-h">
        <div className="bs-section-head bs-section-head-inverse">
          <h2 id="duvera-h">Proč firmy z Ústecka vozí s námi</h2>
          <p>
            Rodinná dopravní firma z Ústí nad Labem. Žádné call centrum — u
            telefonu sedí dispečer, který zná řidiče jménem i vaši rampu.
          </p>
        </div>

        <div className="bs-duvody">
          {duvody.map((d) => (
            <div className="bs-duvod" key={d.cislo}>
              <div className="bs-duvod-cislo">{d.cislo}</div>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <div className="bs-reference">
          {reference.map((r) => (
            <figure className="bs-citace" key={r.kdo}>
              <blockquote>
                <p>„{r.citace}"</p>
              </blockquote>
              <figcaption>— {r.kdo}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
