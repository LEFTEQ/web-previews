import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kabinet CB — reuse centrum v Českých Budějovicích",
  description:
    "Second hand a reuse centrum Kabinet CB v Českých Budějovicích. Kupte, opravte, půjčte si a naučte se dávat věcem druhou šanci. Nábytek, nádobí i vybavení na akce.",
};

const kroky = [
  {
    cislo: "01",
    stitek: "Přineste",
    nadpis: "Věc, co doslouží u vás",
    text: "Křeslo po babičce, hrnce ze staré kuchyně, lampa, co jen zabírá místo. Donesete na kteroubočku, my se postaráme o zbytek.",
    akce: "Kde nás najdete",
  },
  {
    cislo: "02",
    stitek: "Projde dílnou",
    nadpis: "Ruce mistrů a nový nátěr",
    text: "Rozviklané spoje utáhneme, oprýskané přebrousíme, rozbité zprovozníme. Z odepsaného kusu je zase věc, která slouží.",
    akce: "Nechat opravit",
  },
  {
    cislo: "03",
    stitek: "Najde domov",
    nadpis: "Poklad na regálu obchodu",
    text: "V našich reuse obchodech čeká na nového majitele. Vy si odnesete kus s příběhem, ne z výrobní linky.",
    akce: "Kde nakoupit",
  },
];

const sluzby = [
  {
    znak: "⌾",
    nazev: "Koupit",
    popis: "Nábytek, nádobí, knihy i drobnosti do domácnosti. Každý kus jiný, žádné dva stejné.",
  },
  {
    znak: "⚒",
    nazev: "Opravit",
    popis: "Dílna a šikovné ruce našich řemeslníků vrátí věcem funkci i vzhled.",
  },
  {
    znak: "◫",
    nazev: "Půjčit",
    popis: "Nádobí a vybavení na oslavu, svatbu nebo firemní akci. Bez zbytečného nakupování.",
  },
  {
    znak: "✎",
    nazev: "Naučit se",
    popis: "Kurzy a workshopy, kde se stanete pány svých projektů. Od broušení po čalounění.",
  },
];

export default function Page() {
  return (
    <main className="kb">
      <header className="kb-top">
        <a className="kb-mark" href="#" aria-label="Kabinet CB — domů">
          <span className="kb-mark-word">Kabinet</span>
          <span className="kb-mark-tag">CB</span>
          <span className="kb-mark-sub">reuse centrum · České Budějovice</span>
        </a>
        <a className="kb-phone" href="tel:+420775103939">
          775 103 939
        </a>
      </header>

      <section className="kb-hero" aria-labelledby="hero-nadpis">
        <div className="kb-hero-copy">
          <p className="kb-eyebrow">Second hand &amp; reuse · Budějovice</p>
          <h1 id="hero-nadpis">
            Nic nekončí.
            <span className="kb-hero-em">Jen mění majitele.</span>
          </h1>
          <p className="kb-lede">
            Vezmeme věc, kterou byste vyhodili, dáme jí opravu a nový nátěr a
            pošleme ji dál. V regálech Kabinetu CB čeká nábytek i drobnosti,
            které mají za sebou jeden život a před sebou další.
          </p>
          <div className="kb-hero-cta">
            <a className="kb-btn kb-btn-solid" href="#sluzby">
              Prohlédnout obchod
            </a>
            <a className="kb-btn kb-btn-line" href="#jak">
              Jak to u nás chodí
            </a>
          </div>
        </div>
        <figure className="kb-hero-media">
          <img
            src="/hero.webp"
            alt="Interiér reuse obchodu Kabinet CB s regály plnými nábytku a předmětů z druhé ruky"
            width={960}
            height={720}
            loading="eager"
          />
          <figcaption className="kb-hero-cap">
            <span className="kb-tick">✓</span> Každý kus prošel dílnou.
          </figcaption>
        </figure>
      </section>

      <section className="kb-jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="kb-jak-head">
          <p className="kb-eyebrow kb-eyebrow-dark">Cesta jedné věci</p>
          <h2 id="jak-nadpis">Od vyřazeného kusu k pokladu na regálu</h2>
        </div>
        <ol className="kb-steps">
          {kroky.map((k) => (
            <li className="kb-step" key={k.cislo}>
              <span className="kb-step-num">{k.cislo}</span>
              <p className="kb-step-tag">{k.stitek}</p>
              <h3>{k.nadpis}</h3>
              <p className="kb-step-text">{k.text}</p>
              <span className="kb-step-link">{k.akce} →</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="kb-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="kb-sluzby-grid">
          <div className="kb-sluzby-intro">
            <p className="kb-eyebrow">Čtyři věci, které umíme</p>
            <h2 id="sluzby-nadpis">
              Koupit, opravit, půjčit, naučit se
            </h2>
            <p className="kb-sluzby-lede">
              Kabinet CB není jen obchod. Je to dílna, půjčovna i učebna pod
              jednou střechou — celý životní cyklus věci na jednom místě
              v Českých Budějovicích.
            </p>
            <figure className="kb-sluzby-media">
              <img
                src="/section-1.webp"
                alt="Renovovaný nábytek a předměty připravené k prodeji v Kabinetu CB"
                width={800}
                height={600}
                loading="lazy"
              />
            </figure>
          </div>
          <ul className="kb-cards">
            {sluzby.map((s) => (
              <li className="kb-card" key={s.nazev}>
                <span className="kb-card-znak" aria-hidden="true">
                  {s.znak}
                </span>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="kb-onas" aria-labelledby="onas-nadpis">
        <div className="kb-onas-inner">
          <p className="kb-eyebrow kb-eyebrow-dark">O nás</p>
          <h2 id="onas-nadpis">
            Baví nás z rozbitého dělat zase funkční
          </h2>
          <p className="kb-onas-text">
            Kabinet CB je českobudějovické re-use centrum. Nábytku i jiným
            předmětům dáváme nový vzhled a nové funkce — a s ním smysl zůstat
            tady, místo aby skončily v kontejneru. Spolupracujeme s firmami,
            kterým dává cirkularita smysl, a jejich odpadní materiál měníme
            v poctivé věci vyrobené v sociálním podniku.
          </p>
          <dl className="kb-fakta">
            <div>
              <dt>Kde nás potkáte</dt>
              <dd>Pobočky Nová &amp; Koh-i-noor, České Budějovice</dd>
            </div>
            <div>
              <dt>Zavolejte</dt>
              <dd>
                <a href="tel:+420775103939">775 103 939</a>
              </dd>
            </div>
            <div>
              <dt>Napište</dt>
              <dd>
                <a href="mailto:info@kabinetcb.cz">info@kabinetcb.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
