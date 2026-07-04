import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HP Elektro-Servis — autorizovaný servis spotřebičů v Ostravě",
  description:
    "Opravíme pračku, myčku, sušičku i troubu — u vás doma nebo na dílně v Mariánských Horách. Autorizovaný servis Gorenje, Mora, Hisense a Asko pro Ostravu a okolí.",
};

const appliances = [
  { part: "01", name: "Pračky a sušičky", note: "Nevytáčí, netočí, neohřívá vodu. Ložiska, čerpadla, topení, elektronika." },
  { part: "02", name: "Myčky nádobí", note: "Nenapouští, nevypouští, špatně myje. Napouštěcí ventily, čerpadla, těsnění." },
  { part: "03", name: "Sporáky a trouby", note: "Nehřejí, nesvítí, hlásí chybu. Topná tělesa, termostaty, řídicí desky." },
  { part: "04", name: "Indukční a plynové desky", note: "Nezapaluje, nereaguje, bliká. Zapalování, senzory, plynařské práce." },
  { part: "05", name: "Odsávače par", name2: "", note: "Netáhne, hučí, nesvítí. Motory, filtry, osvětlení a montáž." },
  { part: "06", name: "Mrazničky", note: "Namrzá, netěsní, nechladí. Bez zásahu do chladicího okruhu — ten řeší náš partner." },
];

const brands = [
  "Gorenje",
  "Mora",
  "Hisense",
  "Asko",
  "AEG · Electrolux · Zanussi",
  "Bosch · Siemens",
  "Beko · Blomberg",
  "Amica · Ariston",
  "Whirlpool · Ignis",
  "Brandt · Fagor · Faber",
];

const regions = [
  "Ostrava",
  "Opava",
  "Havířov",
  "Bohumín",
  "Studénka",
  "Frýdek-Místek",
];

export default function Page() {
  return (
    <main className="hp">
      <header className="hp-top">
        <a className="hp-mark" href="#" aria-label="HP Elektro-Servis, úvod">
          <span className="hp-mark__hp">HP</span>
          <span className="hp-mark__rest">Elektro-Servis</span>
        </a>
        <a className="hp-call" href="tel:+420774321553">
          <span className="hp-call__label">Volejte servis</span>
          <span className="hp-call__num">774&nbsp;321&nbsp;553</span>
        </a>
      </header>

      <section className="hp-hero" aria-labelledby="hero-title">
        <div className="hp-hero__panel">
          <p className="hp-eyebrow">Autorizovaný servis · Ostrava, Mariánské Hory</p>
          <h1 id="hero-title" className="hp-hero__title">
            Spotřebič<br />
            <span className="hp-hero__title-em">stávkuje?</span><br />
            Rozebereme,<br />
            spravíme, zapojíme.
          </h1>
          <p className="hp-hero__lede">
            Přijedeme za vámi domů po celé Ostravě a okolí, nebo diagnózu
            uděláme na dílně. Pračky, myčky, sušičky, sporáky i odsávače —
            s originálními díly a papírem na autorizovaný servis.
          </p>
          <div className="hp-hero__actions">
            <a className="hp-btn" href="tel:+420774321553">Objednat opravu telefonem</a>
            <a className="hp-btn hp-btn--ghost" href="mailto:info@hpservis.eu">Napsat popis závady</a>
          </div>
        </div>
        <figure className="hp-hero__figure">
          <img
            src="/hero.webp"
            alt="Technik HP Elektro-Servis při opravě domácího spotřebiče"
            className="hp-hero__img"
          />
          <figcaption className="hp-plate">
            <span className="hp-plate__row"><b>Autorizace:</b> Gorenje · Mora · Hisense · Asko</span>
            <span className="hp-plate__row"><b>Provozovna:</b> Mendělejovova 210, Mariánské Hory</span>
            <span className="hp-plate__row"><b>Od:</b> 2013</span>
          </figcaption>
        </figure>
      </section>

      <section className="hp-service" aria-labelledby="service-title">
        <div className="hp-section-head">
          <p className="hp-eyebrow">Co spravujeme</p>
          <h2 id="service-title" className="hp-section-title">
            Servisní list. Řekněte značku a příznak, my víme, kam sáhnout.
          </h2>
        </div>

        <ol className="hp-list">
          {appliances.map((a) => (
            <li className="hp-item" key={a.part}>
              <span className="hp-item__part" aria-hidden="true">{a.part}</span>
              <div className="hp-item__body">
                <h3 className="hp-item__name">{a.name}</h3>
                <p className="hp-item__note">{a.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="hp-service__foot">
          <img
            src="/section-1.webp"
            alt="Rozebraný spotřebič a nářadí technika na servisní dílně"
            className="hp-service__img"
          />
          <aside className="hp-note">
            <h3 className="hp-note__title">Doma i na dílně</h3>
            <p>
              Většinu závad vyřešíme u vás v kuchyni. Když je potřeba spotřebič
              otevřít do detailu, převezeme ho na dílnu na Mendělejovově.
            </p>
            <p className="hp-note__fine">
              Chladničky a vinotéky opravujeme bez zásahu do chladicího okruhu.
              Opravu chlazení zajišťuje náš externí partner.
            </p>
            <p className="hp-note__extra">
              K opravě přidáme montáž a náhradní díly — včetně vodoinstalatérských
              a plynařských prací, když je instalace potřeba dodělat.
            </p>
          </aside>
        </div>
      </section>

      <section className="hp-trust" aria-labelledby="trust-title">
        <div className="hp-section-head">
          <p className="hp-eyebrow">Značky a dosah</p>
          <h2 id="trust-title" className="hp-section-title">
            Autorizace na čtyři značky, pozáruční servis skoro na všechny.
          </h2>
        </div>

        <div className="hp-trust__grid">
          <div className="hp-trust__col">
            <p className="hp-eyebrow hp-eyebrow--sub">Servisujeme</p>
            <ul className="hp-brands">
              {brands.map((b, i) => (
                <li className="hp-brand" key={b}>
                  <span className="hp-brand__idx" aria-hidden="true">{i < 4 ? "★" : "·"}</span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="hp-brands__note">★ autorizovaný servis · · pozáruční opravy</p>
          </div>

          <figure className="hp-trust__figure">
            <img
              src="/section-2.webp"
              alt="Sklad originálních náhradních dílů a nových spotřebičů HP Elektro-Servis"
              className="hp-trust__img"
            />
          </figure>
        </div>

        <div className="hp-reach">
          <p className="hp-eyebrow hp-eyebrow--sub">Kam jezdíme</p>
          <ul className="hp-reach__list">
            {regions.map((r) => (
              <li className="hp-reach__item" key={r}>{r}</li>
            ))}
          </ul>
          <p className="hp-reach__line">
            Sídlíme na Mendělejovově 210 v Mariánských Horách a děláme servis od
            roku 2013. Prodáme vám i nový spotřebič — třeba skandinávské Asko
            se zárukou 7 let.
          </p>
        </div>
      </section>
    </main>
  );
}
