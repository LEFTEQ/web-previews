import type { CSSProperties } from "react";

const services = [
  {
    tag: "01",
    name: "Sítotisk",
    note: "Naše řemeslo",
    body: "Ostrá barva, hutná krycí vrstva, otisk, který drží roky. Autorské kresby na porcelán i firemní merch — trika a mikiny s logem, které vydrží praní.",
  },
  {
    tag: "02",
    name: "Digitální tisk",
    note: "Malé i velké série",
    body: "Plakáty, vizitky, polepy výloh a stylový tisk na sklo pro interiér až do délky 2,5 m. Vytiskneme, expedujeme po celé ČR.",
  },
  {
    tag: "03",
    name: "Výsek, řezání, frézování",
    note: "Konstrukční design",
    body: "Řezaná grafika a polep výlohy v Brně a okolí do 3 dnů. Přesnost, kde rozhodují setiny milimetru — i pro klienty z automotivu.",
  },
  {
    tag: "04",
    name: "Světelná reklama a 3D nápisy",
    note: "Montáž i demontáž",
    body: "Světelnou reklamu, 3D nápis nebo logo vaší firmy vyrobí, namontuje i sundá náš vyškolený tým. Klíč na ruku.",
  },
];

const clients = [
  "Technické muzeum v Brně",
  "Porsche",
  "Coca-Cola",
  "Wrangler",
  "Siemens",
  "Stella Artois",
  "Dodge",
  "Zmrzlina Božský kopeček",
  "Koloběžky Lime",
  "Essence",
];

const quotes = [
  {
    text: "Aplikuji autorské motivy na porcelán, takže je pro mě důležité zachovat co nejvíc detailů z jemné kresby. Díky zkušenostem pana tiskaře a přístupu celého týmu jsem s obtisky velmi spokojená.",
    who: "Daniela Jaša Fišerová",
    role: "kresby pod značkou Ellastration",
  },
  {
    text: "Pravidelně vybíráme co nejvhodnější alternativy materiálů na konkrétní zakázky. Na Print Adámek se můžeme spolehnout.",
    who: "David Vlachopulos",
    role: "HSW Signall s.r.o.",
  },
  {
    text: "Vysoká tisková kvalita, flexibilita a dobré ceny. Proto s nimi dlouhodobě spolupracujeme na zakázkách pro Braun, Panasonic, Wrangler nebo Rimmel.",
    who: "Hansen & Klein s.r.o.",
    role: "náročné světové značky",
  },
];

export default function Page() {
  return (
    <main className="pa">
      <header className="pa-top">
        <a className="pa-mark" href="#" aria-label="Print Adámek, sítotiskárna Brno">
          <span className="pa-mark-print">PRINT</span>
          <span className="pa-mark-adamek">ADÁMEK</span>
          <span className="pa-mark-sub">sítotisk · Brno</span>
        </a>
        <a className="pa-phone" href="tel:+420603535920">
          <span className="pa-phone-num">+420 603 535 920</span>
          <span className="pa-phone-tag">NON-STOP</span>
        </a>
      </header>

      <section className="pa-hero">
        <div className="pa-hero-copy">
          <p className="pa-eyebrow">Barva, síto, otisk — od roku, kdy razítko nestačilo</p>
          <h1 className="pa-h1">
            Tiskneme<br />
            <span className="pa-h1-ink">na cokoliv</span><br />
            co unese barvu.
          </h1>
          <p className="pa-lede">
            Sítotisk, digitál, řezaná grafika i světelná reklama. Autorská kresba na
            porcelánu vedle firemního merche — v Brně, s expedicí po celé ČR.
          </p>
          <div className="pa-hero-cta">
            <a className="pa-btn" href="tel:+420603535920">Zavolat tiskaři</a>
            <a className="pa-btn pa-btn-ghost" href="#sluzby">Co umíme →</a>
          </div>
        </div>
        <figure className="pa-hero-img">
          <img src="/hero.webp" alt="Sítotisková dílna Print Adámek v Brně — barvy, síta a čerstvě potištěné archy" />
          <figcaption className="pa-swatch-row" aria-hidden="true">
            <span className="pa-swatch" style={{ "--c": "#FF4D1C" } as CSSProperties}>Pantone 172</span>
            <span className="pa-swatch" style={{ "--c": "#F7D046" } as CSSProperties}>Pantone 108</span>
            <span className="pa-swatch" style={{ "--c": "#2C7CFF" } as CSSProperties}>Pantone 285</span>
            <span className="pa-swatch" style={{ "--c": "#111111" } as CSSProperties}>Black K</span>
          </figcaption>
        </figure>
      </section>

      <div className="pa-marquee" aria-hidden="true">
        <div className="pa-marquee-track">
          <span>SÍTOTISK</span><span>·</span><span>DIGITÁLNÍ TISK</span><span>·</span>
          <span>VÝSEK</span><span>·</span><span>FRÉZOVÁNÍ</span><span>·</span>
          <span>ŘEZANÁ GRAFIKA</span><span>·</span><span>SVĚTELNÁ REKLAMA</span><span>·</span>
          <span>SÍTOTISK</span><span>·</span><span>DIGITÁLNÍ TISK</span><span>·</span>
          <span>VÝSEK</span><span>·</span><span>FRÉZOVÁNÍ</span><span>·</span>
          <span>ŘEZANÁ GRAFIKA</span><span>·</span><span>SVĚTELNÁ REKLAMA</span><span>·</span>
        </div>
      </div>

      <section className="pa-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pa-sec-head">
          <span className="pa-sec-index">Vrstva 1 — 4</span>
          <h2 id="sluzby-nadpis" className="pa-h2">Full servis v polygrafii</h2>
          <p className="pa-sec-note">
            Každou zakázku bereme jako jednu barevnou vrstvu za druhou. Poradíme na míru,
            nabídneme alternativní materiály a hlídáme detail i tam, kde jde o setiny milimetru.
          </p>
        </div>
        <ol className="pa-grid">
          {services.map((s) => (
            <li className="pa-card" key={s.tag}>
              <div className="pa-card-top">
                <span className="pa-card-num">{s.tag}</span>
                <span className="pa-card-note">{s.note}</span>
              </div>
              <h3 className="pa-card-name">{s.name}</h3>
              <p className="pa-card-body">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="pa-section2-img">
          <img src="/section-1.webp" alt="Detail sítotiskového rámu a čerstvě potištěného archu v tiskárně Adámek" />
        </div>
      </section>

      <section className="pa-trust" aria-labelledby="trust-nadpis">
        <div className="pa-trust-head">
          <span className="pa-sec-index">Otisk důvěry</span>
          <h2 id="trust-nadpis" className="pa-h2">
            Tiskneme pro muzeum i pro světové značky
          </h2>
          <p className="pa-sec-note">
            K jednomu každému zákazníkovi přistupujeme osobitě. Náročné klienty z automotivu
            i autory jemné kresby spojuje jedno: rychlost, flexibilita a osobní přístup.
          </p>
        </div>

        <ul className="pa-clients" aria-label="Vybrané reference">
          {clients.map((c) => (
            <li key={c} className="pa-client">{c}</li>
          ))}
        </ul>

        <div className="pa-trust-body">
          <figure className="pa-trust-img">
            <img src="/section-2.webp" alt="Instalace řezané grafiky a světelné reklamy od Print Adámek" />
          </figure>
          <div className="pa-quotes">
            {quotes.map((q) => (
              <blockquote className="pa-quote" key={q.who}>
                <p className="pa-quote-text">{q.text}</p>
                <footer className="pa-quote-src">
                  <span className="pa-quote-who">{q.who}</span>
                  <span className="pa-quote-role">{q.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="pa-facts">
          <div className="pa-fact"><span>Řezaná grafika a polep výlohy</span><strong>do 3 dnů</strong></div>
          <div className="pa-fact"><span>Tisk na sklo do interiéru</span><strong>až 2,5 m</strong></div>
          <div className="pa-fact"><span>Expedice</span><strong>po celé ČR</strong></div>
          <div className="pa-fact"><span>Dílna a nakládka</span><strong>Bohunická 81, Brno</strong></div>
        </div>
      </section>
    </main>
  );
}
