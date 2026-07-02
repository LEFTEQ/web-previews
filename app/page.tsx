// Hutník s.r.o. — železářství a spojovací materiál, Praha
// Návrh: typografické hero postavené na závitu (thread pitch) jako signature prvku.
// Design: ocel + signální oranž ochranných nátěrů, technický ceníkový rejstřík.

const sortiment = [
  { kod: "DIN 933", nazev: "Šrouby", popis: "Šestihranné, imbusové i vratové. Metrické závity M3–M30, pevnostní třídy 4.8 až 10.9, pozink i nerez A2." },
  { kod: "DIN 934", nazev: "Matice", popis: "Šestihranné, pojistné, křídlové, klobouková provedení. Ke každému šroubu doporučíme správnou matici a podložku." },
  { kod: "DIN 125", nazev: "Podložky", popis: "Ploché, pérové, vějířové, karosářské. Prodáváme na kusy i po baleních — vezmete si přesně tolik, kolik potřebujete." },
  { kod: "DIN 7998", nazev: "Vruty", popis: "Do dřeva, do sádrokartonu, terasové, tesařské. Torx i křížová drážka, délky od 12 do 400 mm." },
  { kod: "ETA", nazev: "Hmoždinky a kotvy", popis: "Kotevní technika do betonu, cihly i dutých materiálů. Chemické kotvy, ocelové kotvy, rámové hmoždinky." },
  { kod: "DIN 7337", nazev: "Nýty a hřebíky", popis: "Trhací nýty, nýtovací matice, stavební a kolářské hřebíky. Plus tyče, mosaz, tesařské kování, vrtáky a kotouče." },
];

const duvody = [
  {
    cislo: "1994",
    titulek: "Třicet let u pultu",
    text: "Spojovací materiál prodáváme od roku 1994. Za tu dobu jsme poradili tisícům řemeslníků i kutilů — víme, který vrut drží v porobetonu a která kotva unese vaši markýzu.",
  },
  {
    cislo: "12 000+",
    titulek: "Položek skladem v Praze",
    text: "Velkoobchod i maloobchod pod jednou střechou. Nakupujeme od tuzemských výrobců a přímým dovozem od prověřených dodavatelů — bez překupníků, za rozumné ceny.",
  },
  {
    cislo: "1 ks",
    titulek: "Prodáme i jeden šroub",
    text: "Nemusíte kupovat balení po stovce. Přijďte s ulomeným šroubem v kapse — najdeme přesně stejný, změříme závit a poradíme, čím ho nahradit, když už se nevyrábí.",
  },
];

export default function Page() {
  return (
    <main className="ht">
      {/* ========== HERO ========== */}
      <header className="hero">
        <nav className="hero-top" aria-label="Hlavní">
          <span className="wordmark">
            HUTNÍK<span className="wordmark-sro">s.r.o.</span>
          </span>
          <span className="hero-top-note">Železářství · Praha</span>
        </nav>

        <div className="hero-body">
          <p className="hero-eyebrow">Spojovací materiál a kotevní technika — od roku 1994</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Šroub,</span>
            <span className="hero-line hero-line-2">matice,</span>
            <span className="hero-line hero-line-3">
              <em>drží.</em>
            </span>
          </h1>
          <p className="hero-sub">
            Pražské železářství, kde vám k šroubu vždycky najdeme správnou matici.
            Přes 12&nbsp;000 položek skladem — na kusy i po baleních, pro firmy i&nbsp;kutily.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#sortiment">
              Projít sortiment
            </a>
            <a className="btn btn-ghost" href="#o-nas">
              Proč k nám
            </a>
          </div>
        </div>

        {/* Signature: profil metrického závitu jako grafický horizont hera */}
        <div className="thread" aria-hidden="true">
          <svg
            className="thread-svg"
            viewBox="0 0 1200 90"
            preserveAspectRatio="none"
            role="presentation"
          >
            <path
              className="thread-path"
              d="M0,90 L0,55 L20,15 L40,55 L60,15 L80,55 L100,15 L120,55 L140,15 L160,55 L180,15 L200,55 L220,15 L240,55 L260,15 L280,55 L300,15 L320,55 L340,15 L360,55 L380,15 L400,55 L420,15 L440,55 L460,15 L480,55 L500,15 L520,55 L540,15 L560,55 L580,15 L600,55 L620,15 L640,55 L660,15 L680,55 L700,15 L720,55 L740,15 L760,55 L780,15 L800,55 L820,15 L840,55 L860,15 L880,55 L900,15 L920,55 L940,15 L960,55 L980,15 L1000,55 L1020,15 L1040,55 L1060,15 L1080,55 L1100,15 L1120,55 L1140,15 L1160,55 L1180,15 L1200,55 L1200,90 Z"
            />
          </svg>
          <div className="thread-label">
            <span>M12 × 1,75 — metrický závit, hrubá rozteč</span>
          </div>
        </div>
      </header>

      {/* ========== SORTIMENT ========== */}
      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="section-head">
          <h2 id="sortiment-h">Co u nás najdete</h2>
          <p className="section-lead">
            Sortiment řadíme podle norem DIN — stejně jako ho máme v regálech.
            Když nevíte přesné označení, stačí přinést vzorek, změříme ho posuvkou.
          </p>
        </div>

        <ul className="katalog" role="list">
          {sortiment.map((p) => (
            <li className="katalog-item" key={p.kod}>
              <span className="katalog-kod">{p.kod}</span>
              <div className="katalog-text">
                <h3>{p.nazev}</h3>
                <p>{p.popis}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="sortiment-note">
          Velkoobchodní odběratelé: ceník a množstevní slevy připravíme na míru podle
          odebíraného objemu. Zboží držíme skladem, běžné položky vydáváme na počkání.
        </p>
      </section>

      {/* ========== O NÁS / DŮVĚRA ========== */}
      <section className="onas" id="o-nas" aria-labelledby="onas-h">
        <div className="section-head section-head-inverse">
          <h2 id="onas-h">Železářství postaru — v&nbsp;dobrém slova smyslu</h2>
          <p className="section-lead">
            Žádný samoobslužný regál, kde hledáte sami. U&nbsp;pultu stojí lidé,
            kteří spojovací materiál prodávají desítky let a&nbsp;poradí vám dřív,
            než koupíte něco, co nebude držet.
          </p>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <article className="duvod" key={d.titulek}>
              <span className="duvod-cislo">{d.cislo}</span>
              <h3>{d.titulek}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <figure className="citace">
          <blockquote>
            „Přinesl jsem zrezlý šroub z třicet let starého kování. Prodavač ho vzal,
            změřil, zmizel mezi regály a&nbsp;za dvě minuty přinesl přesně ten samý.
            Za tři koruny. Tohle v&nbsp;hobbymarketu nezažijete.“
          </blockquote>
          <figcaption>— stálý zákazník, truhlář z&nbsp;Prahy</figcaption>
        </figure>
      </section>
    </main>
  );
}
