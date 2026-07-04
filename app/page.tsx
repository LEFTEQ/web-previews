import type { CSSProperties } from "react";

export default function Page() {
  const rooms = [
    {
      no: "I",
      name: "Standard",
      kind: "Dvoulůžkový pokoj",
      note: "Klidná strana do dvora, ideální na první noc v Brně.",
    },
    {
      no: "II",
      name: "De Luxe",
      kind: "Dvoulůžkový pokoj",
      note: "Prostornější, s výhledem do Starobrněnské ulice.",
    },
    {
      no: "III",
      name: "Suite s terasou",
      kind: "Apartmá",
      note: "Vlastní terasa nad střechami historického centra.",
    },
    {
      no: "IV",
      name: "Royal Suite",
      kind: "Apartmá",
      note: "Fresky, obrazy starých mistrů, ta nejvyšší kategorie domu.",
    },
  ];

  const nearby = [
    { label: "Katedrála Petrov", walk: "3 min pěšky" },
    { label: "Zelný trh", walk: "3 min pěšky" },
    { label: "Divadlo Reduta", walk: "3 min pěšky" },
    { label: "Františkánská krypta", walk: "5 min pěšky" },
    { label: "Hrad Špilberk", walk: "10 min pěšky" },
    { label: "Vila Tugendhat", walk: "10 min autem" },
  ];

  const services = [
    {
      name: "Recepce",
      hours: "nonstop",
      text: "Otevřeno 24 hodin denně. S čímkoli poradíme a pomůžeme kdykoli během vašeho pobytu.",
    },
    {
      name: "Room service",
      hours: "na pokoj",
      text: "Kompletní nápojová obsluha na pokoj. Nadstandardní placená služba, menu najdete na psacím stole.",
    },
    {
      name: "Čistírna",
      hours: "do druhého dne",
      text: "Oblečení vyčistíme nejpozději do následujícího dne. K dispozici je i žehlička a žehlicí prkno.",
    },
  ];

  return (
    <main className="rr">
      <header className="rr-top">
        <a className="rr-mark" href="#" aria-label="Royal Ricc, hotel v centru Brna">
          <span className="rr-mark-r">R</span>
          <span className="rr-mark-word">Royal&nbsp;Ricc</span>
        </a>
        <nav className="rr-nav" aria-label="Hlavní">
          <a href="#pokoje">Pokoje</a>
          <a href="#poloha">Poloha</a>
          <a href="#dum">O domě</a>
        </nav>
        <a className="rr-book" href="#pokoje">Rezervovat pobyt</a>
      </header>

      <section className="rr-hero" aria-labelledby="rr-hero-title">
        <div className="rr-hero-frame">
          <p className="rr-eyebrow rr-hero-eyebrow">
            <span className="rr-star" aria-hidden="true">✦</span>
            Čtyřhvězdičkový hotel · Brno-střed · od roku 1911
          </p>
          <h1 id="rr-hero-title" className="rr-hero-title">
            <span className="rr-hero-line">Fresky nad</span>
            <span className="rr-hero-line rr-hero-accent">hlavou,</span>
            <span className="rr-hero-line">Petrov za</span>
            <span className="rr-hero-line">rohem.</span>
          </h1>
          <p className="rr-hero-lede">
            Rodinný hotel na Starobrněnské — jedné z nejstarších ulic ve městě. Nástěnné malby a obrazy
            starých mistrů, plná klimatizace a tři minuty chůze k Zelnému trhu.
          </p>
          <div className="rr-hero-cta">
            <a className="rr-book rr-book-lg" href="#pokoje">Vybrat pokoj</a>
            <a className="rr-ghost" href="#poloha">Kudy k nám</a>
          </div>
        </div>
        <aside className="rr-hero-plate" aria-hidden="true">
          <div className="rr-fresco">
            <span className="rr-fresco-corner rr-fresco-tl" />
            <span className="rr-fresco-corner rr-fresco-tr" />
            <span className="rr-fresco-corner rr-fresco-bl" />
            <span className="rr-fresco-corner rr-fresco-br" />
            <span className="rr-fresco-roman">MCMXI</span>
            <span className="rr-fresco-sub">Starobrněnská 10</span>
          </div>
        </aside>
      </section>

      <section className="rr-rooms" id="pokoje" aria-labelledby="rr-rooms-title">
        <div className="rr-sec-head">
          <p className="rr-eyebrow">Čtyři kategorie</p>
          <h2 id="rr-rooms-title" className="rr-sec-title">Kde budete spát</h2>
          <p className="rr-sec-lede">
            Interiér spojuje funkční zařízení s malbami starých mistrů a nástěnnými freskami. Vyberte si
            podle toho, kolik prostoru — a výhledu — od pobytu čekáte.
          </p>
        </div>
        <ol className="rr-room-list">
          {rooms.map((r) => (
            <li key={r.no} className="rr-room">
              <span className="rr-room-no" aria-hidden="true">{r.no}</span>
              <div className="rr-room-body">
                <p className="rr-room-kind">{r.kind}</p>
                <h3 className="rr-room-name">{r.name}</h3>
                <p className="rr-room-note">{r.note}</p>
              </div>
              <a className="rr-room-link" href="#pokoje">
                Poptat<span className="rr-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ol>

        <div className="rr-service-band">
          {services.map((s) => (
            <div key={s.name} className="rr-service">
              <p className="rr-service-top">
                <span className="rr-service-name">{s.name}</span>
                <span className="rr-service-hours">{s.hours}</span>
              </p>
              <p className="rr-service-text">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rr-place" id="poloha" aria-labelledby="rr-place-title">
        <div className="rr-place-head">
          <p className="rr-eyebrow rr-eyebrow-light">V srdci města</p>
          <h2 id="rr-place-title" className="rr-sec-title rr-sec-title-light">
            Všechno máte na dohled
          </h2>
          <p className="rr-sec-lede rr-sec-lede-light" id="dum">
            Stojíme na jedné z nejstarších ulic Brna, kousek od gotické katedrály. Vzdálenosti tu
            neměříme v kilometrech, ale v minutách procházky.
          </p>
        </div>
        <ul className="rr-nearby">
          {nearby.map((n) => (
            <li key={n.label} className="rr-near">
              <span className="rr-near-label">{n.label}</span>
              <span className="rr-near-dots" aria-hidden="true" />
              <span className="rr-near-walk">{n.walk}</span>
            </li>
          ))}
        </ul>
        <div className="rr-place-note">
          <p>
            <strong>Rodinný dům s historií.</strong> Rodina hotel provozuje od dob Rakouska-Uherska —
            luxusně zařízeno, plně klimatizováno, s atmosférou, kterou velké řetězce nenapodobí. Na
            recepci se vám ozve někdo, kdo Brno opravdu zná.
          </p>
          <dl className="rr-contact">
            <div>
              <dt>Adresa</dt>
              <dd>Starobrněnská 10, Brno-střed</dd>
            </div>
            <div>
              <dt>Rezervace</dt>
              <dd><a href="tel:+420736487948">+420 736 487 948</a></dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href="mailto:rezervace@royalricc.cz">rezervace@royalricc.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
