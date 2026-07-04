import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      name: "Lakování celých vozů",
      desc: "Kompletní přelak karoserie ve vodou ředitelných lacích Spies Hecker. Barvu namícháme přesně na váš odstín podle kódu z výrobního štítku.",
    },
    {
      code: "02",
      name: "Opravy laku a dílů",
      desc: "Škrábance, promáčkliny, odřené nárazníky i celé díly. Řešíme dílčí opravy tak, aby přechod na okolní lak nebyl vidět.",
    },
    {
      code: "03",
      name: "Opravy po nehodě",
      desc: "Rovnání karoserie, výměna a lakování dílů, kompletace. Kalkulaci připravíme v programu AudaPad a domluvíme přímo s pojišťovnou.",
    },
    {
      code: "04",
      name: "Renovace a leštění",
      desc: "Zmatný, zoxidovaný nebo poškrábaný lak vrátíme do lesku. Připravíme vůz na prodej i na sezónu.",
    },
  ];

  const proof = [
    { label: "Lakujeme od", value: "2004" },
    { label: "Certifikace", value: "CUI" },
    { label: "Značka laků", value: "Spies Hecker" },
  ];

  const reasons = [
    "Vodou ředitelné laky Spies Hecker",
    "Kalkulace v systému AudaPad a Audaglass",
    "Člen sítě Colors Unlimited International",
    "Jednáme přímo se smluvními pojišťovnami",
    "Osobní přístup a poctivá cena",
    "Přesné míchání odstínu podle kódu vozu",
  ];

  return (
    <main className="pg">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Autolakovna Benešov, úvod">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-swatch" />
          </span>
          <span className="brand-word">
            Autolakovna<span className="brand-loc">Benešov</span>
          </span>
        </a>
        <a className="topbar-call" href="tel:+420731468625">
          Zavolat 731&nbsp;468&nbsp;625
        </a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Karoserie vozu v lakovacím boxu Autolakovny Benešov"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-body">
          <p className="eyebrow">Autolakovna &middot; Benešov u Prahy &middot; od 2004</p>
          <h1 className="hero-title">
            Trefíme přesně<br />
            <span className="hero-title-alt">tu vaši barvu.</span>
          </h1>
          <p className="hero-lead">
            Odstín namícháme podle kódu z vašeho vozu a lakujeme ve vodou
            ředitelných lacích Spies Hecker. Přechod na starý lak nepoznáte.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420731468625">
              Objednat na 731&nbsp;468&nbsp;625
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Co lakujeme
            </a>
          </div>

          <dl className="hero-facts">
            {proof.map((p) => (
              <div className="fact" key={p.label}>
                <dt>{p.label}</dt>
                <dd>{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="swatch-strip" aria-hidden="true">
          {[
            "#c8302b",
            "#e4e4e2",
            "#1c1f26",
            "#2f6f5e",
            "#d9a441",
            "#3a4a7a",
          ].map((c) => (
            <span
              key={c}
              className="swatch-chip"
              style={{ "--chip": c } as CSSProperties}
            />
          ))}
        </div>
      </section>

      <section className="sec sec-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Nabídka</p>
          <h2 className="sec-title" id="sluzby-h">
            Od jednoho dílu po celý vůz
          </h2>
          <p className="sec-intro">
            Osobák, dodávka i historický kus. Přijeďte na Křižíkovu ukázat, co
            řešíte — cenu i termín řekneme na rovinu.
          </p>
        </div>

        <div className="svc-layout">
          <ol className="svc-list">
            {services.map((s) => (
              <li className="svc" key={s.code}>
                <span className="svc-code" aria-hidden="true">
                  {s.code}
                </span>
                <div className="svc-text">
                  <h3 className="svc-name">{s.name}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="svc-figure">
            <img
              src="/section-1.webp"
              alt="Detail lakování a přípravy povrchu karoserie"
              className="svc-img"
            />
            <figcaption>
              Vodou ředitelné laky Spies Hecker používáme už od roku 2004.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sec sec-trust" id="o-nas" aria-labelledby="trust-h">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Dílna Autolakovny Benešov s připraveným vozem"
              className="trust-img"
            />
          </figure>

          <div className="trust-body">
            <p className="eyebrow">Proč k nám</p>
            <h2 className="sec-title" id="trust-h">
              Rodinná lakovna, která si stojí za odstínem
            </h2>
            <p className="sec-intro">
              Opravami a lakováním se zabýváme od roku 2004, v roce 2011
              vznikla Autolakovna Benešov s.r.o. Od roku 2012 jsme
              certifikovaným členem evropské skupiny Colors Unlimited
              International. Zákazníci se k nám vracejí — a to je pro nás
              nejlepší reference.
            </p>

            <ul className="trust-list">
              {reasons.map((r) => (
                <li className="trust-item" key={r}>
                  {r}
                </li>
              ))}
            </ul>

            <div className="trust-card">
              <div className="trust-card-row">
                <span className="trust-card-key">Kde nás najdete</span>
                <span className="trust-card-val">
                  Křižíkova 1424, 256 01 Benešov
                </span>
              </div>
              <div className="trust-card-row">
                <span className="trust-card-key">Otevřeno</span>
                <span className="trust-card-val">Po–Pá 8:00–17:00</span>
              </div>
              <div className="trust-card-row">
                <span className="trust-card-key">Objednávky</span>
                <a className="trust-card-val link" href="mailto:svoboda@autolakovnabenesov.cz">
                  svoboda@autolakovnabenesov.cz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
