import { AiImage } from "./_ui";

type Meta = { k: string; v: string };
type Service = {
  no: string;
  cat: string;
  title: string;
  lead: string;
  meta: Meta[];
  glyph: keyof typeof glyphs;
};

const services: Service[] = [
  {
    no: "01",
    cat: "Preventivní",
    title: "Prevence",
    lead: "Očkovací schéma sestavujeme individuálně podle věku, plemene a způsobu života vašeho zvířete.",
    meta: [
      { k: "Rozsah", v: "Očkování · čipování · odčervení" },
      { k: "Objednání", v: "Bez dlouhého čekání" },
    ],
    glyph: "paw",
  },
  {
    no: "02",
    cat: "Specializace",
    title: "Dermatologie",
    lead: "Alergie, chronické záněty kůže i moderní biologická léčba pod dlouhodobým dohledem.",
    meta: [
      { k: "Lékařka", v: "MVDr. Anna Tvrdá" },
      { k: "Rozsah", v: "Vstupní vyšetření · kontroly" },
    ],
    glyph: "skin",
  },
  {
    no: "03",
    cat: "Zákrok",
    title: "Chirurgie",
    lead: "Plánované operace měkkých tkání s klidným, důkladně vysvětleným průběhem.",
    meta: [
      { k: "Lékař", v: "MVDr. Ivo" },
      { k: "Péče", v: "Kontrola i po zákroku" },
    ],
    glyph: "scalpel",
  },
  {
    no: "04",
    cat: "Diagnostika",
    title: "Interní medicína",
    lead: "Vyšetření vnitřních orgánů a dlouhodobé sledování chronicky nemocných pacientů.",
    meta: [
      { k: "Rozsah", v: "Diagnostika · dispenzarizace" },
      { k: "Výsledky", v: "Srozumitelně vysvětlíme" },
    ],
    glyph: "pulse",
  },
  {
    no: "05",
    cat: "Pohyb",
    title: "Ortopedie",
    lead: "Kulhání, klouby a páteř — od RTG snímku po návrh rehabilitace.",
    meta: [
      { k: "Rozsah", v: "Pohybový aparát · RTG" },
      { k: "Zaměření", v: "Psi a kočky" },
    ],
    glyph: "bone",
  },
  {
    no: "06",
    cat: "Drobní savci",
    title: "Medicína drobných savců",
    lead: "Králíci, hlodavci a fretky mají u nás vlastní, šetrně vedenou ordinaci.",
    meta: [
      { k: "Lékařka", v: "MVDr. Zuzana Bulavová" },
      { k: "Ordinace", v: "Pátky 12–20 h" },
    ],
    glyph: "rabbit",
  },
  {
    no: "07",
    cat: "Laboratoř",
    title: "Laboratoř",
    lead: "Krevní testy i cytologie přímo u nás, bez čekání na výsledky z externí laboratoře.",
    meta: [
      { k: "Rozsah", v: "Krev · moč · cytologie" },
      { k: "Výsledky", v: "Často tentýž den" },
    ],
    glyph: "vial",
  },
];

const news = [
  {
    date: "25. 9. 2025",
    tag: "Dermatologie",
    title: "Kontroly a biologická léčba u více lékařek",
    body: "Dermatologické kontroly stabilních pacientů a aplikaci biologické léčby nově zajišťují i další lékařky kliniky, ne pouze MVDr. Tvrdá.",
  },
  {
    date: "18. 8. 2025",
    tag: "Rezervace",
    title: "Storno vstupní dermatologie",
    body: "Předplacenou částku 500 Kč za vstupní dermatologické vyšetření lze při stornu využít pouze formou kreditu, jiným způsobem je nevratná.",
  },
  {
    date: "6. 5. 2025",
    tag: "Drobní savci",
    title: "Ordinační hodiny pro drobné savce",
    body: "MVDr. Zuzana Bulavová ordinuje pro drobné savce v pátky od 12 do 20 hodin. Děkujeme za pochopení.",
  },
];

const references = [
  {
    name: "Silvie",
    role: "majitelka psa",
    quote:
      "Pet Care Clinic doporučuju ze srdce — profesionalita, maximální nasazení a lidskost všech tří lékařů je výjimečná.",
  },
  {
    name: "Monika Haberzettlová",
    role: "klientka bezmála 10 let",
    quote:
      "Moc děkujeme za nadstandardní péči o naše tři pejsky. Za celou dobu jsme neměli k práci lékařů ani sestřiček jedinou výtku — vždy maximální péče a lidský přístup.",
  },
  {
    name: "Diana",
    role: "majitelka dvou psů",
    quote:
      "Od dermatologie přes operace až po onkologickou léčbu — tým se o naše psy stará roky s obrovskou trpělivostí. MVDr. Anna Tvrdá vždy udělá víc, než musí.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top wrap">
        <a className="brand" href="#" aria-label="Pet Care Clinic — domů">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__dot" />
          </span>
          <span className="brand__name">
            Pet&nbsp;Care <em>Clinic</em>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#tym">Náš tým</a>
          <a href="#novinky">Novinky</a>
          <a className="nav__cta" href="tel:+420777111222">Objednat</a>
        </nav>
      </header>

      <section className="hero wrap">
        <div className="hero__text">
          <p className="eyebrow">
            <span className="dot dot--static" aria-hidden="true" />
            Veterinární klinika · Praha
          </p>
          <h1 className="hero__title">
            Každý mazlíček dostane vlastní kartu — a naši plnou pozornost.
          </h1>
          <p className="hero__lead">
            Vedeme péči jako pořádnou kartotéku: přehledně, s návazností a bez
            zbytečného stresu. Prevence, specializace i chirurgie na jednom
            místě, deset minut chůze od domova.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420777111222">
              Zavolat a objednat
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
          <dl className="chartstrip" aria-label="Základní údaje kliniky">
            <div>
              <dt>Lokalita</dt>
              <dd>Ukázková 123, Praha</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd>+420 777 111 222</dd>
            </div>
            <div>
              <dt>Specializace</dt>
              <dd>7 oborů pod jednou střechou</dd>
            </div>
          </dl>
        </div>
        <figure className="hero__media">
          <div className="hero__tab" aria-hidden="true">
            <span className="dot dot--static" />
            Karta pacienta
          </div>
          <AiImage
            src="/hero.webp"
            alt="Veterinární lékařka při vyšetření psa v ordinaci Pet Care Clinic"
            className="hero__img"
          />
        </figure>
      </section>

      <section className="section" id="sluzby">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Kartotéka služeb</p>
            <h2 className="section__title">Sedm složek, jedna klinika</h2>
            <p className="section__intro">
              Každý obor má svou složku s rozsahem péče i lékařem, který ji vede.
              Najeďte na kartu — otevře se jako list v šanonu.
            </p>
          </div>

          <ul className="grid" role="list">
            {services.map((s, i) => (
              <li
                key={s.no}
                className="card"
                style={{ ["--i" as string]: i }}
              >
                <div className="card__tab">
                  <span className="dot" aria-hidden="true" />
                  <span className="card__cat">{s.cat}</span>
                  <span className="card__no">{s.no}</span>
                </div>
                <div className="card__glyph" aria-hidden="true">
                  {glyphs[s.glyph]}
                </div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__lead">{s.lead}</p>
                <dl className="card__meta">
                  {s.meta.map((m) => (
                    <div key={m.k}>
                      <dt>{m.k}</dt>
                      <dd>{m.v}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--sage" id="tym">
        <div className="wrap trust">
          <div className="trust__media">
            <figure className="trust__figure">
              <div className="hero__tab hero__tab--alt" aria-hidden="true">
                <span className="dot dot--static" />
                Náš tým
              </div>
              <AiImage
                src="/section-1.webp"
                alt="Tým veterinárních lékařů a sester Pet Care Clinic"
                className="trust__img"
              />
            </figure>
            <figure className="trust__figure trust__figure--small">
              <AiImage
                src="/section-2.webp"
                alt="Detail péče o zvíře v ordinaci Pet Care Clinic"
                className="trust__img"
              />
            </figure>
          </div>

          <div className="trust__text">
            <p className="eyebrow">
              <span className="dot dot--static" aria-hidden="true" />
              Proč k nám chodí roky
            </p>
            <h2 className="section__title">Lidský přístup, doložený kartami</h2>
            <p className="section__intro">
              Tři lékaři a sehraný tým sester. Klienti se k nám vracejí bezmála
              deset let — a rádi to říkají nahlas.
            </p>

            <ul className="quotes" role="list">
              {references.map((r) => (
                <li key={r.name} className="quote">
                  <span className="dot dot--static" aria-hidden="true" />
                  <blockquote>{r.quote}</blockquote>
                  <p className="quote__by">
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="novinky">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Poslední zápisy</p>
            <h2 className="section__title">Novinky z ordinace</h2>
          </div>
          <ul className="news" role="list">
            {news.map((n) => (
              <li key={n.title} className="newsitem">
                <div className="newsitem__tab">
                  <span className="dot dot--static" aria-hidden="true" />
                  {n.tag}
                </div>
                <time className="newsitem__date">{n.date}</time>
                <h3 className="newsitem__title">{n.title}</h3>
                <p className="newsitem__body">{n.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

const glyphs = {
  paw: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="24" cy="32" rx="9" ry="7" />
      <ellipse cx="13" cy="22" rx="3.4" ry="4.4" />
      <ellipse cx="20" cy="16" rx="3.2" ry="4.6" />
      <ellipse cx="28" cy="16" rx="3.2" ry="4.6" />
      <ellipse cx="35" cy="22" rx="3.4" ry="4.4" />
    </svg>
  ),
  skin: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M8 16c5-4 9 4 14 0s9 4 14 0M8 26c5-4 9 4 14 0s9 4 14 0M8 36c5-4 9 4 14 0s9 4 14 0" />
    </svg>
  ),
  scalpel: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 39l16-16c6-6 12-9 15-9-1 4-4 10-9 15L15 45z" />
      <path d="M9 39l6 6" />
      <path d="M28 20l-9 9" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 24h9l4-11 7 22 4-11h12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  bone: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M15 15a4 4 0 10-3 6l16 16a4 4 0 106-3 4 4 0 103-6L21 12a4 4 0 10-6 3z" strokeLinejoin="round" />
    </svg>
  ),
  rabbit: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M18 22c-1-7-3-13-1-14s5 5 6 12" />
      <path d="M26 20c1-7 3-12 5-11s0 8-2 13" />
      <ellipse cx="22" cy="32" rx="10" ry="8" />
      <circle cx="18" cy="31" r="1.2" fill="currentColor" stroke="none" />
      <path d="M32 34c3 0 4 2 4 3" />
    </svg>
  ),
  vial: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M19 7h10M21 7v24a3 3 0 006 0V7" strokeLinecap="round" />
      <path d="M21 22h6" />
      <path d="M24 34v7" strokeLinecap="round" />
    </svg>
  ),
};
