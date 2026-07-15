import type { ReactNode } from "react";

const PHONE_DISPLAY = "770 330 230";
const PHONE_HREF = "tel:+420770330230";

const specs: { k: string; v: ReactNode }[] = [
  { k: "Izolace", v: <>6 komor · Uw&nbsp;až&nbsp;0,7&nbsp;W/m²K</> },
  { k: "Kde nás najdete", v: <>Pardubice · Heřmanův&nbsp;Městec · Hlinsko</> },
  { k: "Otevřeno", v: <>Po–Pá&nbsp;6:00–17:00, Pá&nbsp;do&nbsp;15:30</> },
];

const chambers = [0, 1, 2, 3, 4, 5];

const offer: { code: string; title: string; text: string }[] = [
  {
    code: "PVC",
    title: "Plastová okna",
    text: "Vícekomorové profily s izolačním trojsklem. Zaměříme, spočítáme Uw a doporučíme to, co dává smysl pro váš dům — ne nutně nejdražší řádek z katalogu.",
  },
  {
    code: "DV",
    title: "Vchodové a balkonové dveře",
    text: "Bezpečné vstupní dveře i prosklené balkonové sestavy. Kování, prahy a barvy sladíme s okny do posledního odstínu.",
  },
  {
    code: "PS",
    title: "Posuvné systémy",
    text: "Zvedací‑posuvné HS portály, kterými se obývák otevře na zahradu. Velká prosklení bez studených míst u podlahy.",
  },
  {
    code: "STÍN",
    title: "Venkovní a vnitřní stínění",
    text: "Venkovní žaluzie a rolety proti letnímu přehřívání, uvnitř látkové rolety den‑noc i blackout. Interiér zůstane příjemný celý rok.",
  },
];

const trust: { head: string; text: string }[] = [
  {
    head: "Zaměření a nabídka zdarma",
    text: "Přijedeme, změříme a připravíme nabídku na míru — s ohledem na váš rozpočet, ne jen na ceník.",
  },
  {
    head: "Přepočítáme konkurenční nabídku",
    text: "Máte cenu odjinud? Projdeme ji s vámi a řekneme na rovinu, co v ní chybí nebo přebývá.",
  },
  {
    head: "Poradíme s dotací",
    text: "Provedeme vás papírováním, ať na výměnu oken dosáhnete i formálně, ne jen technicky.",
  },
];

const hours: { d: string; h: string }[] = [
  { d: "Pondělí – čtvrtek", h: "6:00 – 17:00" },
  { d: "Pátek", h: "6:00 – 15:30" },
  { d: "Sobota a neděle", h: "zavřeno" },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <header className="site-head">
          <a className="brand" href="#" aria-label="Okna HM — plastová okna Pardubice">
            <span className="brand-name">Okna</span>
            <span className="brand-dot" aria-hidden="true" />
            <span className="brand-hm">HM</span>
            <span className="brand-loc">Pardubice</span>
          </a>
          <a className="head-call" href={PHONE_HREF}>
            <span className="head-call-k">Zavolat</span>
            <span className="head-call-v">{PHONE_DISPLAY}</span>
          </a>
        </header>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow r1">Partner OTHERM · plastová okna na Pardubicku</p>
            <h1 className="r2">
              Teplo zůstane doma.
              <br />
              <span className="h1-day">Počasí ať klepe venku.</span>
            </h1>
            <p className="hero-lede r3">
              Vyměníme vám okna tak, aby dovnitř pouštěla světlo a ne průvan. Zaměření,
              výpočet i montáž od lidí, které si sousedé v Pardubicích doporučují dál.
            </p>
            <div className="hero-actions r4">
              <a className="btn btn-day" href={PHONE_HREF}>
                Zavolat {PHONE_DISPLAY}
              </a>
              <a className="btn btn-ghost" href="#nabidka">
                Co vám nabídneme
              </a>
            </div>
          </div>

          <div className="hero-media r3">
            <img
              className="hero-img"
              src="/hero.webp"
              alt="Prosklená plastová okna a dveře v showroomu Okna HM"
              width={880}
              height={640}
              loading="eager"
            />
            <figure className="profil" aria-hidden="true">
              <div className="profil-komory">
                {chambers.map((c) => (
                  <span key={c} style={{ animationDelay: `${0.5 + c * 0.07}s` }} />
                ))}
                <div className="profil-sklo" />
              </div>
              <figcaption className="profil-cap">Řez profilem · 6 komor · 82 mm</figcaption>
            </figure>
          </div>
        </div>

        <ul className="specs">
          {specs.map((s) => (
            <li key={s.k}>
              <span className="spec-k">{s.k}</span>
              <span className="spec-v">{s.v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="offer" id="nabidka">
        <div className="sec-head">
          <p className="sec-index">01 — Nabídka</p>
          <h2>Co u nás vyberete</h2>
          <p className="sec-lede">
            Od jednoho okna do ložnice po kompletní výměnu v celém domě. Kódem si u nás
            firma značí každou skupinu výrobků — vy si vyberete, my doladíme technické detaily.
          </p>
        </div>

        <div className="offer-body">
          <img
            className="offer-img"
            src="/section-1.webp"
            alt="Detail plastového okna s vícekomorovým rámem a izolačním sklem"
            width={720}
            height={880}
            loading="lazy"
          />
          <ul className="offer-grid">
            {offer.map((o) => (
              <li className="offer-card" key={o.code}>
                <span className="offer-code">{o.code}</span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about">
        <div className="sec-head">
          <p className="sec-index">02 — O nás</p>
          <h2>Proč lidé volají zrovna nám</h2>
          <p className="sec-lede">
            Většinu zakázek na Pardubicku dostáváme na doporučení — od sousedů, řemeslníků
            i lidí, kterým okna sedí už roky. Jsme partner OTHERM se zastoupením
            v Pardubicích, Heřmanově Městci a Hlinsku a poradíme s řešením pro každý typ
            stavby, od panelákového bytu po novostavbu.
          </p>
        </div>

        <div className="about-body">
          <div className="about-main">
            <img
              className="about-img"
              src="/section-2.webp"
              alt="Zaměření a montáž plastových oken u zákazníka"
              width={860}
              height={560}
              loading="lazy"
            />
            <ul className="trust">
              {trust.map((t) => (
                <li key={t.head}>
                  <h3>{t.head}</h3>
                  <p>{t.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="card-visit">
            <p className="visit-k">Pobočka Pardubicko</p>
            <p className="visit-addr">Havlíčkova 304, Heřmanův Městec</p>
            <dl className="hours">
              {hours.map((h) => (
                <div className="hours-row" key={h.d}>
                  <dt>{h.d}</dt>
                  <dd>{h.h}</dd>
                </div>
              ))}
            </dl>
            <a className="btn btn-day btn-block" href={PHONE_HREF}>
              Zavolat {PHONE_DISPLAY}
            </a>
            <p className="visit-note">Ozveme se co nejdřív a domluvíme termín zaměření.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
