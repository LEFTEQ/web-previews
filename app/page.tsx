import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "§ 20",
      title: "Audit účetní závěrky",
      body: "Ověření závěrky pro obchodní firmy i výrobní podniky. Vydáme výrok, který obstojí před bankou, valnou hromadou i finančním úřadem.",
      detail: "Komora auditorů ČR, evidenční č. 448",
    },
    {
      code: "§ 23",
      title: "Daňové poradenství",
      body: "Přiznání k dani z příjmů i DPH, optimalizace, zastupování při kontrole. Tuzemské i zahraniční společnosti a fyzické osoby.",
      detail: "Komora daňových poradců ČR",
    },
    {
      code: "§ 4",
      title: "Vedení účetnictví",
      body: "Účetnictví od A do Z pro podnikatele i neziskové subjekty. Nastavíme systém, účtujeme a hlídáme termíny za vás.",
      detail: "Od prvotního dokladu po závěrku",
    },
    {
      code: "§ 38",
      title: "Mzdy a personalistika",
      body: "Zpracování mezd, odvody, přihlášky a odhlášky na správách. Diskrétně a přesně, každý měsíc bez zpoždění.",
      detail: "Mzdová agenda pod jednou střechou",
    },
  ];

  const facts = [
    { value: "2005", label: "Rok založení kanceláře" },
    { value: "448", label: "Evidenční číslo u Komory auditorů ČR" },
    { value: "29 let", label: "Praxe v auditu, daních a účetnictví" },
  ];

  return (
    <main className="zh">
      <header className="zh-top">
        <a className="zh-mark" href="#" aria-label="ZH&amp;Partners, domů">
          <span className="zh-mark__zh">ZH</span>
          <span className="zh-mark__amp">&amp;</span>
          <span className="zh-mark__word">Partners</span>
        </a>
        <nav className="zh-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#kancelar">Kancelář</a>
          <a className="zh-nav__loc" href="#kancelar">Liberec</a>
        </nav>
      </header>

      <section className="zh-hero" aria-labelledby="zh-hero-title">
        <div className="zh-hero__ledger">
          <div className="zh-hero__text">
            <p className="zh-eyebrow">Auditoři a daňoví poradci &middot; Liberec, od roku 2005</p>
            <h1 id="zh-hero-title">
              Vaše čísla<br />
              <span className="zh-hero__accent">sedí na haléř.</span>
            </h1>
            <p className="zh-hero__lead">
              Vedeme účetnictví, počítáme daně a ověřujeme závěrky pro živnostníky,
              výrobní podniky i obchodní firmy. Sečteno, podtrženo — beze zbytku.
            </p>
            <div className="zh-hero__cta">
              <a className="zh-btn" href="#sluzby">Prohlédnout služby</a>
              <a className="zh-btn zh-btn--ghost" href="tel:+420483034156">
                Zavolat 483&nbsp;034&nbsp;156
              </a>
            </div>
          </div>

          <table className="zh-tb" aria-label="Ukázka uzávěrky">
            <caption>Roční uzávěrka &middot; položky sedí do posledního řádku</caption>
            <tbody>
              <tr>
                <th scope="row">Výnosy</th>
                <td>4&nbsp;218&nbsp;600</td>
              </tr>
              <tr>
                <th scope="row">Náklady</th>
                <td>3&nbsp;712&nbsp;140</td>
              </tr>
              <tr>
                <th scope="row">Základ daně</th>
                <td>506&nbsp;460</td>
              </tr>
              <tr className="zh-tb__sum">
                <th scope="row">Rozdíl</th>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <figure className="zh-hero__img">
          <img
            src="/hero.webp"
            alt="Tým daňových poradců ZH&amp;Partners při práci nad účetní závěrkou"
            width={1200}
            height={800}
          />
        </figure>
      </section>

      <section id="sluzby" className="zh-sec" aria-labelledby="zh-sluzby-title">
        <div className="zh-sec__head">
          <p className="zh-eyebrow">Podle paragrafů, ne podle nálady</p>
          <h2 id="zh-sluzby-title">S čím vám pomůžeme</h2>
          <p className="zh-sec__intro">
            Od nastavení účetního systému, přes vlastní účtování a zdanění, až po
            složité daňové otázky a ověření závěrky. Právní a oceňovací služby k tomu
            zajistíme přes prověřené externí specialisty.
          </p>
        </div>

        <ul className="zh-grid">
          {services.map((s) => (
            <li key={s.code} className="zh-card">
              <span className="zh-card__code" aria-hidden="true">
                {s.code}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <p className="zh-card__detail">{s.detail}</p>
            </li>
          ))}
        </ul>

        <figure className="zh-band">
          <img
            src="/section-1.webp"
            alt="Detail zpracování daňového přiznání a účetních dokladů v kanceláři ZH&amp;Partners"
            width={1400}
            height={700}
          />
        </figure>
      </section>

      <section id="kancelar" className="zh-about" aria-labelledby="zh-about-title">
        <div className="zh-about__grid">
          <figure className="zh-about__img">
            <img
              src="/section-2.webp"
              alt="Kancelář ZH&amp;Partners v Liberci"
              width={900}
              height={1100}
            />
          </figure>

          <div className="zh-about__text">
            <p className="zh-eyebrow">Kdo za čísly stojí</p>
            <h2 id="zh-about-title">Dvě zapsané kanceláře, jeden tým</h2>
            <p>
              <strong>ZH&amp;Partners s.r.o.</strong> se specializuje na daňové
              poradenství a vedení účetnictví. Je zapsaná v seznamu právnických osob
              poskytujících daňové poradenství u Komory daňových poradců ČR.
            </p>
            <p>
              <strong>ZH&amp;Partners Audit s.r.o.</strong> poskytuje auditorské služby
              a je evidovaná u Komory auditorů ČR pod číslem 448. Obě firmy vznikly
              v Liberci v roce 2005.
            </p>

            <dl className="zh-facts">
              {facts.map((f) => (
                <div key={f.label} className="zh-facts__item">
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>

            <p className="zh-about__note">
              Naši práci vyhledávají tuzemské i zahraniční firmy — od průmyslových
              korporací po neziskové subjekty. Vždy s důrazem na klientský přístup
              a diskrétnost.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
