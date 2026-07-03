import type { CSSProperties } from "react";

export const metadata = {
  title: "ANNA - S · Překlady RU · UA · DE · EN | Praha, Senovážné náměstí",
  description:
    "Překladatelská agentura ANNA - S na Senovážném náměstí v Praze. Ruština, ukrajinština, němčina a angličtina. Soudní i běžné překlady, rychlá komunikace, 16 hodnocení s průměrem 4,6.",
};

type Lang = {
  code: string;
  name: string;
  hello: string;
  note: string;
};

const languages: Lang[] = [
  { code: "RU", name: "ruština", hello: "Здравствуйте", note: "smlouvy, matriční listiny, korespondence" },
  { code: "UA", name: "ukrajinština", hello: "Доброго дня", note: "doklady k pobytu, rodné listy, potvrzení" },
  { code: "DE", name: "němčina", hello: "Guten Tag", note: "obchodní texty, technická dokumentace" },
  { code: "EN", name: "angličtina", hello: "Hello", note: "weby, životopisy, odborné články" },
];

type Service = {
  idx: string;
  title: string;
  body: string;
  tag: string;
};

const services: Service[] = [
  {
    idx: "01",
    title: "Soudní překlad s kulatým razítkem",
    body: "Ověřený překlad úředních a matričních dokumentů — smlouvy, rodné a oddací listy, vysvědčení, plné moci. Přijmete ho úřady i soudy v Česku bez dalšího dokládání.",
    tag: "úřady & soudy",
  },
  {
    idx: "02",
    title: "Běžný odborný překlad",
    body: "Weby, životopisy, obchodní korespondence i technické texty. Zachováme tón i terminologii tak, aby text zněl přirozeně v cílovém jazyce, ne jako strojový překlad.",
    tag: "firmy & jednotlivci",
  },
  {
    idx: "03",
    title: "Konzultace nad dokumentem",
    body: "Nevíte, jestli potřebujete soudní, nebo běžný překlad? Zavolejte a projdeme dokument spolu. Řekneme rovnou termín i cenu — bez skrytých příplatků za spěch.",
    tag: "než zadáte",
  },
];

type Review = {
  name: string;
  date: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Jitka Ptáčková",
    date: "leden 2024",
    text: "Několikrát jsem využila služeb této firmy a vždy jsem byla spokojená s cenou i rychlostí.",
  },
  {
    name: "Vasyl",
    date: "listopad 2025",
    text: "Dlouholetá zkušenost a maximální spokojenost. Vždy vyjdou vstříc, rychlé překlady, příjemná komunikace i cena.",
  },
  {
    name: "Nikolay Demyan",
    date: "únor 2025",
    text: "Rychlé jednání, doporučuji.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="ANNA - S, překladatelská agentura Praha">
          <span className="wordmark__a">Anna</span>
          <span className="wordmark__dash" aria-hidden="true">—</span>
          <span className="wordmark__s">S</span>
        </a>
        <p className="topbar__meta">Překladatelská agentura · Praha 1</p>
      </header>

      <section className="hero" id="top">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Pracovní stůl překladatelky agentury ANNA - S se slovníky a dokumenty"
            width={1200}
            height={800}
          />
          <div className="hero__stamp" aria-hidden="true">
            <span>ověřeno</span>
            <span>překlad</span>
          </div>
        </div>

        <div className="hero__text">
          <p className="eyebrow">Senovážné náměstí 23, Praha · budova A, 4. patro</p>
          <h1 className="hero__head">
            Jeden dokument,
            <br />
            <span className="hero__head--em">čtyři jazyky,</span>
            <br />
            razítko, které úřad přijme.
          </h1>
          <p className="hero__lede">
            Překládáme z ruštiny, ukrajinštiny, němčiny a angličtiny a zpět — soudně
            ověřené i běžné texty. Přinesete listinu, odnesete si překlad, se kterým
            projdete na matrice, u soudu i v cizině.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420604287435">
              Zavolat 604&nbsp;287&nbsp;435
            </a>
            <a className="btn btn--line" href="mailto:anna-s@seznam.cz">
              Napsat na e-mail
            </a>
          </div>
          <p className="hero__rating">
            <span className="hero__score">4,6</span>
            <span className="hero__ratingtext">z&nbsp;16 hodnocení klientů na Firmy.cz</span>
          </p>
        </div>
      </section>

      <section className="langs" aria-labelledby="langs-head">
        <div className="section-head">
          <p className="eyebrow">Naše jazyky</p>
          <h2 id="langs-head">Čtyři jazyky, které umíme do detailu</h2>
          <p className="section-head__sub">
            Nesbíráme desítky jazyků na papíře. Držíme se čtyř, ve kterých překládáme
            léta — a poznáme na nich rozdíl mezi „srozumitelné“ a „správně“.
          </p>
        </div>

        <ul className="langgrid">
          {languages.map((l) => (
            <li className="langcard" key={l.code}>
              <p className="langcard__hello" lang={l.code === "EN" ? "en" : l.code === "DE" ? "de" : l.code === "UA" ? "uk" : "ru"}>
                {l.hello}
              </p>
              <div className="langcard__foot">
                <span className="langcard__code">{l.code}</span>
                <span className="langcard__name">{l.name}</span>
              </div>
              <p className="langcard__note">{l.note}</p>
            </li>
          ))}
        </ul>

        <div className="services">
          <img
            className="services__img"
            src="/section-1.webp"
            alt="Detail razítka a podpisu na ověřeném překladu"
            width={900}
            height={600}
          />
          <ol className="servicelist">
            {services.map((s) => (
              <li className="serviceitem" key={s.idx}>
                <span className="serviceitem__idx" aria-hidden="true">{s.idx}</span>
                <div className="serviceitem__body">
                  <p className="serviceitem__tag">{s.tag}</p>
                  <h3 className="serviceitem__title">{s.title}</h3>
                  <p className="serviceitem__text">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-head">
        <div className="trust__intro">
          <p className="eyebrow">O agentuře</p>
          <h2 id="trust-head">Malá kancelář v centru, na kterou se lidé vracejí</h2>
          <p className="trust__lede">
            ANNA - S sídlí na Senovážném náměstí kousek od hlavního nádraží, ve
            4.&nbsp;patře budovy A, kancelář 433. Přijdete osobně, projdeme dokument
            a domluvíme termín. Žádná anonymní přepážka — mluvíte s tím, kdo bude
            překládat.
          </p>
          <dl className="trust__facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Senovážné náměstí 978/23, Praha 1 — Nové Město</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420604287435">+420 604 287 435</a></dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href="mailto:anna-s@seznam.cz">anna-s@seznam.cz</a></dd>
            </div>
            <div>
              <dt>IČO</dt>
              <dd>25103369</dd>
            </div>
          </dl>
        </div>

        <figure className="trust__figure">
          <img
            className="trust__img"
            src="/section-2.webp"
            alt="Kancelář překladatelské agentury ANNA - S v Praze"
            width={900}
            height={700}
          />
          <figcaption>Kancelář 433, budova A — 4. patro</figcaption>
        </figure>

        <ul className="reviews">
          {reviews.map((r) => (
            <li className="reviewcard" key={r.name}>
              <p className="reviewcard__text">„{r.text}“</p>
              <p className="reviewcard__who">
                <span className="reviewcard__name">{r.name}</span>
                <span className="reviewcard__date">{r.date}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
