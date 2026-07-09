import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vzduchotechnika a klimatizace CZ Brno — výroba VZT potrubí, montáž klimatizací",
  description:
    "Brněnská firma od roku 1995: vlastní výroba vzduchotechnického potrubí, montáž klimatizací a větrání pro haly, kanceláře, obchody i byty. Křenová 19, Brno.",
  openGraph: {
    title: "Vzduchotechnika a klimatizace CZ Brno",
    description:
      "Vlastní výroba VZT potrubí a montáž klimatizací v Brně od roku 1995 — od bytu po výrobní halu.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kanal: "01",
    nazev: "Výroba VZT potrubí",
    popis:
      "Vlastní dílna o ploše 300 m² v bývalé Mosilaně. Vyrábíme čtyřhranné i kruhové vzduchotechnické potrubí a komponenty — pro vlastní zakázky i jako dodavatel montážním firmám po celém regionu.",
    detail: "Dílna Vlhká 21",
  },
  {
    kanal: "02",
    nazev: "Dodávka a montáž klimatizací",
    popis:
      "Navrhneme, dodáme a namontujeme klimatizaci na míru — od jednotky do ložnice po chlazení celé administrativní budovy. Postaráme se i o měření, regulaci a elektroinstalaci k jednotkám.",
    detail: "Kanceláře i byty",
  },
  {
    kanal: "03",
    nazev: "Větrání hal a velkokuchyní",
    popis:
      "Větrání a vytápění výrobních hal, odsávání a přívod vzduchu do velkokuchyní, odhlučnění a větrání kotelen a výměníkových stanic. Zvládáme akce v hodnotě několika desítek miliónů.",
    detail: "Průmysl a provozy",
  },
  {
    kanal: "04",
    nazev: "Teplovzdušné větrání domů",
    popis:
      "Rekuperace a teplovzdušné vytápění rodinných domů s ohledem na nízké energetické náklady. Přivedeme čerstvý vzduch a zpětně získáme teplo, které by jinak uniklo oknem.",
    detail: "Nízké náklady",
  },
];

const mezniky = [
  { rok: "1995", text: "Josef Klusák zakládá Klusák – vzduchotechnika. Dodávka a montáž VZT z bytu na Zdráhalově ulici." },
  { rok: "1998", text: "Vzniká společnost s ručením omezeným a startuje vlastní výroba potrubí v dílně o 140 m². Z jednoho člověka je dvanáct." },
  { rok: "dnes", text: "VZDUCHOTECHNIKA A KLIMATIZACE CZ BRNO na Křenové. Výroba na 300 m², k VZT přibylo měření, regulace, vytápění i elektro." },
];

export default function Page() {
  return (
    <main className="vzt">
      <header className="vzt-topbar">
        <a className="vzt-wordmark" href="#" aria-label="Vzduchotechnika a klimatizace CZ Brno — domů">
          <span className="vzt-wordmark__mark" aria-hidden="true">
            <span className="vzt-duct" />
            <span className="vzt-duct" />
            <span className="vzt-duct" />
          </span>
          <span className="vzt-wordmark__text">
            <b>VZT&thinsp;·&thinsp;KLIMA</b>
            <small>CZ Brno — od 1995</small>
          </span>
        </a>
        <a className="vzt-tel" href="tel:+420537014240">+420 537 014 240</a>
      </header>

      <section className="vzt-hero" aria-labelledby="vzt-hero-title">
        <div className="vzt-hero__media">
          <img
            src="/hero.webp"
            alt="Rozvody vzduchotechnického potrubí pod stropem realizace v Brně"
            className="vzt-hero__img"
            width={1600}
            height={1100}
          />
        </div>
        <div className="vzt-hero__panel">
          <p className="vzt-eyebrow">Výroba potrubí · montáž klimatizací · Brno, Křenová</p>
          <h1 id="vzt-hero-title">
            Vzduch, který <span className="vzt-hi">rozvedeme</span> až tam, kde má&nbsp;dýchat.
          </h1>
          <p className="vzt-hero__lede">
            Od roku 1995 v Brně navrhujeme, vyrábíme a montujeme vzduchotechniku a klimatizace.
            Potrubí ohýbáme ve vlastní dílně — od jednotky v ložnici po chlazení celé
            administrativní budovy.
          </p>
          <div className="vzt-hero__cta">
            <a className="vzt-btn vzt-btn--primary" href="tel:+420537014240">Zavolat do realizace</a>
            <a className="vzt-btn vzt-btn--ghost" href="mailto:info@vzt-klima.cz">Napsat e-mail</a>
          </div>
          <dl className="vzt-hero__facts">
            <div><dt>Vlastní dílna</dt><dd>300 m²</dd></div>
            <div><dt>V oboru</dt><dd>od 1995</dd></div>
            <div><dt>Rozsah zakázek</dt><dd>byt → hala</dd></div>
          </dl>
        </div>
      </section>

      <section className="vzt-sluzby" aria-labelledby="vzt-sluzby-title">
        <div className="vzt-sec-head">
          <p className="vzt-eyebrow">Co pro vás uděláme</p>
          <h2 id="vzt-sluzby-title">Čtyři větve jednoho oboru</h2>
          <p className="vzt-sec-lede">
            Nejsme jen montážní parta ani jen výrobna. Umíme obojí — a k tomu měření, regulaci
            a elektroinstalaci, které ke vzduchotechnice patří.
          </p>
        </div>

        <div className="vzt-sluzby__grid">
          <img
            src="/section-1.webp"
            alt="Detail vzduchotechnických rozvodů a klimatizační jednotky"
            className="vzt-sluzby__img"
            width={900}
            height={1100}
          />
          <ol className="vzt-list">
            {sluzby.map((s) => (
              <li className="vzt-item" key={s.kanal}>
                <span className="vzt-item__no" aria-hidden="true">{s.kanal}</span>
                <div className="vzt-item__body">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                  <span className="vzt-tag">{s.detail}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vzt-profil" aria-labelledby="vzt-profil-title">
        <div className="vzt-profil__grid">
          <div className="vzt-profil__text">
            <p className="vzt-eyebrow">Profil společnosti</p>
            <h2 id="vzt-profil-title">Z jednoho člověka na dílnu, která zásobuje celý region.</h2>
            <p>
              Začínalo se v roce 1995 dodávkou a montáží u jednoho živnostníka. Dnes patříme
              mezi výrobní firmy, které dodávají vzduchotechnické potrubí široké škále montážních
              firem — a zároveň si vlastní zakázky odvedeme od návrhu po předání.
            </p>
            <p>
              Za ta léta jsme realizovali zakázky od několika stovek korun po desítky miliónů:
              větrání výrobních hal, klimatizace kanceláří, obchodů, rodinných domů i bytů,
              větrání velkokuchyní a odhlučnění kotelen.
            </p>

            <ol className="vzt-timeline">
              {mezniky.map((m) => (
                <li key={m.rok}>
                  <span className="vzt-timeline__rok">{m.rok}</span>
                  <span className="vzt-timeline__text">{m.text}</span>
                </li>
              ))}
            </ol>

            <address className="vzt-kontakt">
              <div>
                <span className="vzt-kontakt__label">Kancelář realizace</span>
                <a href="tel:+420537014240">+420 537 014 240</a>
                <a href="mailto:info@vzt-klima.cz">info@vzt-klima.cz</a>
              </div>
              <div>
                <span className="vzt-kontakt__label">Kancelář výroba</span>
                <a href="tel:+420537014243">+420 537 014 243</a>
                <span>Křenová 19, 602 00 Brno</span>
              </div>
            </address>
          </div>

          <figure className="vzt-profil__figure">
            <img
              src="/section-2.webp"
              alt="Výroba vzduchotechnického potrubí v dílně firmy v Brně"
              width={900}
              height={1200}
            />
            <figcaption>Vlastní dílna, Vlhká 21 — bývalá Mosilana</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
