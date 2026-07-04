import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="demo">
      <a className="skip" href="#obsah">Přeskočit na obsah</a>

      {/* ---------------- HERO ---------------- */}
      <header className="nav">
        <div className="wordmark" aria-label="Cizmar Investments">
          <span className="wm-line">CIZMAR</span>
          <span className="wm-sub">INVESTMENTS · LIBEREC</span>
        </div>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#technika">Technika</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt">733&nbsp;323&nbsp;777</a>
        </nav>
      </header>

      <section className="hero" id="obsah">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Demoliční technika Cizmar Investments při bourání objektu v Liberci"
            width={1600}
            height={1100}
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Bourací a demoliční práce · Liberec a okolí</p>
          <h1>
            Než tu něco vyroste,
            <span className="hl"> musí to spadnout pořádně.</span>
          </h1>
          <p className="lede">
            Rozebereme dům, halu i betonovou konstrukci tak, aby po nás zbyla
            čistá, urovnaná parcela připravená k další stavbě. Bez prachu do
            oken sousedů, bez suti přes plot, s odvozem a recyklací materiálu.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kontakt">Nezávazně nacenit demolici</a>
            <a className="btn btn-ghost" href="#technika">Co umíme zbourat</a>
          </div>
        </div>

        {/* signature: demoliční sekvence – tři fáze na jedné liště */}
        <ol className="phases" aria-label="Průběh zakázky">
          <li>
            <span className="ph-no">01</span>
            <span className="ph-t">Zajistíme</span>
            <span className="ph-d">Sítě, statika, ohlášení a oplocení staveniště.</span>
          </li>
          <li>
            <span className="ph-no">02</span>
            <span className="ph-t">Zbouráme</span>
            <span className="ph-d">Řízená demolice bagrem s bourací hlavou i ruční rozebrání.</span>
          </li>
          <li>
            <span className="ph-no">03</span>
            <span className="ph-t">Uklidíme</span>
            <span className="ph-d">Drcení sutě, odvoz, recyklace a urovnání terénu.</span>
          </li>
        </ol>
      </section>

      {/* ---------------- SEKCE 1: TECHNIKA / SLUŽBY ---------------- */}
      <section className="work" id="technika">
        <div className="sec-head">
          <p className="eyebrow">Naše technika</p>
          <h2>Stroje na tvrdou práci, ruce na tu jemnou</h2>
          <p className="sec-lede">
            Každá demolice je jinak velký oříšek. Vybíráme sílu podle toho, co
            stojí před námi — od dvoutunového minibagru v úzké uličce po pásové
            rypadlo s hydraulickými nůžkami na železobeton.
          </p>
        </div>

        <div className="work-grid">
          <img
            className="work-photo"
            src="/section-1.webp"
            alt="Rypadlo s bourací hlavou při demolici zděné budovy"
            width={1200}
            height={900}
          />

          <ul className="svc-list">
            {services.map((s) => (
              <li key={s.t} className="svc">
                <div className="svc-load" aria-hidden="true">
                  <span style={{ "--w": s.load } as CSSProperties} />
                </div>
                <div className="svc-body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- SEKCE 2: DŮVĚRA / O NÁS ---------------- */}
      <section className="trust" id="reference">
        <div className="trust-media">
          <img
            src="/section-2.webp"
            alt="Uklizená parcela po demolici připravená k nové výstavbě"
            width={1200}
            height={900}
          />
        </div>

        <div className="trust-copy">
          <p className="eyebrow">Proč zrovna my</p>
          <h2>Předáme vám prázdnou, čistou parcelu — ne hromadu problémů</h2>
          <p className="sec-lede">
            Bouráme na Liberecku od roku 2015. Za tu dobu jsme se naučili, že
            zákazníka netrápí jen ta chvíle, kdy zeď padne — ale všechno kolem:
            papíry, sousedé, prach a odvoz. Ten balík bereme na sebe.
          </p>

          <dl className="facts">
            {facts.map((f) => (
              <div key={f.k} className="fact">
                <dt>{f.v}</dt>
                <dd>{f.k}</dd>
              </div>
            ))}
          </dl>

          <blockquote className="quote">
            „Stará stodola stála na hranici pozemku a báli jsme se o dům
            vedle. Kluci ji rozebrali po částech, nezůstalo ani smítko a suť
            odvezli. Za týden bylo hotovo.“
            <cite>— Petr H., rodinný dům, Vratislavice nad Nisou</cite>
          </blockquote>

          <p className="kontakt-line" id="kontakt">
            Zavolejte na <a href="tel:+420733323777">733&nbsp;323&nbsp;777</a>{" "}
            nebo napište na{" "}
            <a href="mailto:info@cizmarinvestments.cz">info@cizmarinvestments.cz</a>.
            Přijedeme se na místo podívat a řekneme cenu na rovinu.
          </p>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    t: "Demolice domů a hospodářských budov",
    d: "Rodinné domy, chalupy, stodoly i garáže — kompletně k základové desce, nebo jen část, kterou potřebujete pryč.",
    load: "92%",
  },
  {
    t: "Bourání betonu a železobetonu",
    d: "Základy, podlahy, opěrné zdi a konstrukce hydraulickými nůžkami a bouracím kladivem. Armaturu třídíme zvlášť.",
    load: "100%",
  },
  {
    t: "Vnitřní a citlivé demolice",
    d: "Ruční vybourání příček, jader a stropů tam, kde má okolí zůstat netknuté — rekonstrukce a půdní vestavby.",
    load: "55%",
  },
  {
    t: "Recyklace a odvoz sutě",
    d: "Podrtíme beton a cihlu přímo na místě na použitelný recyklát, zbytek roztřídíme a legálně odvezeme.",
    load: "78%",
  },
];

const facts = [
  { v: "2015", k: "bouráme na Liberecku od roku" },
  { v: "do 5 dnů", k: "obvyklý termín menší demolice" },
  { v: "≈ 80 %", k: "materiálu putuje k recyklaci" },
  { v: "1 firma", k: "od papírů po urovnaný terén" },
];
