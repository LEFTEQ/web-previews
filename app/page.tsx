import type { CSSProperties } from "react";

export default function Page() {
  const fleet = [
    {
      code: "SKL",
      name: "Sklápěcí návěsy",
      load: "Sypký materiál",
      note: "Štěrk, písek, sůl. Vysypeme přesně tam, kde je potřeba.",
    },
    {
      code: "POS",
      name: "Posuvné podlahy",
      load: "Sypké i objemné",
      note: "Walking floor pro materiál, který nechcete naklápět.",
    },
    {
      code: "PLA",
      name: "Plachtové návěsy",
      load: "Paletované zboží",
      note: "Celovozové zásilky po ČR i do celé Evropské unie.",
    },
    {
      code: "SILO",
      name: "Silo kamiony",
      load: "Sypká hmota volně",
      note: "Pro sypké produkty přepravované bez pytlování.",
    },
    {
      code: "SŮL",
      name: "Solné produkty",
      load: "Rozvoz a sklad",
      note: "Prodej, rozvoz i skladování posypové soli.",
    },
    {
      code: "MAL",
      name: "Malé vozy",
      load: "Dokládky",
      note: "Menší zásilky a operativní přeprava napříč trasou.",
    },
  ];

  const proof = [
    { k: "1994", v: "Zasílatelství tuzemské i mezinárodní od tohoto roku." },
    { k: "35", v: "Vozových jednotek denně vypravíme do celé Evropy." },
    { k: "1500+", v: "Prověřených dopravců v naší evidenci." },
    { k: "100 %", v: "Platební morálka. Zásada, ne slogan." },
  ];

  return (
    <main className="st">
      <header className="st-nav">
        <a className="st-mark" href="#top" aria-label="Sped Tempus, úvod">
          <span className="st-mark-sped">SPED</span>
          <span className="st-mark-tempus">TEMPUS</span>
          <span className="st-mark-loc">Ústí nad Labem · od 1994</span>
        </a>
        <nav className="st-nav-links" aria-label="Hlavní">
          <a href="#vozy">Vozový park</a>
          <a href="#proc">Proč my</a>
          <a className="st-nav-cta" href="#poptavka">Poptat přepravu</a>
        </nav>
      </header>

      <section className="st-hero" id="top">
        <div className="st-hero-media">
          <img
            src="/hero.webp"
            alt="Kamion Sped Tempus na cestě, připravený k naložení"
            className="st-hero-img"
          />
        </div>

        <div className="st-hero-body">
          <p className="st-eyebrow">Zasílatelství · nákladní silniční doprava</p>
          <h1 className="st-hero-h">
            Přistavíme vůz,
            <br />
            <span className="st-hero-em">naložíme</span> a jedeme.
          </h1>
          <p className="st-hero-sub">
            Doprava po celé ČR a do států Evropské unie. Sklápěcí návěsy,
            posuvné podlahy, plachty, silo kamiony i solné produkty — vůz
            na míru vašemu nákladu.
          </p>

          <div className="st-hero-actions">
            <a className="st-btn" href="#poptavka">Vyžádat nabídku pro váš náklad</a>
            <a className="st-btn-ghost" href="#vozy">Prohlédnout vozový park</a>
          </div>

          <dl className="st-ticker" aria-label="Denní provoz">
            <div>
              <dt>Denně vypravíme</dt>
              <dd>35 vozových jednotek</dd>
            </div>
            <div>
              <dt>Dispečink</dt>
              <dd>Celodenně dostupný</dd>
            </div>
            <div>
              <dt>Certifikace</dt>
              <dd>ISO 9001 · GMP B4.1</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="st-fleet" id="vozy">
        <div className="st-sec-head">
          <p className="st-eyebrow">Naše nabídka pro vás</p>
          <h2 className="st-sec-h">Vůz podle nákladu, ne náklad podle vozu.</h2>
          <p className="st-sec-lead">
            Disponujeme širokou škálou nákladních vozidel a přizpůsobíme se
            termínům i místům nakládky a vykládky. Za škody na zboží ručíme
            pojištěním svým i našich dopravců.
          </p>
        </div>

        <ul className="st-fleet-grid">
          {fleet.map((f) => (
            <li className="st-card" key={f.code}>
              <span className="st-card-code" aria-hidden="true">{f.code}</span>
              <h3 className="st-card-name">{f.name}</h3>
              <p className="st-card-load">{f.load}</p>
              <p className="st-card-note">{f.note}</p>
            </li>
          ))}
        </ul>

        <div className="st-fleet-figure">
          <img
            src="/section-1.webp"
            alt="Sklápěcí návěs při nakládce sypkého materiálu"
            className="st-figure-img"
          />
          <p className="st-figure-cap">
            Otevřená cenová politika: vypracujeme cenovou nabídku, u které
            budete vědět, za co platíte.
          </p>
        </div>
      </section>

      <section className="st-trust" id="proc">
        <div className="st-trust-media">
          <img
            src="/section-2.webp"
            alt="Vlastní vozidlo Sped Tempus s vlastním dispečinkem"
            className="st-trust-img"
          />
        </div>

        <div className="st-trust-body">
          <p className="st-eyebrow">Proč my</p>
          <h2 className="st-sec-h">
            Vlastní dispečink, vlastní vozidla, morálka bez výmluv.
          </h2>
          <p className="st-sec-lead">
            Zasílatelství se věnujeme od roku 1994 — tuzemskému i zahraničnímu.
            Organizujeme velké hromadné zakázky u nás i v zahraničí a pružně
            řešíme, co se cestou přihodí.
          </p>

          <dl className="st-proof">
            {proof.map((p) => (
              <div className="st-proof-item" key={p.k}>
                <dt className="st-proof-k">{p.k}</dt>
                <dd className="st-proof-v">{p.v}</dd>
              </div>
            ))}
          </dl>

          <div className="st-provide">
            <p className="st-provide-h">Pro zákazníky zajišťujeme</p>
            <ul className="st-provide-list">
              <li>Mezinárodní i tuzemské zasílatelství</li>
              <li>Nákladní silniční dopravu doma i v zahraničí</li>
              <li>Skladování zboží</li>
              <li>Prodej, rozvoz a skladování solných produktů</li>
            </ul>
          </div>

          <address className="st-addr" id="poptavka">
            <span>SPED TEMPUS s.r.o.</span>
            <span>Na Vantrokách 40/12, 400 01 Ústí nad Labem</span>
            <span>IČ 63146207 · DIČ CZ63146207</span>
          </address>
        </div>
      </section>
    </main>
  );
}
