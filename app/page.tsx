import type { CSSProperties } from "react";

const categories = [
  {
    id: "01",
    name: "Tepelné izolace",
    note: "Fasádní i podlahový polystyren, minerální vata, PIR desky",
    items: ["Styro EPS 70 F · 100 mm", "styrotherm plus 70 šedý", "Puren FAL PIR s ALU fólií"],
  },
  {
    id: "02",
    name: "Fasády a omítky",
    note: "Škrábané i zatírané struktury, štuky, potěry a stěrky",
    items: ["weber.pas akrylát 1,5 mm", "Baumit CrystalTop 1,5 mm", "Malty · potěry · betony"],
  },
  {
    id: "03",
    name: "Sádrokarton a podhledy",
    note: "Desky, profily, závěsy i minerální kazetové podhledy",
    items: ["Ecophon Opta A · Advantage", "KCS Heradesign Fine", "AMF Thermatex · Armstrong"],
  },
  {
    id: "04",
    name: "Zdící materiál a střechy",
    note: "Hrubá stavba, krytiny, terasy, hydroizolace a fólie",
    items: ["Ocelové zárubně pro přesné zdění", "Zateplené vchodové dveře", "Stavební fólie, tkaniny, sítě"],
  },
  {
    id: "05",
    name: "Voda a zahrada",
    note: "Jímky, septiky, nádrže i odvodňovací systémy — V-zahradě.cz",
    items: ["Plastová jímka Eco-Line 3300 l", "Čističky a septiky", "Talířové hmoždinky, spádové klíny"],
  },
];

const pallets = [
  { code: "EPS 70 F", label: "Fasádní polystyren", weight: "tl. 100 mm" },
  { code: "weber.pas", label: "Akrylátová omítka", weight: "25 kg" },
  { code: "Ecophon", label: "Minerální podhled", weight: "600×600 mm" },
];

export default function Page() {
  return (
    <main className="es">
      <header className="es-top">
        <a className="es-wm" href="#" aria-label="E-STAVEBNINY — úvod">
          <span className="es-wm-e">e</span>
          <span className="es-wm-txt">stavebniny</span>
          <span className="es-wm-dot">.cz</span>
        </a>
        <nav className="es-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#sklad">Sklad a odběr</a>
          <a href="tel:+420604724929" className="es-nav-tel">604&nbsp;724&nbsp;929</a>
        </nav>
      </header>

      <section className="es-hero">
        <div className="es-hero-media">
          <img
            src="/hero.webp"
            alt="Naložené palety zateplovacího materiálu ve skladu stavebnin v Zastávce u Brna"
            className="es-hero-img"
          />
          <div className="es-hero-tag">
            <span>Zastávka u Brna · Areál NEOB Energy</span>
          </div>
        </div>

        <div className="es-hero-body">
          <p className="es-eyebrow">Stavebniny se skladem · odběr i rozvoz</p>
          <h1 className="es-h1">
            Celá <span className="es-underline">paleta</span> zateplení
            <br />naložená ještě dnes.
          </h1>
          <p className="es-lede">
            Polystyren, minerální vata, omítky Weber i Baumit, sádrokarton a podhledy
            Ecophon — skladem u Brna. Řekněte, kam to má přijet, a my naložíme.
          </p>
          <div className="es-cta-row">
            <a className="es-btn es-btn-primary" href="tel:+420604724929">
              Zavolat 604&nbsp;724&nbsp;929
            </a>
            <a className="es-btn es-btn-ghost" href="mailto:info@e-stavebniny.cz">
              Napsat na e-mail
            </a>
          </div>

          <ul className="es-pallets" aria-label="Co máme běžně naskladněné">
            {pallets.map((p) => (
              <li key={p.code} className="es-pallet">
                <span className="es-pallet-code">{p.code}</span>
                <span className="es-pallet-label">{p.label}</span>
                <span className="es-pallet-weight">{p.weight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="es-sec" id="sortiment">
        <div className="es-sec-head">
          <p className="es-eyebrow">Sortiment</p>
          <h2 className="es-h2">Pět regálů, ze kterých stavíte dům, byt i zahradu</h2>
          <p className="es-sec-lede">
            Nevozíme přes tři překupníky — značky, které znáte ze stavby, máme
            přímo v regálech. Vyberte kategorii a řekněte nám množství.
          </p>
        </div>

        <ul className="es-cats">
          {categories.map((c) => (
            <li className="es-cat" key={c.id}>
              <span className="es-cat-id" aria-hidden="true">{c.id}</span>
              <div className="es-cat-main">
                <h3 className="es-cat-name">{c.name}</h3>
                <p className="es-cat-note">{c.note}</p>
              </div>
              <ul className="es-cat-items">
                {c.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="es-sec es-sec-trust" id="sklad">
        <div className="es-trust-media">
          <img
            src="/section-1.webp"
            alt="Skladová hala stavebnin s regály plnými izolace a stavebního materiálu"
            className="es-trust-img"
          />
        </div>
        <div className="es-trust-body">
          <p className="es-eyebrow">Sklad a odběr</p>
          <h2 className="es-h2">Areál v Zastávce u&nbsp;Brna — přijedete, naložíme</h2>
          <p className="es-sec-lede">
            Osobní odběr na výdejním místě 1.&nbsp;máje 102, nebo rozvoz na stavbu.
            Ceník dopravného řekneme rovnou do telefonu — bez počítání po e-mailech.
          </p>

          <dl className="es-facts">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>1. máje 102, 664 84 Zastávka<br />areál NEOB Energy s.r.o.</dd>
            </div>
            <div>
              <dt>Rovnou na sklad</dt>
              <dd><a href="tel:+420604724929">604 724 929</a></dd>
            </div>
            <div>
              <dt>Objednávky a dotazy</dt>
              <dd><a href="mailto:info@e-stavebniny.cz">info@e-stavebniny.cz</a></dd>
            </div>
          </dl>

          <div className="es-strip">
            <img
              src="/section-2.webp"
              alt="Paleta stavebního materiálu připravená k odběru"
              className="es-strip-img"
            />
            <blockquote className="es-quote">
              <p>„Zavolal jsem ráno, odpoledne měl polystyren i lišty na stavbě. Bez keců, bez čekání týden.“</p>
              <cite>— Realizační firma, Rosice</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
