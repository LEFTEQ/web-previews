import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "IP",
      name: "IP kamery a digitální záznam",
      desc: "Ostrý obraz ve dne i v noci, přístup z mobilu odkudkoli. Nastavíme detekci pohybu i chytrá upozornění, když se něco děje.",
    },
    {
      code: "CCTV",
      name: "Průmyslové kamerové systémy",
      desc: "Sklady, výrobní haly, parkoviště i vjezdové závory. Dohled nad rozlehlým areálem s dlouhým záznamem a spolehlivým provozem 24/7.",
    },
    {
      code: "PCO",
      name: "Napojení na pult centrální ochrany",
      desc: "Kamery propojíme se zabezpečovací signalizací a pultem ochrany. Poplach řeší výjezd, ne jen blikající kontrolka.",
    },
    {
      code: "SRV",
      name: "Revize a servis",
      desc: "Pravidelné kontroly, čištění optiky, výměna disků. Systém, který funguje i za tři roky, ne jen v den montáže.",
    },
  ];

  return (
    <main className="ms">
      <header className="ms-nav">
        <a className="ms-brand" href="#" aria-label="M/S Elektro CZ, kamerové systémy Olomouc">
          <span className="ms-brand-mark" aria-hidden="true">
            <span className="ms-slash">/</span>
          </span>
          <span className="ms-brand-text">
            M<span className="ms-brand-slash">/</span>S Elektro
            <span className="ms-brand-sub">CZ · Olomouc</span>
          </span>
        </a>
        <a className="ms-nav-cta" href="tel:+420585751666">
          Zavolat 585 75 16 66
        </a>
      </header>

      <section className="ms-hero">
        <div className="ms-hero-frame">
          <img
            className="ms-hero-img"
            src="/hero.webp"
            alt="Záběr z kamerového systému hlídajícího areál v Olomouci"
          />
          <div className="ms-hud" aria-hidden="true">
            <span className="ms-hud-rec">
              <span className="ms-hud-dot" />REC
            </span>
            <span className="ms-hud-cam">CAM 01 · HOLICE</span>
            <span className="ms-hud-time">24/7 · LIVE</span>
            <span className="ms-corner ms-corner-tl" />
            <span className="ms-corner ms-corner-tr" />
            <span className="ms-corner ms-corner-bl" />
            <span className="ms-corner ms-corner-br" />
          </div>
        </div>

        <div className="ms-hero-copy">
          <p className="ms-eyebrow">Kamerové systémy · Olomouc a okolí</p>
          <h1 className="ms-title">
            Vidíte na svůj majetek,
            <br />
            <span className="ms-title-accent">i když u něj nejste.</span>
          </h1>
          <p className="ms-lede">
            Navrhneme, nainstalujeme a servisujeme kamerové systémy pro rodinné
            domy, firmy i průmyslové areály. Od jedné kamery u vchodu po
            kompletní dohled s napojením na pult centrální ochrany.
          </p>
          <div className="ms-hero-actions">
            <a className="ms-btn" href="#sluzby">
              Prohlédnout řešení
            </a>
            <a className="ms-btn ms-btn-ghost" href="mailto:info@mselektro.cz">
              Nezávazná poptávka
            </a>
          </div>
        </div>
      </section>

      <section className="ms-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ms-section-head">
          <p className="ms-eyebrow">Co pro vás natočíme</p>
          <h2 className="ms-h2" id="sluzby-h">
            Kamery na klíč — od návrhu po revizi
          </h2>
          <p className="ms-section-lede">
            Poradíme, kam kamery patří, kolik jich stačí a co uvidíte. Vše
            dodáme včetně záznamu, kabeláže i zaškolení — jeden dodavatel,
            jedna odpovědnost.
          </p>
        </div>

        <ul className="ms-grid">
          {services.map((s) => (
            <li className="ms-card" key={s.code}>
              <span className="ms-card-code" aria-hidden="true">
                {s.code}
              </span>
              <h3 className="ms-card-title">{s.name}</h3>
              <p className="ms-card-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="ms-section ms-trust" aria-labelledby="onas-h">
        <div className="ms-trust-grid">
          <div className="ms-trust-media">
            <img
              className="ms-trust-img"
              src="/section-1.webp"
              alt="Technik M/S Elektro instaluje kameru na objektu"
            />
          </div>
          <div className="ms-trust-copy">
            <p className="ms-eyebrow">O firmě</p>
            <h2 className="ms-h2" id="onas-h">
              Zabezpečujeme Olomoucko<br />už přes 20 let
            </h2>
            <p className="ms-section-lede">
              Sídlíme v Olomouci-Holicích na Přerovské 39 a chráníme domy,
              obchody i výrobní haly po celém regionu. Kromě kamer děláme
              elektronické zabezpečovací i požární systémy — kamery umíme
              propojit do jednoho funkčního celku.
            </p>

            <dl className="ms-facts">
              <div className="ms-fact">
                <dt>Vlastní řada kamer</dt>
                <dd>CLEVER EYE — kamery, které známe do posledního šroubku.</dd>
              </div>
              <div className="ms-fact">
                <dt>Napojení na PCO</dt>
                <dd>Poplach řeší výjezd bezpečnostní agentury, se kterou spolupracujeme.</dd>
              </div>
              <div className="ms-fact">
                <dt>Servis po instalaci</dt>
                <dd>Záruční i pozáruční péče — jsme kousek, dojedeme.</dd>
              </div>
            </dl>

            <div className="ms-contact">
              <a className="ms-btn" href="tel:+420585751666">
                Zavolat 585 75 16 66
              </a>
              <span className="ms-contact-note">
                Přerovská 39, 783 71 Olomouc-Holice · info@mselektro.cz
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
