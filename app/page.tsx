import { AiImage } from "./_ui";

const specimens = [
  {
    code: "LS 821221",
    tag: "Bestseller · sleva 30 %",
    name: "Sedací souprava do „U“",
    src: "/section-1.webp",
    alt: "Rohová sedací souprava LS 821221 s polohovacími podhlavníky",
    rozmer: "292 × 216 cm · levá i pravá varianta",
    detail: "Rozkládání na denní spaní, polohovací podhlavníky, potah dle vzorníku.",
    price: "33 999 Kč",
    was: "původně 48 570 Kč",
    sale: true,
  },
  {
    code: "LS 411520",
    tag: "Novinka na prodejně",
    name: "Sedací souprava k vyzkoušení",
    src: "/section-2.webp",
    alt: "Sedací souprava LS 411520 vystavená na prodejně v Plzni",
    rozmer: "280 × 190 cm · variabilní sestava",
    detail: "Motorové polohování, čalounění na míru interiéru. Přijďte si sednout.",
    price: "41 990 Kč",
    was: null,
    sale: false,
  },
];

const kategorie = [
  "Sedací soupravy",
  "Obývací stěny a sestavy",
  "Ložnicové sestavy",
  "Boxspringové postele",
  "Jídelny",
  "Dětské pokoje",
];

const reference = [
  {
    name: "Ladislav Plavec",
    text:
      "Luxusní německé zboží, které si v Plzni objednáte podle vlastních představ. Poradí vám při konfiguraci zakázky, jejich vůz zboží doveze, pánové smontují a předvedou. Velká spokojenost.",
  },
  {
    name: "František Pihrt",
    text:
      "Od výborné odborné konzultace na prodejně, kdy se nám paní ochotně a trpělivě věnovala, až po dopravu — šikovní páni starou sedačku odnesli ze 7. patra a novou vynesli.",
  },
  {
    name: "Petra Kučerka",
    text:
      "Milá paní prodejkyně mi pomohla sestavit variantu do „U“ přesně podle našich potřeb, nafotila látky a finální vzorek poslala poštou. Takový přístup jsme jinde nezažili.",
  },
  {
    name: "Geomatik",
    text:
      "Nejlepší prodejna nábytku v Plzni. Po marném procházení větších prodejen jsme až tady konečně našli, co jsme hledali. Křesla, na kterých se opravdu dobře sedí.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Nábytek Brückl, Plzeň">
          <span className="wordmark__name">Brückl</span>
          <span className="wordmark__seam" aria-hidden="true" />
          <span className="wordmark__sub">nábytek · Plzeň</span>
        </a>
        <a className="topbar__cta" href="#nabidka">Prohlédnout sedačky</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__text">
          <p className="eyebrow eyebrow--light">Prodejna 1 500 m² &nbsp;·&nbsp; odvoz staré sedačky &nbsp;·&nbsp; montáž</p>
          <h1 className="hero__title">
            <span className="hero__line">Sedací soupravy,</span>
            <span className="hero__stitchwrap">
              <span className="hero__line hero__line--em">které si poskládáte</span>
              <svg className="hero__seam" viewBox="0 0 600 12" preserveAspectRatio="none" aria-hidden="true">
                <line x1="3" y1="6" x2="597" y2="6" />
              </svg>
            </span>
            <span className="hero__line">přesně podle sebe.</span>
          </h1>
          <p className="hero__lead">
            Německé čalounění, které si v Plzni nakonfigurujete do posledního detailu —
            rozměr, potah, polohování. Odborně poradíme, dovezeme, vyneseme i do vyššího
            patra bez výtahu a smontujeme.
          </p>
          <div className="hero__actions">
            <a className="btn btn--brass" href="#nabidka">Prohlédnout vzorník</a>
            <a className="btn btn--ghost" href="#reference">Přečíst reference</a>
          </div>
        </div>
        <div className="hero__media">
          <AiImage src="/hero.webp" alt="Vystavené sedací soupravy na prodejně Nábytek Brückl v Plzni" className="hero__img" />
        </div>
      </section>

      <section className="section section--catalog" id="nabidka">
        <div className="section__head">
          <p className="eyebrow">Vzorník z prodejny</p>
          <h2 className="section__title">Vybrané kusy, které máme vystavené</h2>
          <p className="section__intro">
            Každý model vedeme pod svým katalogovým číslem — podle něj si ho na prodejně
            necháte předvést a nakonfigurovat na míru vašeho obýváku.
          </p>
        </div>

        <ul className="catalog">
          {specimens.map((s) => (
            <li className="specimen" key={s.code}>
              <div className="specimen__media">
                <AiImage src={s.src} alt={s.alt} className="specimen__img" />
                <span className={s.sale ? "specimen__tag specimen__tag--sale" : "specimen__tag"}>{s.tag}</span>
              </div>
              <div className="specimen__body">
                <p className="specimen__code">{s.code}</p>
                <h3 className="specimen__name">{s.name}</h3>
                <dl className="specimen__specs">
                  <div>
                    <dt>Rozměr</dt>
                    <dd>{s.rozmer}</dd>
                  </div>
                  <div>
                    <dt>Provedení</dt>
                    <dd>{s.detail}</dd>
                  </div>
                </dl>
                <div className="specimen__price">
                  <span className="specimen__now">{s.price}</span>
                  {s.was && <span className="specimen__was">{s.was}</span>}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="chips" aria-label="Další sortiment">
          <p className="chips__label">A dál v prodejně:</p>
          <ul className="chips__list">
            {kategorie.map((k) => (
              <li className="chip" key={k}>{k}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--trust" id="reference">
        <div className="section__head section__head--light">
          <p className="eyebrow eyebrow--light">Odborně poradíme, peníze ušetříme</p>
          <h2 className="section__title">Za pultem u paní Plačkové</h2>
          <p className="section__intro section__intro--light">
            Nejsme sektorový sklad. Vyberete si potah, sestavu i funkce, vzorek látky
            vám půjčíme domů a sedačku dovezeme třeba i na druhý konec republiky.
          </p>
        </div>

        <ul className="reviews">
          {reference.map((r) => (
            <li className="review" key={r.name}>
              <p className="review__text">{r.text}</p>
              <p className="review__name">{r.name}</p>
            </li>
          ))}
        </ul>

        <div className="visit">
          <div className="visit__block">
            <p className="visit__label">Navštivte nás</p>
            <p className="visit__value">Ukázková 123, Plzeň</p>
          </div>
          <div className="visit__block">
            <p className="visit__label">Zavolejte</p>
            <p className="visit__value">+420 777 111 222</p>
          </div>
          <div className="visit__block">
            <p className="visit__label">Napište</p>
            <p className="visit__value">info@example.cz</p>
          </div>
        </div>
      </section>
    </main>
  );
}
