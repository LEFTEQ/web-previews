import type { CSSProperties } from "react";

export default function Page() {
  const cepovana = [
    { c: "Veltlínské zelené", o: "suché", z: "Znojemsko", p: "39 Kč / dcl" },
    { c: "Frankovka", o: "polosuché", z: "Velké Bílovice", p: "42 Kč / dcl" },
    { c: "Rulandské šedé", o: "polosladké", z: "Mikulovsko", p: "44 Kč / dcl" },
    { c: "Primitivo", o: "suché červené", z: "Puglia, Itálie", p: "52 Kč / dcl" },
    { c: "Frizzante růžové", o: "perlivé", z: "Morava", p: "38 Kč / dcl" },
    { c: "Nealko frizzante", o: "bez alkoholu", z: "lesní jahoda", p: "32 Kč / dcl" },
  ];

  const kroky = [
    {
      n: "01",
      t: "Ochutnáte, než koupíte",
      d: "Vybrané z 38 čepovaných vín chladíme. Načepujeme vám vzorek na dcl — ať víte, co si nesete domů.",
    },
    {
      n: "02",
      t: "Naplníme do vašeho",
      d: "Přineste láhev nebo demižon, načepujeme přesně tolik, kolik chcete. Bez zbytečného skla a plastu navíc.",
    },
    {
      n: "03",
      t: "Odejdete se zárukou",
      d: "Na každé víno zakoupené u nás dáváme záruku kvality. Nechutná? Vyměníme, poradíme, doladíme.",
    },
  ];

  return (
    <main className="vt">
      <header className="vt-nav">
        <a className="vt-mark" href="#" aria-label="Naše Vinotéka, Olomouc">
          <span className="vt-mark-glass" aria-hidden="true">
            <span className="vt-mark-fill" />
          </span>
          <span className="vt-mark-text">
            <span className="vt-mark-name">Naše&nbsp;Vinotéka</span>
            <span className="vt-mark-sub">Olomouc · Holice</span>
          </span>
        </a>
        <nav className="vt-nav-links" aria-label="Hlavní">
          <a href="#cep">Na čepu</a>
          <a href="#zaruka">Záruka</a>
          <a className="vt-nav-cta" href="tel:+420730159099">Zavolat 730&nbsp;159&nbsp;099</a>
        </nav>
      </header>

      <section className="vt-hero" aria-labelledby="hero-h">
        <div className="vt-hero-media">
          <img
            src="/hero.webp"
            alt="Řada čepovacích kohoutů ve vinotéce, do skleniček teče vychlazené víno"
            className="vt-hero-img"
          />
          <div className="vt-hero-scrim" aria-hidden="true" />
        </div>

        <div className="vt-hero-body">
          <p className="vt-eyebrow">Vinotéka na čepu · Olomouc-Holice</p>
          <h1 id="hero-h" className="vt-hero-h">
            <span className="vt-line">Víno</span>
            <span className="vt-line vt-em">na čepu,</span>
            <span className="vt-line">ne v katalogu.</span>
          </h1>
          <p className="vt-lede">
            Až <strong>38 čepovaných vín</strong>, vybraná chladíme. Ochutnáte,
            načepujeme do vašeho — a odcházíte se zárukou, že víno bude chutnat.
          </p>
          <div className="vt-hero-actions">
            <a className="vt-btn" href="#cep">Co dnes točíme</a>
            <a className="vt-btn-ghost" href="#zaruka">Jak funguje záruka</a>
          </div>
          <ul className="vt-ticker" aria-label="Dnes na čepu">
            <li><span className="vt-tick-dot" aria-hidden="true" />Frankovka · Velké Bílovice</li>
            <li><span className="vt-tick-dot" aria-hidden="true" />Primitivo · Puglia</li>
            <li><span className="vt-tick-dot" aria-hidden="true" />Nealko frizzante</li>
          </ul>
        </div>
      </section>

      <section className="vt-cep" id="cep" aria-labelledby="cep-h">
        <div className="vt-sec-head">
          <p className="vt-eyebrow vt-eyebrow-dark">Dnes na čepu</p>
          <h2 id="cep-h" className="vt-sec-h">Lístek od kohoutu</h2>
          <p className="vt-sec-lead">
            Ceny za deci, ať si nesete jednu skleničku k obědu, nebo demižon
            na zahradu. Přineste vlastní láhev — natočíme přesně tolik, kolik chcete.
          </p>
        </div>

        <ul className="vt-list">
          {cepovana.map((v) => (
            <li className="vt-row" key={v.c}>
              <span className="vt-row-name">{v.c}</span>
              <span className="vt-row-note">{v.o} · {v.z}</span>
              <span className="vt-row-lead" aria-hidden="true" />
              <span className="vt-row-price">{v.p}</span>
            </li>
          ))}
        </ul>

        <figure className="vt-cep-fig">
          <img
            src="/section-1.webp"
            alt="Vychlazené láhve a načepovaná sklenka na pultu vinotéky"
            className="vt-fig-img"
          />
          <figcaption>
            K vínu holandské sýry a italské uzeniny — a v létě Náš punč,
            co voní celou ulicí.
          </figcaption>
        </figure>
      </section>

      <section className="vt-zaruka" id="zaruka" aria-labelledby="zaruka-h">
        <div className="vt-zaruka-grid">
          <div className="vt-zaruka-text">
            <p className="vt-eyebrow">Víno se zárukou</p>
            <h2 id="zaruka-h" className="vt-sec-h vt-sec-h-light">
              Ručíme za to,<br />co načepujeme.
            </h2>
            <p className="vt-sec-lead vt-sec-lead-light">
              Nejsme samoobsluha s regálem do stropu. Za pultem stojí člověk
              se sommelierským minimem, který každé víno ochutnal dřív než vy.
            </p>
            <ol className="vt-steps">
              {kroky.map((k) => (
                <li className="vt-step" key={k.n}>
                  <span className="vt-step-n">{k.n}</span>
                  <div>
                    <h3 className="vt-step-t">{k.t}</h3>
                    <p className="vt-step-d">{k.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="vt-card" aria-label="Kontakt a otevírací doba">
            <img
              src="/section-2.webp"
              alt="Interiér vinotéky Naše Vinotéka v Olomouci-Holici"
              className="vt-card-img"
            />
            <div className="vt-card-body">
              <p className="vt-card-kicker">Pobočka Olomouc</p>
              <p className="vt-card-addr">
                Sladkovského 656/38<br />779 00 Olomouc 9 — Holice
              </p>
              <dl className="vt-card-meta">
                <div>
                  <dt>Kancelář</dt>
                  <dd>po–pá, 8:00–16:00</dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd><a href="tel:+420730159099">730&nbsp;159&nbsp;099</a></dd>
                </div>
              </dl>
              <p className="vt-card-note">
                16 poboček na Moravě. Za každých 25 Kč nákupu 1 bod
                do věrnostního programu.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
