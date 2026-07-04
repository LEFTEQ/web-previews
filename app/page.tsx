import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eagle Service — bezpečnostní agentura Ostrava | fyzická ostraha 24/7",
  description:
    "Fyzická ostraha objektů, recepční služby a mobilní dohled v Ostravě a Moravskoslezském kraji. Střežíme obchodní centra, výrobní haly i kanceláře — s vlastní aplikací pro evidenci a reporting.",
  openGraph: {
    title: "Eagle Service — bezpečnostní agentura Ostrava",
    description:
      "Fyzická ostraha, recepce a mobilní dohled v Ostravě. Reporting v reálném čase, náhradní plnění, prověření strážní.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Strážní na ranní obchůzce objektu v Ostravě" }],
  },
};

const sluzby = [
  {
    kod: "FO",
    nazev: "Fyzická ostraha objektů",
    popis:
      "Stálá strážní služba na vrátnici, v hale i na parkovišti. Kontrola vstupů, obchůzky podle plánu, výkaz o každé směně. Střežíme obchodní centrum FORUM Nová Karolina i výrobní areály na Ostravsku.",
  },
  {
    kod: "RS",
    nazev: "Recepční a informační služba",
    popis:
      "Reprezentativní recepce na míru vaší firmě — evidence návštěv, výdej klíčů, přepojování hovorů. Strážní v civilu, kteří rozumí tomu, jak má vypadat první dojem.",
  },
  {
    kod: "MD",
    nazev: "Mobilní dohled a výjezd",
    popis:
      "Namátkové kontroly nestřežených objektů a výjezd hlídky k signálu PCO. Vozy v ostravských ulicích v noci i o víkendu, doba dojezdu do 20 minut.",
  },
  {
    kod: "NP",
    nazev: "Náhradní plnění",
    popis:
      "Ostrahu i úklidový servis odebíráte v režimu náhradního plnění přes společnost Agency of Eagle. Splníte zákonný podíl a získáte službu, kterou byste kupovali tak jako tak.",
  },
];

const reference = [
  { misto: "FORUM Nová Karolina", detail: "obchodní centrum, Ostrava" },
  { misto: "Ostravia", detail: "správa budov" },
  { misto: "Mayr-Melnhof Holz Paskov", detail: "výrobní areál" },
  { misto: "Motor Lučina", detail: "průmyslový provoz" },
];

export default function Page() {
  return (
    <main className="es-main">
      <header className="es-topbar">
        <a className="es-wordmark" href="#uvod" aria-label="Eagle Service, úvod">
          <span className="es-wordmark-mark" aria-hidden="true">◤◢</span>
          <span className="es-wordmark-text">
            EAGLE<span className="es-wordmark-sub">SERVICE</span>
          </span>
        </a>
        <a className="es-topcall" href="tel:+420596000000">
          <span className="es-topcall-dot" aria-hidden="true" />
          Dispečink 24/7
        </a>
      </header>

      <section className="es-hero" id="uvod">
        <div className="es-hero-media">
          <img
            src="/hero.webp"
            alt="Strážní Eagle Service při obchůzce střeženého objektu v Ostravě za svítání"
            className="es-hero-img"
            width={1600}
            height={1200}
          />
          <div className="es-hero-scrim" aria-hidden="true" />
        </div>

        <div className="es-hero-body">
          <p className="es-eyebrow">Bezpečnostní agentura · Ostrava &amp; Moravskoslezský kraj</p>
          <h1 className="es-hero-title">
            Někdo musí být vzhůru,<br />
            <em>když ostatní spí.</em>
          </h1>
          <p className="es-hero-lede">
            Střežíme obchodní centra, výrobní haly i kanceláře na Ostravsku. Prověření
            strážní, hlídky ve městě celou noc a reporting z každé směny — abyste ráno
            přesně věděli, co se u vás dělo.
          </p>
          <div className="es-hero-actions">
            <a className="es-btn es-btn-primary" href="tel:+420596000000">
              Zavolat na dispečink
            </a>
            <a className="es-btn es-btn-ghost" href="#sluzby">
              Co střežíme
            </a>
          </div>
        </div>

        <ul className="es-hero-status" aria-label="Stav služby">
          <li>
            <span className="es-status-key">Hlídka ve službě</span>
            <span className="es-status-val es-status-live">právě teď</span>
          </li>
          <li>
            <span className="es-status-key">Dojezd výjezdu</span>
            <span className="es-status-val">do 20 min</span>
          </li>
          <li>
            <span className="es-status-key">Reporting směny</span>
            <span className="es-status-val">v aplikaci</span>
          </li>
        </ul>
      </section>

      <section className="es-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="es-sec-head">
          <p className="es-eyebrow">Naše služby</p>
          <h2 id="sluzby-nadpis" className="es-sec-title">
            Čtyři způsoby, jak máte svůj objekt pod kontrolou.
          </h2>
        </div>

        <ol className="es-service-list">
          {sluzby.map((s) => (
            <li key={s.kod} className="es-service">
              <span className="es-service-kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="es-service-txt">
                <h3 className="es-service-nazev">{s.nazev}</h3>
                <p className="es-service-popis">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="es-ebook-note">
          Ke každé fyzické službě dostanete přístup do naší aplikace{" "}
          <strong>EAGLE eBOOK</strong> zdarma — evidence obchůzek, hlášení a fotky
          z místa. Žádné papírové knihy, které nikdo nečte.
        </p>
      </section>

      <section className="es-onas" aria-labelledby="onas-nadpis">
        <div className="es-onas-media">
          <img
            src="/section-2.webp"
            alt="Dispečink Eagle Service — monitoring střežených objektů v reálném čase"
            className="es-onas-img"
            width={1200}
            height={900}
          />
        </div>

        <div className="es-onas-body">
          <p className="es-eyebrow">Proč Eagle Service</p>
          <h2 id="onas-nadpis" className="es-sec-title">
            Nechceme být největší. Chceme být ta agentura, které voláte první.
          </h2>
          <p className="es-onas-text">
            Na trhu, kde působí tisíce servisních firem, sázíme na osobní kontakt a
            spolehlivost, ne na počet lidí ve výkazu. Znáte svého strážného i svého
            dispečera jménem. Požadavky vyhodnocujeme pružně a jsme na telefonu i o
            víkendu.
          </p>

          <ul className="es-refs" aria-label="Vybrané reference">
            {reference.map((r) => (
              <li key={r.misto} className="es-ref">
                <span className="es-ref-misto">{r.misto}</span>
                <span className="es-ref-detail">{r.detail}</span>
              </li>
            ))}
          </ul>

          <dl className="es-badges">
            <div className="es-badge">
              <dt>Certifikace</dt>
              <dd>Systém řízení kvality &amp; ekologická certifikace</dd>
            </div>
            <div className="es-badge">
              <dt>Dezinfekce prostor</dt>
              <dd>Projekt Lovci virů — 5 let ve FORUM Nová Karolina</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
