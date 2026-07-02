// Lipka – školské zařízení pro environmentální vzdělávání, Brno
// Návrh: „list lípy jako herbářový arch“ — signature prvek je SVG žilnatina lipového listu,
// typografie kombinuje robustní Fraunces (display) a věcný system-ui/humanist body.

const krouzky = [
  {
    znak: "lupa",
    nazev: "Malí badatelé",
    vek: "1.–3. třída",
    misto: "pracoviště Lipová, Pisárky",
    popis:
      "Lupa, síťka, deník. Děti sledují půdní hmyz, klíčí semínka a učí se ptát „proč?“ dřív, než dostanou odpověď.",
  },
  {
    znak: "list",
    nazev: "Zahradníci",
    vek: "3.–5. třída",
    misto: "pracoviště Rozmarýnek, Jundrov",
    popis:
      "Vlastní záhon od jara do podzimu. Sázíme, zaléváme, sklízíme a ochutnáváme — a v zimě plánujeme, co poroste příště.",
  },
  {
    znak: "stopa",
    nazev: "Stopaři",
    vek: "5.–7. třída",
    misto: "terén — brněnské lesy a údolí Svratky",
    popis:
      "Každou schůzku venku, za každého počasí. Stopy, peří, letokruhy, mapa a buzola. Odnesete si dítě, které chce ven i o víkendu.",
  },
  {
    znak: "kos",
    nazev: "Rukodělka",
    vek: "od 8 let i pro dospělé",
    misto: "pracoviště Lipová, Pisárky",
    popis:
      "Ošatky z orobince, vlna, včelí vosk, proutí. Řemesla, která voní materiálem a fungují bez zásuvky.",
  },
];

const duvody = [
  {
    cislo: "30 let",
    text: "učíme děti i dospělé v Brně vztahu k přírodě — od roku 1991, jako školské zařízení Jihomoravského kraje.",
  },
  {
    cislo: "5 pracovišť",
    text: "Lipová, Rozmarýnek, Jezírko, Kamenná a Rychta v Krásensku — zahrady, dílny i terénní základna v Moravském krasu.",
  },
  {
    cislo: "90 % venku",
    text: "většina schůzek probíhá na zahradě nebo v terénu. Deník, holínky a svačina jsou důležitější než sešit.",
  },
];

const hlasy = [
  {
    citace:
      "Syn chodí na Stopaře třetí rok. Naučil se poznávat stromy podle kůry a nás v neděli tahá do Mariánského údolí místo k tabletu.",
    kdo: "Markéta H., maminka, Brno-Líšeň",
  },
  {
    citace:
      "Na Rozmarýnku má dcera svůj záhonek. Když jsme na podzim sklízeli mrkev, kterou v dubnu sama zasela, byla pyšnější než z vysvědčení.",
    kdo: "Tomáš V., tatínek, Brno-Jundrov",
  },
];

function Znak({ typ }: { typ: string }) {
  const spolecne = {
    width: 34,
    height: 34,
    viewBox: "0 0 34 34",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (typ === "lupa")
    return (
      <svg {...spolecne}>
        <circle cx="14" cy="14" r="8" />
        <path d="M20 20l8 8" />
        <path d="M11 14c1.5-3 4.5-3 6 0" />
      </svg>
    );
  if (typ === "list")
    return (
      <svg {...spolecne}>
        <path d="M17 29V13" />
        <path d="M17 13C9 13 6 8 6 4c6 0 11 3 11 9zm0 0c8 0 11-5 11-9-6 0-11 3-11 9z" />
        <path d="M13 24h8" />
      </svg>
    );
  if (typ === "stopa")
    return (
      <svg {...spolecne}>
        <ellipse cx="17" cy="21" rx="5" ry="6" />
        <circle cx="9" cy="13" r="2.2" />
        <circle cx="14" cy="9" r="2.2" />
        <circle cx="20" cy="9" r="2.2" />
        <circle cx="25" cy="13" r="2.2" />
      </svg>
    );
  return (
    <svg {...spolecne}>
      <path d="M7 15h20l-3 12H10z" />
      <path d="M7 15c0-6 4-9 10-9s10 3 10 9" />
      <path d="M12 20h10M11 24h12" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="lp">
      {/* ===================== HERO ===================== */}
      <header className="lp-hero">
        <div className="lp-hero-inner">
          <div className="lp-brand">
            <span className="lp-brand-mark" aria-hidden="true">
              {/* wordmark: lipový list místo tečky nad i */}
              <svg viewBox="0 0 26 26" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 23V10" />
                <path d="M13 10C13 5 9.5 2.5 5 3c.5 4.5 3 8 8 7z" />
                <path d="M13 10c0-5 3.5-7.5 8-7-.5 4.5-3 8-8 7z" />
              </svg>
            </span>
            <span className="lp-brand-word">L<span className="lp-brand-i">i</span>pka</span>
            <span className="lp-brand-sub">environmentální vzdělávání · Brno</span>
          </div>

          <h1 className="lp-hero-title">
            <span className="lp-hero-line lp-hero-line--1">Kroužky, kde</span>
            <span className="lp-hero-line lp-hero-line--2">se učí <em>venku</em> —</span>
            <span className="lp-hero-line lp-hero-line--3">rukama, lupou</span>
            <span className="lp-hero-line lp-hero-line--4">a holínkami.</span>
          </h1>

          <p className="lp-hero-lead">
            Přírodovědné a rukodělné kroužky pro děti od první třídy. Pět brněnských
            pracovišť se zahradami a dílnami, zápisy na školní rok otevíráme každé září.
          </p>

          <div className="lp-hero-akce">
            <a className="lp-btn lp-btn--plna" href="#krouzky">
              Vybrat kroužek
            </a>
            <a className="lp-btn lp-btn--linka" href="#o-lipce">
              Kdo jsme
            </a>
          </div>

          <ul className="lp-hero-fakta" aria-label="Základní údaje">
            <li>zápisy od 1. září</li>
            <li>schůzky 1× týdně</li>
            <li>pololetí od 900 Kč</li>
          </ul>
        </div>

        {/* signature: žilnatina lipového listu jako herbářový arch */}
        <div className="lp-hero-list" aria-hidden="true">
          <svg viewBox="0 0 600 760" preserveAspectRatio="xMidYMid slice">
            <g className="lp-zilnatina" fill="none" strokeLinecap="round">
              {/* obrys srdčitého listu lípy */}
              <path
                className="lp-zila lp-zila--obrys"
                d="M300 720 C 300 640, 296 560, 290 480 C 180 500, 60 440, 40 300 C 25 180, 120 60, 250 60 C 275 60, 290 75, 300 95 C 310 75, 325 60, 350 60 C 480 60, 575 180, 560 300 C 540 440, 420 500, 310 480 C 304 560, 300 640, 300 720"
              />
              {/* hlavní žíla */}
              <path className="lp-zila lp-zila--hlavni" d="M300 720 C 300 560, 298 300, 300 110" />
              {/* boční žíly vlevo */}
              <path className="lp-zila" d="M298 200 C 240 220, 170 210, 110 170" />
              <path className="lp-zila" d="M298 280 C 230 310, 160 310, 90 280" />
              <path className="lp-zila" d="M296 360 C 240 395, 180 405, 120 390" />
              <path className="lp-zila" d="M294 440 C 250 465, 205 472, 165 462" />
              {/* boční žíly vpravo */}
              <path className="lp-zila" d="M302 200 C 360 220, 430 210, 490 170" />
              <path className="lp-zila" d="M302 280 C 370 310, 440 310, 510 280" />
              <path className="lp-zila" d="M304 360 C 360 395, 420 405, 480 390" />
              <path className="lp-zila" d="M306 440 C 350 465, 395 472, 435 462" />
              {/* drobné žilky */}
              <path className="lp-zila lp-zila--drobna" d="M250 240 C 220 260, 190 265, 160 258" />
              <path className="lp-zila lp-zila--drobna" d="M350 240 C 380 260, 410 265, 440 258" />
              <path className="lp-zila lp-zila--drobna" d="M240 330 C 210 352, 180 358, 150 350" />
              <path className="lp-zila lp-zila--drobna" d="M360 330 C 390 352, 420 358, 450 350" />
            </g>
          </svg>
        </div>
      </header>

      {/* ===================== KROUŽKY ===================== */}
      <section className="lp-sekce" id="krouzky" aria-labelledby="krouzky-nadpis">
        <div className="lp-sekce-hlava">
          <p className="lp-stitek">Nabídka pro školní rok 2026/27</p>
          <h2 id="krouzky-nadpis" className="lp-nadpis">
            Který kroužek sedne vašemu dítěti?
          </h2>
          <p className="lp-perex">
            Malé skupiny do 15 dětí, vedoucí s pedagogickým vzděláním. Schůzka trvá
            90 minut a když neprší tak silně, aby to vadilo žížalám, jsme venku.
          </p>
        </div>

        <div className="lp-mriz">
          {krouzky.map((k) => (
            <article className="lp-karta" key={k.nazev}>
              <div className="lp-karta-znak">
                <Znak typ={k.znak} />
              </div>
              <h3 className="lp-karta-nazev">{k.nazev}</h3>
              <p className="lp-karta-meta">
                <span>{k.vek}</span>
                <span>{k.misto}</span>
              </p>
              <p className="lp-karta-popis">{k.popis}</p>
            </article>
          ))}
        </div>

        <p className="lp-pozn">
          K tomu příměstské tábory o prázdninách a víkendovky na Rychtě v Moravském
          krasu — sourozenci mají na druhý kroužek slevu 20&nbsp;%.
        </p>
      </section>

      {/* ===================== O LIPCE / DŮVĚRA ===================== */}
      <section className="lp-sekce lp-sekce--tmava" id="o-lipce" aria-labelledby="o-lipce-nadpis">
        <div className="lp-sekce-hlava">
          <p className="lp-stitek lp-stitek--svetly">O Lipce</p>
          <h2 id="o-lipce-nadpis" className="lp-nadpis lp-nadpis--svetly">
            Třicet let vedeme brněnské děti ven.
          </h2>
        </div>

        <dl className="lp-duvody">
          {duvody.map((d) => (
            <div className="lp-duvod" key={d.cislo}>
              <dt className="lp-duvod-cislo">{d.cislo}</dt>
              <dd className="lp-duvod-text">{d.text}</dd>
            </div>
          ))}
        </dl>

        <div className="lp-hlasy">
          {hlasy.map((h) => (
            <figure className="lp-hlas" key={h.kdo}>
              <blockquote>
                <p>„{h.citace}“</p>
              </blockquote>
              <figcaption>{h.kdo}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
