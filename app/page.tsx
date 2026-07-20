import { HeroWord, SealThud } from "./motion";

function Seal({ date }: { date: string }) {
  return (
    <svg
      className="seal"
      viewBox="0 0 200 200"
      role="img"
      aria-label={`Praženo dnes, ${date}`}
    >
      <defs>
        <path id="seal-top" d="M100,100 m-73,0 a73,73 0 1,1 146,0" />
        <path id="seal-bot" d="M100,100 m-62,0 a62,62 0 0,0 124,0" />
      </defs>
      <circle className="seal-ring" cx="100" cy="100" r="96" />
      <circle className="seal-ring-thin" cx="100" cy="100" r="88" />
      <text className="seal-text">
        <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
          PRAŽENO DNES
        </textPath>
      </text>
      <text className="seal-text seal-date">
        <textPath href="#seal-bot" startOffset="50%" textAnchor="middle">
          {date}
        </textPath>
      </text>
      <text className="seal-star" x="31" y="106" textAnchor="middle">✳</text>
      <text className="seal-star" x="169" y="106" textAnchor="middle">✳</text>
      {/* coffee cherry in the centre */}
      <g className="seal-cherry">
        <path
          className="seal-stem"
          d="M100,66 C100,80 90,86 88,98 M100,66 C100,80 111,86 114,100"
        />
        <path
          className="seal-leaf"
          d="M100,66 C112,58 128,60 132,52 C124,68 110,70 100,66 Z"
        />
        <circle className="seal-berry" cx="87" cy="116" r="18" />
        <circle className="seal-berry" cx="115" cy="120" r="17" />
        <circle className="seal-glint" cx="81" cy="110" r="4" />
        <circle className="seal-glint" cx="109" cy="114" r="3.5" />
      </g>
    </svg>
  );
}

export default function Page() {
  const dnes = new Intl.DateTimeFormat("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  const cenik = [
    { name: "Espresso", note: "jednoduché, dvojité na přání", price: "45 Kč" },
    { name: "Cappuccino", note: "hedvábná mikropěna", price: "59 Kč" },
    { name: "Flat white", note: "dvojité ristretto", price: "65 Kč" },
    { name: "Filtr / V60", note: "dnešní várka, ptejte se obsluhy", price: "59 Kč" },
    { name: "Zrnková káva", note: "balení 250 g, upraženo dnes", price: "189 Kč" },
    { name: "Snídaně dne", note: "vajíčka, pečivo, sezónní příloha", price: "145 Kč" },
  ];

  return (
    <main className="page">
      {/* ---------- HERO ---------- */}
      <header className="band hero">
        <div className="hero-top">
          <a className="wordmark" href="#" aria-label="Coffee Berry, domů">
            <span className="wordmark-berry" aria-hidden="true" />
            Coffee<span className="wordmark-thin">Berry</span>
          </a>
          <p className="eyebrow">Pražírna &amp; kavárna — České Budějovice</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-quote">
              „S kávou to není jako s vínem — čím starší, tím lepší.
              <span className="hero-quote-strong"> Právě naopak.“</span>
            </p>

            <h1 className="hero-h1">
              <HeroWord />
              <span className="hero-kava">KÁVA</span>
            </h1>

            <p className="hero-lead">
              Pražíme každé ráno v pasáži CITY Centeru u zimního stadionu.
              Zrno, které dnes upražíme, dnes i naléváme — čerstvost poznáte
              hned na prvním doušku.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#kde">
                Otevírací doba
              </a>
              <a className="btn btn-ghost" href="#nabidka">
                Prohlédnout ceník
              </a>
            </div>
          </div>

          <SealThud>
            <Seal date={dnes} />
          </SealThud>
        </div>
      </header>

      {/* ---------- NABÍDKA / CENÍK ---------- */}
      <section className="band nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="section-head">
          <div className="section-head-seal">
            <Seal date={dnes} />
          </div>
          <div>
            <p className="eyebrow eyebrow-amber">Nabídka &amp; ceník</p>
            <h2 id="nabidka-nadpis" className="section-h2">
              Šálek na místě i&nbsp;zrno&nbsp;domů
            </h2>
            <p className="section-lead">
              Naléváme z várky, kterou jsme dnes upražili. K tomu bohaté
              snídaně každé ráno — ať už vpadnete cestou do práce, nebo si
              sednete nad druhé cappuccino.
            </p>
          </div>
        </div>

        <ul className="cenik">
          {cenik.map((item) => (
            <li className="cenik-row" key={item.name}>
              <span className="cenik-name">
                <span className="cenik-dot" aria-hidden="true" />
                {item.name}
              </span>
              <span className="cenik-note">{item.note}</span>
              <span className="cenik-price">{item.price}</span>
            </li>
          ))}
        </ul>

        <p className="cenik-foot">
          Zrnkovou kávu vám dodáme čerstvou i&nbsp;do kanceláře, restaurace
          nebo domů. Balíme v den pražení.
        </p>
      </section>

      {/* ---------- KDE NÁS NAJDETE / KONTAKT ---------- */}
      <section className="band kde" id="kde" aria-labelledby="kde-nadpis">
        <div className="kde-grid">
          <div>
            <p className="eyebrow eyebrow-green">Kde nás najdete</p>
            <h2 id="kde-nadpis" className="section-h2">
              Přijďte ochutnat čerstvou várku
            </h2>
            <p className="section-lead">
              Jsme v pasáži budovy CITY Center, hned vedle zimního stadionu
              v&nbsp;centru Českých Budějovic. Voní to tam po kávě už od rána.
            </p>

            <address className="kontakt">
              <span className="kontakt-adresa">
                Ukázková 123, České Budějovice
              </span>
              <a className="kontakt-link" href="tel:+420777111222">
                Zavolat: +420 777 111 222
              </a>
              <a className="kontakt-link" href="mailto:info@example.cz">
                Napsat: info@example.cz
              </a>
            </address>
          </div>

          <div className="hodiny" aria-label="Otevírací doba">
            <p className="hodiny-title">Otevírací doba</p>
            <dl className="hodiny-list">
              <div className="hodiny-row">
                <dt>Po — Pá</dt>
                <dd>7:00 — 18:00</dd>
              </div>
              <div className="hodiny-row">
                <dt>Sobota</dt>
                <dd>9:00 — 14:00</dd>
              </div>
              <div className="hodiny-row hodiny-row--off">
                <dt>Neděle</dt>
                <dd>Zavřeno</dd>
              </div>
            </dl>
            <p className="hodiny-note">
              Ráno stíháme upražit várku dřív, než přijdete. Snídaně točíme
              celé dopoledne.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
