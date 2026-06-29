import type { CSSProperties } from "react";

const nabidka = [
  {
    name: "\u010caj",
    note: "sv\u011btov\u00e9 sklizn\u011b",
    text: "Nep\u0159ebern\u00e9 mno\u017estv\u00ed sypan\u00fdch \u010daj\u016f z cel\u00e9ho sv\u011bta. Ka\u017ed\u00fd m\u011bs\u00edc k tomu p\u0159id\u00e1v\u00e1me nab\u00eddku \u010derstv\u011b sklizen\u00fdch \u010daj\u016f \u2014 osv\u011b\u017e\u00ed t\u011blo i mysl.",
  },
  {
    name: "K\u00e1va",
    note: "alternativn\u00ed p\u0159\u00edprava",
    text: "\u010cerstv\u011b pra\u017een\u00e1 k\u00e1va z \u010desk\u00fdch pra\u017e\u00edren p\u0159ipraven\u00e1 alternativn\u011b \u2014 nebo arabsk\u00e1 specialita d\u017eezva, va\u0159en\u00e1 v hork\u00e9m p\u00edsku p\u0159\u00edmo u v\u00e1s.",
  },
  {
    name: "Vodn\u00ed d\u00fdmka",
    note: "Serbetli \u00b7 Adalya",
    text: "\u0160irok\u00e1 nab\u00eddka p\u0159\u00edchut\u00ed tab\u00e1k\u016f a vyhl\u00e1\u0161en\u00e9 d\u00fdmky Nebulla, Wookah a Karma. Ka\u017ed\u00e1 sedm\u00e1 d\u00fdmka u n\u00e1s zdarma.",
  },
  {
    name: "Pochutiny",
    note: "k posezen\u00ed",
    text: "Ke\u0161u o\u0159\u00ed\u0161ky, pist\u00e1cie nebo mandle v \u010dokol\u00e1d\u011b se sko\u0159ic\u00ed \u2014 drobnosti, kter\u00e9 k \u0161\u00e1lku pat\u0159\u00ed.",
  },
];

const zazitky = [
  {
    h: "Knihovna a stoln\u00ed hry",
    t: "Rozs\u00e1hl\u00e1 knihovna a pestr\u00e1 nab\u00eddka her. Mn\u011b chvilka klidu pro rozj\u00edm\u00e1n\u00ed, vt\u011b cel\u00fd ve\u010der ve dvou nebo v part\u011b.",
  },
  {
    h: "Zahr\u00e1dka s alt\u00e1nkem",
    t: "Za teplej\u0161\u00edch dn\u016f otv\u00edr\u00e1me venkovn\u00ed zahr\u00e1dku se zast\u0159e\u0161en\u00fdm alt\u00e1nkem \u2014 \u010daj pod \u0161ir\u00fdm nebem.",
  },
  {
    h: "V\u00fdstavy a koncerty",
    t: "Pravideln\u011b vystavujeme m\u00edstn\u00ed v\u00fdtvarn\u00edky a ob\u010das u n\u00e1s zazn\u00ed \u017eiv\u00e1 hudba. Nejen \u010dajem je \u010dlov\u011bk \u017eiv.",
  },
  {
    h: "Sleva pro studenty",
    t: "M\u00e1te ISIC? 5\u00a0% na v\u0161echny n\u00e1poje. N\u00e1ro\u010dn\u00e9 studium si \u017e\u00e1d\u00e1 dobrou k\u00e1vu.",
  },
];

export default function Page() {
  return (
    <main className="cj">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-img" src="/hero.webp" alt="Interi\u00e9r \u010caj\u00edrny &amp; Kaf\u00edrny ve sv\u011btle lamp" />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <p className="wordmark">
            <span>\u010caj\u00edrna</span>
            <span className="amp">&amp;</span>
            <span>Kaf\u00edrna</span>
          </p>
          <p className="eyebrow">Hradebn\u00ed 32 \u00b7 \u010cesk\u00e9 Bud\u011bjovice</p>
          <h1 id="hero-title">
            Milovn\u00edci \u010daje, k\u00e1vy a vodn\u00ed d\u00fdmky
            <em> jsou u n\u00e1s v\u017edy v\u00edt\u00e1ni.</em>
          </h1>
          <p className="hero-lead">
            O\u00e1za klidu a pohody uprost\u0159ed metropole jihu. Otev\u00edr\u00e1me, kdy\u017e se den
            chyl\u00ed k ve\u010deru \u2014 a nikam nesp\u011bch\u00e1me.
          </p>
          <p className="hero-hours">
            <span>Otev\u0159eno denn\u011b</span>
            <strong>15:00\u201322:00</strong>
          </p>
        </div>
      </section>

      <section className="steep" aria-labelledby="steep-title">
        <div className="sec-head">
          <p className="eyebrow">Co u n\u00e1s na\u010derpat</p>
          <h2 id="steep-title">D\u011bl\u00e1me to, co n\u00e1s bav\u00ed \u2014 pro va\u0161e pot\u011b\u0161en\u00ed.</h2>
        </div>
        <div className="steep-grid">
          <div className="steep-media">
            <img src="/section-1.webp" alt="\u0160\u00e1lek \u010derstv\u011b p\u0159ipraven\u00e9 k\u00e1vy a sypan\u00fd \u010daj" />
          </div>
          <ol className="menu">
            {nabidka.map((it) => (
              <li key={it.name} className="menu-row">
                <div className="menu-name">
                  <span>{it.name}</span>
                  <span className="menu-note">{it.note}</span>
                </div>
                <span className="menu-rule" aria-hidden="true" />
                <p className="menu-text">{it.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="calm" aria-labelledby="calm-title">
        <figure className="epigraph">
          <blockquote>
            \u201eJednou z nepochybn\u00fdch a \u010dist\u00fdch radost\u00ed jest odpo\u010dinek po pr\u00e1ci.\u201c
          </blockquote>
          <figcaption>Immanuel Kant</figcaption>
        </figure>
        <div className="calm-grid">
          <div className="calm-copy">
            <p className="eyebrow">Pro\u010d k n\u00e1m chodit</p>
            <h2 id="calm-title">N\u00e1ro\u010dn\u00fd den? Zklidn\u011bte u n\u00e1s tempo.</h2>
            <p className="calm-lead">
              P\u0159\u00edjemn\u00e9 prost\u0159ed\u00ed pro osamocen\u00e9 host\u00e9 hledaj\u00edc\u00ed chvilku klidu i pro
              part\u011b, kter\u00e9 si cht\u011bj\u00ed u\u017e\u00edt spole\u010dn\u011b str\u00e1ven\u00fd \u010das.
            </p>
            <ul className="calm-list">
              {zazitky.map((z) => (
                <li key={z.h}>
                  <h3>{z.h}</h3>
                  <p>{z.t}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="calm-media">
            <img src="/section-2.webp" alt="Z\u00e1kout\u00ed \u010daj\u00edrny s knihovnou a stoln\u00edmi hrami" />
            <aside className="reserve">
              <p className="eyebrow">M\u00edsto jist\u00e9</p>
              <p className="reserve-text">
                Rezervaci po\u0161lete jako SMS ve tvaru
              </p>
              <code className="reserve-code">CAJIRNA \u2013 DEN \u2013 HODINA \u2013 PO\u010cET \u2013 JM\u00c9NO</code>
              <a className="reserve-tel" href="tel:+420773233544">773 233 544</a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
