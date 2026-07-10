import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "N",
      nazev: "Novostavby na klíč",
      text: "Postavíme rodinný dům od základové desky po předání klíčů. Vy si vyberete projekt, my hlídáme termíny, rozpočet i technologické přestávky.",
    },
    {
      kod: "R",
      nazev: "Rekonstrukce",
      text: "Domy, byty i administrativní budovy. Vybouráme, co dosloužilo, a vrátíme prostor do provozu — často během jedné sezóny.",
    },
    {
      kod: "Z",
      nazev: "Zateplení budov",
      text: "Fasáda, která drží teplo uvnitř a účty dole. Řešíme kontaktní zateplení i detaily ostění a soklu, na kterých to obvykle padá.",
    },
    {
      kod: "M",
      nazev: "Monolitické konstrukce",
      text: "Bednění, výztuž, beton. Nosné stěny, stropy a základy litými na místě — tam, kde má stát stavba dalších padesát let.",
    },
  ];

  return (
    <main className="stj">
      <header className="stj-top">
        <a className="stj-mark" href="#uvod" aria-label="STAJAK — úvod">
          <span className="stj-mark-word">STAJAK</span>
          <span className="stj-mark-tag">s.r.o. · stavby · Ústí n. L.</span>
        </a>
        <a className="stj-call" href="tel:+420727841811">
          <span className="stj-call-label">Zavolat</span>
          <span className="stj-call-num">727&nbsp;841&nbsp;811</span>
        </a>
      </header>

      <section className="stj-hero" id="uvod">
        <div className="stj-hero-media">
          <img
            src="/hero.webp"
            alt="Rozestavěný rodinný dům od firmy STAJAK v Ústeckém kraji"
            width={1600}
            height={1100}
            className="stj-hero-img"
          />
          <span className="stj-hero-plumb" aria-hidden="true" />
        </div>
        <div className="stj-hero-body">
          <p className="stj-eyebrow">Stavební firma · Krásné Březno, Ústí nad Labem</p>
          <h1 className="stj-h1">
            Postavíme vám dům,<br />
            <span className="stj-h1-accent">který se měří,</span><br />
            ne odhaduje.
          </h1>
          <p className="stj-lead">
            Novostavby, rekonstrukce, zateplení a monolitické konstrukce
            pro Ústecký kraj. Každý krok stavby měříme a navazujeme tak,
            aby držely technologické přestávky a termín platil.
          </p>
          <div className="stj-hero-cta">
            <a className="stj-btn stj-btn-solid" href="tel:+420727841811">
              Zavolat 727&nbsp;841&nbsp;811
            </a>
            <a className="stj-btn stj-btn-line" href="mailto:info@stajak.cz">
              Napsat poptávku
            </a>
          </div>
          <dl className="stj-facts">
            <div>
              <dt>Působíme v</dt>
              <dd>Ústeckém kraji</dd>
            </div>
            <div>
              <dt>Rozsah zakázek</dt>
              <dd>od drobných prací po celý dům</dd>
            </div>
            <div>
              <dt>Zákazníci</dt>
              <dd>se k nám vracejí</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="stj-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="stj-sec-head">
          <p className="stj-eyebrow">Co pro vás postavíme</p>
          <h2 className="stj-h2" id="sluzby-h">Čtyři řemesla pod jednou střechou</h2>
          <p className="stj-sec-note">
            Realizujeme zakázky jakéhokoliv rozsahu — od drobných
            stavebních prací po velké projekty. Na kvalitě i rychlosti
            záleží stejně.
          </p>
        </div>

        <ol className="stj-grid">
          {sluzby.map((s) => (
            <li className="stj-card" key={s.nazev}>
              <span className="stj-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="stj-card-h">{s.nazev}</h3>
              <p className="stj-card-t">{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="stj-figure">
          <img
            src="/section-1.webp"
            alt="Detail stavebních prací STAJAK — hrubá stavba a konstrukce"
            width={1600}
            height={900}
            className="stj-figure-img"
          />
          <figcaption className="stj-figure-cap">
            Harmonogram prací dostanete na papíře — a průběžně ho
            aktualizujeme, ať víte, co je hotové a co přijde na řadu.
          </figcaption>
        </figure>
      </section>

      <section className="stj-trust" id="o-nas" aria-labelledby="trust-h">
        <div className="stj-trust-media">
          <img
            src="/section-2.webp"
            alt="Dokončená stavba realizovaná firmou STAJAK v Ústeckém kraji"
            width={1200}
            height={1400}
            className="stj-trust-img"
          />
        </div>
        <div className="stj-trust-body">
          <p className="stj-eyebrow">Proč zrovna my</p>
          <h2 className="stj-h2" id="trust-h">
            Dlouholetá praxe, kterou poznáte na termínu
          </h2>
          <p className="stj-trust-lead">
            Za dobu působení jsme nasbírali zkušenosti i řadu spokojených
            zákazníků z Ústeckého kraje, kteří se k nám vracejí. Budeme
            rádi, když se přidáte i vy.
          </p>

          <ul className="stj-checks">
            <li>Kompletní stavební práce na profesionální úrovni za rozumné ceny.</li>
            <li>Procesy výstavby měříme a navazujeme v nejkratším termínu — bez porušení technologických přestávek.</li>
            <li>Harmonogram prací vypracujeme i průběžně aktualizujeme.</li>
          </ul>

          <address className="stj-contact">
            <p className="stj-contact-name">STAJAK s.r.o.</p>
            <p>U Cukrovaru 509/4, Krásné Březno, 400&nbsp;07 Ústí nad Labem</p>
            <p>IČ 05807603 · DIČ CZ05807603</p>
            <p className="stj-contact-links">
              <a href="tel:+420727841811">+420&nbsp;727&nbsp;841&nbsp;811</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:info@stajak.cz">info@stajak.cz</a>
            </p>
          </address>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
