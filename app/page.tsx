import React from "react";

export default function Page() {
  const stripes = Array.from({ length: 9 });

  return (
    <main className="hv">
      {/* ===== HERO ===== */}
      <header className="hv-hero">
        <div className="hv-topbar">
          <a className="hv-brand" href="#" aria-label="Havlovci — markýzy Ostrava">
            <span className="hv-brand-mark" aria-hidden="true">
              <span className="hv-arm" />
            </span>
            <span className="hv-brand-text">
              <strong>HAVLOVCI</strong>
              <em>markýzy &amp; stínění · Ostrava</em>
            </span>
          </a>
          <a className="hv-tel" href="tel:+420604444004">+420&nbsp;604&nbsp;444&nbsp;004</a>
        </div>

        <div className="hv-hero-grid">
          <div className="hv-hero-copy">
            <p className="hv-eyebrow">Stín, který si zatáhnete stiskem tlačítka</p>
            <h1 className="hv-h1">
              Markýza vytáhne <span className="hv-under">chládek</span> nad vaši terasu — přesně na míru
            </h1>
            <p className="hv-lede">
              Vyměříme, ušijeme a namontujeme výsuvnou markýzu, která v poledním slunci
              udrží terasu snesitelnou a večer se zase schová pod okap. Zaměření v
              Ostravě a okolí je zdarma.
            </p>
            <div className="hv-cta-row">
              <a className="hv-btn hv-btn-primary" href="tel:+420604444004">Zavolat a domluvit zaměření</a>
              <a className="hv-btn hv-btn-ghost" href="#nabidka">Prohlédnout markýzy</a>
            </div>
            <p className="hv-hero-note">Studio Ostrava · Mastného 1035/6, Slezská Ostrava · Po–Pá 7:30–16:00</p>
          </div>

          <figure className="hv-hero-media">
            <div className="hv-awning" aria-hidden="true">
              <div className="hv-valance">
                {stripes.map((_, i) => (
                  <span key={i} style={{ animationDelay: `${0.15 * i}s` }} />
                ))}
              </div>
            </div>
            <img
              src="/hero.webp"
              alt="Vysunutá látková markýza stínící terasu rodinného domu"
              className="hv-hero-img"
            />
            <figcaption className="hv-hero-cap">Výsuvná kloubová markýza · látka odolná UV</figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SEKCE 1: NABÍDKA ===== */}
      <section className="hv-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="hv-sec-head">
          <p className="hv-sec-kicker">Co pro vás vyrobíme</p>
          <h2 className="hv-h2" id="nabidka-h">Stínění, které roste od okna až po celou terasu</h2>
        </div>

        <div className="hv-offer">
          <ul className="hv-offer-list">
            <li>
              <span className="hv-offer-tag">Terasa</span>
              <h3>Výsuvné markýzy a pergoly</h3>
              <p>
                Kloubové i kazetové markýzy nad terasu, motor s dálkovým ovládáním,
                volitelně čidlo větru a slunce. Pergoly s pohyblivými lamelami pro celoroční
                stín i za deště.
              </p>
            </li>
            <li>
              <span className="hv-offer-tag">Fasáda</span>
              <h3>Venkovní žaluzie a rolety</h3>
              <p>
                Hliníkové venkovní žaluzie a screenové rolety, které zastaví horko dřív, než se
                dostane k oknu. Řízení lamel podle polohy slunce.
              </p>
            </li>
            <li>
              <span className="hv-offer-tag">Interiér</span>
              <h3>Vnitřní žaluzie, rolety, japonské stěny</h3>
              <p>
                Ladíme světlo uvnitř — od jemných plisé po zatemňovací rolety do ložnice a
                posuvné japonské stěny na velká prosklení.
              </p>
            </li>
            <li>
              <span className="hv-offer-tag">Ovládání</span>
              <h3>Chytrá domácnost</h3>
              <p>
                Markýzu i žaluzie zapojíme do jednoho scénáře — ráno se vytáhnou, při větru
                samy zajedou. Ovládáte je z telefonu nebo hlasem.
              </p>
            </li>
          </ul>

          <figure className="hv-offer-media">
            <img
              src="/section-1.webp"
              alt="Detail montáže venkovního stínění na fasádě domu"
              className="hv-offer-img"
            />
            <figcaption>Zaměření &amp; montáž po celé Ostravě a v okolí Opavy</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="hv-section hv-trust" aria-labelledby="trust-h">
        <div className="hv-sec-head">
          <p className="hv-sec-kicker">Proč zrovna Havlovci</p>
          <h2 className="hv-h2" id="trust-h">Přes 30 let stíníme domy na severní Moravě</h2>
        </div>

        <div className="hv-trust-grid">
          <div className="hv-stat">
            <span className="hv-stat-num">30+</span>
            <span className="hv-stat-lab">let praxe ve stínicí a garážové technice</span>
          </div>
          <div className="hv-stat">
            <span className="hv-stat-num">10 let</span>
            <span className="hv-stat-lab">záruka na vybrané produkty, servis záruční i pozáruční</span>
          </div>
          <div className="hv-stat">
            <span className="hv-stat-num">2</span>
            <span className="hv-stat-lab">studia — Ostrava a Opava, zaměření u vás zdarma</span>
          </div>
        </div>

        <div className="hv-reviews">
          <p className="hv-reviews-lead">
            <span className="hv-stars" aria-hidden="true">★★★★★</span>
            <strong>Vynikající</strong> — na základě 15 hodnocení zákazníků
          </p>
          <div className="hv-review-row">
            <blockquote className="hv-review">
              <p>„Řešil jsem garážová vrata a později venkovní žaluzie včetně sítí. Vše proběhlo
              v pořádku dle předem dohodnutých podmínek. Doporučuji.“</p>
              <cite>Michal Kropáček</cite>
            </blockquote>
            <blockquote className="hv-review">
              <p>„Instalace vnější žaluzie — super přístup, od zaměření přes komunikaci termínu
              až po montáž.“</p>
              <cite>Richard Biječek</cite>
            </blockquote>
            <blockquote className="hv-review">
              <p>„Velice příjemné a spolehlivé jednání. Vše klaplo dle domluvy hned na poprvé.
              Perfektní práce, během dne vše hotovo.“</p>
              <cite>Barbora Horecká</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
