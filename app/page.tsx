import { Reveal, PinDrop } from "./motion";

const steps = [
  {
    n: "01",
    tag: "závada",
    title: "Problém se objeví",
    body: "Prasklý kohoutek, vybitá zásuvka, zaseklé dveře. Nic se neopraví samo.",
  },
  {
    n: "02",
    tag: "1 foto",
    title: "Pár vteřin v aplikaci",
    body: "Vyfotíte problém a krátce popíšete. Žádné formuláře, žádné telefonáty.",
  },
  {
    n: "03",
    tag: "rozpoznáno · 5 s",
    title: "AI rozpozná, co potřebujete",
    body: "Umělá inteligence navrhne kategorii i odhad ceny a času práce.",
  },
  {
    n: "04",
    tag: "1 klepnutí",
    title: "Partner přijme zakázku",
    body: "Zakázka putuje do telefonu nejbližšímu ověřenému řemeslníkovi.",
  },
  {
    n: "05",
    tag: "živá mapa",
    title: "Sledujete cestu naživo",
    body: "Poloha partnera a přesný čas příjezdu na mapě v reálném čase.",
    map: true,
  },
  {
    n: "06",
    tag: "bez hotovosti",
    title: "Platba v aplikaci",
    body: "Po dokončení práce zaplatíte v aplikaci. Bez papírování, bez hotovosti.",
  },
];

const professions = [
  "Elektrikář",
  "Zámečník",
  "Instalatér",
  "Hodinový manžel",
  "Úklid",
  "Stěhování",
  "Malíř",
  "Zahradník",
  "Automechanik",
  "Zedník",
  "Opravy elektroniky",
  "Opravy spotřebičů",
];

const trust = [
  {
    tag: "manuální kontrola",
    title: "Ověření partneři",
    body: "Každého řemeslníka procházíme ručně, než přijme první zakázku. Do aplikace se nedostane kdokoli.",
  },
  {
    tag: "rozpoznáno · 5 s",
    title: "AI odhad na místě",
    body: "Z jedné fotky navrhneme kategorii, orientační cenu i čas. Víte, do čeho jdete, ještě než kdo přijede.",
  },
  {
    tag: "bez hotovosti",
    title: "Platba v aplikaci",
    body: "Zaplatíte až po dokončení, přímo v telefonu. Žádná hotovost, žádné dohady o ceně.",
  },
];

function Bracket() {
  return (
    <span className="fx-bracket" aria-hidden="true">
      <i className="tl" />
      <i className="tr" />
      <i className="bl" />
      <i className="br" />
    </span>
  );
}

export default function Page() {
  return (
    <main className="fx">
      <header className="fx-topbar">
        <a href="#top" className="fx-logo" aria-label="FixIt, úvod">
          <span className="fx-logo__mark" aria-hidden="true">
            <i className="tl" />
            <i className="br" />
          </span>
          Fix<span className="fx-logo__it">It</span>
        </a>
        <span className="fx-topbar__tag">SPOUŠTÍME · 01.08.2026</span>
      </header>

      <section className="fx-hero" id="top">
        <div className="fx-hero__grid" aria-hidden="true" />
        <div className="fx-hero__inner">
          <p className="fx-eyebrow">
            <span className="fx-dot" aria-hidden="true" />
            MARKETPLACE SLUŽEB · PRAHA
          </p>

          <div className="fx-hero__scan">
            <span className="fx-hero-b tl" aria-hidden="true" />
            <span className="fx-hero-b tr" aria-hidden="true" />
            <span className="fx-hero-b bl" aria-hidden="true" />
            <span className="fx-hero-b br" aria-hidden="true" />
            <h1 className="fx-hero__title">
              Vyfoťte
              <br />
              závadu.
              <br />
              <span className="fx-hero__title--accent">FixIt ji pozná.</span>
            </h1>
            <span className="fx-hero__ping" aria-hidden="true" />
            <span className="fx-hero__typetag" aria-hidden="true">
              rozpoznáno · 5 s
            </span>
          </div>

          <p className="fx-hero__lead">
            Jako Wolt nebo Foodora — ale pro řemeslo. Zadáte problém jedním
            snímkem, ověřený partner ho vyřeší. Elektrikáři, instalatéři,
            zámečníci i úklid v jedné aplikaci.
          </p>

          <div className="fx-hero__cta">
            <a href="#zacit" className="fx-btn fx-btn--primary">
              Začít s FixIt
            </a>
            <a href="#jak-to-funguje" className="fx-btn fx-btn--ghost">
              Jak to funguje
            </a>
          </div>

          <dl className="fx-hero__stats">
            <div>
              <dt>SPUŠTĚNÍ</dt>
              <dd>01.08.2026</dd>
            </div>
            <div>
              <dt>PŮSOBNOST</dt>
              <dd>Praha · celá ČR</dd>
            </div>
            <div>
              <dt>ODHAD CENY</dt>
              <dd>do 5 s</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="fx-section fx-steps" id="jak-to-funguje">
        <div className="fx-section__head">
          <p className="fx-eyebrow fx-eyebrow--dark">JAK TO FUNGUJE</p>
          <h2 className="fx-h2">Od fotky k opravě v šesti krocích</h2>
          <p className="fx-section__sub">
            Jeden snímek problému projde přes rozpoznání, ověřeného partnera a
            živou mapu až k platbě. Tady je celá cesta.
          </p>
        </div>

        <ol className="fx-steps__grid">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 0.08}>
              <li className="fx-card">
                <Bracket />
                <div className="fx-card__top">
                  <span className="fx-card__num">{s.n}</span>
                  <span className="fx-card__tag">{s.tag}</span>
                </div>
                <h3 className="fx-card__title">{s.title}</h3>
                <p className="fx-card__body">{s.body}</p>
                {s.map && (
                  <div className="fx-map" aria-hidden="true">
                    <span className="fx-map__route" />
                    <PinDrop />
                  </div>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="fx-section fx-pro" id="zacit">
        <div className="fx-section__head">
          <p className="fx-eyebrow">PROFESE &amp; DŮVĚRA</p>
          <h2 className="fx-h2 fx-h2--light">
            Desítky profesí, jedna aplikace
          </h2>
          <p className="fx-section__sub fx-section__sub--light">
            Chytré vyhledávání s AI propojí toho, kdo problém má, s tím, kdo ho
            umí vyřešit. Okamžitě v Praze, plánovaně po celé ČR.
          </p>
        </div>

        <ul className="fx-chips">
          {professions.map((p) => (
            <li key={p} className="fx-chip">
              {p}
            </li>
          ))}
          <li className="fx-chip fx-chip--more">a mnoho dalších</li>
        </ul>

        <div className="fx-trust">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <article className="fx-card fx-card--trust">
                <Bracket />
                <span className="fx-card__tag">{t.tag}</span>
                <h3 className="fx-card__title">{t.title}</h3>
                <p className="fx-card__body">{t.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="fx-launch">
          <span className="fx-launch__label">STAV</span>
          Na FixIt teď pracujeme. Aplikaci FixIt i FixIt Partner spouštíme
          <strong> 1. 8. 2026</strong> — a už dnes hledáme partnery napříč
          obory, aby byla v den vydání plně připravená.
        </p>
      </section>
    </main>
  );
}
