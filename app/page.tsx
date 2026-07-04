import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PANDOR SAFE — trezory, bezpečnostní dveře a zámky | České Budějovice",
  description:
    "Zámečnictví a bezpečnostní technika v Českých Budějovicích od roku 1994. Trezory, bezpečnostní dveře, systémy generálního klíče, skříně na zbraně a servis pro bytové domy.",
  openGraph: {
    title: "PANDOR SAFE — bezpečnostní technika, České Budějovice",
    description:
      "Certifikované trezory, bezpečnostní dveře a systémy generálního klíče. Vzorková prodejna v Průběžné ulici. Nejsme nejlevnější, ale snažíme se být nejlepší.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Trezorová technika PANDOR SAFE" }],
  },
};

const tridy = [
  {
    stupen: "I–VI",
    nazev: "Trezory do bytu i firmy",
    popis:
      "Nábytkové i do zdiva, převážně české a německé výroby — Profikon, Triton, Format. Zámky MAUER, STUFF, CAVI nebo americké SERGENT a La Gard.",
  },
  {
    stupen: "RC3–RC4",
    nazev: "Bezpečnostní dveře",
    popis:
      "České dveře FESTA s platnými atesty. Poradíme, který bezpečnostní stupeň sedí na vaše dveře a jak je správně osadit.",
  },
  {
    stupen: "GK",
    nazev: "Systém generálního klíče",
    popis:
      "Jeden klíč na všechny dveře, kam smíte vy — a jen tam. Vložky a systémy GUARD a DOM pro bytové domy i firmy.",
  },
  {
    stupen: "S1",
    nazev: "Skříně na zbraně",
    popis:
      "Certifikované uložení zbraní a střeliva podle zákona. Vybereme velikost i kotvení podle toho, co doma máte.",
  },
];

const duvody = [
  {
    cislo: "01",
    nadpis: "Atesty, ne sliby",
    text:
      "Každý výrobek má platné odpovídající certifikáty — Trezor test, Strojírenský zkušební ústav, NBÚ. Víte přesně, co kupujete.",
  },
  {
    cislo: "02",
    nadpis: "Prověření lidé",
    text:
      "K vašemu zámku a klíči má přístup jen bezúhonný pracovník. Diskrétnost bereme jako součást řemesla.",
  },
  {
    cislo: "03",
    nadpis: "Od vývoje po servis",
    text:
      "Vyvíjíme, vyrábíme, montujeme i servisujeme. Když se něco po letech zadře, voláte tomu, kdo to instaloval.",
  },
];

export default function Page() {
  return (
    <main className="ps">
      <header className="ps-top">
        <a href="#obsah" className="ps-brand" aria-label="PANDOR SAFE, úvod">
          <span className="ps-brand-mark" aria-hidden="true">
            <span className="ps-brand-dial" />
          </span>
          <span className="ps-brand-word">
            PANDOR<span className="ps-brand-thin">SAFE</span>
          </span>
        </a>
        <a className="ps-call" href="tel:+420777183755">
          <span className="ps-call-label">Poradíme telefonicky</span>
          <span className="ps-call-num">777 183 755</span>
        </a>
      </header>

      <section className="ps-hero" id="obsah">
        <div className="ps-hero-copy">
          <p className="ps-eyebrow">Zámečnictví &amp; bezpečnostní technika · České Budějovice · od 1994</p>
          <h1 className="ps-h1">
            Zavřít, zamknout,
            <br />
            <em>spolehnout se.</em>
          </h1>
          <p className="ps-lead">
            Trezory, bezpečnostní dveře a systémy generálního klíče, které drží. Přijďte si je osahat do
            vzorkové prodejny v Průběžné ulici — než se rozhodnete, kam uložit to, na čem vám záleží.
          </p>
          <div className="ps-hero-actions">
            <a className="ps-btn ps-btn-primary" href="tel:+420777183755">
              Zavolat 777 183 755
            </a>
            <a className="ps-btn ps-btn-ghost" href="#nabidka">
              Prohlédnout sortiment
            </a>
          </div>
        </div>
        <figure className="ps-hero-media">
          <img
            src="/hero.webp"
            alt="Otevřený certifikovaný trezor PANDOR SAFE s masivními závorami a číselníkem"
            className="ps-hero-img"
            width={1200}
            height={1500}
          />
          <figcaption className="ps-hero-cap">Certifikovaný trezor · zámek MAUER</figcaption>
        </figure>
      </section>

      <section className="ps-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="ps-section-head">
          <p className="ps-eyebrow ps-eyebrow-dark">Co u nás pořídíte</p>
          <h2 className="ps-h2" id="nabidka-h">
            Čtyři stupně klidu
          </h2>
          <p className="ps-section-lead">
            Neprodáváme levné nekvalitní výrobky s krátkou životností. Vybíráme značky, které stojí za to
            zamykat — a řekneme vám rovnou, který stupeň zabezpečení vaše situace potřebuje.
          </p>
        </div>

        <ul className="ps-grid">
          {tridy.map((t) => (
            <li className="ps-card" key={t.nazev}>
              <span className="ps-card-grade" aria-hidden="true">
                {t.stupen}
              </span>
              <h3 className="ps-card-title">{t.nazev}</h3>
              <p className="ps-card-text">{t.popis}</p>
            </li>
          ))}
        </ul>

        <p className="ps-note">
          Mříže, poštovní schránky, servis zámků pro bytové domy — na to všechno se ptejte také.
        </p>
      </section>

      <section className="ps-trust" aria-labelledby="trust-h">
        <figure className="ps-trust-media">
          <img
            src="/section-1.webp"
            alt="Vzorková prodejna PANDOR SAFE s bezpečnostními dveřmi a trezory"
            className="ps-trust-img"
            width={1000}
            height={1200}
          />
        </figure>

        <div className="ps-trust-copy">
          <p className="ps-eyebrow">Proč lidé v jižních Čechách zamykají u nás</p>
          <h2 className="ps-h2 ps-h2-light" id="trust-h">
            „Nejsme nejlevnější,
            <br />
            ale snažíme se být nejlepší.“
          </h2>
          <ol className="ps-reasons">
            {duvody.map((d) => (
              <li className="ps-reason" key={d.cislo}>
                <span className="ps-reason-num" aria-hidden="true">
                  {d.cislo}
                </span>
                <div>
                  <h3 className="ps-reason-title">{d.nadpis}</h3>
                  <p className="ps-reason-text">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="ps-showroom">
            <img
              src="/section-2.webp"
              alt="Detail bezpečnostní vložky a systému generálního klíče"
              className="ps-showroom-img"
              width={800}
              height={600}
            />
            <div className="ps-showroom-copy">
              <p className="ps-showroom-kicker">Vzorková prodejna</p>
              <p className="ps-showroom-addr">
                Průběžná 2492/8
                <br />
                370 04 České Budějovice 3
              </p>
              <p className="ps-showroom-line">
                Přijďte si vzorky osahat — trezory, dveře i vložky máme na dosah ruky.
              </p>
              <a className="ps-btn ps-btn-primary ps-btn-sm" href="tel:+420777183757">
                Nezávazně se domluvit
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
