import type { CSSProperties } from "react";

export default function Page() {
  const oblasti = [
    { name: "Šumava", note: "lesní samoty, chaty u potoka", count: 88 },
    { name: "Lipno", note: "přehrada za kopcem od Budějovic", count: 44 },
    { name: "Třeboň", note: "rybníky, hráze, ticho", count: 38 },
    { name: "Novohradské hory", note: "kraj u rakouských hranic", count: 30 },
    { name: "Český Krumlov", note: "chalupy nad Vltavou", count: 27 },
    { name: "Krkonoše", note: "hory na běžky i na kolo", count: 32 },
  ];

  const kroky = [
    {
      n: "01",
      title: "Vyberete kraj a termín",
      body: "Řeknete nám, kam chcete a s kolika lidmi. Filtrujeme podle bazénu, psa, vody i lesa — a ukážeme jen to, co je opravdu volné.",
    },
    {
      n: "02",
      title: "Rezervujete online",
      body: "Termín potvrdíte za pár minut. Žádné čekání na e‑mail, žádné dohady o ceně. Vidíte reálné fotky, ne katalogové sny.",
    },
    {
      n: "03",
      title: "Bereme to na sebe",
      body: "Každý objekt osobně prověřujeme. Když se objeví problém, voláte nám do Budějovic — ne do anonymního callcentra.",
    },
  ];

  return (
    <main className="ct">
      {/* ── HERO ── */}
      <header className="ct-hero" aria-labelledby="ct-h1">
        <div className="ct-topbar">
          <a className="ct-wordmark" href="#" aria-label="Chata Tour — domů">
            <span className="ct-wm-1">CHATA</span>
            <span className="ct-wm-2">TOUR</span>
          </a>
          <a className="ct-phone" href="tel:+420603769067">
            603&nbsp;769&nbsp;067
            <span className="ct-phone-sub">Po–Pá&nbsp;9–15</span>
          </a>
        </div>

        <div className="ct-hero-grid">
          <div className="ct-hero-lead">
            <p className="ct-eyebrow">Cestovní kancelář · České Budějovice · od roku 2001</p>
            <h1 id="ct-h1" className="ct-title">
              <span className="ct-line ct-l1">Klíč od</span>
              <span className="ct-line ct-l2">chalupy,</span>
              <span className="ct-line ct-l3">kterou byste</span>
              <span className="ct-line ct-l4">jinak minuli.</span>
            </h1>
            <p className="ct-hero-body">
              Pronájem chat, chalup a apartmánů po celé republice i za hranicemi.
              190+ objektů, které jsme prošli osobně. Bez příkras, se skutečnými fotkami.
            </p>
            <div className="ct-hero-actions">
              <a className="ct-btn ct-btn-primary" href="#nabidka">Najít volnou chalupu</a>
              <a className="ct-btn ct-btn-ghost" href="#jak">Jak rezervace funguje</a>
            </div>
          </div>

          {/* Signature: klíčenka s cedulkou — číslo objektu jako na recepci */}
          <aside className="ct-keytag" aria-hidden="true">
            <div className="ct-ring" />
            <div className="ct-tag">
              <span className="ct-tag-label">objekt č.</span>
              <span className="ct-tag-num">147</span>
              <span className="ct-tag-loc">Šumava · u lesa</span>
              <span className="ct-tag-line" />
              <span className="ct-tag-foot">volno tento víkend</span>
            </div>
          </aside>
        </div>

        <div className="ct-marquee-strip" role="presentation">
          <span>u vody</span><span className="ct-dot" />
          <span>se psem</span><span className="ct-dot" />
          <span>s bazénem</span><span className="ct-dot" />
          <span>na běžky</span><span className="ct-dot" />
          <span>vinné sklepy</span><span className="ct-dot" />
          <span>u moře</span><span className="ct-dot" />
          <span>samoty</span>
        </div>
      </header>

      {/* ── NABÍDKA / OBLASTI ── */}
      <section className="ct-section" id="nabidka" aria-labelledby="ct-oblasti">
        <div className="ct-sec-head">
          <p className="ct-eyebrow ct-eyebrow-dark">Kam pojedete</p>
          <h2 id="ct-oblasti" className="ct-h2">Kraje, které známe nazpaměť</h2>
          <p className="ct-sec-lead">
            Od Budějovic je to na Lipno kousek — jižní Čechy jsou náš dvorek.
            Ostatní kraje procházíme se stejnou pečlivostí.
          </p>
        </div>

        <ul className="ct-oblasti-grid">
          {oblasti.map((o, i) => (
            <li key={o.name} className="ct-obl-card" style={{ "--i": i } as CSSProperties}>
              <span className="ct-obl-count">{o.count}</span>
              <span className="ct-obl-name">{o.name}</span>
              <span className="ct-obl-note">{o.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── JAK TO FUNGUJE / DŮVĚRA ── */}
      <section className="ct-section ct-section-dark" id="jak" aria-labelledby="ct-jak-h">
        <div className="ct-sec-head">
          <p className="ct-eyebrow ct-eyebrow-light">Jak to u nás chodí</p>
          <h2 id="ct-jak-h" className="ct-h2 ct-h2-light">Tři kroky a klíč je váš</h2>
        </div>

        <ol className="ct-steps">
          {kroky.map((k) => (
            <li key={k.n} className="ct-step">
              <span className="ct-step-n">{k.n}</span>
              <div>
                <h3 className="ct-step-title">{k.title}</h3>
                <p className="ct-step-body">{k.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <dl className="ct-facts">
          <div className="ct-fact">
            <dt>let na trhu</dt>
            <dd>25+</dd>
            <p>od roku 2001</p>
          </div>
          <div className="ct-fact">
            <dt>ověřených objektů</dt>
            <dd>190+</dd>
            <p>každý jsme viděli</p>
          </div>
          <div className="ct-fact">
            <dt>spokojených hostů</dt>
            <dd>10&nbsp;000+</dd>
            <p>od Šumavy po moře</p>
          </div>
          <div className="ct-fact">
            <dt>reálné fotky</dt>
            <dd>100&nbsp;%</dd>
            <p>žádné katalogové sny</p>
          </div>
        </dl>
      </section>
    </main>
  );
}
