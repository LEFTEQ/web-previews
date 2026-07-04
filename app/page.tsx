import type { CSSProperties } from "react";

export default function Page() {
  const departments = [
    {
      code: "01",
      name: "Ruční nářadí",
      note: "Kladiva, klíče, měřidla, pilníky. Do ruky, ne do koše.",
    },
    {
      code: "02",
      name: "Spojovací materiál",
      note: "Šrouby, vruty, hmoždinky, matice — po kusech i po kilech.",
    },
    {
      code: "03",
      name: "Elektro nářadí",
      note: "Makita, aku i síť. Se záručním i pozáručním servisem.",
    },
    {
      code: "04",
      name: "Barvy a laky",
      note: "Míchání odstínů na počkání, štětce, válečky, ředidla.",
    },
    {
      code: "05",
      name: "Stavba",
      note: "Kotvení, izolace, drobná stavební chemie a nářadí.",
    },
    {
      code: "06",
      name: "Hospodářské potřeby",
      note: "Brikety, domácnost, vše okolo dvora i dílny.",
    },
  ];

  const numbers = [
    { value: "1800", unit: "m²", label: "prodejní plochy pod jednou střechou" },
    { value: "6000+", unit: "kusů", label: "produktů máme skladem každý den" },
    { value: "30", unit: "let", label: "za pultem od první prodejny v roce 1992" },
  ];

  const reviews = [
    {
      text: "Cena, zboží skladem, v dostupné vzdálenosti od Brna. Prostě e-shop, co funguje.",
      date: "12. 9. 2021",
    },
    {
      text: "Příjemná, rychlá obsluha, co umí poradit. Za pultem lidi, ne roboti.",
      date: "4. 8. 2021",
    },
    {
      text: "Přišlo rychle, pěkně zabaleno, bez problémů. Přesně jak má být.",
      date: "4. 7. 2021",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="STAPROP-Marvan, železářství Brno">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__slot" />
          </span>
          <span className="wordmark__text">
            STAPROP<span className="wordmark__dash">—</span>MARVAN
          </span>
        </a>
        <span className="topbar__tag">Železářství &amp; nářadí · Brno-Kuřim</span>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Regály železářství STAPROP-Marvan plné ručního nářadí, šroubů a spojovacího materiálu"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Otevřeno od 1992</p>
          <h1 className="hero__title">
            Všechno,
            <br />
            co drží
            <br />
            <span className="hero__accent">pohromadě.</span>
          </h1>
          <p className="hero__lead">
            Šroub, vrut, hmoždinka, klíč na míru. Železářství, kde ještě
            poradí člověk od pultu a nářadí si vyzvednete ještě dnes.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#nabidka">
              Projít oddělení
            </a>
            <a className="btn btn--ghost" href="tel:+420541230294">
              Zavolat 541 230 294
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="nabidka" aria-labelledby="nabidka-title">
        <div className="section__head">
          <p className="eyebrow">Šest oddělení</p>
          <h2 className="section__title" id="nabidka-title">
            Rozdělené jako v regálech u nás v obchodě
          </h2>
          <p className="section__intro">
            Denně doplňujeme, denně expedujeme. Kód u každého oddělení je
            tentýž, který visí nad uličkou v prodejně na Tišnovské.
          </p>
        </div>

        <ol className="depts">
          {departments.map((d) => (
            <li className="dept" key={d.code}>
              <span className="dept__code">{d.code}</span>
              <div className="dept__body">
                <h3 className="dept__name">{d.name}</h3>
                <p className="dept__note">{d.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="section__figure">
          <img
            src="/section-1.webp"
            alt="Zásuvky a přihrádky se spojovacím materiálem — šrouby, vruty a matice tříděné po velikostech"
            className="section__img"
          />
          <p className="section__caption">
            Spojovací materiál po kusech i po kilech. Přineste vzorek, najdeme
            protějšek.
          </p>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="onas-title">
        <div className="section__head">
          <p className="eyebrow eyebrow--light">Pár slov o nás</p>
          <h2 className="section__title" id="onas-title">
            Rodinné železářství, které pamatuje ještě metrickou míru z hlavy
          </h2>
        </div>

        <div className="about">
          <div className="about__text">
            <p>
              Psal se rok 1992, když jsme otevřeli první prodejnu v Kuřimi.
              Od začátku vybíráme dodavatele podle jediného měřítka — zda
              obstojí, když se na věc někdo skutečně opře.
            </p>
            <p>
              Rychle, výhodně, s důrazem na servis a bezchybné poradenství.
              Přesně tak, jak jsme zvyklí už přes třicet let.
            </p>
          </div>

          <dl className="figures">
            {numbers.map((n) => (
              <div className="figure" key={n.label}>
                <dt className="figure__value">
                  {n.value}
                  <span className="figure__unit">{n.unit}</span>
                </dt>
                <dd className="figure__label">{n.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="Prodejní plocha železářství STAPROP-Marvan s dlouhými regály nářadí a materiálu"
            className="about__img"
          />
        </div>

        <ul className="reviews" aria-label="Recenze zákazníků">
          {reviews.map((r) => (
            <li className="review" key={r.date}>
              <p className="review__text">„{r.text}“</p>
              <p className="review__date">Ověřený zákazník · {r.date}</p>
            </li>
          ))}
        </ul>

        <p className="visit">
          <span className="visit__label">Zastavte se</span>
          Tišnovská 36/8, Kuřim · po–pá i o víkendu ·{" "}
          <a className="visit__link" href="tel:+420541230294">
            541 230 294
          </a>
        </p>
      </section>
    </main>
  );
}
