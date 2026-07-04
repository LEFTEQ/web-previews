import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      code: "01",
      title: "Vedení účetnictví",
      desc: "Kompletní zpracování účetnictví i daňové evidence. Každý doklad projde interní účetní a daňovou kontrolou — nikdy se neztratí a nikdy neputuje na úřad bez druhého páru očí.",
    },
    {
      code: "02",
      title: "Daňové poradenství",
      desc: "Přiznání k dani z příjmů, DPH, silniční dani. Řekneme vám dopředu, kolik zaplatíte a kdy — a kde ještě legálně ušetřit.",
    },
    {
      code: "03",
      title: "Mzdová agenda",
      desc: "Výplaty, odvody, přihlášky a odhlášky zaměstnanců, roční zúčtování. Vaši lidé dostanou správnou částku ve správný den.",
    },
    {
      code: "04",
      title: "Zastupování na úřadech",
      desc: "Finanční úřad, správa sociálního zabezpečení, zdravotní pojišťovny. Po úřadech běháme my, vy máte čas na podnikání.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Calculus, účetní a daňové poradenství Liberec">
          <span className="wordmark__eq" aria-hidden="true">=</span>
          <span className="wordmark__name">Calculus</span>
          <span className="wordmark__unit">s.r.o.</span>
        </a>
        <a className="topbar__phone" href="tel:+420603547517">+420 603 547 517</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__ledger">
          <div className="hero__eyebrow">
            <span>Účetní a daňové poradenství</span>
            <span className="hero__place">Liberec</span>
          </div>
          <h1 id="hero-title" className="hero__title">
            Čísla, která
            <br />
            <span className="hero__title--accent">sedí na haléř.</span>
          </h1>
          <p className="hero__lead">
            Vedeme účetnictví, řešíme daně a mzdy pro liberecké firmy a živnostníky.
            Každý doklad prochází dvojí kontrolou — účetní a daňovou. Vy máte klid,
            čísla máme my.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420603547517">Zavolat účetní</a>
            <a className="btn btn--ghost" href="mailto:calculus.sro@volny.cz">Napsat e-mail</a>
          </div>

          <dl className="hero__tape" aria-label="Souhrn">
            <div className="hero__tape-row">
              <dt>Kontrola dokladů</dt>
              <dd>2×</dd>
            </div>
            <div className="hero__tape-row">
              <dt>Účetnictví + daně</dt>
              <dd>pod jednou střechou</dd>
            </div>
            <div className="hero__tape-row hero__tape-row--total">
              <dt>Sídlo</dt>
              <dd>Nad Strání 1430, Liberec</dd>
            </div>
          </dl>
        </div>

        <figure className="hero__figure">
          <img
            src="/hero.webp"
            alt="Účetní zpracovává doklady a daňové výkazy v kanceláři Calculus v Liberci"
            className="hero__img"
            width={960}
            height={1200}
          />
          <figcaption className="hero__stamp" aria-hidden="true">
            <span className="hero__stamp-line">Zkontrolováno</span>
            <span className="hero__stamp-line hero__stamp-line--strong">bez chyby</span>
          </figcaption>
        </figure>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Rozpis položek</p>
          <h2 id="services-title" className="section-head__title">Co pro vás účtujeme</h2>
          <p className="section-head__note">
            Čtyři služby, jeden kontakt. Domluvíme se na tom, co potřebujete —
            od jednoho přiznání ročně po kompletní účetnictví firmy.
          </p>
        </div>

        <ol className="ledger">
          {sluzby.map((s) => (
            <li className="ledger__row" key={s.code}>
              <span className="ledger__code" aria-hidden="true">{s.code}</span>
              <div className="ledger__body">
                <h3 className="ledger__title">{s.title}</h3>
                <p className="ledger__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="services__figure">
          <img
            src="/section-1.webp"
            alt="Detail účetních výkazů, kalkulačky a dokladů připravených ke zpracování"
            className="services__img"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      <section className="about" aria-labelledby="about-title">
        <figure className="about__figure">
          <img
            src="/section-2.webp"
            alt="Kancelář Calculus s.r.o. v Liberci, kde se zpracovává účetnictví klientů"
            className="about__img"
            width={1000}
            height={1000}
          />
        </figure>
        <div className="about__body">
          <p className="section-head__eyebrow">Kdo za čísly stojí</p>
          <h2 id="about-title" className="about__title">
            Kvalifikovaný účetní s praxí — ne anonymní software
          </h2>
          <p className="about__text">
            Vaše účetnictví zpracuje účetní s potřebným vzděláním a praxí, ne
            náhodná brigáda. Vysokou kvalitu drží propojení účetnictví s daňovým
            poradenstvím: co jeden zaúčtuje, druhý zkontroluje z daňového pohledu.
          </p>
          <p className="about__text">
            Jsme tu i pro ty, kterým čísla nic neříkají. Potřebujete poradit,
            vysvětlit fakturu nebo rozhodnutí finančního úřadu? Zavolejte —
            řekneme to lidsky.
          </p>

          <ul className="about__contact">
            <li>
              <span className="about__label">Adresa</span>
              <span>Nad Strání 1430, Liberec 30, 463 11</span>
            </li>
            <li>
              <span className="about__label">Telefon</span>
              <a href="tel:+420603547517">+420 603 547 517</a>
            </li>
            <li>
              <span className="about__label">E-mail</span>
              <a href="mailto:calculus.sro@volny.cz">calculus.sro@volny.cz</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
