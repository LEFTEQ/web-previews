import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "DIAG",
      title: "Diagnostika závady",
      desc: "Počítač nenaběhne, padá do modré obrazovky nebo se přehřívá? Najdeme příčinu a řekneme rovnou, jestli se oprava vyplatí, nebo ne.",
      detail: "Odhad ceny předem",
    },
    {
      code: "HW",
      title: "Výměna a upgrade dílů",
      desc: "SSD místo starého disku, víc paměti, nový zdroj nebo čištění chladiče. Stroj, který se táhne, umí zase pořádně zabrat.",
      detail: "Rozjezd i o třídu rychlejší",
    },
    {
      code: "OS",
      title: "Systém a data",
      desc: "Přeinstalace Windows 11, záchrana souborů z poškozeného disku, odvirování. Fotky a dokumenty vám zůstanou.",
      detail: "Data přeneseme s vámi",
    },
    {
      code: "SELL",
      title: "Repasované Dell",
      desc: "Značkové kancelářské počítače Dell OptiPlex s SSD a Windows 11. Prověřené, funkční, se zárukou — od 1 190 Kč.",
      detail: "Skladem na Smíchově",
    },
  ];

  const stock = [
    {
      status: "2 ks skladem",
      available: true,
      name: "Dell OptiPlex 760",
      price: "1 490",
      specs: ["Intel Core 2 Quad Q9300 2.5 GHz", "RAM 4 GB", "SSD 120 GB + HDD 160 GB", "WiFi (USB), LAN 1 Gb, 8× USB", "Windows 10/11 Pro dle domluvy"],
    },
    {
      status: "1 ks skladem",
      available: true,
      name: "Dell OptiPlex 755",
      price: "1 190",
      specs: ["Intel E6850 3.0 GHz", "RAM 4 GB", "SSD 120 GB + HDD 80 GB", "WiFi (USB), LAN 1 Gb, 8× USB", "Windows 10/11 Pro dle domluvy"],
    },
    {
      status: "3 ks skladem",
      available: true,
      name: "LCD Dell E197FPb 19\u2033",
      price: "299",
      specs: ["Úhlopříčka 19\u2033", "Poměr stran 4:3", "Vhodný jako druhý monitor"],
    },
  ];

  return (
    <main className="pg">
      <header className="top">
        <a className="brand" href="#" aria-label="QHC servis, úvod">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-q">Q</span>HC
          </span>
          <span className="brand-sub">PC servis · Smíchov</span>
        </a>
        <nav className="top-nav" aria-label="Hlavní">
          <a href="#servis">Servis</a>
          <a href="#sklad">Nabídka</a>
          <a className="top-call" href="tel:+420251511855">251 511 855</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Praha 5 · Pecháčkova 1200/9
            </p>
            <h1 id="hero-h">
              Nepohřbívejte<br />
              starý počítač.<br />
              <span className="hl">Nejdřív k nám.</span>
            </h1>
            <p className="hero-lead">
              Opravujeme, čistíme a oživujeme počítače na Smíchově. Řekneme na rovinu,
              jestli stačí nové SSD za pár stovek, nebo je čas na jiný stroj. Bez keců, s cenou předem.
            </p>
            <div className="hero-cta">
              <a className="btn-primary" href="tel:+420251511855">Zavolat do servisu</a>
              <a className="btn-ghost" href="#sklad">Prohlédnout skladem</a>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Čt 10–17, Pá 10–16</dd>
              </div>
              <div>
                <dt>Diagnostika</dt>
                <dd>s odhadem ceny předem</dd>
              </div>
            </dl>
          </div>

          <figure className="hero-media">
            <img src="/hero.webp" alt="Otevřený počítač na servisním stole během opravy" loading="eager" />
            <figcaption className="hero-tag">
              <span className="tag-k">CR2032</span>
              <span className="tag-v">knoflíková baterie do základní desky · 5 Kč</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="servis" id="servis" aria-labelledby="servis-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Co u nás vyřešíte</p>
          <h2 id="servis-h">Servis i prodej pod jednou střechou</h2>
          <p className="sec-note">
            Řešíme závady i nové projekty — a když se oprava nevyplatí, poradíme lepší cestu
            z vlastního skladu. Bez zbytečné techniky navíc.
          </p>
        </div>

        <ul className="svc-list">
          {services.map((s) => (
            <li className="svc" key={s.code}>
              <span className="svc-code" aria-hidden="true">{s.code}</span>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="svc-detail">{s.detail}</span>
              </div>
            </li>
          ))}
        </ul>

        <figure className="svc-media">
          <img src="/section-1.webp" alt="Technik pracuje na vnitřních součástkách počítače" loading="lazy" />
        </figure>
      </section>

      <section className="sklad" id="sklad" aria-labelledby="sklad-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Výběr z aktuální nabídky</p>
          <h2 id="sklad-h">Repasovaná Della, prověřená kus po kusu</h2>
          <p className="sec-note">
            Značkové kancelářské počítače Dell OptiPlex — otestované, s SSD a legálním systémem.
            Ceny jsou včetně DPH. Kdo si přijde vybrat na prodejnu, uvidí stroj běžet naživo.
          </p>
        </div>

        <div className="stock-wrap">
          <figure className="stock-media">
            <img src="/section-2.webp" alt="Repasované značkové počítače Dell připravené k prodeji" loading="lazy" />
          </figure>

          <ul className="stock-list">
            {stock.map((item) => (
              <li className="stock-card" key={item.name}>
                <div className="stock-top">
                  <span className="stock-status">{item.status}</span>
                  <span className="stock-price">
                    {item.price} <span className="cur">Kč</span>
                  </span>
                </div>
                <h3 className="stock-name">{item.name}</h3>
                <ul className="stock-specs">
                  {item.specs.map((sp) => (
                    <li key={sp}>{sp}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <p className="stock-foot">
          Nevidíte, co hledáte? Zavolejte na <a href="tel:+420251511855">251 511 855</a> —
          většinu strojů umíme sehnat na míru a připravit do pár dní.
        </p>
      </section>
    </main>
  );
}
