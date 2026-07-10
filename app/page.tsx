import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hörmann Praha — sekční garážová vrata na míru | montáž a servis",
  description:
    "Sekční, boční i rolovací garážová vrata Hörmann pro Prahu a okolí. Zaměření zdarma, montáž do 4 týdnů, záruční i pozáruční servis. Poptejte nezávaznou cenu.",
};

const lamely = [
  { mm: "42", popis: "tloušťka lamely" },
  { mm: "U 1,0", popis: "tepelná izolace W/m²K" },
  { mm: "0 cm", popis: "místo nad vraty pro strop" },
];

const vrata = [
  {
    cislo: "01",
    nazev: "Sekční vrata LPU 42",
    tag: "nejžádanější",
    text:
      "Dvojitá ocelová stěna s 42mm izolací. Vyjíždějí svisle pod strop, takže před garáží i za vraty zůstane místo k parkování. Deset povrchů, od hladké až po dřevěnou strukturu Decograin.",
    parametr: "na míru do šířky 500 cm",
  },
  {
    cislo: "02",
    nazev: "Rolovací vrata RollMatic",
    tag: "do nízké garáže",
    text:
      "Lamely se navíjejí do schránky nad otvorem — nezabírají strop ani boční stěny. Ideální řešení pro garáže s krátkým stropem, šikmým stropem nebo nízkým podhledem.",
    parametr: "nadstavba jen 30–41 cm",
  },
  {
    cislo: "03",
    nazev: "Boční sekční vrata",
    tag: "strop volný",
    text:
      "Vrata pojíždějí do strany podél zdi, strop garáže tak zůstane úplně volný pro úložné regály nebo světlo. Otevřete jen kus vrat, kolik potřebujete projít.",
    parametr: "parkovací poloha u zdi",
  },
  {
    cislo: "04",
    nazev: "Pohon ProMatic / SupraMatic",
    tag: "chytré ovládání",
    text:
      "Vrata otevřete z auta jedním tlačítkem, nebo z mobilu přes BiSecur. Automatické zajištění proti nadzvednutí a měkký dojezd, aby to netlouplo. Osvětlení garáže na dvě minuty po příjezdu.",
    parametr: "ovládání z auta i z telefonu",
  },
];

const kroky = [
  {
    k: "Zaměření u vás",
    d: "Přijedeme do vaší garáže v Praze i okolí, změříme otvor a poradíme, jaký typ vrat se do stavby vejde. Zdarma a nezávazně.",
  },
  {
    k: "Cenová nabídka do 3 dnů",
    d: "Dostanete jasnou nabídku s cenou vrat, pohonu i montáže. Bez skrytých položek — víte přesně, za co platíte.",
  },
  {
    k: "Montáž do 4 týdnů",
    d: "Vrata vyrobí Hörmann v Německu, my je odborně namontujeme za jeden den a starou konstrukci odvezeme.",
  },
  {
    k: "Servis, když bude třeba",
    d: "Seřízení, výměna pružin i pohonu. Na díly Hörmann máme přístup i po letech, protože se vyrábějí pro generace.",
  },
];

export default function Page() {
  return (
    <main className="hp">
      <header className="hp-topbar">
        <a className="hp-wordmark" href="#" aria-label="Hörmann Praha, úvod">
          <span className="hp-wordmark-name">HÖRMANN</span>
          <span className="hp-wordmark-city">PRAHA</span>
        </a>
        <a className="hp-topcta" href="tel:+420800100200">
          <span className="hp-topcta-label">Zavolat</span>
          <span className="hp-topcta-num">800 100 200</span>
        </a>
      </header>

      <section className="hp-hero" aria-labelledby="hero-nadpis">
        <div className="hp-hero-media">
          <img
            src="/hero.webp"
            alt="Sekční garážová vrata Hörmann otevřená svisle pod strop u rodinného domu"
            className="hp-hero-img"
            width={1600}
            height={1100}
          />
        </div>

        <div className="hp-hero-body">
          <p className="hp-eyebrow">Garážová vrata na míru · Praha a Středočeský kraj</p>
          <h1 id="hero-nadpis" className="hp-h1">
            Vrata, která vyjedou
            <span className="hp-h1-accent">nahoru pod strop</span>
            a nechají vám místo.
          </h1>
          <p className="hp-lede">
            Sekční vrata Hörmann se zvednou svisle — před garáží i za vraty tak
            můžete zaparkovat auto. Zaměříme, vyrobíme a namontujeme přesně na
            váš otvor. Řezaně a bez příplatku za CO₂.
          </p>
          <div className="hp-hero-actions">
            <a className="hp-btn hp-btn-primary" href="#poptavka">
              Chci cenu vrat
            </a>
            <a className="hp-btn hp-btn-ghost" href="#vrata">
              Prohlédnout typy vrat
            </a>
          </div>

          <dl className="hp-specs" aria-label="Klíčové parametry sekčních vrat">
            {lamely.map((s) => (
              <div className="hp-spec" key={s.mm}>
                <dt className="hp-spec-num">{s.mm}</dt>
                <dd className="hp-spec-label">{s.popis}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hp-hero-strip" aria-hidden="true">
          <span>ZAMĚŘENÍ ZDARMA</span>
          <span className="hp-dot">·</span>
          <span>MONTÁŽ DO 4 TÝDNŮ</span>
          <span className="hp-dot">·</span>
          <span>VÝROBCE Č.1 V EVROPĚ</span>
          <span className="hp-dot">·</span>
          <span>ZÁRUKA I SERVIS</span>
        </div>
      </section>

      <section className="hp-vrata" id="vrata" aria-labelledby="vrata-nadpis">
        <div className="hp-section-head">
          <p className="hp-eyebrow hp-eyebrow-dark">Nabídka · vyberte podle garáže</p>
          <h2 id="vrata-nadpis" className="hp-h2">
            Čtyři řešení. Vybírá se podle toho, kolik má garáž místa.
          </h2>
        </div>

        <div className="hp-vrata-grid">
          {vrata.map((v) => (
            <article className="hp-card" key={v.cislo}>
              <div className="hp-card-top">
                <span className="hp-card-num">{v.cislo}</span>
                <span className="hp-card-tag">{v.tag}</span>
              </div>
              <h3 className="hp-card-name">{v.nazev}</h3>
              <p className="hp-card-text">{v.text}</p>
              <p className="hp-card-param">{v.parametr}</p>
            </article>
          ))}
        </div>

        <figure className="hp-vrata-figure">
          <img
            src="/section-1.webp"
            alt="Detail povrchu a lamel sekčních garážových vrat Hörmann"
            className="hp-fig-img"
            width={1400}
            height={900}
          />
          <figcaption className="hp-fig-cap">
            Povrch si vyberete z deseti odstínů — od hladké bílé po dřevěnou
            strukturu Decograin. Barvu sladíme s fasádou i vchodovými dveřmi.
          </figcaption>
        </figure>
      </section>

      <section className="hp-trust" id="poptavka" aria-labelledby="trust-nadpis">
        <div className="hp-trust-media">
          <img
            src="/section-2.webp"
            alt="Montér Hörmann montuje pohon garážových vrat v pražské garáži"
            className="hp-trust-img"
            width={1200}
            height={1400}
          />
        </div>

        <div className="hp-trust-body">
          <p className="hp-eyebrow">Jak to u nás proběhne</p>
          <h2 id="trust-nadpis" className="hp-h2 hp-h2-light">
            Od zaměření po hotová vrata za jeden měsíc.
          </h2>
          <p className="hp-trust-lede">
            Jsme autorizovaní partneři Hörmann pro Prahu. Vrata vyrábí německá
            továrna, my se staráme o zaměření, montáž a servis — abyste měli
            všechno od jednoho člověka, na kterého se dovoláte i za pět let.
          </p>

          <ol className="hp-steps">
            {kroky.map((s, i) => (
              <li className="hp-step" key={s.k}>
                <span className="hp-step-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="hp-step-body">
                  <h3 className="hp-step-title">{s.k}</h3>
                  <p className="hp-step-text">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <a className="hp-btn hp-btn-primary hp-btn-wide" href="tel:+420800100200">
            Domluvit zaměření zdarma
          </a>
        </div>
      </section>
    </main>
  );
}
