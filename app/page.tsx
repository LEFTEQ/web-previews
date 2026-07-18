import type { CSSProperties } from "react";

type Frac = {
  no: string;
  frac: string;
  mat: string;
  kind: string;
  price: string;
  dot: string;
  gap: string;
  grain: string;
};

const FRACTIONS: Frac[] = [
  { no: "01", frac: "0/4", mat: "Kopaný písek", kind: "těžený", price: "245", dot: "2.4px", gap: "5px", grain: "#9a6a2c" },
  { no: "02", frac: "4/8", mat: "Drcené kamenivo", kind: "drcené", price: "385", dot: "4px", gap: "8px", grain: "#34373b" },
  { no: "03", frac: "8/16", mat: "Drcené kamenivo", kind: "drcené", price: "365", dot: "6.5px", gap: "13px", grain: "#34373b" },
  { no: "04", frac: "16/32", mat: "Štěrkodrť", kind: "drcené", price: "340", dot: "10px", gap: "20px", grain: "#6f6a60" },
  { no: "05", frac: "32/63", mat: "Lomový kámen", kind: "drcené", price: "320", dot: "15px", gap: "30px", grain: "#282a2d" },
];

const SPEC: { k: string; v: string }[] = [
  { k: "Provozovna", v: "Řepčín, Olomouc" },
  { k: "V provozu od", v: "2008" },
  { k: "Flotila", v: "DAF & Renault, EURO 6" },
  { k: "Návěsy", v: "velkoobjemové sklopné" },
  { k: "Působnost", v: "Olomoucký kraj" },
  { k: "Dispečink", v: "777 111 222" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#uvod" aria-label="Moravská doprava, domů">
          <span className="brand__mark" aria-hidden="true">MD</span>
          <span className="brand__text">
            <span className="brand__name">Moravská&nbsp;doprava</span>
            <span className="brand__sub">sypké materiály · Olomouc</span>
          </span>
        </a>
        <a className="topbar__phone" href="tel:+420777111222">777&nbsp;111&nbsp;222</a>
      </header>

      <section className="section section--dark hero" id="uvod">
        <div className="wrap">
          <p className="eyebrow">Autodoprava &amp; prodej kameniva · Olomouc-Řepčín · od roku 2008</p>
          <h1 className="hero__title">
            Sypké materiály —<br />
            od jemného <span className="hl">písku</span> po <span className="hl">lomový kámen</span>.
          </h1>
          <p className="hero__lead">
            Prodáváme těžené i drcené kamenivo a kopané i těžené písky všech frakcí.
            Naložíme na velkoobjemové sklápěče a přivezeme přímo na stavbu po celém
            Olomoucku.
          </p>
          <div className="cta-row">
            <a className="btn btn--primary" href="tel:+420777111222">Zavolat dispečink · 777&nbsp;111&nbsp;222</a>
            <a className="btn btn--ghost" href="#nabidka">Prohlédnout frakce</a>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      <section className="section section--paper" id="nabidka">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow eyebrow--dark">Nabídka · frakce 01–05</p>
            <h2 className="sec-title">Kamenivo a písky, tříděné podle zrna</h2>
            <p className="sec-intro">
              Každou frakci vidíte jako vzorek prosetého materiálu. Zrno na kartě je
              v poměrné velikosti — od jemných 0/4&nbsp;mm po hrubý 32/63&nbsp;mm.
            </p>
          </div>

          <div className="grid">
            {FRACTIONS.map((f) => (
              <article className="card" key={f.no}>
                <div className="card__top">
                  <span className="tag">{f.no}</span>
                  <span className="frac">
                    {f.frac}
                    <span className="unit">mm</span>
                  </span>
                </div>
                <div className="disc" aria-hidden="true">
                  <div
                    className="stipple"
                    style={{ ["--dot" as string]: f.dot, ["--gap" as string]: f.gap, ["--grain" as string]: f.grain } as CSSProperties}
                  />
                  <div className="fill" />
                </div>
                <div className="docket">
                  <div className="docket__mat">
                    <span className="mat">{f.mat}</span>
                    <span className="kind">{f.kind}</span>
                  </div>
                  <div className="docket__price">
                    <span className="price">
                      od <b>{f.price}</b> Kč
                    </span>
                    <span className="per">/ tuna</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="note">
            Ceny jsou orientační, bez DPH a dopravy. Konkrétní cenu podle množství a
            místa stavby potvrdí dispečink. Skladem i další frakce a recykláty na dotaz.
          </p>
        </div>
      </section>

      <section className="section section--dark" id="ofirme">
        <div className="wrap about">
          <div className="about__text">
            <p className="eyebrow">O firmě</p>
            <h2 className="sec-title sec-title--light">Vozíme z Řepčína od roku 2008</h2>
            <p className="about__p">
              Moravská doprava se od začátku soustředí na jednu věc, a tu dělá pořádně:
              přepravu sypkých materiálů. K tomu prodáváme těžené i drcené kamenivo a
              kopané i těžené písky ve všech frakcích.
            </p>
            <p className="about__p">
              Jezdíme moderními tahači DAF a Renault s emisní normou EURO&nbsp;6, doplněnými
              o velkoobjemové sklopné návěsy. Naložit, odvézt a složit materiál na stavbě —
              tak, abyste s dopravou nemuseli řešit vůbec nic.
            </p>
            <p className="about__meta">Ceník i flotila aktualizovány pro sezónu&nbsp;2025.</p>
          </div>

          <dl className="spec">
            {SPEC.map((s) => (
              <div className="spec__row" key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
