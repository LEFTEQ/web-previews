import type { CSSProperties } from "react";

const zones = [
  {
    id: "01",
    name: "Perimetr",
    detail: "Vnější hranice objektu — plot, brána, vjezd.",
    service: "Kamerové systémy a infrazávory hlídají obvod dřív, než se někdo přiblíží ke dveřím.",
  },
  {
    id: "02",
    name: "Plášť",
    detail: "Dveře, okna, vstupy do budovy.",
    service: "Magnetické kontakty a detektory tříštění skla ohlásí každé neoprávněné otevření.",
  },
  {
    id: "03",
    name: "Prostor",
    detail: "Chodby, sklady, výrobní haly, kanceláře.",
    service: "Pohybové PIR čidla a protipožární hlásiče pokryjí vnitřek objektu ve dne i v noci.",
  },
  {
    id: "04",
    name: "Trezor",
    detail: "To nejcennější — server, pokladna, sklad.",
    service: "Tříšťové senzory a napojení na pult centrální ochrany. Výjezd do několika minut.",
  },
];

const proofs = [
  {
    k: "20+",
    label: "let na plzeňském trhu",
    note: "Ostraha, technika i úklid od roku, kdy jsme začínali s prvními objekty na Borech.",
  },
  {
    k: "50 mil. Kč",
    label: "pojištění odpovědnosti",
    note: "Kdyby se cokoliv stalo, kryje vás naše pojistka. Papíry vám ukážeme dopředu.",
  },
  {
    k: "24/7",
    label: "dohled na pult",
    note: "Certifikovaní technici, prověření strážní s čistým trestním rejstříkem, výjezd non-stop.",
  },
];

export default function Page() {
  return (
    <main className="hs">
      <header className="hs-top">
        <a className="hs-mark" href="#" aria-label="High Security, domů">
          <span className="hs-mark__glyph" aria-hidden="true" />
          <span className="hs-mark__text">
            High<span className="hs-mark__thin">Security</span>
          </span>
        </a>
        <nav className="hs-nav" aria-label="Hlavní">
          <a href="#zony">Ochrana objektu</a>
          <a href="#duvera">Proč my</a>
          <a className="hs-nav__call" href="tel:+420377246176">
            377 246 176
          </a>
        </nav>
      </header>

      <section className="hs-hero" aria-labelledby="hero-h">
        <div className="hs-hero__media">
          <img
            src="/hero.webp"
            alt="Střežený objekt v Plzni v noci — technika High Security"
            width={1600}
            height={1100}
            loading="eager"
          />
          <span className="hs-hero__scan" aria-hidden="true" />
        </div>
        <div className="hs-hero__panel">
          <p className="hs-eyebrow">
            <span className="hs-dot" aria-hidden="true" /> Plzeň · Ostraha &amp; zabezpečení
          </p>
          <h1 id="hero-h">
            Střežíme to,
            <br />
            <span className="hs-hero__accent">co se nedá nahradit.</span>
          </h1>
          <p className="hs-lead">
            Alarmy, kamery, protipožární technika i fyzická ostraha. Objekt projdeme s vámi,
            navrhneme zabezpečení na míru a hlídáme ho 24 hodin denně — už přes dvacet let.
          </p>
          <div className="hs-cta">
            <a className="hs-btn" href="tel:+420377246176">
              Zavolat 377 246 176
            </a>
            <a className="hs-btn hs-btn--ghost" href="#zony">
              Jak zabezpečíme objekt
            </a>
          </div>
          <dl className="hs-hero__stats">
            <div>
              <dt>Výjezd</dt>
              <dd>do minut</dd>
            </div>
            <div>
              <dt>Pult ochrany</dt>
              <dd>non-stop</dd>
            </div>
            <div>
              <dt>Pojištění</dt>
              <dd>50 mil. Kč</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="hs-zones" id="zony" aria-labelledby="zony-h">
        <div className="hs-sec-head">
          <p className="hs-eyebrow">
            <span className="hs-dot" aria-hidden="true" /> Čtyři vrstvy ochrany
          </p>
          <h2 id="zony-h">Zabezpečení bereme zvenčí dovnitř</h2>
          <p className="hs-sec-lead">
            Každý objekt má hranici, plášť, vnitřní prostor a to nejcennější uvnitř. Ke každé vrstvě
            patří jiná technika — a my je poskládáme tak, aby na sebe navazovaly.
          </p>
        </div>

        <ol className="hs-zone-list">
          {zones.map((z, i) => (
            <li
              className="hs-zone"
              key={z.id}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="hs-zone__num" aria-hidden="true">
                {z.id}
              </span>
              <div className="hs-zone__body">
                <h3>{z.name}</h3>
                <p className="hs-zone__detail">{z.detail}</p>
                <p className="hs-zone__service">{z.service}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="hs-tags" aria-label="Další služby">
          <span>Fyzická ostraha</span>
          <span>Technická zabezpečení</span>
          <span>Úklidový servis</span>
          <span>Zákonné elektrorevize</span>
          <span>Profesní kvalifikace</span>
          <span>Náhradní plnění</span>
        </div>
      </section>

      <section className="hs-trust" id="duvera" aria-labelledby="duvera-h">
        <div className="hs-trust__media">
          <img
            src="/section-2.webp"
            alt="Technik High Security při montáži zabezpečovacího systému"
            width={1200}
            height={900}
            loading="lazy"
          />
        </div>
        <div className="hs-trust__body">
          <p className="hs-eyebrow">
            <span className="hs-dot" aria-hidden="true" /> Proč nám klienti věří
          </p>
          <h2 id="duvera-h">Certifikáty, které vám ukážeme dřív, než se ptáte</h2>
          <p className="hs-sec-lead">
            Máme všechna zákonem daná oprávnění pro ostrahu i pro montáž zabezpečovacích, kamerových
            a protipožárních systémů. Naši lidé jsou proškolení a prověření — používáme jen
            certifikované výrobky od ověřených dodavatelů.
          </p>

          <div className="hs-proof">
            {proofs.map((p) => (
              <div className="hs-proof__item" key={p.label}>
                <span className="hs-proof__k">{p.k}</span>
                <span className="hs-proof__label">{p.label}</span>
                <p className="hs-proof__note">{p.note}</p>
              </div>
            ))}
          </div>

          <div className="hs-contactline">
            <p>
              High Security s.r.o. · Částkova 1456/95, Plzeň · voláme zpět v pracovní dny 8:00–15:30
            </p>
            <a className="hs-btn hs-btn--sm" href="mailto:info@highsecurity.cz">
              Napsat na info@highsecurity.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
