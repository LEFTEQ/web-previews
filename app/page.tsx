import type { CSSProperties } from "react";

export default function Page() {
  const rampy = [
    {
      no: "01",
      titul: "Stavba od základu",
      text: "Cihly, tvárnice, malty, cement, výztuž i polystyren. Naložíme Vám celou paletu i pár pytlů — a připravíme k odběru na Homoli, než dojedete.",
      polozky: ["Zdivo a překlady", "Cement a malty", "Výztuž a KARI sítě", "EPS a minerální vata"],
    },
    {
      no: "02",
      titul: "Střecha a izolace",
      text: "Trapézový plech, střešní šindel, fólie difúzní i parotěsné. Plech řežeme na metráž přesně podle Vašich krokví.",
      polozky: ["Trapézový plech na míru", "Střešní šindel", "Difúzní a parotěsné fólie", "Nopová fólie"],
    },
    {
      no: "03",
      titul: "Dům a zahrada",
      text: "Pletiva, brány, dlažba, štěrkové rohože i skleníky. Když stavba stojí, dovybavíte s námi i plot a záhon.",
      polozky: ["Poplastovaná pletiva a brány", "Zátěžová PVC dlažba", "Skleníky Vitavia", "Truhlíky a květináče"],
    },
  ];

  const naskladku = [
    { nazev: "RAPOL polystyren EPS 150, tl. 60 mm", cena: "720,20", jed: "bal", stav: "Do 10 dnů" },
    { nazev: "Minerální vata Climowool DF1 60 mm", cena: "710", jed: "bal", stav: "Skladem" },
    { nazev: "Trapézový plech Blacho T35 Plus Aluzinek", cena: "211", jed: "m²", stav: "Řežeme na metráž" },
    { nazev: "Poplastovaná brána IDEAL II, 3605×1950 mm", cena: "7 719", jed: "ks", stav: "Skladem" },
    { nazev: "Zátěžová PVC dlažba LINEA TENAX 60×60", cena: "320", jed: "ks", stav: "Skladem" },
    { nazev: "Střešní šindel MANSION měděná, KATEPAL", cena: "745", jed: "bal", stav: "U dodavatele" },
  ];

  return (
    <main className="pd">
      <header className="pd-nav">
        <a className="pd-mark" href="#" aria-label="PRODOMOS — stavebniny České Budějovice">
          <span className="pd-mark-pro">PRO</span><span className="pd-mark-domos">DOMOS</span>
          <span className="pd-mark-sub">stavebniny · Homole</span>
        </a>
        <nav className="pd-nav-links" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#sklad">Na skladě</a>
          <a href="#pobocka">Pobočka</a>
        </nav>
      </header>

      <section className="pd-hero">
        <div className="pd-hero-media">
          <img src="/hero.webp" alt="Areál stavebnin PRODOMOS s naloženými paletami materiálu" />
          <div className="pd-hero-scrim" aria-hidden="true" />
        </div>
        <div className="pd-hero-body">
          <p className="pd-eyebrow"><span className="pd-dot" aria-hidden="true" />Homole u Českých Budějovic</p>
          <h1 className="pd-h1">
            Od základů<br />
            <span className="pd-h1-em">po hřebík</span> ve střeše.
          </h1>
          <p className="pd-lead">
            Stavebniny, kde naložíte celou stavbu na jednom dvoře — zdivo, plech na metráž,
            izolace i plot na zahradu. Poradíme, spočítáme a připravíme k odběru.
          </p>
          <div className="pd-hero-cta">
            <a className="pd-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="pd-btn pd-btn-ghost" href="#pobocka">Otevírací doba pobočky</a>
          </div>
          <dl className="pd-hours" aria-label="Otevírací doba">
            <div><dt>Po–Pá</dt><dd>7:30–16:30</dd></div>
            <div><dt>So</dt><dd>8:00–12:00</dd></div>
            <div><dt>Ne</dt><dd>Zavřeno</dd></div>
          </dl>
        </div>
      </section>

      <section className="pd-sec" id="sortiment" aria-labelledby="sortiment-h">
        <div className="pd-sec-head">
          <p className="pd-eyebrow">Sortiment</p>
          <h2 className="pd-h2" id="sortiment-h">Tři patra jedné stavby</h2>
          <p className="pd-sec-intro">
            Materiál řadíme tak, jak dům roste — od výkopu po zahradu za plotem.
            Čísla nejsou ozdoba: berte je jako pořadí, v jakém obvykle nakupujete.
          </p>
        </div>
        <div className="pd-grid">
          {rampy.map((r) => (
            <article className="pd-card" key={r.no}>
              <span className="pd-card-no" aria-hidden="true">{r.no}</span>
              <h3 className="pd-card-t">{r.titul}</h3>
              <p className="pd-card-x">{r.text}</p>
              <ul className="pd-card-list">
                {r.polozky.map((p) => (<li key={p}>{p}</li>))}
              </ul>
            </article>
          ))}
        </div>
        <figure className="pd-strip">
          <img src="/section-1.webp" alt="Regály a palety materiálu připravené k odběru na dvoře stavebnin" />
        </figure>
      </section>

      <section className="pd-sec pd-sec-alt" id="sklad" aria-labelledby="sklad-h">
        <div className="pd-split">
          <figure className="pd-split-media">
            <img src="/section-2.webp" alt="Nakládka materiálu vysokozdvižným vozíkem v areálu na Homoli" />
          </figure>
          <div className="pd-split-body">
            <p className="pd-eyebrow">Na skladě dnes</p>
            <h2 className="pd-h2" id="sklad-h">Vybráno z dvora</h2>
            <p className="pd-sec-intro">
              Průběžně srovnáváme ceny materiálu, u kterého jde cena stlačit.
              Co je „skladem“, naložíme hned; plech vždy řežeme na Vaši metráž.
            </p>
            <ul className="pd-price" aria-label="Vybraný sortiment a ceny">
              {naskladku.map((z) => (
                <li key={z.nazev}>
                  <span className="pd-price-n">{z.nazev}</span>
                  <span className="pd-price-stav">{z.stav}</span>
                  <span className="pd-price-c">{z.cena}<span className="pd-price-j"> Kč / {z.jed}</span></span>
                </li>
              ))}
            </ul>
            <p className="pd-note">Ceny jsou orientační podle aktuální nabídky. Pro velké objednávky spočítáme cenu na míru.</p>
          </div>
        </div>

        <div className="pd-trust" id="pobocka">
          <div className="pd-trust-t">
            <h3>Jeden dvůr, celá stavba</h3>
            <p>
              Nemusíte objíždět tři sklady. Odbornou radu dostanete u pultu,
              těžký materiál Vám naložíme a domluvíme dopravu až na parcelu.
            </p>
          </div>
          <ul className="pd-trust-facts">
            <li><strong>Odběr Homole</strong><span>u Českých Budějovic, hned od silnice</span></li>
            <li><strong>Plech na metráž</strong><span>řežeme přesně podle krokví</span></li>
            <li><strong>Doprava na stavbu</strong><span>domluvíme rozvoz i vykládku</span></li>
            <li><strong>Poradíme u pultu</strong><span>proškolený tým, ne jen e-shop</span></li>
          </ul>
        </div>
      </section>
    </main>
  );
}
