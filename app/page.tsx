import type { CSSProperties } from "react";

const gases = [
  { name: "Acetylen", formula: "C2H2", color: "#7A2E28", use: "Autogenní svařování a řezání kovů." },
  { name: "Kyslík", formula: "O2", color: "#1E7FB0", use: "Řezání, svařování, technické i medicinální použití." },
  { name: "Argon", formula: "Ar", color: "#17663F", use: "Svařování v ochranné atmosféře (TIG)." },
  { name: "Argonové směsi", formula: "Ar + CO2", color: "#2F8C6A", use: "Svařování metodou MIG/MAG." },
  { name: "Dusík", formula: "N2", color: "#2A2E33", use: "Inertizace, tlakování a proplach potrubí." },
  { name: "Oxid uhličitý", formula: "CO2", color: "#6C7176", use: "Svařování i potravinářské CO2 do nápojů." },
  { name: "Propan", formula: "C3H8", color: "#B5402C", use: "Hořáky, ohřev a topné aplikace." },
  { name: "Propan-Butan", formula: "LPG", color: "#C06A1F", use: "Spotřebiče a příslušenství MEVA." },
];

const services = [
  {
    title: "Plnění tlakových lahví",
    body: "Naplníme lahev technickým i potravinářským plynem. U vlastní lahve doložte původ, tlakovou zkoušku a certifikát sesazení ventilu — u prvního plnění bez dokladů lahev před plněním prověříme a odtlakujeme (za příplatek).",
  },
  {
    title: "Prodej lahví a ventilů",
    body: "Nové tlakové lahve, redukční lahvové ventily a příslušenství. Poradíme, který ventil sedí na váš plyn a spotřebič.",
  },
  {
    title: "Výrobky MEVA",
    body: "Propan-butanové spotřebiče MEVA a jejich příslušenství — od hořáků po náhradní díly.",
  },
  {
    title: "Broušení nástrojů",
    body: "Naostříme vaše nástroje na profesionální stav — rychle a s citem pro geometrii ostří.",
  },
  {
    title: "Servis a likvidace lahví",
    body: "Zajistíme servis tlakových lahví, výměnu ventilů i ekologickou likvidaci dosloužilých lahví.",
  },
  {
    title: "Autodoprava do 3,5 t",
    body: "Rozvoz technických plynů po Hradci Králové a okolí. Domluvíme svoz prázdných a dovoz plných lahví až k vám.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <div className="codebar" aria-hidden="true">
        {gases.map((g) => (
          <span key={g.name} style={{ background: g.color }} />
        ))}
      </div>

      <header className="head">
        <a className="brand" href="#top" aria-label="Josef Desenský — plnírna tlakových lahví, Hradec Králové">
          <span className="brand-mark" aria-hidden="true">
            <i style={{ background: "#7A2E28" }} />
            <i style={{ background: "#1E7FB0" }} />
            <i style={{ background: "#17663F" }} />
          </span>
          <span className="brand-word">
            <strong>DESENSKÝ</strong>
            <em>technické &amp; potravinářské plyny · Hradec Králové</em>
          </span>
        </a>
        <div className="head-contact">
          <span className="hours">Po–Pá 7:00–12:00</span>
          <a href="tel:+420605515800">605 515 800</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-text">
          <p className="eyebrow r1">Plnírna tlakových lahví · Hradec Králové</p>
          <h1 className="r2">
            Tlakové lahve <span>naplníme</span>, prodáme i&nbsp;přivezeme až&nbsp;k&nbsp;vám.
          </h1>
          <p className="lede r3">
            Technické a potravinářské plyny, redukční ventily, servis lahví
            i&nbsp;autodoprava do&nbsp;3,5&nbsp;t. Poznáte nás podle barvy lahve —
            a&nbsp;podle toho, že si na plyn můžete počkat i&nbsp;jen doskočit.
          </p>
          <div className="hero-cta r4">
            <a className="btn btn-solid" href="tel:+420605515800">Zavolat 605&nbsp;515&nbsp;800</a>
            <a className="btn btn-ghost" href="#plyny">Prohlédnout nabídku plynů</a>
          </div>
          <ul className="hero-facts r5">
            <li><span>Otevřeno</span>všední dny 7:00–12:00</li>
            <li><span>E-mail</span><a href="mailto:josef.desensky@seznam.cz">josef.desensky@seznam.cz</a></li>
            <li><span>Rozvoz</span>Hradec Králové a okolí</li>
          </ul>
        </div>
        <figure className="hero-media r3">
          <img src="/hero.webp" alt="Řada tlakových lahví s technickými plyny připravených k plnění" loading="eager" />
          <figcaption>Naše plnírna — tlakové lahve připravené k plnění.</figcaption>
        </figure>
      </section>

      <section className="gases" id="plyny">
        <div className="sec-head">
          <p className="eyebrow">Barevné značení lahví · EN 1089-3</p>
          <h2>Plyny, které u&nbsp;nás naplníte</h2>
          <p className="sec-lede">
            Každý plyn má svou barvu na hrdle lahve. Podle ní se v&nbsp;plnírně
            orientujeme — a&nbsp;podle stejné barvy najdete i&nbsp;to, co potřebujete.
          </p>
        </div>

        <ul className="gas-grid">
          {gases.map((g) => (
            <li className="gas-card" key={g.name} style={{ "--gc": g.color } as CSSProperties}>
              <span className="gas-band" aria-hidden="true" />
              <div className="gas-body">
                <span className="gas-formula">{g.formula}</span>
                <h3>{g.name}</h3>
                <p>{g.use}</p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="gas-media">
          <img src="/section-1.webp" alt="Detail ventilů a hrdel tlakových lahví s barevným značením plynů" loading="lazy" />
          <figcaption>
            Nevíte si rady s&nbsp;výběrem? Zavolejte —&nbsp;podle použití vám doporučíme
            správný plyn i&nbsp;ventil.
          </figcaption>
        </figure>
      </section>

      <section className="servis" id="servis">
        <div className="servis-inner">
          <div className="servis-head">
            <p className="eyebrow">Servis, prodej &amp; doprava</p>
            <h2>Nejen plyn — celý servis kolem tlakových lahví</h2>
            <p className="sec-lede">
              Josef Desenský provozuje plnírnu v&nbsp;Hradci Králové. K&nbsp;plnění
              patří prodej lahví a&nbsp;ventilů, výrobky MEVA, broušení nástrojů,
              likvidace lahví i&nbsp;rozvoz vlastním vozem. Na bezpečnost
              tlakových zařízení si dáváme záležet — proto u&nbsp;cizích lahví
              trváme na doložení původu a&nbsp;zkoušek.
            </p>

            <figure className="servis-media">
              <img src="/section-2.webp" alt="Dodávka pro rozvoz technických plynů po Hradci Králové a okolí" loading="lazy" />
            </figure>
          </div>

          <ol className="servis-list">
            {services.map((s) => (
              <li className="servis-item" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
