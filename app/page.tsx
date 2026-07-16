import { RollingPrice, FlipRow, ExitSign } from "./motion";

const heroRows = [
  {
    grade: "NATURAL 95",
    desc: "Cheeseburger — hovězí 150 g, čedar, domácí kyselá okurka, brioška",
    value: 189,
  },
  {
    grade: "DIESEL",
    desc: "Slaninový double — 2× hovězí, křupavá slanina, čedarová omáčka",
    value: 269,
  },
];

const menuRows = [
  {
    grade: "SUPER 98",
    desc: "BBQ pulled pork, coleslaw, cibulová marmeláda",
    value: 219,
    tag: null,
  },
  {
    grade: "PREMIUM 100",
    desc: "Steak sandwich, rukola, hoblinky parmezánu, pečené brambory",
    value: 289,
    tag: null,
  },
  {
    grade: "E85 BIO",
    desc: "Smažený květákový burger, veganská majonéza, salát",
    value: 199,
    tag: null,
  },
  {
    grade: "SNÍDANĚ",
    desc: "Míchaná vejce, slanina, tousty, čerstvá zelenina",
    value: 149,
    tag: "od 8:00",
  },
  {
    grade: "POLEDNÍ MENU",
    desc: "Polévka a hlavní jídlo — jen ve všední dny",
    value: 159,
    tag: "11–14 h",
  },
];

const zones = [
  { name: "HRADEC KRÁLOVÉ", sub: "centrum a sídliště", exit: "91", value: 39 },
  { name: "KRHOV–VODĚRADY", sub: "okolní obce v okrese", exit: "112", value: 49 },
  { name: "KOZLOV–D1", sub: "přímo u dálnice D1", exit: "D1", value: 59 },
];

export default function Page() {
  return (
    <main className="page">
      <section className="band hero" id="hero">
        <p className="eyebrow">Rozvoz jídla · Hradec Králové · denně od 8:00</p>

        <div className="totem">
          <div className="totem-cap">
            <span className="wm">
              <span className="wm-eb">EB</span>
              <span className="wm-diners">diners</span>
            </span>
            <span className="open-glow">
              <span className="dot" aria-hidden="true" />
              OTEVŘENO
            </span>
          </div>

          <p className="totem-tag">Pravé americké dinery · ceny jako u pumpy</p>

          <div className="board">
            {heroRows.map((r, i) => (
              <FlipRow key={r.grade} index={i}>
                <div className="grade-row">
                  <div className="grade-head">
                    <span className="grade-title">{r.grade}</span>
                    <span className="leader" aria-hidden="true" />
                    <span className="grade-price">
                      <span className="mono">
                        <RollingPrice value={r.value} delay={0.25 + i * 0.12} />
                      </span>
                      <span className="cur">Kč</span>
                    </span>
                  </div>
                  <p className="grade-desc">{r.desc}</p>
                </div>
              </FlipRow>
            ))}
          </div>
        </div>

        <h1 className="hero-line">
          Burger natankuješ<br />
          rovnou domů.
        </h1>
        <div className="cta-row">
          <a className="btn btn-primary" href="#zony">Objednat rozvoz</a>
          <a className="btn btn-ghost" href="#menu">Prohlédnout menu</a>
        </div>
      </section>

      <section className="band menu" id="menu">
        <div className="gantry">
          <span className="gantry-num">01</span>
          <span className="gantry-name">Cenová tabule</span>
          <span className="gantry-sub">Menu &amp; polední nabídka</span>
        </div>

        <div className="board board-full">
          {menuRows.map((r, i) => (
            <FlipRow key={r.grade} index={i}>
              <div className="grade-row">
                <div className="grade-head">
                  <span className="grade-title">{r.grade}</span>
                  {r.tag ? <span className="minitag">{r.tag}</span> : null}
                  <span className="leader" aria-hidden="true" />
                  <span className="grade-price">
                    <span className="mono">
                      <RollingPrice value={r.value} delay={0.1 + i * 0.09} />
                    </span>
                    <span className="cur">Kč</span>
                  </span>
                </div>
                <p className="grade-desc">{r.desc}</p>
              </div>
            </FlipRow>
          ))}
        </div>

        <p className="note">
          Všechny ceny včetně DPH. Snídaně točíme od 8:00, polední menu jen ve
          všední dny. Alergeny rádi upřesníme po telefonu.
        </p>
      </section>

      <section className="band zones" id="zony">
        <div className="gantry gantry-green">
          <span className="gantry-num">02</span>
          <span className="gantry-name">Rozvozové zóny</span>
          <span className="gantry-sub">Kam dovezeme &amp; za kolik</span>
        </div>

        <div className="exit-grid">
          {zones.map((z, i) => (
            <ExitSign key={z.name} index={i}>
              <div className="exit-inner">
                <span className="exit-badge">výjezd {z.exit}</span>
                <span className="exit-name">{z.name}</span>
                <span className="exit-sub">{z.sub}</span>
                <span className="exit-fee">
                  <span className="exit-fee-label">rozvoz</span>
                  <span className="mono exit-fee-val">
                    <RollingPrice value={z.value} delay={0.15 + i * 0.1} /> Kč
                  </span>
                </span>
              </div>
            </ExitSign>
          ))}
        </div>

        <div className="trust">
          <div className="trust-item">
            <span className="mono trust-num">3</span>
            <span className="trust-txt">provozovny ve východních Čechách</span>
          </div>
          <div className="trust-item">
            <span className="mono trust-num">8:00</span>
            <span className="trust-txt">kuchyň jede od snídaně do večera</span>
          </div>
          <div className="trust-item">
            <span className="mono trust-num">EET</span>
            <span className="trust-txt">
              tržby evidujeme dle zákona č. 112/2016 Sb.
            </span>
          </div>
        </div>

        <p className="note">
          Objednávku vezmeme telefonem. Řekněte nám adresu a zónu — čas dovozu
          potvrdíme na místě. Rozvoz platí pro Hradec Králové, Krhov–Voděrady i
          okolí sjezdu Kozlov na D1.
        </p>
      </section>
    </main>
  );
}
