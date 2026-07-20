import { AiImage } from "./_ui";

type Channel = {
  code: string;
  title: string;
  value: string;
  desc: string;
  path: string;
};

const channels: Channel[] = [
  {
    code: "CH-01",
    title: "Servis",
    value: "Ø 60 min diagnostika",
    desc: "Kompletní mechanický i elektronický servis. Vůz nejdřív připojíme na diagnostiku, řekneme přesně, co potřebuje — a opravíme jen to.",
    path: "M0,20 L58,20 L70,20 L78,5 L86,35 L94,14 L102,20 L200,20",
  },
  {
    code: "CH-02",
    title: "Záruky",
    value: "Originál díly Ford",
    desc: "Opravy s originálními díly a jasnou zárukou. Historii každého zásahu do vozu vidíte černé na bílém.",
    path: "M0,28 L44,28 L44,12 L104,12 L104,24 L160,24 L160,8 L200,8",
  },
  {
    code: "CH-03",
    title: "Ford Service Plan",
    value: "cena fixní na roky",
    desc: "Předplacený servis na roky dopředu. Ceny znáte předem, žádné překvapení u přebírání vozu.",
    path: "M0,20 Q25,4 50,20 T100,20 T150,20 T200,20",
  },
  {
    code: "CH-04",
    title: "Příslušenství",
    value: "na míru modelu",
    desc: "Originální doplňky a díly Ford vybrané přesně pro váš model — od střešních nosičů po elektroniku.",
    path: "M0,20 L50,20 L58,8 L66,20 L120,20 L128,8 L136,20 L200,20",
  },
  {
    code: "CH-05",
    title: "Asistenční služba",
    value: "24/7 odtah",
    desc: "Zůstanete stát? Ford Assistance vás odtáhne k nám a o zbytek se postaráme my.",
    path: "M0,32 L40,8 L40,32 L80,8 L80,32 L120,8 L120,32 L160,8 L160,32 L200,8",
  },
  {
    code: "CH-06",
    title: "Náhradní vozy",
    value: "auto po dobu opravy",
    desc: "Po dobu opravy dostanete náhradní vůz, ať zůstanete stále v pohybu a nemusíte řešit MHD.",
    path: "M0,20 L60,20 L84,20 L92,20 L98,6 L104,34 L110,14 L116,20 L200,20",
  },
];

const stats: { k: string; v: string }[] = [
  { k: "od roku", v: "1989" },
  { k: "značka", v: "pouze Ford" },
  { k: "přístup", v: "rodinný" },
];

export default function Page() {
  return (
    <main className="terminal">
      <div className="inner">
        <header className="topbar">
          <div className="wordmark">
            <span className="live" aria-hidden="true" />
            <span className="wm-name">MAIER</span>
            <span className="wm-sub">AUTODÍLNA · EST. 1989</span>
          </div>
          <p className="status" aria-hidden="true">
            SCAN &middot; OBD-II &middot; <span className="ok">ONLINE</span>
          </p>
        </header>
      </div>

      {/* HERO */}
      <section className="section hero" aria-labelledby="hero-title">
        <div className="inner">
          <p className="eyebrow">Autorizovaný opravce Ford &middot; Praha</p>
          <h1 id="hero-title" className="hero-title">
            Přečteme skutečný
            <br />
            <span className="accent">tep vašeho vozu.</span>
          </h1>
          <p className="lede">
            Malý rodinný servis Ford, který k autu přistupuje jako k pacientovi:
            napojíme diagnostiku, najdeme příčinu a opravíme přesně to, co je
            potřeba — nic navíc.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#kanaly">
              Objednat na servis
            </a>
            <a className="btn btn-ghost" href="#dilna">
              O naší dílně
            </a>
          </div>

          <div className="scope" role="img" aria-label="Osciloskopická stopa — živý signál diagnostiky">
            <div className="scope-labels" aria-hidden="true">
              <span>CH-00 &middot; MAIER DIAGNOSTIC</span>
              <span>20&nbsp;ms/div &middot; 5&nbsp;V/div</span>
            </div>
            <svg className="scope-svg" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
              <path
                className="trace"
                pathLength={1000}
                d="M0,100 L200,100 L230,100 L250,38 L270,150 L290,72 L310,100 L520,100 L560,100 L580,62 L600,100 L640,100 L660,26 L680,172 L700,68 L720,100 L980,100 L1010,100 L1030,56 L1050,120 L1070,100 L1200,100"
              />
            </svg>
            <span className="scan" aria-hidden="true" />
          </div>
        </div>
      </section>

      <Divider label="KANÁLY 01—06" />

      {/* CHANNELS */}
      <section className="section" id="kanaly" aria-labelledby="kanaly-title">
        <div className="inner">
          <div className="sec-head">
            <p className="eyebrow">Co umíme &middot; 6 diagnostických kanálů</p>
            <h2 id="kanaly-title" className="sec-title">
              Každá služba má svůj vlastní puls.
            </h2>
          </div>

          <ul className="grid">
            {channels.map((c, i) => (
              <li className="card" key={c.code} style={{ animationDelay: `${0.15 * i}s` }}>
                <div className="card-top">
                  <span className="card-code">{c.code}</span>
                  <span className="card-led" aria-hidden="true" />
                </div>
                <svg className="mini" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
                  <path d={c.path} />
                </svg>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-value">{c.value}</p>
                <p className="card-desc">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Divider label="O DÍLNĚ" />

      {/* ABOUT / TRUST */}
      <section className="section" id="dilna" aria-labelledby="dilna-title">
        <div className="inner about">
          <div className="about-main">
            <p className="eyebrow">O dílně &middot; od roku 1989</p>
            <h2 id="dilna-title" className="sec-title">
              Nejmenší dealer Ford, největší péče.
            </h2>
            <p className="about-text">
              Začínali jsme v roce 1989 doslova na zelené louce pod Strahovem a z
              mála vybudovali prosperující dílnu. Jsme sice jedním z nejmenších
              dealerů Ford, ale právě proto na vás máme čas.
            </p>
            <blockquote className="quote">
              <p>
                „Zakládáme si na individuálním přístupu, který ve velkých
                servisech často chybí. Klienti si cení téměř rodinné atmosféry,
                rádi se vracejí — a zůstávají věrní značce Ford.“
              </p>
              <cite>— pan Maier, zakladatel</cite>
            </blockquote>

            <dl className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="readout" aria-label="Kontaktní údaje dílny">
            <p className="readout-head">// KONTAKTNÍ ODEČET</p>
            <dl className="readout-list">
              <div>
                <dt>telefon</dt>
                <dd>777&nbsp;111&nbsp;222</dd>
              </div>
              <div>
                <dt>e-mail</dt>
                <dd>info@example.cz</dd>
              </div>
              <div>
                <dt>adresa</dt>
                <dd>Ukázková 123, Praha</dd>
              </div>
              <div>
                <dt>provoz</dt>
                <dd>Po–Pá &middot; objednávky předem</dd>
              </div>
            </dl>
            <p className="readout-note">
              Autorizovaný opravce vozů Ford. Objednejte se a připojíme váš vůz na
              diagnostiku.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="divider" aria-hidden="true">
      <div className="inner divider-inner">
        <span className="divider-label">{label}</span>
        <svg className="divider-svg" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path d="M0,12 L470,12 L482,12 L490,4 L498,20 L506,9 L514,12 L720,12 L732,12 L740,3 L748,21 L756,12 L1200,12" />
        </svg>
      </div>
    </div>
  );
}
