import type { CSSProperties } from "react";

const steps = [
  {
    no: "01",
    title: "Předběžná konzultace",
    text: "Zdarma a nezávazně vám poradíme s výběrem, nebo posoudíme vozy, které jste si už vyhlédli. Ušetříme vám prohlídky aut, která jsou poruchová, předražená nebo skrývají vážné vady. Z praxe víme, že takových je bohužel většina.",
    price: "Zdarma",
    free: true,
    note: "bez závazku",
  },
  {
    no: "02",
    title: "Prověření historie podle VIN",
    text: "Podle VIN kódu dohledáme všechny dostupné informace o voze a porovnáme je s tím, co uvádí prodejce. Stočený tachometr, nehodová minulost i skutečný počet majitelů — vše vyjde najevo dřív, než někam vyrazíte.",
    price: "v ceně kontroly",
    free: false,
    note: "součást prohlídky",
  },
  {
    no: "03",
    title: "Fyzická prohlídka na místě prodeje",
    text: "Sejdeme se u vozu přímo u prodejce. Změříme tloušťku laku, uděláme diagnostiku řídicí jednotky, ověříme doklady a projedeme s vozem zkušební jízdu — motor, brzdy i podvozek. Na konci dostanete jasné doporučení: kupovat, smlouvat, nebo nechat být.",
    price: "3 990 Kč",
    free: false,
    note: "jeden vůz, jasný verdikt",
  },
];

const checks = [
  { t: "Tloušťka laku", d: "měřením odhalíme přelakování a opravy po nehodě" },
  { t: "Diagnostika jednotky", d: "vyčteme chybové paměti a skutečný stav elektroniky" },
  { t: "Kontrola dokladů", d: "ověříme původ, VIN a shodu s technickým průkazem" },
  { t: "Zkušební jízda", d: "posoudíme motor, převodovku a brzdy v provozu" },
];

const services = [
  "Prověření vybraného vozu",
  "Individuální dovoz vozidla",
  "Nabídka prověřených vozů",
  "Prověřený výkup vozu",
  "Financování — úvěr i leasing",
  "Prověřená autopůjčovna",
];

export default function Page() {
  return (
    <main>
      <header className="pv-top">
        <div className="pv-top-inner">
          <a className="pv-mark" href="#uvod" aria-label="Prověřený vůz, autobazar Brno">
            Prověřený&nbsp;vůz
            <span className="pv-check">VIN&nbsp;✓</span>
          </a>
          <div className="pv-top-meta">
            <span className="pv-top-loc pv-hide-sm">◈ Brno</span>
            <a href="tel:+420733737686">+420 733 737 686</a>
          </div>
        </div>
      </header>

      <section id="uvod" className="pv-hero">
        <div className="pv-wrap">
          <div className="pv-hero-grid">
            <div className="pv-reveal pv-d1">
              <p className="pv-eyebrow">Nezávislé prověření ojetin · Brno</p>
              <h1 className="pv-h1">
                Než koupíte ojetinu,<br />
                ať ji nejdřív <em>prověří</em> někdo,<br />
                kdo za vás nekupuje.
              </h1>
              <p className="pv-lede">
                Přijdeme k vozu, změříme lak, projedeme diagnostiku a řekneme
                vám na rovinu, jestli je koupě dobrý nápad. Bez provize od prodejce.
              </p>
              <div className="pv-hero-cta">
                <a className="pv-btn pv-btn-primary" href="tel:+420733737686">
                  Zavolat a poradit se
                </a>
                <a className="pv-btn pv-btn-ghost" href="#postup">
                  Jak prověření probíhá
                </a>
              </div>
            </div>

            <figure className="pv-hero-media pv-reveal pv-d2">
              <img
                className="pv-hero-img"
                src="/hero.webp"
                alt="Technik prověřuje ojetý vůz před koupí v Brně"
                loading="eager"
              />
              <figcaption className="pv-stamp">
                <div className="pv-stamp-tag">Verdikt</div>
                <div className="pv-stamp-val">Kupovat lze</div>
                <div className="pv-stamp-note">po smluvení ceny a doplnění výbavy</div>
              </figcaption>
            </figure>
          </div>

          <dl className="pv-strip pv-reveal pv-d3">
            <div>
              <dt>Konzultace</dt>
              <dd>Vždy zdarma</dd>
            </div>
            <div>
              <dt>Za koho pracujeme</dt>
              <dd>Za kupujícího, ne prodejce</dd>
            </div>
            <div>
              <dt>Kde prohlížíme</dt>
              <dd>Přímo v místě prodeje</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="postup" className="pv-section">
        <div className="pv-wrap">
          <div className="pv-section-head">
            <div>
              <p className="pv-kicker">Postup — tři kroky</p>
              <h2 className="pv-h2">Od vytipovaného inzerátu<br />k podepsané smlouvě</h2>
            </div>
          </div>

          <div className="pv-steps">
            {steps.map((s) => (
              <article className="pv-step" key={s.no}>
                <div className="pv-step-no">{s.no}</div>
                <div className="pv-step-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <div className="pv-step-price">
                  <span className={s.free ? "pv-free" : undefined}>{s.price}</span>
                  <small>{s.note}</small>
                </div>
              </article>
            ))}
          </div>

          <div className="pv-checks">
            {checks.map((c) => (
              <div className="pv-check-item" key={c.t}>
                <span className="pv-tick" aria-hidden="true">✓</span>
                <span>
                  <b>{c.t}</b> — {c.d}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="onas" className="pv-section" style={{ background: "#fff", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" } as CSSProperties}>
        <div className="pv-wrap">
          <div className="pv-section-head">
            <div>
              <p className="pv-kicker">Proč přes nás</p>
              <h2 className="pv-h2">Kupujete jednou.<br />My prohlížíme auta denně.</h2>
            </div>
          </div>

          <div className="pv-trust-grid">
            <img
              className="pv-trust-img"
              src="/section-1.webp"
              alt="Měření tloušťky laku a diagnostika ojetého vozu"
              loading="lazy"
            />
            <div>
              <p className="pv-trust-lede">
                Neprodáváme vám auto — <b>pomáháme ho koupit</b>. Když se pak
                rozhodnete, vyjednáme lepší cenu nebo výbavu navíc a získanou
                slevu si rozdělíme rovným dílem. Dohlédneme i na to, aby kupní
                smlouva měla všechny náležitosti.
              </p>
              <ul className="pv-svcs">
                {services.map((s, i) => (
                  <li key={s} data-n={String(i + 1).padStart(2, "0")}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <blockquote className="pv-quote">
            <p>„Zbytečné prohlídky poruchových a předražených aut odpadly.
              Přijeli jsme rovnou k vozu, který stál za to.“</p>
            <cite>— zkušenost klienta z Brna, koupě ojetiny 2024</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
