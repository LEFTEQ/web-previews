import type { CSSProperties } from "react";

export const metadata = {
  title: "Auto Moto Brno — autoservis a pneuservis, Královo Pole",
  description:
    "Autoservis a pneuservis v Brně-Králově Poli. Servis vozů všech značek, opravy po haváriích, elektroinstalace, přezouvání a prodej pneumatik. Božetěchova 104.",
  openGraph: {
    title: "Auto Moto Brno — autoservis a pneuservis",
    description:
      "Svěřte nám svůj vůz. Kompletní servis všech značek, opravy po haváriích i pneuservis v Brně-Králově Poli.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Autoservis",
    text: "Kompletní servis vozů všech značek — výměny kapalin, náhradních dílů i náročnější opravy. Přijedete, popíšeme, co je potřeba, a domluvíme termín i cenu předem.",
  },
  {
    kod: "02",
    nazev: "Opravy po haváriích",
    text: "Ťukanec i větší škoda. Vůz zase srovnáme do původního stavu a postaráme se o poškozenou elektroinstalaci automobilu.",
  },
  {
    kod: "03",
    nazev: "Pneuservis",
    text: "Přezouvání i pneumatiky typu runflat. Prodáváme jen značkové pneu za internetové ceny se zárukou vrácení peněz při reklamaci. Protektory zásadně ne.",
  },
];

export default function Page() {
  return (
    <main className="amb">
      <header className="amb-top">
        <a className="amb-mark" href="#" aria-label="Auto Moto Brno — domů">
          <span className="amb-mark-line">AUTO&nbsp;MOTO</span>
          <span className="amb-mark-city">BRNO</span>
        </a>
        <nav className="amb-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="amb-call" href="tel:+420733534163">Zavolat</a>
        </nav>
      </header>

      <section className="amb-hero" id="hero">
        <div className="amb-hero-media">
          <img
            src="/hero.webp"
            alt="Dílna autoservisu Auto Moto Brno se zvednutým vozem na zvedáku"
            className="amb-hero-img"
          />
          <span className="amb-hero-tag">Božetěchova 104 · Královo Pole</span>
        </div>
        <div className="amb-hero-body">
          <p className="amb-eyebrow">Autoservis &amp; pneuservis · Brno</p>
          <h1 className="amb-h1">
            Svěřte nám<br />
            <em>svůj vůz.</em>
          </h1>
          <p className="amb-lead">
            Moderně vybavená dílna kousek od centra Brna. Od výměny oleje
            přes přezutí až po opravu po havárii — poctivě a s cenou,
            kterou znáte předem.
          </p>
          <div className="amb-cta">
            <a className="amb-btn amb-btn-primary" href="tel:+420733534163">
              Zavolat 733 534 163
            </a>
            <a className="amb-btn amb-btn-ghost" href="mailto:info@auto-moto-brno.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="amb-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="amb-section-head">
          <p className="amb-eyebrow">Co u nás zajedete</p>
          <h2 id="sluzby-h" className="amb-h2">Tři zastávky pod jednou střechou</h2>
        </div>
        <ol className="amb-lift">
          {sluzby.map((s) => (
            <li key={s.kod} className="amb-bay">
              <span className="amb-bay-kod" aria-hidden="true">{s.kod}</span>
              <div className="amb-bay-body">
                <h3 className="amb-bay-nazev">{s.nazev}</h3>
                <p className="amb-bay-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="amb-about" id="onas" aria-labelledby="onas-h">
        <div className="amb-about-media">
          <img
            src="/section-1.webp"
            alt="Detail práce mechanika v servisu Auto Moto Brno"
            className="amb-about-img"
          />
        </div>
        <div className="amb-about-body">
          <p className="amb-eyebrow">O nás</p>
          <h2 id="onas-h" className="amb-h2">Rodinná dílna, ne řetězec</h2>
          <p className="amb-about-text">
            Auto Moto Brno je autoservis v Králově Poli, technicky velmi
            dobře vybavený, ale pořád takový, kde s vámi mluví přímo ten,
            kdo bude na autě dělat. Žádné anonymní přepážky.
          </p>
          <p className="amb-about-text">
            Pneumatiky nabízíme jen značkové a nové — se zárukou vrácení
            peněz při reklamaci. Protektory ne: máme s nimi špatnou
            zkušenost a nedáme za ně ruku do ohně.
          </p>
          <dl className="amb-facts">
            <div className="amb-fact">
              <dt>Kde nás najdete</dt>
              <dd>Božetěchova 2968/104<br />612 00 Brno – Královo Pole</dd>
            </div>
            <div className="amb-fact">
              <dt>Telefon</dt>
              <dd><a href="tel:+420733534163">+420 733 534 163</a></dd>
            </div>
            <div className="amb-fact">
              <dt>E-mail</dt>
              <dd><a href="mailto:info@auto-moto-brno.cz">info@auto-moto-brno.cz</a></dd>
            </div>
          </dl>
          <figure className="amb-strip">
            <img
              src="/section-2.webp"
              alt="Značkové pneumatiky připravené k přezutí v pneuservisu"
              className="amb-strip-img"
            />
            <figcaption>Pneuservis — přezouváme i runflet.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
