import type { CSSProperties } from "react";

export default function Page() {
  const hours: { day: string; time: string; extended?: boolean }[] = [
    { day: "Pondělí", time: "7:15 – 15:00" },
    { day: "Úterý", time: "7:15 – 18:00", extended: true },
    { day: "Středa", time: "7:15 – 15:00" },
    { day: "Čtvrtek", time: "7:15 – 18:00", extended: true },
    { day: "Pátek", time: "7:15 – 15:00" },
  ];

  const services: { code: string; name: string; desc: string }[] = [
    {
      code: "LF",
      name: "Lymfoterapie",
      desc: "Manuální mízní drenáž a přístrojová presoterapie pro odvod nahromaděné lymfy. Základ léčby lymfedému horních i dolních končetin.",
    },
    {
      code: "FT",
      name: "Fyzioterapie",
      desc: "Cvičení a techniky podporující proudění mízy, hybnost a pohyblivost. Navazuje na drenáž a udržuje výsledek mezi termíny.",
    },
    {
      code: "LT",
      name: "Lymfotaping",
      desc: "Elastické tejpy, které jemně nadzvednou kůži a otevřou mízní cesty. Účinek pokračuje i doma, mezi návštěvami ambulance.",
    },
    {
      code: "NP",
      name: "Nutriční poradenství",
      desc: "Úprava jídelníčku, která snižuje zátěž tkání a podporuje léčbu otoků. Konkrétní kroky přizpůsobené vašemu stavu.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#hero" aria-label="Lymfocentrum, úvodní stránka">
          <span className="wordmark__lymfo">Lymfo</span>
          <span className="wordmark__centrum">centrum</span>
        </a>
        <a className="topbar__call" href="tel:+420385521451">
          <span className="topbar__callLabel">Objednání</span>
          385&nbsp;521&nbsp;451
        </a>
      </header>

      <section className="hero" id="hero">
        <div className="hero__media">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Manuální lymfatická drenáž v ambulanci Lymfocentra v Českých Budějovicích"
            width={1600}
            height={1200}
          />
          <span className="hero__flow" aria-hidden="true">
            <span className="hero__node" />
            <span className="hero__node" />
            <span className="hero__node" />
          </span>
        </div>

        <div className="hero__body">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Ambulance pro léčbu lymfedému · České Budějovice
          </p>
          <h1 className="hero__title">
            Pomáháme mízě znovu
            <span className="hero__accent"> proudit.</span>
          </h1>
          <p className="hero__lede">
            Otoky z nefunkčního mízního systému mají řešení. V Lymfocentru na
            Vodňanské spojujeme manuální drenáž, presoterapii a fyzioterapii do
            jednoho promyšleného plánu — krok za krokem, dokud se otok nezmírní.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420385521451">
              Zavolat pro termín
            </a>
            <a className="btn btn--ghost" href="#navsteva">
              Jak probíhá návštěva
            </a>
          </div>
          <p className="hero__note">
            Voláte nejlépe mezi 11.–15. hodinou. Nedovoláte se? Napište SMS na
            <a href="sms:+420777691813"> 777&nbsp;691&nbsp;813</a> a ozveme se zpět.
          </p>
        </div>
      </section>

      <section className="services" id="navsteva" aria-labelledby="services-title">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Co u nás projdete</p>
          <h2 className="section__title" id="services-title">
            Čtyři nástroje, jeden cíl — zmírnit otok
          </h2>
          <p className="section__intro">
            Léčbu skládáme podle vašeho nálezu. Většina pacientů kombinuje
            drenáž s presoterapií a domácí péčí; ostatní metody přidáváme tam,
            kde dávají smysl.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <article className="card" key={s.code}>
              <span className="card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="card__name">{s.name}</h3>
              <p className="card__desc">{s.desc}</p>
            </article>
          ))}
        </div>

        <div className="services__figure">
          <img
            className="services__img"
            src="/section-1.webp"
            alt="Přístrojová presoterapie dolních končetin v Lymfocentru"
            width={1200}
            height={800}
          />
          <div className="services__caption">
            <p className="services__captionKicker">Presoterapie</p>
            <p className="services__captionText">
              Návleky s postupně se plnícími komorami pomáhají odvádět lymfu
              směrem k trupu. Přineste si prosím vlastní kompresní prádlo,
              prostěradlo a ručník — hygiena je pro nás zásadní.
            </p>
          </div>
        </div>
      </section>

      <section className="visit" aria-labelledby="visit-title">
        <div className="visit__inner">
          <div className="visit__intro">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Praktické · než přijdete
            </p>
            <h2 className="section__title section__title--light" id="visit-title">
              Objednáte se předem, na termín se vždy najde čas
            </h2>
            <p className="visit__lede">
              Lymfoterapie, fyzioterapie i nutriční poradenství probíhají jen na
              předem domluvený termín. Díky tomu se vám věnujeme naplno a bez
              čekání v čekárně.
            </p>

            <ul className="visit__list">
              <li>
                <span className="visit__listMark" aria-hidden="true" />
                Vlastní pomůcky s sebou — ručník, prostěradlo, prádlo na
                presoterapii i kompresi.
              </li>
              <li>
                <span className="visit__listMark" aria-hidden="true" />
                Nestátní zdravotnické zařízení, Vodňanská 6, České Budějovice.
              </li>
              <li>
                <span className="visit__listMark" aria-hidden="true" />
                Nedovoláte se? Pošlete SMS a my se ozveme, jakmile to půjde.
              </li>
            </ul>
          </div>

          <aside className="hours" aria-label="Ordinační doba">
            <div className="hours__head">
              <h3 className="hours__title">Ordinační doba</h3>
              <span className="hours__badge">objednaní pacienti</span>
            </div>
            <ul className="hours__list">
              {hours.map((h) => (
                <li className="hours__row" key={h.day}>
                  <span className="hours__day">{h.day}</span>
                  <span className="hours__dots" aria-hidden="true" />
                  <span className="hours__time">
                    {h.time}
                    {h.extended ? (
                      <span className="hours__tag">do večera</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
            <p className="hours__break">Obědová pauza 12:00 – 12:45</p>

            <div className="hours__contact">
              <a className="hours__phone" href="tel:+420385521451">
                385&nbsp;521&nbsp;451
              </a>
              <a className="hours__sms" href="sms:+420777691813">
                SMS 777&nbsp;691&nbsp;813
              </a>
              <a className="hours__mail" href="mailto:lymfocentrum@email.cz">
                lymfocentrum@email.cz
              </a>
            </div>
          </aside>
        </div>

        <figure className="visit__figure">
          <img
            className="visit__img"
            src="/section-2.webp"
            alt="Prostředí ambulance Lymfocentra v Českých Budějovicích"
            width={1200}
            height={800}
          />
          <figcaption className="visit__figcap">
            Naše ordinace na Vodňanské — klidné zázemí pro objednané pacienty.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
