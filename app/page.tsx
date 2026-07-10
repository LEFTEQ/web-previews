import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plzeňská chladírenská — klimatizace a chlazení pro Plzeň",
  description:
    "Návrh, dodávka, montáž a servis klimatizací, chladíren a tepelných čerpadel. Rodinná firma ze Zbůchu u Plzně s praxí od projektu po záruční servis.",
  openGraph: {
    title: "Plzeňská chladírenská — klimatizace a chlazení pro Plzeň",
    description:
      "Navrhneme, namontujeme a servisujeme klimatizace, chladírny a tepelná čerpadla v Plzni a okolí.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const obory = [
  {
    kod: "−18 °C",
    stitek: "Chladírny a mrazírny",
    nadpis: "Chlazení, které drží teplotu i v provozu",
    text: "Chladicí a mrazicí boxy pro restaurace, řezníky, pekárny i sklady. Postavíme celý okruh — od výparníku po řízení odtávání — a nastavíme ho na teplotu, kterou vaše zboží potřebuje.",
  },
  {
    kod: "+21 °C",
    stitek: "Klimatizace",
    nadpis: "Splitové i multisplit jednotky do kanceláří i domů",
    text: "Vybereme výkon podle místnosti, ne podle katalogu. Nástěnné, kazetové i kanálové jednotky pro rezidenci i komerční prostory, včetně tiché instalace a rozvodů chladiva.",
  },
  {
    kod: "COP 4,8",
    stitek: "Tepelná čerpadla",
    nadpis: "Vytápění i s dotací Nová zelená úsporám",
    text: "Tepelná čerpadla vzduch–voda i země–voda. Máme profesní kvalifikace pro dotace, takže vyřídíme i administrativu Nové zelené úsporám a Kotlíkové dotace za vás.",
  },
  {
    kod: "°C/24h",
    stitek: "Chladiče vody — chillery",
    nadpis: "Zakázková výroba chillerů na míru technologii",
    text: "Průmyslové chlazení procesů a technologií. Chiller navrhneme a vyrobíme přesně na váš výkon a médium — ne poskládáme z toho, co je zrovna skladem.",
  },
];

const kroky = [
  {
    c: "01",
    t: "Zaměříme a navrhneme",
    d: "Přijedeme na místo, změříme prostor a tepelnou zátěž a navrhneme systém přesně na vaše potřeby.",
  },
  {
    c: "02",
    t: "Dodáme a namontujeme",
    d: "Zajistíme dodávku jednotek, montáž, rozvody chladiva i uvedení do provozu. Bez subdodavatelských řetězců.",
  },
  {
    c: "03",
    t: "Servisujeme a hlídáme",
    d: "Pravidelné revize, čištění a záruční i pozáruční servis. Když se systém zastaví, přijedeme.",
  },
];

export default function Page() {
  return (
    <main className="pch">
      <header className="pch-top">
        <a className="pch-logo" href="#uvod" aria-label="Plzeňská chladírenská, úvod">
          <span className="pch-logo-mark" aria-hidden="true">
            <span className="pch-snow">❄</span>
          </span>
          <span className="pch-logo-txt">
            <span className="pch-logo-1">Plzeňská</span>
            <span className="pch-logo-2">chladírenská</span>
          </span>
        </a>
        <nav className="pch-nav" aria-label="Hlavní">
          <a href="#obory">Co děláme</a>
          <a href="#postup">Jak to probíhá</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="pch-call" href="tel:+420603389394">Zavolat</a>
      </header>

      <section className="pch-hero" id="uvod">
        <img
          className="pch-hero-img"
          src="/hero.webp"
          alt="Instalace chladicí a klimatizační techniky Plzeňské chladírenské"
        />
        <div className="pch-hero-scrim" aria-hidden="true" />
        <div className="pch-hero-inner">
          <p className="pch-eyebrow">Zbůch u Plzně · od projektu po servis</p>
          <h1 className="pch-h1">
            Držíme věci<br />
            <span className="pch-h1-accent">ve správné teplotě.</span>
          </h1>
          <p className="pch-lead">
            Chladírny, klimatizace a tepelná čerpadla pro Plzeňsko. Navrhneme systém
            podle vašeho provozu, namontujeme ho a postaráme se o něj i po letech.
          </p>
          <div className="pch-hero-cta">
            <a className="pch-btn" href="#kontakt">Nezávazná poptávka</a>
            <a className="pch-btn-ghost" href="tel:+420603389394">+420 603 389 394</a>
          </div>
          <dl className="pch-scale" aria-label="Rozsah teplot, které řešíme">
            <div><dt>Mrazírny</dt><dd>−25 °C</dd></div>
            <div><dt>Chladírny</dt><dd>+2 °C</dd></div>
            <div><dt>Komfort</dt><dd>+21 °C</dd></div>
            <div><dt>Vytápění</dt><dd>+55 °C</dd></div>
          </dl>
        </div>
      </section>

      <section className="pch-obory" id="obory">
        <div className="pch-sec-head">
          <p className="pch-eyebrow pch-eyebrow-dark">Čtyři obory, jeden okruh</p>
          <h2 className="pch-h2">Chladíme, klimatizujeme i topíme — vše na míru</h2>
          <p className="pch-sec-sub">
            Nejsme přeprodejci krabic. Systém navrhneme podle teploty, kterou
            potřebujete udržet, a postavíme ho tak, aby ji držel spolehlivě.
          </p>
        </div>
        <div className="pch-grid">
          {obory.map((o) => (
            <article className="pch-card" key={o.stitek}>
              <span className="pch-card-temp">{o.kod}</span>
              <p className="pch-card-stitek">{o.stitek}</p>
              <h3 className="pch-card-h">{o.nadpis}</h3>
              <p className="pch-card-t">{o.text}</p>
            </article>
          ))}
        </div>
        <figure className="pch-figure">
          <img
            src="/section-1.webp"
            alt="Chladicí technika a rozvody instalované technikem Plzeňské chladírenské"
          />
        </figure>
      </section>

      <section className="pch-duvera" id="postup">
        <div className="pch-duvera-media">
          <img
            src="/section-2.webp"
            alt="Technik Plzeňské chladírenské při montáži klimatizace"
          />
        </div>
        <div className="pch-duvera-body">
          <p className="pch-eyebrow pch-eyebrow-dark">Jak s námi spolupracujete</p>
          <h2 className="pch-h2">Od zaměření po servis vás vede jeden tým</h2>
          <p className="pch-sec-sub">
            Firma se sídlem ve Zbůchu u Plzně s dlouholetou praxí v chladírenství
            a klimatizační technice. Projekt, dodávka i servis pod jednou střechou
            — víme přesně, co jsme kam namontovali.
          </p>
          <ol className="pch-steps">
            {kroky.map((k) => (
              <li className="pch-step" key={k.c}>
                <span className="pch-step-c" aria-hidden="true">{k.c}</span>
                <div>
                  <h3 className="pch-step-t">{k.t}</h3>
                  <p className="pch-step-d">{k.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="pch-kontakt" id="kontakt">
            <h3 className="pch-kontakt-h">Ozvěte se technologovi</h3>
            <p className="pch-kontakt-p">
              Martin Spěváček, technolog — poradí s návrhem i dotací a připraví nabídku.
            </p>
            <div className="pch-kontakt-row">
              <a className="pch-btn" href="tel:+420603389394">Zavolat 603 389 394</a>
              <a className="pch-btn-ghost" href="mailto:spevacek@plzenskachladirenska.cz">
                Napsat e-mail
              </a>
            </div>
            <p className="pch-adresa">
              Zakázková kancelář · Plzeňská 437, 330 22 Zbůch
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
