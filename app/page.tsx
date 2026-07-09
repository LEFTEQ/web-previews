import type { CSSProperties } from "react";

type Event = {
  date: string;
  day: string;
  title: string;
  place: string;
  lector: string;
  member: string;
  guest: string;
  tag: "Olomouc" | "Zlín" | "Pobytový" | "Záznam";
};

const events: Event[] = [
  {
    date: "29.09.–01.10.2026",
    day: "tři dny",
    title: "Podvojné účetnictví pro začátečníky",
    place: "WELLNET, Wellnerova 7, Olomouc",
    lector: "RNDr. Petr Beránek, daňový poradce",
    member: "6 000",
    guest: "6 900",
    tag: "Olomouc",
  },
  {
    date: "13.10.2026",
    day: "úterý",
    title: "DPH v roce 2026 — praktické zkušenosti a výhled do 2027",
    place: "WELLNET, Wellnerova 7, Olomouc",
    lector: "Ing. Ivana Langerová, daňová poradkyně",
    member: "2 400",
    guest: "2 600",
    tag: "Olomouc",
  },
  {
    date: "16.10.2026",
    day: "pátek",
    title: "Mzdy — novinky pro rok 2027 i ty stávající",
    place: "WELLNET, Wellnerova 7, Olomouc",
    lector: "Ing. Růžena Klímová, specialistka na mzdy",
    member: "2 300",
    guest: "2 500",
    tag: "Olomouc",
  },
  {
    date: "11.11.2026",
    day: "středa",
    title: "Účetní závěrka podnikatelů 2026, novinky 2027",
    place: "WELLNET, Wellnerova 7, Olomouc",
    lector: "Ing. Vladimíra Jordová, auditorka",
    member: "2 300",
    guest: "2 500",
    tag: "Olomouc",
  },
  {
    date: "27.11.2026",
    day: "pátek",
    title: "Aplikace právních předpisů platných od roku 2027",
    place: "Hotel Zlín, Zlín",
    lector: "Ing. Růžena Klímová, specialistka na mzdy",
    member: "2 300",
    guest: "2 500",
    tag: "Zlín",
  },
  {
    date: "30.11.–03.12.2026",
    day: "čtyři dny",
    title: "Daně–účetnictví–mzdy: novinky 2026–2027",
    place: "Hotel SAVANNAH, Hatě",
    lector: "Klíma, Machala, Beránek, Klímová",
    member: "8 000",
    guest: "10 000",
    tag: "Pobytový",
  },
  {
    date: "kdykoliv",
    day: "webinář",
    title: "Kryptoaktiva v účetnictví a v daních",
    place: "Záznam webináře",
    lector: "Ing. Simona Pacáková, auditorka",
    member: "2 200",
    guest: "2 400",
    tag: "Záznam",
  },
  {
    date: "kdykoliv",
    day: "webinář",
    title: "Povinnosti dle AML zákona včetně novinek",
    place: "Záznam webináře",
    lector: "Ing. Pavel Říha, daňový poradce",
    member: "2 200",
    guest: "2 400",
    tag: "Záznam",
  },
];

const pillars = [
  {
    n: "§ 01",
    title: "Akreditované semináře",
    body: "Naše školení mají akreditaci. Docházku i osvědčení uznají u přezkoušení i u zaměstnavatele — nejde o volný večerní kroužek, ale o doložitelné vzdělávání.",
  },
  {
    n: "§ 02",
    title: "Sledujeme legislativu za vás",
    body: "Novely, vyhlášky, přechodná ustanovení. Než se změna dostane do praxe, máme k ní připravený výklad — a řekneme, co konkrétně to znamená pro vaše účtování.",
  },
  {
    n: "§ 03",
    title: "Lektoři z praxe",
    body: "Daňoví poradci a auditorky, kteří sami zpracovávají přiznání. Ptejte se na svůj případ — odpoví vám člověk, který ho řešil minulý týden u klienta.",
  },
];

export default function Page() {
  return (
    <main className="su">
      <header className="su-top">
        <a className="su-wordmark" href="#kalendar" aria-label="Spolek účetních Olomouc — domů">
          <span className="su-wordmark__mark" aria-hidden="true">SÚ</span>
          <span className="su-wordmark__text">
            <strong>Spolek účetních</strong>
            <em>Olomouc</em>
          </span>
        </a>
        <nav className="su-nav" aria-label="Hlavní">
          <a href="#kalendar">Kalendář akcí</a>
          <a href="#proc">Proč my</a>
          <a className="su-nav__cta" href="#kalendar">Vybrat termín</a>
        </nav>
      </header>

      <section className="su-hero" aria-labelledby="hero-title">
        <div className="su-hero__grid">
          <div className="su-hero__copy">
            <p className="su-eyebrow">Vzdělávání pro účetní · od roku 2007</p>
            <h1 id="hero-title">
              Než přijde <span className="su-hi">novela</span>,
              <br />máte k ní výklad.
            </h1>
            <p className="su-lede">
              Akreditované semináře k dani z přidané hodnoty, mzdám, závěrce
              i podvojnému účetnictví. V Olomouci, ve Zlíně, pobytově i ze
              záznamu — vede je daňový poradce, ne prezentace.
            </p>
            <div className="su-hero__actions">
              <a className="su-btn" href="#kalendar">Prohlédnout termíny</a>
              <a className="su-btn su-btn--ghost" href="#proc">Jak semináře probíhají</a>
            </div>
            <dl className="su-facts">
              <div>
                <dt>Kde</dt>
                <dd>WELLNET, Wellnerova 7</dd>
              </div>
              <div>
                <dt>Formáty</dt>
                <dd>Prezenčně · online · záznam</dd>
              </div>
              <div>
                <dt>Akreditace</dt>
                <dd>Doložitelné osvědčení</dd>
              </div>
            </dl>
          </div>
          <figure className="su-hero__media">
            <img
              src="/hero.webp"
              alt="Seminář Spolku účetních Olomouc — lektor a účastníci nad daňovou agendou"
              width={720}
              height={860}
              loading="eager"
            />
            <figcaption>Seminární sál WELLNET, Olomouc</figcaption>
          </figure>
        </div>
      </section>

      <section className="su-cal" id="kalendar" aria-labelledby="cal-title">
        <div className="su-section-head">
          <h2 id="cal-title">Kalendář akcí 2026</h2>
          <p>
            Semináře pořádané Spolkem účetních Olomouc. Cena je uvedena pro
            člena a pro nečlena; místo do košíku si nejdřív v klidu vyberte.
          </p>
        </div>

        <ul className="su-events" role="list">
          {events.map((e, i) => (
            <li
              className="su-event"
              key={i}
              style={{ "--i": i } as CSSProperties}
            >
              <div className="su-event__when">
                <span className="su-event__date">{e.date}</span>
                <span className="su-event__day">{e.day}</span>
              </div>
              <div className="su-event__main">
                <span className={`su-tag su-tag--${e.tag.toLowerCase()}`}>
                  {e.tag}
                </span>
                <h3>{e.title}</h3>
                <p className="su-event__meta">
                  <span>{e.place}</span>
                  <span aria-hidden="true">·</span>
                  <span>{e.lector}</span>
                </p>
              </div>
              <div className="su-event__price">
                <span className="su-event__member">
                  <b>{e.member}</b> Kč <small>člen</small>
                </span>
                <span className="su-event__guest">
                  {e.guest} Kč nečlen
                </span>
                <a className="su-event__order" href="#kalendar">
                  Přidat do košíku
                </a>
              </div>
            </li>
          ))}
        </ul>
        <p className="su-cal__note">
          Zobrazujeme nejbližší termíny. Kompletní řadu — Zlín, Hatě, EET,
          s.&nbsp;r.&nbsp;o. i další webináře — najdete v plném kalendáři.
        </p>
      </section>

      <section className="su-proc" id="proc" aria-labelledby="proc-title">
        <div className="su-proc__grid">
          <figure className="su-proc__media">
            <img
              src="/section-1.webp"
              alt="Lektorka Spolku účetních vysvětluje výklad zákona nad podklady"
              width={640}
              height={720}
              loading="lazy"
            />
          </figure>
          <div className="su-proc__copy">
            <h2 id="proc-title">Tři důvody, proč sem účetní jezdí už podruhé</h2>
            <ul className="su-pillars" role="list">
              {pillars.map((p) => (
                <li key={p.n} className="su-pillar">
                  <span className="su-pillar__n">{p.n}</span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="su-quote">
          <img
            src="/section-2.webp"
            alt="Účastníci semináře Spolku účetních Olomouc při diskuzi"
            width={880}
            height={520}
            loading="lazy"
          />
          <blockquote>
            <p>
              „Přijdu s konkrétní fakturou, kterou nevím, jak zaúčtovat —
              a odjíždím s odpovědí, ne s pocitem, že si to musím dohledat.“
            </p>
            <cite>— účastnice seminářů k DPH, Olomouc</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
