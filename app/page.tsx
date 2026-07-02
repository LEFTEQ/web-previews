const tym = [
  {
    role: "Zubní lékaři",
    pocet: "3 ordinace",
    popis:
      "Kompletní stomatologická péče pro dospělé i děti — od preventivních prohlídek po ošetření kazů a protetiku.",
  },
  {
    role: "Dentální hygienistka",
    pocet: "1 ordinace",
    popis:
      "Profesionální čištění, odstranění zubního kamene ultrazvukem, airflow a nácvik správné techniky čištění doma.",
  },
];

const sluzby = [
  {
    nazev: "Dentální hygiena",
    interval: "1× za 6 měsíců",
    popis:
      "Odstraníme zubní kámen a pigmentace, vyleštíme povrch zubů a ukážeme vám, jak si mezizubní prostory čistit tak, aby to opravdu fungovalo. Odejdete s pocitem hladkých zubů, který znáte jen od hygienistky.",
  },
  {
    nazev: "Preventivní prohlídka",
    interval: "2× ročně",
    popis:
      "Zkontrolujeme chrup, dásně i sliznice a případný problém zachytíme dřív, než začne bolet. Prevence hrazená ze zdravotního pojištění je nejlevnější zubařina, jaká existuje.",
  },
  {
    nazev: "Ošetření a záchovná stomatologie",
    interval: "dle potřeby",
    popis:
      "Fotokompozitní (bílé) výplně, endodoncie i protetická řešení. Vždy vám dopředu řekneme, co ošetření obnáší a kolik bude stát.",
  },
  {
    nazev: "Péče o dětský chrup",
    interval: "od prvního zoubku",
    popis:
      "Děti u nás poznávají ordinaci hrou, ne strachem. Naučíme je čistit zuby správně od začátku — a rodičům poradíme s fluoridací i výběrem kartáčku.",
  },
];

export default function Page() {
  return (
    <main className="hd">
      {/* ===== HERO ===== */}
      <header className="hd-hero">
        <div className="hd-hero-inner">
          <p className="hd-wordmark" aria-label="Hajník Dental">
            HAJNÍK<span className="hd-wordmark-dot">·</span>DENTAL
          </p>

          <h1 className="hd-hero-title">
            <span className="hd-line hd-line-1">Zdravý chrup</span>
            <span className="hd-line hd-line-2">
              pro celou <em>rodinu</em>
            </span>
            <span className="hd-line hd-line-3">v&nbsp;Liberci.</span>
          </h1>

          <p className="hd-hero-sub">
            Stomatologická praxe a dentální hygiena v&nbsp;Horním Růžodole.
            Čtyři moderní ordinace v&nbsp;přízemí, Jeronýmova 232/15.
          </p>

          <div className="hd-hero-actions">
            <a className="hd-btn" href="tel:+420602363696">
              Zavolat 602 363 696
            </a>
            <p className="hd-hero-note">
              Nové pacienty aktuálně nepřijímáme z&nbsp;důvodu naplněné
              kapacity. Stávající pacienti — objednávejte se telefonicky.
            </p>
          </div>
        </div>

        {/* Signature: zubní oblouk z typografických "zubů" */}
        <div className="hd-arch" aria-hidden="true">
          <svg viewBox="0 0 1200 340" preserveAspectRatio="xMidYMax meet">
            <g className="hd-arch-teeth">
              <rect x="60" y="40" width="64" height="300" rx="32" />
              <rect x="144" y="90" width="64" height="250" rx="32" />
              <rect x="228" y="130" width="64" height="210" rx="32" />
              <rect x="312" y="160" width="64" height="180" rx="32" />
              <rect x="396" y="182" width="64" height="158" rx="32" />
              <rect x="480" y="196" width="64" height="144" rx="32" />
              <rect x="564" y="200" width="72" height="140" rx="36" />
              <rect x="656" y="196" width="64" height="144" rx="32" />
              <rect x="740" y="182" width="64" height="158" rx="32" />
              <rect x="824" y="160" width="64" height="180" rx="32" />
              <rect x="908" y="130" width="64" height="210" rx="32" />
              <rect x="992" y="90" width="64" height="250" rx="32" />
              <rect x="1076" y="40" width="64" height="300" rx="32" />
            </g>
          </svg>
        </div>
      </header>

      {/* ===== SEKCE: PÉČE ===== */}
      <section className="hd-section hd-sluzby" aria-labelledby="sluzby-h">
        <div className="hd-section-inner">
          <p className="hd-eyebrow">Co u nás ošetříme</p>
          <h2 id="sluzby-h" className="hd-h2">
            Od prevence po výplň.
            <br />
            Vždy víte, co a proč děláme.
          </h2>

          <ul className="hd-sluzby-list">
            {sluzby.map((s) => (
              <li key={s.nazev} className="hd-sluzba">
                <div className="hd-sluzba-head">
                  <h3 className="hd-h3">{s.nazev}</h3>
                  <span className="hd-tag">{s.interval}</span>
                </div>
                <p className="hd-body">{s.popis}</p>
              </li>
            ))}
          </ul>

          <p className="hd-karty">
            <span className="hd-karty-badge" aria-hidden="true">
              💳
            </span>
            Platit můžete běžnými platebními kartami přímo v&nbsp;ordinaci.
          </p>
        </div>
      </section>

      {/* ===== SEKCE: ORDINACE A TÝM ===== */}
      <section className="hd-section hd-ordinace" aria-labelledby="ordinace-h">
        <div className="hd-section-inner">
          <p className="hd-eyebrow hd-eyebrow-light">Kde nás najdete</p>
          <h2 id="ordinace-h" className="hd-h2 hd-h2-light">
            Čtyři ordinace v&nbsp;přízemí,
            <br />
            deset minut z&nbsp;centra Liberce.
          </h2>

          <div className="hd-ordinace-grid">
            <div className="hd-adresa-card">
              <p className="hd-adresa-label">Adresa ordinace</p>
              <p className="hd-adresa">
                Jeronýmova 232/15
                <br />
                Liberec VII — Horní Růžodol
                <br />
                460 07
              </p>
              <p className="hd-body hd-body-light">
                Ordinace jsou v&nbsp;přízemí — bez schodů, vhodné i pro
                kočárek nebo hůl. Vchod do budovy je z&nbsp;boční ulice, za
                vrátky do zahrady.
              </p>
              <a className="hd-link" href="mailto:hajnikdental@gmail.com">
                hajnikdental@gmail.com
              </a>
            </div>

            <ul className="hd-tym-list">
              {tym.map((t) => (
                <li key={t.role} className="hd-tym-item">
                  <div className="hd-tym-head">
                    <h3 className="hd-h3 hd-h3-light">{t.role}</h3>
                    <span className="hd-tag hd-tag-light">{t.pocet}</span>
                  </div>
                  <p className="hd-body hd-body-light">{t.popis}</p>
                </li>
              ))}
              <li className="hd-tym-item hd-tym-item-note">
                <p className="hd-body hd-body-light">
                  Rodinná praxe funguje v&nbsp;Liberci nepřetržitě už přes
                  dekádu — mnoho našich pacientů k&nbsp;nám chodí od dětství
                  a dnes vodí vlastní děti.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
