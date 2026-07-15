import type { ReactNode } from "react";

function PanelMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 20" width="28" height="20" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="26" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="7.5" y1="1" x2="7.5" y2="19" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="1" x2="14" y2="19" stroke="currentColor" strokeWidth="1" />
      <line x1="20.5" y1="1" x2="20.5" y2="19" stroke="currentColor" strokeWidth="1" />
      <line x1="1" y1="10" x2="27" y2="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

const readouts = [
  { val: "0 Kč", lab: "záloha předem" },
  { val: "30 dní", lab: "od smlouvy k připojení" },
  { val: "600+", lab: "hotových elektráren" },
  { val: "4,5/5", lab: "hodnocení na Googlu" },
];

const segments = [
  {
    tag: "Rodinné domy",
    figure: "45 000 Kč",
    unit: "úspora za rok",
    text: "Staňte se energeticky nezávislí a nabíjejte i elektromobil přímo doma. Podporu z Nové zelené úsporám vyřídíme za vás — vy nezaplatíte zálohu předem.",
    points: ["Bez zálohy předem", "Dotaci NZÚ vyřídíme my"],
  },
  {
    tag: "Bytové domy",
    figure: "1 projekt",
    unit: "na celý dům",
    text: "Pokryjeme spotřebu společných prostor a vyrobenou elektřinu spravedlivě rozdělíme mezi jednotlivé byty. Projekt i papírování připravíme na klíč.",
    points: ["Projekt na klíč", "Vyřízení dotace i papírů"],
  },
  {
    tag: "Firmy",
    figure: "5–6 let",
    unit: "průměrná návratnost",
    text: "Snížíme účty za energie až o 75 % a ochráníme provoz před výkyvy cen. Nově lze fotovoltaiku odepsat už za 5 let — doplníme i baterie a peak shaving.",
    points: ["Řešení na míru provozu", "Baterie a peak shaving"],
  },
];

const steps = [
  { n: "01", h: "Návrh", t: "Zaměříme vaši spotřebu i střechu a navrhneme řešení přesně na míru — ne katalogovou sestavu." },
  { n: "02", h: "Dotace a připojení", t: "Vyřídíme Novou zelenou úsporám i připojení k distribuci ČEZ. Za administrativu neplatíte." },
  { n: "03", h: "Instalace", t: "Namontujeme v dohodnutém termínu, u rodinných domů obvykle do 30 dnů od smlouvy." },
  { n: "04", h: "Servis", t: "Po spuštění zůstáváme k dispozici — jsme tady v okolí, ne na druhém konci republiky." },
];

export default function Page(): ReactNode {
  return (
    <main className="fv">
      <header className="fv-nav">
        <a className="fv-brand" href="#hero" aria-label="Lucius Fox engineering — úvod">
          <PanelMark className="fv-brand__mark" />
          <span className="fv-brand__name">
            <b>LUCIUS FOX</b>
            <small>engineering · fotovoltaika Hradec Králové</small>
          </span>
        </a>
        <div className="fv-nav__actions">
          <a className="fv-tel" href="tel:+420603558557">+420 603 558 557</a>
          <a className="fv-btn" href="#kalkulace">Spočítat úsporu</a>
        </div>
      </header>

      <section className="fv-hero" id="hero">
        <div className="fv-hero__inner">
          <div className="fv-hero__copy">
            <p className="fv-eyebrow">Fotovoltaika na klíč · Hradec Králové</p>
            <h1 className="fv-h1">
              <span>Ze slunce nad Hradcem</span>
              <span>uděláme vaši elektřinu.</span>
            </h1>
            <p className="fv-lead">
              Navrhneme systém přesně na váš dům nebo firmu, vyřídíme dotaci i připojení k ČEZ
              a nainstalujeme ho obvykle do 30 dnů. Vy pak jen sledujete, jak klesá účet za energie.
            </p>
            <div className="fv-hero__actions">
              <a className="fv-btn fv-btn--lg" href="#kalkulace">Spočítat moji úsporu</a>
              <a className="fv-btn fv-btn--ghost" href="tel:+420603558557">Zavolat technikovi</a>
            </div>
          </div>
          <figure className="fv-hero__media">
            <img
              src="/hero.webp"
              width={1120}
              height={840}
              alt="Fotovoltaická elektrárna na střeše realizovaná firmou Lucius Fox v okolí Hradce Králové"
              className="fv-img"
            />
            <figcaption className="fv-hero__cap">Firemní elektrárna 65 kWp · Hradec Králové</figcaption>
          </figure>
        </div>

        <div className="fv-readouts" aria-label="Klíčové údaje">
          {readouts.map((r, i) => (
            <div className="fv-readout" key={r.lab} style={{ animationDelay: `${0.15 + i * 0.09}s` }}>
              <span className="fv-readout__val">{r.val}</span>
              <span className="fv-readout__lab">{r.lab}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="fv-offer" id="kalkulace" aria-labelledby="offer-h">
        <div className="fv-sec-head">
          <p className="fv-eyebrow">Co pro vás postavíme</p>
          <h2 className="fv-h2" id="offer-h">Fotovoltaika pro dům, bytovku i provoz</h2>
        </div>

        <figure className="fv-band">
          <img
            src="/section-1.webp"
            width={1600}
            height={720}
            alt="Montáž fotovoltaických panelů na střeše firemního objektu"
            className="fv-img"
          />
          <figcaption>Realizace na firemní střeše — od návrhu po připojení řešíme jeden tým.</figcaption>
        </figure>

        <div className="fv-cards">
          {segments.map((s) => (
            <article className="fv-card" key={s.tag}>
              <div className="fv-card__top">
                <PanelMark className="fv-card__mark" />
                <span className="fv-card__tag">{s.tag}</span>
              </div>
              <p className="fv-card__figure">
                {s.figure}
                <span>{s.unit}</span>
              </p>
              <p className="fv-card__text">{s.text}</p>
              <ul className="fv-card__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="fv-trust" aria-labelledby="trust-h">
        <div className="fv-trust__grid">
          <div className="fv-trust__media">
            <figure className="fv-band fv-band--tall">
              <img
                src="/section-2.webp"
                width={1000}
                height={1200}
                alt="Technik firmy Lucius Fox u instalované fotovoltaické technologie"
                className="fv-img"
              />
            </figure>
            <div className="fv-ratings" aria-label="Hodnocení zákazníků">
              <div className="fv-rating">
                <span className="fv-rating__val">4,5/5</span>
                <span className="fv-rating__src">Google</span>
              </div>
              <div className="fv-rating">
                <span className="fv-rating__val">5/5</span>
                <span className="fv-rating__src">Firmy.cz</span>
              </div>
              <div className="fv-rating">
                <span className="fv-rating__val">600+</span>
                <span className="fv-rating__src">zákazníků</span>
              </div>
            </div>
          </div>

          <div className="fv-trust__copy">
            <p className="fv-eyebrow">Proč Lucius Fox</p>
            <h2 className="fv-h2" id="trust-h">Lokální firma z Hradce, která to dotáhne do konce</h2>
            <p className="fv-lead">
              Vyřízení podpory i připojení k distribuci máte zdarma. Nejsme zprostředkovatel —
              projekt navrhujeme, montujeme i servisujeme sami, a vy máte pořád jeden kontakt.
            </p>
            <ol className="fv-steps">
              {steps.map((st) => (
                <li className="fv-step" key={st.n}>
                  <span className="fv-step__n">{st.n}</span>
                  <div>
                    <h3 className="fv-step__h">{st.h}</h3>
                    <p className="fv-step__t">{st.t}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
