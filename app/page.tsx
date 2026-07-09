import type { CSSProperties } from "react";

export default function Page() {
  const perks = [
    {
      code: "01",
      title: "Čip otevře všechno",
      body: "Zaregistruješ se, dostaneš vstupní čip. Ten tě pustí do dveří, ke skříňce i k občerstvení. Žádná recepce, žádné čekání u pultu.",
    },
    {
      code: "02",
      title: "Rezervuješ si čas",
      body: "Vybereš termín, kdy chceš přijít. V ten čas máš celé fitko jen pro sebe — nebo pro toho, koho si vezmeš s sebou.",
    },
    {
      code: "03",
      title: "Trénuješ po svém",
      body: "Vlastní hudba, klimatizace nastavená podle tebe, ručník v ceně. Přijdeš, odtrénuješ, odejdeš. Nikdo tě neruší.",
    },
  ];

  const plans = [
    {
      name: "Jednorázový vstup",
      price: "220",
      unit: "Kč / vstup",
      lead: false,
      note: "Nejlíp na vyzkoušení",
      items: [
        "Neomezená WiFi a vlastní hudba",
        "Ručník v ceně",
        "Nastavení klimatizace",
        "Samoobslužné občerstvení",
        "Vlastní čip za 100 Kč",
      ],
      cta: "Rezervovat vstup",
    },
    {
      name: "Předplatné měsíčně",
      price: "2 220",
      unit: "Kč / měsíc",
      lead: true,
      note: "Neomezeně, kdykoli",
      items: [
        "Neomezený počet vstupů",
        "WiFi, vlastní hudba, klimatizace",
        "Ručník v ceně",
        "Samoobslužné občerstvení",
        "Vlastní čip zdarma",
      ],
      cta: "Založit předplatné",
    },
    {
      name: "Balíček 9+1",
      price: "1 880",
      unit: "za 10 vstupů",
      lead: false,
      note: "Desátý zdarma",
      items: [
        "10 vstupů, jeden navíc",
        "WiFi, vlastní hudba, klimatizace",
        "Ručník v ceně",
        "Samoobslužné občerstvení",
      ],
      cta: "Koupit balíček",
    },
  ];

  return (
    <main className="ml">
      <header className="ml-topbar">
        <a className="ml-wordmark" href="#top" aria-label="Maximal Limit — domů">
          <span className="ml-wordmark__max">MAXIMAL</span>
          <span className="ml-wordmark__limit">LIMIT</span>
        </a>
        <div className="ml-topbar__meta">
          <span className="ml-badge">24/7 · samoobsluha</span>
          <a className="ml-topbar__phone" href="tel:+420399299827">+420 399 299 827</a>
        </div>
      </header>

      <section className="ml-hero" id="top">
        <div className="ml-hero__frame">
          <img
            className="ml-hero__img"
            src="/hero.webp"
            alt="Interiér soukromého fitness Maximal Limit v Českých Budějovicích — činky a posilovací stroje připravené k tréninku"
            loading="eager"
            decoding="async"
          />
          <div className="ml-hero__scan" aria-hidden="true">
            <span className="ml-hero__scanlabel">PŘILOŽ ČIP</span>
            <span className="ml-hero__scandot" />
          </div>
        </div>

        <div className="ml-hero__copy">
          <p className="ml-eyebrow">Soukromé fitness · České Budějovice, Týn nad Vltavou, Tábor</p>
          <h1 className="ml-hero__title">
            Celé fitko<br />
            <em>jen pro tebe.</em>
          </h1>
          <p className="ml-hero__lead">
            Malé, dobře vybavené a úplně samoobslužné. Přijdeš na čas, který si
            rezervuješ, a trénuješ sám — nebo jen s tím, koho pozveš. Tvoje fitness,
            tvoje pravidla.
          </p>
          <div className="ml-hero__actions">
            <a className="ml-btn ml-btn--primary" href="#cenik">Rezervovat termín</a>
            <a className="ml-btn ml-btn--ghost" href="#jak">Jak to funguje</a>
          </div>
        </div>
      </section>

      <section className="ml-jak" id="jak" aria-labelledby="jak-h">
        <div className="ml-section-head">
          <p className="ml-eyebrow ml-eyebrow--dark">Od čipu k tréninku ve třech krocích</p>
          <h2 id="jak-h" className="ml-h2">Jak to funguje</h2>
        </div>

        <div className="ml-jak__grid">
          <ol className="ml-steps">
            {perks.map((p) => (
              <li className="ml-step" key={p.code}>
                <span className="ml-step__code" aria-hidden="true">{p.code}</span>
                <div>
                  <h3 className="ml-step__title">{p.title}</h3>
                  <p className="ml-step__body">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="ml-jak__figure">
            <img
              className="ml-jak__img"
              src="/section-1.webp"
              alt="Prostor Maximal Limit připravený k samoobslužnému tréninku — jasně osvětlené vybavení bez davu lidí"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="ml-jak__cap">
              Wifi zdarma, vlastní hudba, ovládání klimatizace, ručník v ceně —
              a profesionální vybavení i pro nejnáročnější trénink.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ml-cenik" id="cenik" aria-labelledby="cenik-h">
        <div className="ml-cenik__intro">
          <div className="ml-section-head">
            <p className="ml-eyebrow">Bez závazku na dlouho — vyber si podle sebe</p>
            <h2 id="cenik-h" className="ml-h2 ml-h2--light">Náš ceník</h2>
          </div>
          <figure className="ml-cenik__figure">
            <img
              className="ml-cenik__img"
              src="/section-2.webp"
              alt="Detail vybavení soukromého fitness Maximal Limit"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="ml-plans">
          {plans.map((plan) => (
            <article
              className={"ml-plan" + (plan.lead ? " ml-plan--lead" : "")}
              key={plan.name}
              style={{ "--i": 0 } as CSSProperties}
            >
              {plan.lead && <span className="ml-plan__flag">Nejoblíbenější</span>}
              <h3 className="ml-plan__name">{plan.name}</h3>
              <p className="ml-plan__note">{plan.note}</p>
              <p className="ml-plan__price">
                <span className="ml-plan__num">{plan.price}</span>
                <span className="ml-plan__unit">{plan.unit}</span>
              </p>
              <ul className="ml-plan__list">
                {plan.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a className={"ml-btn " + (plan.lead ? "ml-btn--primary" : "ml-btn--outline")} href="#top">
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="ml-cenik__foot">
          Doprovod 110 Kč za osobu. Roční předplatné 22 200 Kč. Máš dotaz?
          Napiš na <a href="mailto:info@maximal-limit.cz">info@maximal-limit.cz</a>.
        </p>
      </section>
    </main>
  );
}
