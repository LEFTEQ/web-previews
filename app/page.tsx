import type { CSSProperties } from "react";

const machines = [
  {
    name: "JCB 4CX",
    kind: "Kolový traktorbagr",
    price: "1000 Kč/hod",
    specs: [
      "Výkopy sítí — voda, plyn i kanalizace",
      "Rozhrnování, přemisťování a nakládání",
      "Hloubka výkopu až 5,9 m",
      "Lžíce 30 / 60 / 90 cm, svahovací 140 cm",
    ],
  },
  {
    name: "JCB 8035",
    kind: "Otočný bagr",
    price: "900 Kč/hod",
    specs: [
      "Hmotnost 3,5 tuny",
      "Lžíce 30 / 40 / 50 / 60 cm",
      "Naklápěcí svahovací lžíce 140 cm",
    ],
  },
  {
    name: "JCB 2CX",
    kind: "Kolový traktorbagr",
    price: "800 Kč/hod",
    specs: [
      "Výkopy inženýrských sítí",
      "Úpravy terénů a bagrování",
      "Hloubka výkopu až 3,7 m",
      "Paletové vidle",
    ],
  },
  {
    name: "JCB 8018",
    kind: "Otočný bagr",
    price: "800 Kč/hod",
    specs: [
      "Hmotnost 1,82 tuny, dosah 4,07 m",
      "Hloubkový dosah 2,74 m",
      "Vrtání děr 20 / 30 cm do 1,5 m",
    ],
  },
  {
    name: "Locust 750",
    kind: "Smykový nakladač",
    price: "800 Kč/hod",
    specs: [
      "Nakládání na méně přístupných místech",
      "Hmotnost 2,8 tuny",
      "Vertikální zdvih, šíře 170 cm",
    ],
  },
  {
    name: "Terex PT2000",
    kind: "Demper",
    price: "600 Kč/hod",
    specs: [
      "Transport na těžko přístupných místech",
      "Nosnost 2 tuny, objem korby 1,72 m³",
    ],
  },
  {
    name: "Mercedes Atego",
    kind: "Kontejner 6 tun",
    price: "600 Kč/hod",
    specs: ["Kontejnerová doprava 6 tun", "Celková hmotnost 10,5 tuny"],
  },
  {
    name: "Praga V3S",
    kind: "Třístranný sklápěč",
    price: "600 Kč/hod",
    specs: ["Transport v těžkém terénu", "Nosnost 5 tun, korba max. 4 m³"],
  },
  {
    name: "Tatra 148 S1",
    kind: "Demper",
    price: "Připravujeme",
    soon: true,
    specs: ["Nový přírůstek do vozového parku", "Brzy k dispozici na zakázky"],
  },
];

const pillars = [
  {
    no: "01",
    title: "Účtujeme za výsledek, ne za hodiny",
    text: "Nejsme hodináři. Sazba za stroj sama o sobě nic neříká — rozhoduje, za jak dlouho je práce hotová. Rychlejší a zkušenější obsluha vás vyjde levněji.",
  },
  {
    no: "02",
    title: "Udržovaná technika, školená obsluha",
    text: "Stroje jsou pravidelně servisované a naši lidé procházejí školeními. Na stavbu přijedeme s technikou, která nezdrží.",
  },
  {
    no: "03",
    title: "Platíte až za odvedenou práci",
    text: "Úhradu předem nechceme. Jen u větších zakázek si domluvíme průběžné zálohy, aby byl obchod férový pro obě strany.",
  },
  {
    no: "04",
    title: "Za práci ručíme",
    text: "Od roku 1991 jsme dokončili stovky zakázek — od malých privátních výkopů po velké pro stavební firmy a stát.",
  },
];

export default function Page() {
  return (
    <>
      <div className="hazard" aria-hidden="true" />

      <header className="top">
        <div className="brand">
          <div>
            <b>ZEMNÍ&nbsp;PRÁCE</b>
            <span>PRAHA</span>
            <em>Bagry a doprava · od roku 1991</em>
          </div>
        </div>
        <a className="top-call" href="tel:+420739709397">Zavolat 739 709 397</a>
      </header>

      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
        </div>
        <div className="hero-inner">
          <p className="hero-eyebrow rise d1">Výkopy · terénní úpravy · Praha a okolí</p>
          <h1 className="rise d2">
            Vykopeme to<br />
            <span className="cut">za jak nejdřív</span> to jde
          </h1>
          <p className="hero-sub rise d3">
            Rodinná firma se strojem na každý terén — od úzkého minibagru
            v zahradě po traktorbagr do hloubky 5,9 m. Přijedeme, vykopeme,
            odvezeme a nezdržujeme. Sídlíme v Lipencích na Praze 5.
          </p>
          <div className="hero-actions rise d3">
            <a className="btn btn-solid" href="tel:+420739709397">Zavolat na stavbu</a>
            <a className="btn btn-ghost" href="#technika">Prohlédnout techniku</a>
          </div>
          <div className="hero-facts rise d4">
            <div><b>1991</b><small>na trhu od</small></div>
            <div><b>9</b><small>strojů v parku</small></div>
            <div><b>5,9 m</b><small>max. hloubka výkopu</small></div>
            <div><b>Praha 5</b><small>Lipence, Ke Štěrkovně</small></div>
          </div>
        </div>
      </section>

      <section id="technika" className="sec fleet">
        <div className="ep">
          <div className="sec-head reveal">
            <div>
              <p className="sec-eyebrow">Vozový park</p>
              <h2>Stroj na každý výkop</h2>
            </div>
            <p className="sec-note">
              Devět strojů s hodinovou sazbou — ale platíte za hotovou práci,
              ne za čas u volantu. Napište nám rozměry a terén, doporučíme, co dorazí.
            </p>
          </div>

          <div className="fleet-media reveal">
            <img src="/section-1.webp" alt="Traktorbagr Zemní práce Praha při výkopu inženýrských sítí" />
          </div>

          <div className="grid">
            {machines.map((m, i) => (
              <article className="machine reveal" key={m.name} style={{ transitionDelay: `${(i % 3) * 80}ms` } as CSSProperties}>
                <div className="m-top">
                  <span className="m-idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className={m.soon ? "m-price soon" : "m-price"}>{m.price}</span>
                </div>
                <h3>{m.name}</h3>
                <p className="kind">{m.kind}</p>
                <ul>
                  {m.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec trust">
        <div className="ep">
          <div className="trust-wrap">
            <div className="trust-media reveal">
              <img src="/section-2.webp" alt="Technika Zemní práce Praha na staveništi v Praze" />
            </div>
            <div className="reveal">
              <p className="sec-eyebrow">Proč zrovna my</p>
              <p className="trust-lead">
                Ceníme si vaší stavby podle toho, <span className="cut">za jak dlouho</span> ji máte hotovou
              </p>
              <p>
                Za víc než třicet let jsme se naučili, že levná hodinová
                sazba nic neznamená, když stroj postává. Proto počítáme cenu
                podle rychlosti a zkušenosti obsluhy — a garantujeme, že za
                daný čas dostanete nejlepší poměr ceny a výkonu.
              </p>

              <div className="pillars">
                {pillars.map((p) => (
                  <div className="pillar" key={p.no}>
                    <span className="no" aria-hidden="true">{p.no}</span>
                    <b>{p.title}</b>
                    <span>{p.text}</span>
                  </div>
                ))}
              </div>

              <div className="locale">
                <div>
                  <b>Ke Štěrkovně, Praha 5 — Lipence</b>
                  <small>Zavolejte 739 709 397 nebo pište na info@zemni-prace-praha.eu</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
