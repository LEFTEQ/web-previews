import { AiImage } from "./_ui";
import { CountUp } from "./motion";

// ── ZAPA beton · Betonárna Hradec Králové ──────────────────────────────
// Signature: the plant's own recipe rendered as an aggregate-strata band.

const frakce = [
  { tick: "0/4", name: "písek", grow: 24, c: "var(--ochre)" },
  { tick: "0/2", name: "jemná", grow: 12, c: "var(--ochre-2)" },
  { tick: "4/8", name: "drobné", grow: 16, c: "var(--silo)" },
  { tick: "8/16", name: "střední", grow: 20, c: "var(--concrete-2)" },
  { tick: "16/22", name: "hrubé", grow: 14, c: "var(--concrete)" },
  { tick: "22/32", name: "kamenivo", grow: 14, c: "var(--concrete-3)" },
];

const cementy = [
  { tick: "CEM I", name: "42,5 R", grow: 22 },
  { tick: "CEM II", name: "B-S 32,5 R", grow: 20 },
  { tick: "CEM II", name: "A-LL 42,5", grow: 18 },
  { tick: "CEM III", name: "A 42,5 N", grow: 20 },
  { tick: "CEM I", name: "52,5 R", grow: 20 },
];

function RecipeBand({ variant = "hero" }: { variant?: "hero" | "divider" }) {
  return (
    <figure className={`recipe recipe--${variant}`} aria-label="Receptura betonárny: kamenivo, cement, přísady">
      {variant === "hero" && (
        <figcaption className="recipe__head">
          <span className="recipe__title">Receptura dávkování · SIMEM EAGLE 4000</span>
          <span className="recipe__meta">ASTERIX ATX 300</span>
        </figcaption>
      )}

      <ol className="strata strata--agg">
        {frakce.map((f, i) => (
          <li className="seg" key={f.tick + i} style={{ ["--grow" as string]: f.grow, ["--i" as string]: i, ["--c" as string]: f.c }}>
            <span className="seg__fill" />
            <span className="seg__lbl"><b>{f.tick}</b>{variant === "hero" && <em>{f.name}</em>}</span>
          </li>
        ))}
      </ol>

      <ol className="strata strata--cem">
        {cementy.map((c, i) => (
          <li className="seg seg--cem" key={c.tick + i} style={{ ["--grow" as string]: c.grow, ["--i" as string]: i + 6 }}>
            <span className="seg__fill" />
            {variant === "hero" && <span className="seg__lbl seg__lbl--sm"><b>{c.tick}</b><em>{c.name}</em></span>}
          </li>
        ))}
      </ol>

      <div className="strata__base"><span className="seg__fill" style={{ ["--i" as string]: 11 }} />{variant === "hero" && <span className="strata__baselbl">cementová malta · 6 přísad</span>}</div>
      <div className="strata__cap" />

      {variant === "hero" && (
        <div className="recipe__scale" aria-hidden="true">
          <span>32</span><span>22</span><span>16</span><span>8</span><span>4</span><span>2</span><span>0&nbsp;mm</span>
        </div>
      )}
    </figure>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="ZAPA beton, betonárna Hradec Králové">
          <span className="wordmark__mark">ZAPA</span>
          <span className="wordmark__sub">beton</span>
          <span className="wordmark__tag">HK</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Co mícháme</a>
          <a href="#reference">Reference</a>
          <a className="topnav__call" href="tel:+420724201651">724&nbsp;201&nbsp;651</a>
        </nav>
      </header>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="section hero" id="top">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow"><span className="eyebrow__dot" /> Betonárna Hradec Králové · Stavební 988</p>
            <h1 className="hero__title">Beton na<br /><span className="hero__title-em">recept.</span></h1>
            <p className="hero__lead">
              Namícháme přesně tu směs, kterou vaše stavba unese. Naše
              betonárna dávkuje <b>šest frakcí kameniva</b>, <b>pět druhů cementu</b> a
              <b> šest přísad</b> — čerstvý beton řízený automatikou ASTERIX ATX 300,
              rozvezený po celém Hradecku.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420724201651">Objednat beton u dispečera</a>
              <a className="btn btn--ghost" href="mailto:hradeckralove@zapa.cz">Napsat poptávku</a>
            </div>
            <dl className="stats">
              <div className="stat stat--lead">
                <dt>Ověřený hodinový výkon</dt>
                <dd><span className="stat__num"><CountUp to={80} /></span><span className="stat__unit">m³/h</span></dd>
              </div>
              <div className="stat"><dt>Kameniva</dt><dd>6 frakcí</dd></div>
              <div className="stat"><dt>Cementy</dt><dd>5 druhů</dd></div>
              <div className="stat"><dt>Přísady</dt><dd>6 druhů</dd></div>
            </dl>
          </div>

          <figure className="hero__figure">
            <AiImage src="/hero.webp" alt="Sila a věž betonárny ZAPA beton v Hradci Králové" className="hero__img" />
          </figure>
        </div>

        <div className="wrap">
          <RecipeBand variant="hero" />
        </div>
      </section>

      {/* ── NABÍDKA / KATALOG ────────────────────────────── */}
      <section className="section nabidka" id="nabidka">
        <div className="wrap">
          <div className="divider"><RecipeBand variant="divider" /></div>
          <header className="secthead">
            <p className="eyebrow"><span className="eyebrow__dot" /> Katalog směsí a služeb</p>
            <h2 className="secttitle">Co u nás namícháme a přivezeme</h2>
          </header>

          <div className="catalog">
            {[
              { spec: "C 8/10 – C 30/37", name: "Běžné transportbetony", body: "Konstrukční beton v deklarovaných třídách pevnosti — na základy, desky, stropy i věnce." },
              { spec: "ZAPA SLIM · vodostavební", name: "Speciální betony", body: "Samozhutnitelné, vodostavební a mrazuvzdorné směsi namíchané na míru vašemu projektu." },
              { spec: "6 frakcí · 0/4–22/32", name: "Kamenivo", body: "Prané frakce z vlastní dávkovací linky — i k samostatnému odběru na stavbu." },
              { spec: "autodomíchávače · čerpadla", name: "Doprava a čerpání", body: "Rozvoz po Hradci Králové a okolí, čerpání betonu až na místo uložení." },
              { spec: "malty pro Čechy", name: "Zdící malty", body: "Maltové směsi pro zdění a omítky s prohlášením o vlastnostech." },
              { spec: "vlastní recyklační linka", name: "Recyklace zbytků", body: "Zbytkový beton zpracujeme na místě — neputuje na skládku, ale zpět do výroby." },
            ].map((p) => (
              <article className="card" key={p.name}>
                <span className="card__spec">{p.spec}</span>
                <h3 className="card__name">{p.name}</h3>
                <p className="card__body">{p.body}</p>
              </article>
            ))}
          </div>

          <figure className="nabidka__figure">
            <AiImage src="/section-1.webp" alt="Autodomíchávač ZAPA beton při plnění pod silem betonárny" className="band__img" />
            <figcaption className="nabidka__cap">Betonárna je zateplená pro zimní provoz a vybavená ohřevem záměsové vody — lijeme i za mrazu.</figcaption>
          </figure>
        </div>
      </section>

      {/* ── DŮVĚRA / REFERENCE ───────────────────────────── */}
      <section className="section reference" id="reference">
        <div className="wrap">
          <div className="divider"><RecipeBand variant="divider" /></div>
          <header className="secthead">
            <p className="eyebrow"><span className="eyebrow__dot" /> Postaveno z našeho betonu</p>
            <h2 className="secttitle">Hradec Králové stojí i na naší receptuře</h2>
          </header>

          <div className="trust">
            <div className="trust__refs">
              <ul className="reflist">
                {[
                  "Rezidence na Plachtě",
                  "Sídlo ČSOB",
                  "AUPARK Hradec Králové",
                  "Lisovna Steuken",
                  "Modernizace hal Karsit",
                  "BD Stromovka",
                ].map((r) => (
                  <li className="reflist__item" key={r}>
                    <span className="reflist__name">{r}</span>
                    <span className="reflist__loc">Hradec Králové</span>
                  </li>
                ))}
              </ul>
              <figure className="trust__figure">
                <AiImage src="/section-2.webp" alt="Vylitá betonová konstrukce v Hradci Králové z betonu ZAPA" className="band__img" />
              </figure>
            </div>

            <aside className="trust__side">
              <div className="panel">
                <h3 className="panel__h">Certifikováno</h3>
                <ul className="certs">
                  <li>ČSN EN ISO 9001:2016 — řízení kvality</li>
                  <li>ČSN EN ISO 14001:2016 — životní prostředí</li>
                  <li>ČSN EN ISO 50001:2019 — hospodaření s energií</li>
                  <li>Certifikát řízení výroby — Hradec Králové</li>
                </ul>
              </div>
              <div className="panel panel--hours">
                <h3 className="panel__h">Kdy a kde nakládáme</h3>
                <dl className="hours">
                  <div><dt>Pondělí–pátek</dt><dd>6:30–15:00</dd></div>
                  <div><dt>Sobota</dt><dd>na dotaz</dd></div>
                  <div><dt>Neděle a svátky</dt><dd>na dotaz</dd></div>
                </dl>
                <p className="panel__addr">Stavební 988, 503 41 Hradec Králové</p>
                <p className="panel__note">Provozní dobu si před cestou ověřte na dispečinku — v zimě a za deště se může lišit.</p>
                <a className="btn btn--primary btn--block" href="tel:+420724201651">Zavolat dispečink 724 201 651</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
