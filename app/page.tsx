import { AiImage } from "./_ui";

const diagnostika = [
  "Kompletní diagnostika osobních vozidel",
  "Přizpůsobení řídicích jednotek",
  "Vyhledání závad ve vedení",
  "Mazání chybových hlášení",
  "Nastavení intervalu výměny oleje",
];

const montaze = [
  "Zabezpečovací zařízení",
  "Centrální zamykání",
  "Autorádia a reproduktory",
  "Parkovací systémy",
  "Hands-free sady pro telefon",
  "Mechanické zabezpečení řazení",
  "Alternátory",
  "Startéry",
  "Elektrické instalace",
];

const readout = [
  ["NAPĚTÍ", "12,6 V"],
  ["PRAXE", "15+ let"],
  ["OKRUH", "Praha 12 · Modřany"],
  ["VOZY", "osobní, všechny značky"],
];

export default function Page() {
  return (
    <>
      <header className="head">
        <div className="wrap head-in">
          <a className="mark" href="#top" aria-label="Autoelektrika.eu — úvod">
            <span className="mark-node" aria-hidden="true" />
            <span className="mark-name">AUTOELEKTRIKA</span>
            <span className="mark-tld">.eu</span>
          </a>
          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#o-mne">O mně</a>
            <a className="nav-call" href="tel:+420777111222">Zavolat</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="section section--dark hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="boot">
                <span className="boot-trace" aria-hidden="true" />
                <span className="boot-dot" aria-hidden="true" />
                <span className="boot-txt">PŘIPRAVENO · 12 V · KONTINUITA OK</span>
              </p>
              <h1 className="hero-h">
                Najdeme závadu,<br />kterou ostatní<br /> <em>vzdali.</em>
              </h1>
              <p className="hero-sub">
                Autoelektrika v Praze. Od bludné chyby v řídicí jednotce
                přes vybíjenou baterii až po nový alternátor —
                proměřím vedení, najdu příčinu a řeknu vám rovnou,
                co to bude stát.
              </p>
              <div className="hero-cta">
                <a className="btn" href="tel:+420777111222">Zavolat na 777 111 222</a>
                <a className="btn btn--ghost" href="#sluzby">Prohlédnout služby</a>
              </div>
            </div>
            <AiImage
              className="hero-media"
              src="/hero.webp"
              alt="Měření elektroinstalace osobního vozidla při diagnostice"
            />
          </div>
        </section>

        <section id="sluzby" className="section section--light services">
          <div className="wrap">
            <div className="sec-head">
              <p className="eyebrow">CO UMÍM — DVĚ VĚTVE JEDNOHO SVAZKU</p>
              <h2 className="sec-h">Každá služba je terminál na okruhu.</h2>
              <p className="sec-lead">
                Diagnostika hledá, montáže a opravy spravují. Postupuju
                po vedení jako po svazku kabelů — od konektoru ke konektoru,
                dokud nesvítí to, co má.
              </p>
            </div>

            <div className="branches">
              <div className="branch">
                <div className="branch-head">
                  <span className="branch-no">01</span>
                  <div>
                    <h3 className="branch-h">DIAGNOSTIKA</h3>
                    <p className="branch-sub">Hledání a čtení závad</p>
                  </div>
                </div>
                <ul className="harness">
                  {diagnostika.map((s, i) => (
                    <li className="terminal" style={{ ["--i" as string]: i }} key={s}>
                      <span className="node" aria-hidden="true" />
                      <span className="term">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="branch">
                <div className="branch-head">
                  <span className="branch-no">02</span>
                  <div>
                    <h3 className="branch-h">MONTÁŽE A OPRAVY</h3>
                    <p className="branch-sub">Když se má něco vyměnit nebo doplnit</p>
                  </div>
                </div>
                <ul className="harness">
                  {montaze.map((s, i) => (
                    <li className="terminal" style={{ ["--i" as string]: i }} key={s}>
                      <span className="node" aria-hidden="true" />
                      <span className="term">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="o-mne" className="section section--dark about">
          <div className="wrap about-grid">
            <AiImage
              className="about-media"
              src="/section-1.webp"
              alt="Martin Urbánek při práci na autoelektrice"
            />
            <div className="about-copy">
              <p className="eyebrow eyebrow--amber">O MNĚ</p>
              <h2 className="sec-h">Martin Urbánek — autoelektrikář z Modřan.</h2>
              <p className="about-p">
                Autoelektrice se věnuju přes patnáct let a nejradši mám
                případy, které jinde odpálkovali: bliká kontrolka, auto si
                samo vybíjí baterii, zamykání dělá, co chce. Připojím
                diagnostiku, proměřím vedení a najdu, kde je skutečná
                příčina — ne jen symptom.
              </p>
              <p className="about-p">
                Pracuju na osobních vozech všech značek v Praze 12.
                Nejdřív měřím, teprve pak měním díly.
              </p>

              <dl className="spec">
                {readout.map(([k, v]) => (
                  <div className="spec-row" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="wrap plate-wrap">
            <AiImage
              className="plate-media"
              src="/section-2.webp"
              alt="Detail zapojení a konektorů v elektroinstalaci vozu"
            />
            <blockquote className="plate-quote">
              <p>„Diagnostika není hádání. Je to čtení okruhu, dokud nenajdu
              to jedno místo, kde se signál ztrácí.“</p>
              <cite>— Martin Urbánek</cite>
            </blockquote>
          </div>
        </section>
      </main>
    </>
  );
}
