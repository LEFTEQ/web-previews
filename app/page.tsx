import React from "react";

const kroky = [
  {
    krok: "Tempo",
    pocet: "1",
    nazev: "Vyberte si kurz nebo kroužek",
    text: "Projděte si nabídku a zvolte aktivitu, která zaujala vás nebo vaše děti. Od prvních kroků po soutěžní parket.",
  },
  {
    krok: "Tempo",
    pocet: "2",
    nazev: "Vyplňte přihlášku",
    text: "Na všechny aktivity se přihlásíte jednoduše — stačí pár údajů o vás nebo o vašem dítěti.",
  },
  {
    krok: "Tempo",
    pocet: "3",
    nazev: "Potvrďte a zaplaťte",
    text: "Po potvrzení přihlášky vám přijde informační e-mail, provedete platbu a máte hotovo.",
  },
  {
    krok: "Tempo",
    pocet: "4",
    nazev: "Jde se na parket!",
    text: "Obujte taneční boty a hurá na lekci. Postaráme se, abyste odcházeli vždycky s úsměvem.",
  },
];

const nabidka = [
  {
    cislo: "S",
    nazev: "Kroužky pro děti",
    text: "Taneční kroužky pro všechny věkové skupiny. Děti u nás objeví kouzlo tance pod vedením zkušených lektorů — od úplných začátků.",
    tempo: "Slow · pro nejmenší i školáky",
  },
  {
    cislo: "Q",
    nazev: "Soutěžní tanec",
    text: "Naše soutěžní skupina jezdí na prestižní taneční soutěže včetně Mistrovství ČR a mezinárodních akcí. Od prvních kroků až na parket.",
    tempo: "Quick · pro talentované",
  },
  {
    cislo: "P",
    nazev: "Lekce pro dospělé",
    text: "Profesionální taneční lekce šité na míru vašim schopnostem i cílům. Přijďte sami nebo v páru — naučíme vás standardní i latinu.",
    tempo: "Slow-Quick · pro dospělé",
  },
  {
    cislo: "W",
    nazev: "Svatební tanec",
    text: "Okořeňte svůj velký den. Vyberte si hudbu a s námi z prvního tance uděláte nezapomenutelný výstup.",
    tempo: "Waltz · na míru páru",
  },
  {
    cislo: "A",
    nazev: "Pro-Am lekce",
    text: "Nemáte tanečního partnera? Nevadí. Na Pro-Am lekcích tančíte po boku zkušeného profesionála a objevujete tanec ve dvou.",
    tempo: "Amateur & Pro",
  },
  {
    cislo: "T",
    nazev: "Taneční soustředění",
    text: "Intenzivní soustředění, kde děti zdokonalí kroky a zažijí nezapomenutelné chvíle plné smíchu a nových přátelství.",
    tempo: "Tempo naplno",
  },
];

export default function Page() {
  return (
    <main className="qk">
      <header className="qk-nav">
        <a className="qk-logo" href="#uvod" aria-label="QUICK Olomouc — domů">
          <span className="qk-logo-mark">QUICK</span>
          <span className="qk-logo-sub">Klub sportovního tance · Olomouc</span>
        </a>
        <nav className="qk-nav-links" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#jak">Jak začít</a>
          <a href="#kontakt">Kde tančíme</a>
          <a className="qk-nav-cta" href="#nabidka">Přihlásit se</a>
        </nav>
      </header>

      <section className="qk-hero" id="uvod">
        <div className="qk-hero-media">
          <img
            src="/hero.webp"
            alt="Tanečníci klubu QUICK Olomouc na parketu v pohybu"
            className="qk-hero-img"
          />
          <div className="qk-hero-scrim" aria-hidden="true" />
        </div>
        <div className="qk-hero-inner">
          <p className="qk-eyebrow">Slow · Slow · Quick — Quick</p>
          <h1 className="qk-hero-title">
            Rytmus, který<br />
            <span className="qk-hero-accent">rozkmitá</span> celou Olomouc.
          </h1>
          <p className="qk-hero-lead">
            Taneční kroužky pro děti a kurzy pro dospělé. U nás se z prvních
            nesmělých kroků stává soutěžní jistota — až po Mistrovství ČR
            a mezinárodní parkety.
          </p>
          <div className="qk-hero-actions">
            <a className="qk-btn qk-btn-primary" href="#nabidka">
              Vybrat kurz
            </a>
            <a className="qk-btn qk-btn-ghost" href="#jak">
              Jak se přihlásit
            </a>
          </div>
          <dl className="qk-hero-facts">
            <div>
              <dt>Věk</dt>
              <dd>od 4 let</dd>
            </div>
            <div>
              <dt>Studia</dt>
              <dd>dvě v Olomouci</dd>
            </div>
            <div>
              <dt>Parket</dt>
              <dd>až po MČR</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="qk-section qk-nabidka" id="nabidka">
        <div className="qk-section-head">
          <p className="qk-eyebrow qk-eyebrow-dark">Nabídka · figury na výběr</p>
          <h2 className="qk-h2">
            Šest cest na parket.<br />Vyberte si tu svou.
          </h2>
          <p className="qk-section-lead">
            Ať už chcete tančit sami, s dětmi, nebo se připravit na svatbu —
            máme lekci pro každé tempo. Písmena vlevo jsou taneční figury
            standardu a latiny, ze kterých stavíme každou choreografii.
          </p>
        </div>

        <div className="qk-cards">
          {nabidka.map((it) => (
            <article className="qk-card" key={it.nazev}>
              <span className="qk-card-glyph" aria-hidden="true">
                {it.cislo}
              </span>
              <div className="qk-card-body">
                <h3 className="qk-card-title">{it.nazev}</h3>
                <p className="qk-card-text">{it.text}</p>
                <p className="qk-card-tempo">{it.tempo}</p>
              </div>
            </article>
          ))}
        </div>

        <figure className="qk-band">
          <img
            src="/section-1.webp"
            alt="Pár klubu QUICK v soutěžním držení během tréninku"
            className="qk-band-img"
          />
          <figcaption className="qk-band-cap">
            Soutěžní skupina QUICK při tréninku ve studiu Stupkova.
          </figcaption>
        </figure>
      </section>

      <section className="qk-section qk-jak" id="jak">
        <div className="qk-jak-grid">
          <div className="qk-jak-lead">
            <p className="qk-eyebrow qk-eyebrow-dark">Jak začít · čtyři takty</p>
            <h2 className="qk-h2">
              Od přihlášky<br />na parket ve čtyřech taktech.
            </h2>
            <p className="qk-section-lead">
              Žádné složitosti. Přihlášení zvládnete během chvilky a zbytek
              už necháte na nás a našich trenérech.
            </p>
            <a className="qk-btn qk-btn-primary" href="#nabidka">
              Vybrat kurz a přihlásit se
            </a>
          </div>

          <ol className="qk-steps">
            {kroky.map((s) => (
              <li className="qk-step" key={s.pocet}>
                <span className="qk-step-num" aria-hidden="true">
                  {s.pocet}
                </span>
                <div>
                  <h3 className="qk-step-title">{s.nazev}</h3>
                  <p className="qk-step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="qk-mista" id="kontakt">
          <figure className="qk-mista-media">
            <img
              src="/section-2.webp"
              alt="Sál tanečního studia klubu QUICK Olomouc"
              className="qk-mista-img"
            />
          </figure>
          <div className="qk-mista-body">
            <p className="qk-eyebrow qk-eyebrow-dark">Kde tančíme · Olomouc</p>
            <h3 className="qk-h3">Dva parkety, oba v centru</h3>
            <div className="qk-mista-list">
              <div className="qk-misto">
                <h4>Taneční studio Stupkova</h4>
                <p>
                  Hlavní studio, Stupkova 18, 779 00 Olomouc. Parkování před
                  budovou (bývalý Telecom). Vchod přes vrátnici, 3. patro,
                  místnost&nbsp;T357.
                </p>
              </div>
              <div className="qk-misto">
                <h4>Dům u parku</h4>
                <p>
                  Prostorný víceúčelový sál pro náročnější tréninky, Palackého
                  21, 779 00 Olomouc. Vchod dvorním traktem posuvnými dveřmi ke
                  schodišti k sálu.
                </p>
              </div>
            </div>
            <div className="qk-kontakt-row">
              <a href="tel:+420728749336">+420 728 749 336</a>
              <a href="mailto:info@kstquick.cz">info@kstquick.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
