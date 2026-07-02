export const metadata = {
  title: "Květiny Rosa — květinářství v Ústí nad Labem",
  description:
    "Květiny Rosa, Ústí nad Labem. Vázané kytice na počkání, svatební floristika a smuteční vazba. Čerstvé řezané květiny každý týden.",
  openGraph: {
    title: "Květiny Rosa — květinářství v Ústí nad Labem",
    description:
      "Vázané kytice na počkání, svatební floristika a smuteční vazba. Ústí nad Labem.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    nazev: "Kytice na počkání",
    popis:
      "Řeknete si cenu a barvy, my uvážeme. Do deseti minut odcházíte s kyticí — na rande, k narozeninám, jen tak. Sezónní květiny podle toho, co je zrovna nejčerstvější.",
    detail: "od 250 Kč",
    stitek: "denně čerstvé",
  },
  {
    nazev: "Svatební floristika",
    popis:
      "Svatební kytice, korsáž pro ženicha, výzdoba obřadu i tabule. Přijďte s fotkou šatů nebo jen s náladou svatby — návrh a kalkulaci připravíme do týdne.",
    detail: "konzultace zdarma",
    stitek: "na objednávku",
  },
  {
    nazev: "Smuteční vazba",
    popis:
      "Věnce, vypichované kytice a stuhy s textem. Rozumíme tomu, že spěcháte a nechcete nic řešit dlouho — stačí zavolat, domluvíme vše po telefonu a připravíme na čas.",
    detail: "do 24 hodin",
    stitek: "i o víkendu",
  },
  {
    nazev: "Květiny pro firmy",
    popis:
      "Pravidelná výzdoba recepce, kytice pro kolegyně k výročí, adventní dekorace kanceláří. Fakturujeme měsíčně, vozíme po celém Ústí a okolí.",
    detail: "rozvoz v ceně",
    stitek: "pravidelně",
  },
];

const sezona = [
  { mesice: "III–V", kvetiny: "tulipány · narcisy · pivoňky rané" },
  { mesice: "VI–VIII", kvetiny: "pivoňky · slunečnice · lathyrus" },
  { mesice: "IX–XI", kvetiny: "jiřiny · chryzantémy · vřes" },
  { mesice: "XII–II", kvetiny: "amarylis · čemeřice · jmelí" },
];

const duvera = [
  {
    text: "Přiběhla jsem pět minut před zavíračkou, že potřebuju kytici na oslavu. Paní se ani nezamračila a uvázala mi tu nejhezčí, jakou jsem kdy nesla.",
    autor: "Markéta H., Střekov",
  },
  {
    text: "Svatební kytici jsme řešili na dálku, já z Prahy. Poslali fotky návrhu, doladili barvy podle šatů a v den svatby byla přesně taková. Pivoňky vydržely celý den.",
    autor: "Tereza a Jakub, svatba na Větruši",
  },
  {
    text: "Objednáváme květiny na recepci každé pondělí už třetí rok. Nikdy nepřivezli nic povadlého a vždycky něco jiného. To se v Ústí jen tak nevidí.",
    autor: "recepce advokátní kanceláře, centrum",
  },
];

function RosaMark({ className }: { className?: string }) {
  // Stylizovaná růže z jediné spirálové linky — signature prvek značky
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M60 60c2-6 10-7 13 0 3 8-5 14-13 13-11-1-17-12-13-22 5-12 20-15 30-8 12 8 13 25 4 35-11 12-30 11-40-1-11-14-8-34 6-44 16-11 38-6 47 10"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M60 108V86m0 8c-8-2-12-8-13-15m13 9c7-3 10-8 11-13"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="rosa">
      {/* ————— HERO ————— */}
      <header className="hero">
        <nav className="hero-nav" aria-label="Hlavní">
          <span className="wordmark">
            Květiny<em>Rosa</em>
          </span>
          <a className="nav-tel" href="tel:+420475000000">
            Zavolat do květinářství
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow">Květinářství · Ústí nad Labem</p>
            <h1>
              <span className="h1-line h1-a">Uvážeme,</span>
              <span className="h1-line h1-b">co zrovna</span>
              <span className="h1-line h1-c">kvete.</span>
            </h1>
            <p className="hero-lead">
              Kytice na počkání z květin, které jsou ten týden nejčerstvější.
              Žádné objednávky přes formulář, žádné čekání — stavíte se,
              řeknete si a odcházíte s kyticí v ruce.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="tel:+420475000000">
                Zavolat: kytice na dnes
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Co vážeme
              </a>
            </div>
            <p className="hero-note">
              Po–Pá 8–18 · So 8–12 · centrum Ústí nad Labem, kousek od Mírového
              náměstí
            </p>
          </div>

          <div className="hero-rose" aria-hidden="true">
            <RosaMark className="rose-big" />
            <div className="rose-caption">
              <span>jedna linka,</span>
              <span>jedna růže —</span>
              <span>tak vážeme i kytice:</span>
              <span>jedním tahem, bez zbytečností</span>
            </div>
          </div>
        </div>

        <div className="hero-ticker" aria-label="Co právě kvete">
          <div className="ticker-track">
            <span>tulipány</span>
            <span className="dot">✿</span>
            <span>pivoňky</span>
            <span className="dot">✿</span>
            <span>eukalyptus</span>
            <span className="dot">✿</span>
            <span>ranunculus</span>
            <span className="dot">✿</span>
            <span>frézie</span>
            <span className="dot">✿</span>
            <span>tulipány</span>
            <span className="dot">✿</span>
            <span>pivoňky</span>
            <span className="dot">✿</span>
            <span>eukalyptus</span>
            <span className="dot">✿</span>
            <span>ranunculus</span>
            <span className="dot">✿</span>
            <span>frézie</span>
            <span className="dot">✿</span>
          </div>
        </div>
      </header>

      {/* ————— SLUŽBY ————— */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u nás uvážete</h2>
          <p>
            Čtyři věci umíme opravdu dobře. Nic víc na výloze neslibujeme.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <div className="karta-head">
                <h3>{s.nazev}</h3>
                <span className="stitek">{s.stitek}</span>
              </div>
              <p>{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>

        <div className="sezona" aria-label="Sezónní květiny podle měsíců">
          <h3 className="sezona-h">Podle čeho vážeme: sezóna, ne katalog</h3>
          <ul className="sezona-list">
            {sezona.map((s) => (
              <li key={s.mesice}>
                <span className="sezona-mesice">{s.mesice}</span>
                <span className="sezona-kvetiny">{s.kvetiny}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ————— DŮVĚRA ————— */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head section-head-light">
          <h2 id="duvera-h">Ústí nás zná od výlohy</h2>
          <p>
            Malé květinářství v centru. Květiny bereme dvakrát týdně z burzy,
            takže to, co vidíte ve vědrech, je opravdu čerstvé — a co povadne,
            neprodáváme.
          </p>
        </div>

        <div className="duvera-grid">
          {duvera.map((d) => (
            <blockquote className="citace" key={d.autor}>
              <RosaMark className="citace-rose" />
              <p>„{d.text}“</p>
              <cite>{d.autor}</cite>
            </blockquote>
          ))}
        </div>

        <ul className="fakta">
          <li>
            <strong>2×</strong>
            <span>týdně čerstvý závoz z květinové burzy</span>
          </li>
          <li>
            <strong>10 min</strong>
            <span>průměrné čekání na vázanou kytici</span>
          </li>
          <li>
            <strong>Ústí</strong>
            <span>a okolí — rozvoz kytic po domluvě</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
