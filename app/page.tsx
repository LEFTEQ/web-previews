import React from "react";

const services = [
  {
    tag: "KLEMPÍŘINA",
    title: "Opravy po nehodě",
    body: "Rovnání karoserie, výměna dílů i práce s originální geometrií vozu. Vrátíme auto do tvaru, ve kterém sjelo z výroby.",
  },
  {
    tag: "LAK",
    title: "Lakýrnické práce",
    body: "Míchání odstínu na míru laku vašeho vozu, lokální i celoplošné lakování v uzavřené kabině bez prachu a much.",
  },
  {
    tag: "POJIŠŤOVNA",
    title: "Pojistné události",
    body: "Smluvní partner pojišťoven. Nahlášení, komunikaci i papírování vyřídíme za vás a po dobu opravy půjčíme náhradní vůz.",
  },
  {
    tag: "SERVIS",
    title: "Mechanika a STK",
    body: "Diagnostika BOSCH, VAG a DELPHI, brzdy, podvozek, geometrie a zajištění STK i emisí osobních a užitkových vozů.",
  },
  {
    tag: "PNEU",
    title: "Pneuservis",
    body: "Přezutí do velikosti 22\", internetové ceny pneumatik a sezónní uskladnění kol pod střechou, kdy je nepotřebujete.",
  },
  {
    tag: "KLIMA",
    title: "Servis klimatizace",
    body: "Plnění, dezinfekce, čištění a ionizace systému. Opravy kompresorů, výměny kondenzátorů a montáže tažných zařízení.",
  },
];

export default function Page() {
  return (
    <main>
      {/* top bar */}
      <div className="pa-topbar">
        <div className="pa-topbar-in">
          <span className="pa-mark" style={{ fontSize: "20px" }}>
            <span className="pro">PRO</span>
            <span className="auto">AUTO</span>
            <span className="hk">HK</span>
          </span>
          <span>
            <span className="hide-sm">Autoklempířství Hradec Králové&nbsp;&nbsp;</span>
            <a href="tel:+420775077789"><span className="dot">●</span> +420&nbsp;775&nbsp;077&nbsp;789</a>
          </span>
        </div>
      </div>

      {/* HERO */}
      <header className="pa-hero">
        <img
          className="pa-hero-img"
          src="/hero.webp"
          alt="Karoserie osobního vozu při klempířské opravě v dílně Proauto Hradec Králové"
        />
        <div className="pa-hero-in">
          <span className="pa-eyebrow reveal">
            <span className="stripe" aria-hidden="true" />
            Autoklempířství &amp; lak · Hradec Králové
          </span>
          <h1 className="pa-h1 reveal d1">
            Dáme vašemu autu
            <br />
            zpátky <span className="em">jeho tvar.</span>
            <span className="thin">
              Bourané, ohnuté, poškrábané. Srovnáme karoserii, namícháme lak
              přesně na váš odstín a pojistnou událost vyřídíme s pojišťovnou
              za vás — vy jen přijedete a odjedete náhradním vozem.
            </span>
          </h1>
          <div className="pa-hero-actions reveal d2">
            <a className="pa-btn pa-btn-primary" href="tel:+420775077789">
              Zavolat do dílny
            </a>
            <a className="pa-btn pa-btn-ghost" href="mailto:servis@proautohk.cz">
              Poslat fotky poškození
            </a>
          </div>
        </div>

        {/* odometer strip */}
        <div className="pa-odo">
          <div className="pa-odo-in">
            <div className="pa-odo-cell">
              <div className="pa-odo-num">Smluvní partner</div>
              <div className="pa-odo-lab">pojišťoven — papíry řešíme my</div>
            </div>
            <div className="pa-odo-cell">
              <div className="pa-odo-num">Náhradní vůz</div>
              <div className="pa-odo-lab">po celou dobu opravy</div>
            </div>
            <div className="pa-odo-cell">
              <div className="pa-odo-num">Osobní i užitková</div>
              <div className="pa-odo-lab">všechny značky vozů</div>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES */}
      <section className="pa-sec" aria-labelledby="sluzby">
        <div className="pa-wrap">
          <div className="pa-sec-head">
            <span className="pa-kicker">Zakázkový list</span>
            <h2 className="pa-sec-title" id="sluzby">
              Co u nás vyřešíte
            </h2>
            <p className="pa-sec-intro">
              Klempířina a lak jsou naše řemeslo — ale pod jednou střechou
              zvládneme i mechaniku, pneu a klimu, abyste kvůli jedné opravě
              neobjížděli půl Hradce.
            </p>
          </div>

          <div className="pa-grid">
            {services.map((s, i) => (
              <article className="pa-card" key={s.title}>
                <div className="pa-card-no">
                  <span>ÚKON {String(i + 1).padStart(2, "0")}</span>
                  <span className="tag">{s.tag}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="pa-sec pa-trust" aria-labelledby="onas">
        <div className="pa-wrap">
          <div className="pa-sec-head">
            <span className="pa-kicker">O dílně</span>
            <h2 className="pa-sec-title" id="onas">
              Dílna, které auto svěříte
            </h2>
            <p className="pa-sec-intro">
              Nejsme řetězec. Jsme domácí autoklempířství v Hradci Králové,
              kde s vámi mluví ten, kdo na vašem autě opravdu dělá.
            </p>
          </div>

          <div className="pa-trust-grid">
            <figure className="pa-trust-figure reveal">
              <img
                src="/section-1.webp"
                alt="Technik při diagnostice a lakýrnické práci v servisu Proauto Hradec Králové"
              />
              <figcaption>Naše dílna · Hradec Králové</figcaption>
            </figure>

            <div>
              <ul className="pa-facts">
                <li className="pa-fact">
                  <span className="pa-fact-k">01</span>
                  <div className="pa-fact-b">
                    <strong>Řešíme to s pojišťovnou</strong>
                    <span>
                      Jako smluvní partner pojišťoven nahlásíme škodu,
                      zastoupíme vás při nehodě a hlídáme, aby oprava
                      proběhla bez doplácení navíc.
                    </span>
                  </div>
                </li>
                <li className="pa-fact">
                  <span className="pa-fact-k">02</span>
                  <div className="pa-fact-b">
                    <strong>Lak namícháme na odstín</strong>
                    <span>
                      Barvu ladíme přesně podle kódu a stavu laku vozu, ne
                      \"přibližně\". Opravené místo nepoznáte.
                    </span>
                  </div>
                </li>
                <li className="pa-fact">
                  <span className="pa-fact-k">03</span>
                  <div className="pa-fact-b">
                    <strong>Nezůstanete bez auta</strong>
                    <span>
                      Po dobu opravy vám půjčíme náhradní osobní i užitkový
                      vůz — a k tomu i střešní boxy a nosiče na cesty.
                    </span>
                  </div>
                </li>
              </ul>

              <div className="pa-partners">
                <span className="lab">Diagnostika a technika, na které jedeme</span>
                <span className="pa-chip">BOSCH</span>
                <span className="pa-chip">VAG</span>
                <span className="pa-chip">DELPHI</span>
                <span className="pa-chip">SVC · BOSAL · BRINK</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
