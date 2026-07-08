import type { CSSProperties } from "react";

export default function Page() {
  const kabelaz = [
    {
      cislo: "Cat.5E",
      trida: "Class D",
      pasmo: "100 MHz",
      popis:
        "Osvědčený standard pro kanceláře a menší provozy. Spolehlivá metalická síť do gigabitu, kterou proměříme a předáme s protokolem.",
    },
    {
      cislo: "Cat.6",
      trida: "Class E",
      pasmo: "250 MHz",
      popis:
        "Páteř většiny nových instalací. Rezerva pro budoucí přenosy, čisté vedení tras, poctivé značení každého portu.",
    },
    {
      cislo: "Cat.6A",
      trida: "Class EA",
      pasmo: "500 MHz",
      popis:
        "10gigabitová kabeláž tam, kde se počítá s růstem. Měříme certifikátorem LanTEK II a ručíme za každý spoj.",
    },
  ];

  const obory = [
    {
      klic: "01",
      nazev: "Strukturované kabeláže",
      text:
        "Metalické i optické rozvody LAN pro malé, střední i velké provozy. Komponenty KELine, Molex, Panduit a Avaya, provedení dle ISO/IEC 11801 a EN 50173.",
    },
    {
      klic: "02",
      nazev: "Optické sítě",
      text:
        "Kompletní výstavba od studie po zprovoznění. Výkopy, HDPE trubky, zafouknutí kabelu, zakončení v rozvaděči a závěrečné proměření celé trasy.",
    },
    {
      klic: "03",
      nazev: "Zabezpečení (EZS)",
      text:
        "Poplachové a tísňové systémy dle ČSN EN 50131. Certifikovaný dodavatel řešení Honeywell, BOSCH a Jablotron pro domy, kanceláře i haly.",
    },
    {
      klic: "04",
      nazev: "Kamerové systémy",
      text:
        "CCTV pro ochranu osob, majetku i sledování provozu. Certifikovaný partner BOSCH a Samsung — od kamery po záznam a vzdálený přístup.",
    },
    {
      klic: "05",
      nazev: "Požární signalizace",
      text:
        "Systémy EPS a evakuační rozhlas: hlásiče, ústředny, kabelové trasy. Certifikovaný partner BOSCH, ZETTLER a ESSER.",
    },
    {
      klic: "06",
      nazev: "Silnoproud a osvětlení",
      text:
        "Silnoproudé rozvody, osvětlení a systémová integrace všech technologií do jednoho funkčního celku pod jednou revizí.",
    },
  ];

  const fazeStyle = (i: number): CSSProperties => ({ ["--i" as any]: i });

  return (
    <main className="wm">
      <header className="wm-topbar">
        <a className="wm-brand" href="#uvod" aria-label="Wilmat — úvod">
          <span className="wm-brand-mark" aria-hidden="true">
            <span className="wm-brand-line" />
          </span>
          <span className="wm-brand-word">
            Wil<span className="wm-brand-live">mat</span>
          </span>
        </a>
        <a className="wm-topcall" href="tel:+420725922408">
          +420 725 922 408
        </a>
      </header>

      <section className="wm-hero" id="uvod">
        <div className="wm-hero-grid">
          <div className="wm-hero-copy">
            <p className="wm-eyebrow">
              <span className="wm-eyebrow-dot" aria-hidden="true" />
              Elektroinstalace &middot; Pardubice, Svítkov
            </p>
            <h1 className="wm-hero-title">
              Slaboproud i silnoproud{" "}
              <span className="wm-hero-accent">od projektu po poslední port.</span>
            </h1>
            <p className="wm-hero-lede">
              Navrhneme, zapojíme a proměříme. Strukturované kabeláže, optické
              sítě, zabezpečení a kamery pro firmy i budovy na Pardubicku — s
              revizí a protokolem, na který se dá spolehnout.
            </p>
            <div className="wm-hero-actions">
              <a className="wm-btn wm-btn-primary" href="tel:+420725922408">
                Zavolat elektrikáři
              </a>
              <a className="wm-btn wm-btn-ghost" href="#sluzby">
                Co umíme
              </a>
            </div>
            <dl className="wm-hero-facts">
              <div>
                <dt>Měříme</dt>
                <dd>LanTEK II — certifikát ke každé síti</dd>
              </div>
              <div>
                <dt>Sídlo</dt>
                <dd>Dlouhá 1109, Svítkov, Pardubice</dd>
              </div>
            </dl>
          </div>
          <figure className="wm-hero-media">
            <img
              src="/hero.webp"
              alt="Realizace strukturované kabeláže a rozvaděče firmou Wilmat"
              className="wm-hero-img"
              width={1200}
              height={1500}
            />
            <figcaption className="wm-hero-tag">
              <span className="wm-hero-tag-k">Rozvaděč</span>
              zapojený, popsaný, proměřený
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="wm-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="wm-section-head">
          <p className="wm-eyebrow">
            <span className="wm-eyebrow-dot" aria-hidden="true" />
            Vše pod jednou revizí
          </p>
          <h2 id="sluzby-h">Projekce, realizace, servis</h2>
          <p className="wm-section-sub">
            Šest oborů, jeden dodavatel. Od studie proveditelnosti přes
            elektromontáž až po pozáruční servis a pravidelné funkční zkoušky.
          </p>
        </div>
        <ol className="wm-obory">
          {obory.map((o, i) => (
            <li className="wm-obor" key={o.klic} style={fazeStyle(i)}>
              <span className="wm-obor-num" aria-hidden="true">
                {o.klic}
              </span>
              <h3 className="wm-obor-name">{o.nazev}</h3>
              <p className="wm-obor-text">{o.text}</p>
            </li>
          ))}
        </ol>

        <div className="wm-kabel">
          <figure className="wm-kabel-media">
            <img
              src="/section-1.webp"
              alt="Detail zapojení a značení strukturované kabeláže"
              width={1200}
              height={800}
            />
          </figure>
          <div className="wm-kabel-copy">
            <h3 className="wm-kabel-h">Kabeláž, kterou proměříme</h3>
            <p className="wm-kabel-lede">
              Každý port zapojíme, popíšeme a certifikátorem LanTEK II ověříme
              proti normám ČSN EN 50173, 50174 a ISO/IEC 11801. Vyberte třídu,
              kterou vaše síť potřebuje dnes — i zítra.
            </p>
            <ul className="wm-kabel-scale">
              {kabelaz.map((k) => (
                <li className="wm-kabel-row" key={k.cislo}>
                  <span className="wm-kabel-cat">{k.cislo}</span>
                  <span className="wm-kabel-meta">
                    <span className="wm-kabel-trida">{k.trida}</span>
                    <span className="wm-kabel-pasmo">{k.pasmo}</span>
                  </span>
                  <span className="wm-kabel-desc">{k.popis}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="wm-duvera" aria-labelledby="duvera-h">
        <div className="wm-duvera-grid">
          <div className="wm-duvera-copy">
            <p className="wm-eyebrow wm-eyebrow-light">
              <span className="wm-eyebrow-dot" aria-hidden="true" />
              Kdo jsme
            </p>
            <h2 id="duvera-h">
              S námi nebudete v naplnění svých plánů osamoceni.
            </h2>
            <p className="wm-duvera-lede">
              Wilmat s.r.o. pomáhá klientům realizovat slaboproudé i silnoproudé
              instalace tak, aby se na nás i v budoucnu obraceli s důvěrou.
              Projektujeme, montujeme a dál se staráme — pod jednou zodpovědností.
            </p>
            <ul className="wm-jistoty">
              <li>
                <span className="wm-jistota-k">Záruční i pozáruční servis</span>
                revize, funkční zkoušky, termosnímkování
              </li>
              <li>
                <span className="wm-jistota-k">Certifikovaní partneři</span>
                Honeywell, BOSCH, Jablotron, ZETTLER, ESSER, Samsung
              </li>
              <li>
                <span className="wm-jistota-k">Vše měřené a doložené</span>
                protokol o měření ke každé předané síti
              </li>
            </ul>
          </div>
          <figure className="wm-duvera-media">
            <img
              src="/section-2.webp"
              alt="Technici Wilmat při realizaci elektroinstalace"
              width={1000}
              height={1200}
            />
            <figcaption className="wm-duvera-adr">
              <span>Dlouhá 1109, Svítkov</span>
              <span>Pardubice 530 06</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
