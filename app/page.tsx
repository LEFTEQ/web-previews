const stav = [
  "ztvrdlá kůže a rohovatění",
  "popraskané paty",
  "otlaky a kuří oka",
  "zarůstající a deformované nehty",
  "nehtové plísně",
  "bradavice",
];

const spa = [
  "výživová a regenerační péče o nehty",
  "masáž rukou",
  "peeling",
  "parafínový zábal — prohřívá a prokrvuje",
  "ošetření nehtového lůžka a okolí",
];

const postup = [
  { c: "01", t: "Konzultace", d: "Podíváme se na stav nehtů a kůže a domluvíme postup." },
  { c: "02", t: "Odborné ošetření", d: "Přístrojová pedikúra nebo přírodní manikúra bez spěchu." },
  { c: "03", t: "Výživa a regenerace", d: "Ošetření problémových míst kvalitní kosmetikou." },
  { c: "04", t: "Masáž nebo zábal", d: "Reflexní masáž chodidel či parafínový zábal na závěr." },
];

export default function Page() {
  return (
    <>
      <header className="sl-head">
        <a className="sl-brand" href="#top" aria-label="Salon Liris — úvod">
          <span className="sl-brand-word">Liris</span>
          <span className="sl-brand-tag">Salon · Liberec</span>
        </a>
        <nav className="sl-nav" aria-label="Hlavní navigace">
          <a href="#osetreni">Ošetření</a>
          <a href="#salon">O salonu</a>
          <a className="sl-nav-call" href="tel:+420774043123">774 043 123</a>
        </nav>
      </header>

      <main id="top">
        <section className="sl-hero" aria-labelledby="hero-nadpis">
          <div className="sl-hero-text">
            <p className="sl-eyebrow sl-r sl-r1">Manikúra &amp; pedikúra · Liberec · od 2015</p>
            <h1 id="hero-nadpis" className="sl-hero-title">
              <span className="sl-r sl-r2">Péče o ruce a nohy,</span>{" "}
              <span className="sl-r sl-r3">které se o vás</span>{" "}
              <span className="sl-r sl-r4"><em>starají</em> celý den.</span>
            </h1>
            <p className="sl-hero-lead sl-r sl-r5">
              Salon Liris v Liberci — medicinální přístrojová pedikúra a přírodní
              SPA manikúra od Kateřiny Štěpánkové. Odborně, s kvalitní kosmetikou
              a bez spěchu.
            </p>
            <div className="sl-hero-cta sl-r sl-r6">
              <a className="sl-btn" href="tel:+420774043123">Zavolat a objednat se</a>
              <span className="sl-hero-note">Sovova 584/2, Liberec</span>
            </div>
          </div>
          <figure className="sl-hero-media sl-r sl-r4">
            <div className="sl-arch">
              <img
                src="/hero.webp"
                alt="Detail upravených, ošetřených nehtů a rukou v salonu Liris"
                loading="eager"
              />
            </div>
            <figcaption className="sl-specimen">Ruce &amp; nohy — péče na míru</figcaption>
          </figure>
        </section>

        <section id="osetreni" className="sl-services" aria-labelledby="osetreni-nadpis">
          <div className="sl-sec-head">
            <p className="sl-eyebrow">Ošetření</p>
            <h2 id="osetreni-nadpis" className="sl-sec-title">
              Dvě cesty k péči — <em>zdraví</em> a <em>uvolnění</em>.
            </h2>
          </div>

          <div className="sl-cards">
            <article className="sl-card">
              <figure className="sl-card-media">
                <div className="sl-arch sl-arch-sm">
                  <img
                    src="/section-1.webp"
                    alt="Přístrojová medicinální pedikúra v salonu Liris"
                    loading="lazy"
                  />
                </div>
              </figure>
              <div className="sl-card-body">
                <p className="sl-kicker">01 — Nohy</p>
                <h3 className="sl-card-title">Medicinální pedikúra</h3>
                <p className="sl-card-lead">
                  Nohy nesou váhu celého těla. Odborné přístrojové ošetření řeší
                  i předchází tomu, co bolí a překáží.
                </p>
                <ul className="sl-list">
                  {stav.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="sl-card-note">
                  Kosmetika Callusan a Allpresan je vhodná i pro diabetiky — na
                  medicinální přístrojovou pedikúru přispívá pojišťovna.
                </p>
              </div>
            </article>

            <article className="sl-card">
              <figure className="sl-card-media">
                <div className="sl-arch sl-arch-sm">
                  <img
                    src="/section-2.webp"
                    alt="Přírodní SPA manikúra a péče o ruce v salonu Liris"
                    loading="lazy"
                  />
                </div>
              </figure>
              <div className="sl-card-body">
                <p className="sl-kicker">02 — Ruce</p>
                <h3 className="sl-card-title">Přírodní SPA manikúra</h3>
                <p className="sl-card-lead">
                  Výživová a regenerační péče o ruce a nehty s masáží. Přidejte
                  peeling a parafínový zábal, který prohřívá, prokrvuje a zjemňuje.
                </p>
                <ul className="sl-list">
                  {spa.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className="sl-card-note">
                  Zábaly regenerují suchou a popraskanou kůži, zpevňují nehty a
                  ulevují i při revmatických potížích.
                </p>
              </div>
            </article>
          </div>

          <div className="sl-ledger" aria-label="Jak ošetření probíhá">
            <p className="sl-ledger-title">Jak ošetření probíhá</p>
            <ol className="sl-steps">
              {postup.map((p) => (
                <li key={p.c} className="sl-step">
                  <span className="sl-step-num">{p.c}</span>
                  <span className="sl-step-t">{p.t}</span>
                  <span className="sl-step-d">{p.d}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="salon" className="sl-about" aria-labelledby="salon-nadpis">
          <div className="sl-about-media">
            <blockquote className="sl-quote">
              <p>
                „Salon Liris je místo, kde se snoubí čistota a síla přírody s péčí
                o tělo. Chci, aby si tu lidé odpočinuli a odcházeli uvolnění.“
              </p>
              <cite>Kateřina Štěpánková, zakladatelka</cite>
            </blockquote>
          </div>

          <div className="sl-about-text">
            <p className="sl-eyebrow">O salonu</p>
            <h2 id="salon-nadpis" className="sl-sec-title">
              Osobní péči o ruce a nohy se věnuji od října 2015.
            </h2>
            <p className="sl-about-lead">
              V salonu se o vás postarám sama — s pozorností a časem, který
              ošetření zaslouží. Pracuji s profesionální i přírodní kosmetikou,
              kterou si u mě můžete i objednat.
            </p>

            <dl className="sl-facts">
              <div>
                <dt>Kosmetika</dt>
                <dd>Callusan &amp; Unguisan (Greppmayr Footcare, Německo)</dd>
              </div>
              <div>
                <dt>Pro diabetiky</dt>
                <dd>Allpresan (G.P.S. Ofa) — na pedikúru přispívá pojišťovna</dd>
              </div>
              <div>
                <dt>Přírodní řada</dt>
                <dd>kosmetika a drogerie tianDe s přírodními složkami</dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>Sovova 584/2, 460 14 Liberec</dd>
              </div>
            </dl>

            <div className="sl-contact">
              <a className="sl-btn sl-btn-ghost" href="tel:+420774043123">
                Zavolat: 774 043 123
              </a>
              <a className="sl-mail" href="mailto:stepankova@salon-liris.cz">
                stepankova@salon-liris.cz
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
