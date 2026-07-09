import type { CSSProperties } from 'react';

export const metadata = {
  title: 'Colt International — vzduchotechnika a adiabatické chlazení pro průmysl',
  description:
    'Navrhujeme a dodáváme systémy pro odvod tepla a kouře, adiabatické chlazení CoolStream, větrání, slunolamy a klimatizaci pro výrobní haly. Praha 5, River Business Centre.',
  openGraph: {
    title: 'Colt International — příjemné klima ve výrobních halách',
    description:
      'Adiabatické chlazení CoolStream, odvod tepla a kouře, přirozené větrání a slunolamy pro český průmysl. Desítky provozů, roky praxe.',
    type: 'website',
    locale: 'cs_CZ',
    images: ['/hero.webp'],
  },
};

const systems = [
  {
    tag: 'Léto v hale',
    title: 'Adiabatické chlazení CoolStream',
    body:
      'Vodou chlazený vzduch bez kompresoru a bez freonů. V nejparnějších dnech srazí teplotu v hale o několik stupňů za zlomek nákladů klasické klimatizace — hygienicky a s minimem provozních nákladů.',
    metric: '−8 °C',
    metricLabel: 'typický pokles teploty v hale',
  },
  {
    tag: 'Bezpečnost',
    title: 'Odvod tepla a kouře',
    body:
      'Světlíky a klapky, které se při požáru samy otevřou a odvedou kouř nad hlavy lidí. Chráníme únikové cesty, konstrukci haly i zásah hasičů — návrh počítáme na konkrétní geometrii vaší stavby.',
    metric: 'ZOTK',
    metricLabel: 'zařízení pro odvod tepla a kouře',
  },
  {
    tag: 'Čerstvý vzduch',
    title: 'Přirozené a průmyslové větrání',
    body:
      'Vzduch tažený vztlakem a tlakovým rozdílem — bez ventilátorů, které žerou proud a hučí. Kde příroda nestačí, doplníme řízené jednotky. Výsledkem je stálá výměna vzduchu po celé směně.',
    metric: '24/7',
    metricLabel: 'výměna vzduchu bez provozních peaků',
  },
  {
    tag: 'Fasáda a světlo',
    title: 'Slunolamy a stínicí systémy',
    body:
      'Pevné i pohyblivé lamely, které pustí dovnitř denní světlo a zadrží letní žár dřív, než dopadne na sklo. Méně přehřívání, méně chlazení, příjemnější pracoviště.',
    metric: 'RA',
    metricLabel: 'řízená akumulace slunečního tepla',
  },
];

const refs = [
  { place: 'Vetropack Moravia Glass', city: 'Kyjov', note: 'Adiabatické chlazení a kontrola klimatu ve sklárně' },
  { place: 'Isotherm', city: 'Kaplice', note: 'Adiabatické chlazení a kontrola klimatu' },
  { place: 'Fremach Morava', city: 'Kroměříž', note: 'Adiabatické chlazení a kontrola klimatu' },
  { place: 'Stölzle Union', city: 'Heřmanova Huť', note: 'Adiabatické chlazení a denní odvětrání' },
];

export default function Page() {
  return (
    <main className="vz-main">
      <header className="vz-topbar">
        <a className="vz-wordmark" href="#" aria-label="Colt International, domů">
          <span className="vz-wordmark-mark" aria-hidden="true">
            <span className="vz-vane" />
            <span className="vz-vane" />
            <span className="vz-vane" />
          </span>
          <span className="vz-wordmark-text">
            Colt<span className="vz-wordmark-thin">International</span>
          </span>
        </a>
        <p className="vz-topbar-loc">Vzduchotechnika · Praha 5</p>
      </header>

      <section className="vz-hero" aria-labelledby="vz-hero-title">
        <div className="vz-hero-media">
          <img
            src="/hero.webp"
            alt="Adiabatický chladič CoolStream instalovaný na střeše průmyslové haly"
            className="vz-hero-img"
          />
          <span className="vz-hero-scrim" aria-hidden="true" />
        </div>

        <div className="vz-hero-inner">
          <p className="vz-eyebrow">Klima pro výrobní haly · od roku praxe k praxi</p>
          <h1 id="vz-hero-title" className="vz-hero-title">
            Když stroje sálají
            <br />
            a lidem dochází dech,
            <br />
            <em>pošleme dovnitř chladný vzduch.</em>
          </h1>
          <p className="vz-hero-lead">
            Adiabatické chladiče CoolStream, odvod tepla a kouře, přirozené větrání a slunolamy.
            Navrhujeme a montujeme systémy, ve kterých se v hale dá dýchat i v srpnu — a při požáru
            odvedou kouř dřív, než zhoustne.
          </p>
          <div className="vz-hero-actions">
            <a className="vz-btn vz-btn-primary" href="#systemy">
              Prohlédnout systémy
            </a>
            <a className="vz-btn vz-btn-ghost" href="tel:+420251556665">
              Zavolat: 251 556 665
            </a>
          </div>
        </div>

        <dl className="vz-hero-strip" aria-label="Čeho jsme dosáhli">
          <div className="vz-strip-item vz-strip-hero">
            <dt>Uspořeno díky systémům CoolStream</dt>
            <dd>
              <span className="vz-co2-num">115 387 715</span>
              <span className="vz-co2-unit">kg CO₂</span>
            </dd>
          </div>
          <div className="vz-strip-item">
            <dt>Provozů s naším klimatem</dt>
            <dd>desítky hal v ČR</dd>
          </div>
          <div className="vz-strip-item">
            <dt>Chlazení bez freonů</dt>
            <dd>jen voda a vzduch</dd>
          </div>
        </dl>
      </section>

      <section className="vz-systems" id="systemy" aria-labelledby="vz-systems-title">
        <div className="vz-section-head">
          <p className="vz-eyebrow vz-eyebrow-dark">Co pro halu umíme</p>
          <h2 id="vz-systems-title" className="vz-h2">
            Čtyři vrstvy prostředí — od chlazení po bezpečnost
          </h2>
          <p className="vz-section-sub">
            Vzduch, teplo, kouř a slunce se v hale ovlivňují navzájem. Řešíme je jako jeden celek,
            ne jako čtyři zakázky.
          </p>
        </div>

        <ol className="vz-cards">
          {systems.map((s, i) => (
            <li className="vz-card" key={s.title}>
              <div className="vz-card-top">
                <span className="vz-card-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="vz-card-tag">{s.tag}</span>
              </div>
              <h3 className="vz-card-title">{s.title}</h3>
              <p className="vz-card-body">{s.body}</p>
              <p className="vz-card-metric">
                <span className="vz-card-metric-num">{s.metric}</span>
                <span className="vz-card-metric-label">{s.metricLabel}</span>
              </p>
            </li>
          ))}
        </ol>

        <figure className="vz-systems-figure">
          <img
            src="/section-1.webp"
            alt="Rozvody vzduchotechniky a chladicí jednotky ve výrobní hale"
            className="vz-figure-img"
          />
          <figcaption className="vz-figure-cap">
            Návrh vedeme od simulace proudění po servis — testy a měření děláme na míru vaší hale,
            ne z katalogu.
          </figcaption>
        </figure>
      </section>

      <section className="vz-trust" aria-labelledby="vz-trust-title">
        <div className="vz-trust-grid">
          <div className="vz-trust-copy">
            <p className="vz-eyebrow">Kde už dýcháme lépe</p>
            <h2 id="vz-trust-title" className="vz-h2 vz-h2-light">
              V desítkách hal jsme srazili teplotu
              <br />
              tak, aby šla dělat práce
            </h2>
            <p className="vz-trust-lead">
              Sklárny, lisovny plastů, automotive. Tam všude stroje topí a léto přidává. Postavili
              jsme systémy, ve kterých lidé odvádějí práci líp a stroje běží stabilně bez kolísání
              teplot. Poradenství, projekt, testy, montáž i servis vedeme z jedné ruky.
            </p>
            <a className="vz-btn vz-btn-primary" href="tel:+420251556665">
              Domluvit prohlídku haly
            </a>
          </div>

          <img
            src="/section-2.webp"
            alt="Adiabatický chladič CoolStream připravený k instalaci"
            className="vz-trust-img"
          />
        </div>

        <ul className="vz-reflist">
          {refs.map((r) => (
            <li className="vz-refitem" key={r.place}>
              <span className="vz-refplace">{r.place}</span>
              <span className="vz-refcity">{r.city}</span>
              <span className="vz-refnote">{r.note}</span>
            </li>
          ))}
        </ul>

        <address className="vz-contactcard">
          <p className="vz-contactcard-lead">Colt International, s.r.o.</p>
          <p className="vz-contactcard-line">River Business Centre · Strakonická 3363 · 150 00 Praha 5</p>
          <p className="vz-contactcard-line">
            <a href="tel:+420251556665">+420 251 556 665</a>
            <span aria-hidden="true"> · </span>
            <a href="mailto:info@cz.coltgroup.com">info@cz.coltgroup.com</a>
          </p>
        </address>
      </section>
    </main>
  );
}
