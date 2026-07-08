import type { CSSProperties } from "react";

const services = [
  {
    tag: "Sedačky a křesla",
    title: "Přečalounění sedaček a křesel",
    body:
      "Starou pohovku rozebereme až na dřevěnou kostru, vyměníme popruhy, molitan i pružiny a potáhneme novou látkou nebo kůží. Ze sedačky, do které se vám dnes propadá záda, uděláme kus, který pevně drží tvar dalších deset let.",
    detail: "Popruhy \u00b7 pružiny \u00b7 molitan \u00b7 potah",
  },
  {
    tag: "Dveře",
    title: "Čalounění dveří",
    body:
      "Prošívané čalounění bytových i vchodových dveří — koženka nebo látka napnutá na měkkou výplň, dekorativní hřebíčky a knoflíky do vzoru. Utlumí hluk z chodby, zateplí a dveře rázem vypadají jako z jiného bytu.",
    detail: "Koženka \u00b7 knoflíky \u00b7 dekorační hřebíčky",
  },
  {
    tag: "Nábytek na míru",
    title: "Výroba nábytku na zakázku",
    body:
      "Naše stolařská dílna postaví kuchyňskou linku, lavici do jídelního koutu i čalouněné čelo postele přesně na rozměr vašeho bytu. Dřevo, kování i látku vybíráme společně s vámi — nic z katalogu na sílu.",
    detail: "Kuchyně \u00b7 lavice \u00b7 čela postelí",
  },
];

const steps = [
  {
    n: "01",
    title: "Přijedeme se podívat",
    body:
      "Domluvíme se telefonicky a přijedeme kus přeměřit k vám domů, nebo ho přivezete do dílny v Olomouci. Rovnou řekneme, co se dá zachránit a co ne.",
  },
  {
    n: "02",
    title: "Vyberete látku, my dáme cenu",
    body:
      "Ukážeme vzorník potahů a kůží, poradíme, co vydrží dětem a psovi. Cenu i termín dostanete napsané předem — a držíme se jich.",
  },
  {
    n: "03",
    title: "Ušijeme, potáhneme, přivezeme",
    body:
      "Kus přečalouníme v dílně a hotový vám ho přivezeme až do bytu. Zakázky bereme po celé ČR i na Slovensko.",
  },
];

const references = [
  {
    quote:
      "Vyměnili čalounění za látkové, domluva byla perfektní a odvedená práce také. Naprostá spokojenost, na všem jsme se dohodli.",
    name: "Věra K.",
    what: "Přečalounění sedací soupravy",
  },
  {
    quote:
      "Sedací souprava je opravena rychle a kvalitně, včetně dopravy až do bytu. Cena byla dodržena dle domluvy.",
    name: "Jindřich P.",
    what: "Oprava sedací soupravy",
  },
  {
    quote:
      "Roztrhanou koženou sedačku do auta udělali za dva dny. Práce 10/10, rychlost 11/10. Přijímací slečna velmi příjemná.",
    name: "X. C.",
    what: "Kožené čalounění do auta",
  },
];

export default function Page() {
  return (
    <main className="ac">
      <header className="ac-top">
        <a className="ac-mark" href="#top" id="top">
          <span className="ac-mark-ac">AC</span>
          <span className="ac-mark-rest">Interiér</span>
          <span className="ac-mark-sub">čalounictví \u00b7 Olomouc</span>
        </a>
        <nav className="ac-nav" aria-label="Hlavní">
          <a href="#sluzby">Co děláme</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#reference">Reference</a>
        </nav>
      </header>

      <section className="ac-hero" aria-labelledby="hero-nadpis">
        <div className="ac-hero-copy">
          <p className="ac-eyebrow">Čalounická a stolařská dílna &middot; Olomouc</p>
          <h1 id="hero-nadpis">
            Napneme novou
            <span className="ac-hl"> kůži</span> na starou
            <span className="ac-hl"> kostru</span>.
          </h1>
          <p className="ac-lead">
            Sedačku, které se propadá sedák, křeslo po babičce i dveře, co
            hučí do chodby — rozebereme na kostru, vyměníme popruhy a molitan
            a potáhneme látkou, kterou si vyberete. Ruční řemeslo, jak se
            dělalo.
          </p>
          <div className="ac-hero-cta">
            <a className="ac-btn" href="tel:+420585000000">Zavolat do dílny</a>
            <a className="ac-btn ac-btn-ghost" href="#sluzby">Co všechno opravíme</a>
          </div>
          <dl className="ac-facts">
            <div>
              <dt>Dílna</dt>
              <dd>Olomouc</dd>
            </div>
            <div>
              <dt>Zakázky</dt>
              <dd>Celá ČR i SK</dd>
            </div>
            <div>
              <dt>Doprava</dt>
              <dd>Až do bytu</dd>
            </div>
          </dl>
        </div>
        <figure className="ac-hero-fig">
          <img
            src="/hero.webp"
            alt="Detail ručně čalouněného nábytku z dílny AC Interiér — napnutá látka a prošívání"
            width={900}
            height={1100}
          />
          <figcaption>Detail z dílny — potah napínaný ručně, steh po stehu.</figcaption>
        </figure>
      </section>

      <section className="ac-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ac-sec-head">
          <p className="ac-eyebrow">Co u nás vezmeme do ruky</p>
          <h2 id="sluzby-nadpis">Od jednoho křesla po celou kuchyň</h2>
        </div>
        <div className="ac-cards">
          {services.map((s, i) => (
            <article className="ac-card" key={s.title} style={{ "--i": i } as CSSProperties}>
              <p className="ac-card-tag">{s.tag}</p>
              <h3>{s.title}</h3>
              <p className="ac-card-body">{s.body}</p>
              <p className="ac-card-detail">{s.detail}</p>
            </article>
          ))}
        </div>
        <figure className="ac-band">
          <img
            src="/section-1.webp"
            alt="Rozpracované čalounění v dílně AC Interiér — kostra, popruhy a nová látka"
            width={1400}
            height={600}
          />
        </figure>
      </section>

      <section className="ac-postup" id="postup" aria-labelledby="postup-nadpis">
        <div className="ac-sec-head">
          <p className="ac-eyebrow">Jak to u nás probíhá</p>
          <h2 id="postup-nadpis">Tři kroky, žádné překvapení v ceně</h2>
        </div>
        <ol className="ac-steps">
          {steps.map((st) => (
            <li className="ac-step" key={st.n}>
              <span className="ac-step-n" aria-hidden="true">{st.n}</span>
              <div>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ac-reference" id="reference" aria-labelledby="ref-nadpis">
        <div className="ac-ref-inner">
          <div className="ac-ref-head">
            <p className="ac-eyebrow">Co říkají zákazníci</p>
            <h2 id="ref-nadpis">Termín i cena drží. To slyšíme nejčastěji.</h2>
            <figure className="ac-ref-fig">
              <img
                src="/section-2.webp"
                alt="Hotová přečalouněná sedací souprava od AC Interiér"
                width={900}
                height={700}
              />
            </figure>
          </div>
          <ul className="ac-quotes">
            {references.map((r) => (
              <li className="ac-quote" key={r.name}>
                <p className="ac-quote-text">&bdquo;{r.quote}&ldquo;</p>
                <p className="ac-quote-meta">
                  <span className="ac-quote-name">{r.name}</span>
                  <span className="ac-quote-what">{r.what}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
