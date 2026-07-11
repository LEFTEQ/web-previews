import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interma BYTY správa — správa nemovitostí v Liberci",
  description:
    "Největší správce bytového fondu v Libereckém regionu. Spravujeme 4 628 bytových jednotek pro 98 družstev a společenství vlastníků od roku 1996.",
  openGraph: {
    title: "Interma BYTY správa — správa nemovitostí v Liberci",
    description:
      "Účetnictví, technická správa i vlastní systém INTEGRI pod jednou střechou. 4 628 bytů, 98 klientů, 13 měst.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Bytové domy ve správě Interma BYTY správa" }],
  },
};

const kpi = [
  { num: "4 628", label: "spravovaných bytů", note: "bytových jednotek v denní správě" },
  { num: "98", label: "družstev a SVJ", note: "společenství vlastníků a bytových družstev" },
  { num: "13", label: "měst v ČR", note: "od Liberce po celou republiku" },
  { num: "1996", label: "rok založení", note: "správu domů děláme téměř 30 let" },
];

const sluzby = [
  {
    kod: "ÚČ",
    nazev: "Účetnictví a vyúčtování",
    text:
      "Vedeme účetnictví pro SVJ, bytová družstva i nájemní byty — často všechny tři formy vlastnictví v jednom domě. Roční vyúčtování záloh na teplo, vodu a služby zvládneme přesně a včas.",
  },
  {
    kod: "TS",
    nazev: "Technická správa domů",
    text:
      "Revize, opravy, dispečink a řešení havárií. Pružně reagujeme na individuální požadavky každého domu — od výtahů přes rozvody až po společné prostory.",
  },
  {
    kod: "IN",
    nazev: "Systém INTEGRI + portál G5i",
    text:
      "Na vývoji vlastního softwaru INTEGRI jsme se přímo podíleli. Výbor i jednotliví vlastníci vidí svá data online — přes počítač i v mobilní aplikaci G5i mobile zdarma.",
  },
  {
    kod: "DR",
    nazev: "Zakládání a správa družstev",
    text:
      "Průkopníci developerských bytových družstev od roku 1998. Dnes vedeme 27 družstev postavených s dotací Státního fondu rozvoje bydlení — od založení až po dnešek.",
  },
];

export default function Page() {
  return (
    <main className="ib">
      <header className="ib-top">
        <a className="ib-wordmark" href="#" aria-label="Interma BYTY správa, domů">
          <span className="ib-wm-1">Interma</span>
          <span className="ib-wm-2">BYTY</span>
          <span className="ib-wm-3">správa</span>
        </a>
        <nav className="ib-nav" aria-label="Hlavní">
          <a href="#sluzby">Co pro vás děláme</a>
          <a href="#o-nas">O správě</a>
          <a className="ib-nav-cta" href="tel:+420463311111">Zavolat na dispečink</a>
        </nav>
      </header>

      <section className="ib-hero">
        <div className="ib-hero-copy">
          <p className="ib-eyebrow">Správa nemovitostí · Liberec · od roku 1996</p>
          <h1 className="ib-h1">
            Váš dům je náš<br />
            <span className="ib-h1-accent">každodenní úkol.</span>
          </h1>
          <p className="ib-lede">
            Jsme největší správce bytového fondu v regionu. Účetnictví, technickou
            správu i vlastní systém INTEGRI držíme pod jednou střechou v Liberci —
            aby výbor SVJ i každý vlastník věděl, co se v domě děje.
          </p>
          <div className="ib-hero-actions">
            <a className="ib-btn" href="#sluzby">Co pro vás zařídíme</a>
            <a className="ib-btn-ghost" href="tel:+420463311111">Dispečink 463 311 111</a>
          </div>
        </div>
        <figure className="ib-hero-media">
          <img
            src="/hero.webp"
            alt="Bytové domy v Liberci ve správě Interma BYTY správa"
            width={1200}
            height={1400}
            className="ib-hero-img"
          />
          <figcaption className="ib-hero-tag">
            <span>4&nbsp;628 bytů</span> v denní správě
          </figcaption>
        </figure>
      </section>

      <section className="ib-kpi" aria-label="Správa v číslech">
        <dl className="ib-kpi-grid">
          {kpi.map((k) => (
            <div className="ib-kpi-cell" key={k.label}>
              <dt className="ib-kpi-num">{k.num}</dt>
              <dd className="ib-kpi-label">{k.label}</dd>
              <dd className="ib-kpi-note">{k.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="ib-sluzby" id="sluzby">
        <div className="ib-sec-head">
          <p className="ib-eyebrow">Čtyři věci, které od správce chcete</p>
          <h2 className="ib-h2">Co pro váš dům reálně děláme</h2>
        </div>
        <div className="ib-sluzby-layout">
          <ul className="ib-sluzby-list">
            {sluzby.map((s) => (
              <li className="ib-sluzba" key={s.kod}>
                <span className="ib-sluzba-kod" aria-hidden="true">{s.kod}</span>
                <div className="ib-sluzba-body">
                  <h3 className="ib-sluzba-nazev">{s.nazev}</h3>
                  <p className="ib-sluzba-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="ib-sluzby-media">
            <img
              src="/section-1.webp"
              alt="Klientský portál a technická dokumentace ke správě domu"
              width={800}
              height={1000}
              className="ib-media-img"
            />
            <p className="ib-media-cap">
              Data „svého“ domu vidíte online — v prohlížeči i v aplikaci
              G5i&nbsp;mobile ke stažení zdarma.
            </p>
          </div>
        </div>
      </section>

      <section className="ib-onas" id="o-nas">
        <div className="ib-onas-media">
          <img
            src="/section-2.webp"
            alt="Kancelář správy nemovitostí Interma BYTY správa v Liberci"
            width={800}
            height={900}
            className="ib-media-img"
          />
        </div>
        <div className="ib-onas-copy">
          <p className="ib-eyebrow">O nás · proč nám klienti zůstávají</p>
          <h2 className="ib-h2">Skoro 30 let vedeme domy v regionu</h2>
          <p className="ib-onas-lede">
            Správa nemovitostí vznikla v roce 1996 jako středisko libereckého
            INTERMA, a.s. a od roku 2013 stojí na vlastních nohou. Dnes je z ní
            největší regionální správce majetku bytových družstev, kterým byla
            poskytnuta dotace ze Státního fondu rozvoje bydlení.
          </p>
          <ul className="ib-facts">
            <li>
              <strong>Nejsložitější domy zvládneme.</strong> V jednom společenství
              vedeme účetnictví pro SVJ, družstvo i nájemní byty zároveň — každou
              formu vlastnictví podle jejích vlastních pravidel.
            </li>
            <li>
              <strong>Pojištěná odpovědnost 1 mil. Kč.</strong> Za svou práci ručíme;
              máte jistotu, že případná chyba správce nezůstane na vás.
            </li>
            <li>
              <strong>Vlastní systém INTEGRI.</strong> Technická správa propojená
              přímo s účetnictvím a vyúčtováním záloh — bez papírového chaosu mezi
              odděleními.
            </li>
          </ul>
          <p className="ib-onas-loc">
            Kancelář a dispečink najdete v Liberci. Zastihnete nás na
            {" "}
            <a href="mailto:sbf@interma-byty.cz">sbf@interma-byty.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
