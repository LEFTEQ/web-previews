import type { CSSProperties } from "react";

type Bead = { s: number; x: string; y: string; d: number; m?: boolean };

const beads: Bead[] = [
  { s: 152, x: "3vw", y: "-3vh", d: 0.32 },
  { s: 118, x: "-19vw", y: "-13vh", d: 0.44 },
  { s: 96, x: "-31vw", y: "7vh", d: 0.52, m: true },
  { s: 80, x: "39vw", y: "-7vh", d: 0.56, m: true },
  { s: 72, x: "31vw", y: "11vh", d: 0.62, m: true },
  { s: 54, x: "23vw", y: "-17vh", d: 0.7, m: true },
  { s: 46, x: "-37vw", y: "-9vh", d: 0.66, m: true },
  { s: 62, x: "13vw", y: "18vh", d: 0.74, m: true },
];

const services = [
  {
    title: "Ruční mytí a čištění",
    lead: "Myjeme rukou, ne kartáčem. Žádné šmouhy ani škrábance — jen čistý lak, na kterém voda steče v perlách.",
    items: ["Ruční mytí karoserie", "Mytí a čištění interiéru", "Ošetření a leštění laku"],
  },
  {
    title: "Parkování v Plzni",
    lead: "Krátkodobé i dlouhodobé stání pod dohledem, kousek od centra. Auto máte kde nechat a je o něj postaráno.",
    items: ["Krátkodobé parkování", "Dlouhodobé parkování", "Obsluha 24 hodin denně"],
  },
  {
    title: "Uskladnění pneumatik",
    lead: "Sezónní úschova gum i s disky. Přezujeme, uklidíme a do další sezóny ohlídáme za vás.",
    items: ["Zimní pneumatiky + disky", "Letní pneumatiky + disky", "Přezutí a uskladnění"],
  },
  {
    title: "Autoservis a elektrikář",
    lead: "Když auto potřebuje víc než vodu. Opravy elektroinstalace a montáž elektroniky pro všechny typy vozidel.",
    items: ["Opravy elektroinstalace", "Montáž elektroniky", "Pro všechny typy vozidel"],
  },
];

const promises = [
  { k: "Rukou, ne kartáčem", v: "Každé auto myjeme ručně — bez otočných kartáčů, které lak poškrábou." },
  { k: "24 hodin denně", v: "Obsluha i parkování non-stop. Přijet a vyzvednout můžete, kdy potřebujete." },
  { k: "V Plzni, U Ježíška", v: "Najdete nás na adrese U Ježíška 2, kousek od centra a hlavních tahů." },
  { k: "Vše na jednom místě", v: "Umyjeme, přezujeme, ohlídáme i opravíme. Jedna zastávka pro celé auto." },
];

export default function Page() {
  return (
    <main className="page">
      <header className="hero">
        <div className="hood" aria-hidden="true">
          <span className="bead bead-source" />
          {beads.map((b, i) => (
            <span
              key={i}
              className={"bead bead-float" + (b.m ? " bead-mobile-hide" : "")}
              style={
                {
                  "--x": b.x,
                  "--y": b.y,
                  "--d": b.d + "s",
                  width: b.s,
                  height: b.s,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <nav className="topbar">
          <a className="wordmark" href="#top" id="top" aria-label="Blue Earth, myčka a parkování Plzeň">
            <span>blue</span>
            <span className="wordmark-bead" aria-hidden="true" />
            <span>earth</span>
          </a>
          <a className="topbar-call" href="tel:+420733710318">733&nbsp;710&nbsp;318</a>
        </nav>

        <div className="hero-inner">
          <p className="eyebrow">Myčka &amp; parkování · Plzeň, U Ježíška</p>
          <h1 className="hero-title">
            Umyjeme auto rukou, <br />
            až voda steče <span className="hi">v perlách</span>.
          </h1>
          <p className="hero-sub">
            Blue Earth je plzeňská ruční myčka s parkováním non-stop. Žádné kartáče, žádné šmouhy —
            jen čistý lak, uklizený interiér a auto připravené na cestu.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420733710318">Zavolat: 733&nbsp;710&nbsp;318</a>
            <a className="btn btn-ghost" href="#sluzby">Naše služby</a>
          </div>
        </div>
      </header>

      <section className="section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow eyebrow-dark">Co pro vaše auto uděláme</p>
            <h2 className="section-title" id="sluzby-nadpis">
              Celé auto na jednom místě
            </h2>
          </div>
          <div className="cards">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <span className="lens" aria-hidden="true" />
                <h3 className="card-title">{s.title}</h3>
                <p className="card-lead">{s.lead}</p>
                <ul className="card-list">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-trust" aria-labelledby="o-nas-nadpis">
        <div className="container trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">To nejlepší pro vaše auto</p>
            <h2 className="section-title trust-title" id="o-nas-nadpis">
              Proč lidé v Plzni vozí auta k nám
            </h2>
            <p className="trust-intro">
              Auto si všimne rozdílu mezi kartáčem a poctivou rukou. My taky — proto myjeme pomalu,
              po částech a s ohledem na lak. A protože jsme kousek od centra a máme otevřeno pořád,
              zajedete kdykoli po cestě.
            </p>
            <ul className="promises">
              {promises.map((p) => (
                <li className="promise" key={p.k}>
                  <span className="promise-bead" aria-hidden="true" />
                  <div>
                    <strong>{p.k}</strong>
                    <span>{p.v}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="contact-card" aria-label="Kontakt a otevírací doba">
            <p className="contact-name">Blue Earth s.r.o.</p>
            <p className="contact-addr">
              U Ježíška 2<br />
              326 00 Plzeň
            </p>
            <dl className="contact-meta">
              <div>
                <dt>Otevřeno</dt>
                <dd>Nonstop, 24 hodin denně</dd>
              </div>
              <div>
                <dt>Rezervace</dt>
                <dd>Telefonicky, ideálně den předem</dd>
              </div>
            </dl>
            <a className="btn btn-primary btn-wide" href="tel:+420733710318">
              Zavolat a domluvit termín
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
