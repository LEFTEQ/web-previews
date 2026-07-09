import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bazénářství s.r.o. — stavba bazénů na klíč, Praha 4",
  description:
    "Stavíme betonové a fóliové bazény na klíč v Praze a Středočeském kraji. Od výkopu přes filtraci a úpravu vody až po první koupání. Prodejna Libušská 255, Praha 4.",
  openGraph: {
    title: "Bazénářství s.r.o. — stavba bazénů na klíč",
    description:
      "Od výkopu po první koupání. Betonové i fóliové bazény, filtrace, slaná voda a servis. Praha 4, Libušská 255.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const faze = [
  {
    hloubka: "−1,50 m",
    nazev: "Výkop a založení",
    text: "Zaměříme pozadí, vytyčíme jámu a odvezeme výkopek. Připravíme štěrkové lože a betonovou desku, na které bazén bude stát i za dvacet let.",
  },
  {
    hloubka: "−1,00 m",
    nazev: "Skelet a izolace",
    text: "Vyzdíme nebo vylijeme skelet, provedeme prostupy pro trysky, sání a světlo. Hydroizolace a obklad fólií nebo keramikou — podle toho, co k zahradě sedne.",
  },
  {
    hloubka: "−0,30 m",
    nazev: "Technologie a rozvody",
    text: "Pískový nebo skleněný filtr, samonasávací čerpadlo, tepelné čerpadlo s COP až 1:16 a rozvaděč. Vše schované v technické šachtě na dosah ruky.",
  },
  {
    hloubka: "±0,00 m",
    nazev: "Napuštění a předání",
    text: "Napustíme, vyladíme pH a dezinfekci — chlorem, nebo slanou vodou přes elektrolýzu. Naučíme vás vysavač i chemii a předáme dokumentaci.",
  },
];

const nabidka = [
  {
    tag: "Stavba na klíč",
    titul: "Betonový bazén",
    popis:
      "Libovolný tvar i rozměr, pevná konstrukce na desítky let. Obklad fólií nebo keramikou, přelivová i skimmerová hrana.",
  },
  {
    tag: "Rychlejší montáž",
    titul: "Fóliový bazén",
    popis:
      "Ocelová nebo polypropylenová vana s fólií. Nižší cena, kratší stavba, stejná péče o detail a těsnost prostupů.",
  },
  {
    tag: "Voda bez chloru",
    titul: "Slaná voda a úprava",
    popis:
      "Elektrolýza mořské soli Margharita, minerální lázně s magnéziem z Mrtvého moře. Šetrné k pokožce i k očím.",
  },
  {
    tag: "Údržba a servis",
    titul: "Roboti a filtrace",
    popis:
      "Bateriové vysavače Zodiac a Fairland, pískové i skleněné filtry, zeolit. Nachystáme vám bazén na sezonu i na zimu.",
  },
];

export default function Page() {
  return (
    <main className="bz">
      <header className="bz-top">
        <a className="bz-logo" href="#" aria-label="Bazénářství s.r.o., úvod">
          <span className="bz-logo-wave" aria-hidden="true">
            <svg viewBox="0 0 44 20" width="44" height="20" focusable="false">
              <path d="M2 12c4-6 8-6 12 0s8 6 12 0 8-6 12 0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="bz-logo-word">Bazénářství<span className="bz-logo-sro">s.r.o.</span></span>
        </a>
        <a className="bz-top-tel" href="tel:+420241000255">Zavolat 241 000 255</a>
      </header>

      <section className="bz-hero" aria-labelledby="bz-hero-nadpis">
        <div className="bz-hero-media">
          <img
            src="/hero.webp"
            alt="Hotový zahradní bazén s modrou vodou postavený firmou Bazénářství s.r.o."
            className="bz-hero-img"
            width={1600}
            height={1000}
          />
          <span className="bz-hero-scrim" aria-hidden="true" />
        </div>
        <div className="bz-hero-inner">
          <p className="bz-eyebrow">Praha 4 · Libušská 255 · od roku 1998</p>
          <h1 id="bz-hero-nadpis" className="bz-hero-nadpis">
            Od výkopu<br />po první<br />
            <span className="bz-hero-hl">koupání.</span>
          </h1>
          <p className="bz-hero-lead">
            Stavíme betonové i fóliové bazény na klíč. Vyměříme zahradu,
            vykopeme jámu, zapojíme filtraci a předáme vám vodu, do které
            se dá hned skočit.
          </p>
          <div className="bz-hero-cta">
            <a className="bz-btn bz-btn-solid" href="tel:+420241000255">Zavolat 241 000 255</a>
            <a className="bz-btn bz-btn-ghost" href="mailto:stavba@bazenarstvi.cz">Napsat e-mail</a>
          </div>
        </div>
        <div className="bz-hero-gauge" aria-hidden="true">
          <span>0,0 m</span>
          <span>1,5 m</span>
          <span>2,0 m</span>
        </div>
      </section>

      <section className="bz-faze" aria-labelledby="bz-faze-nadpis">
        <div className="bz-sec-head">
          <p className="bz-eyebrow bz-eyebrow-dark">Jak stavba probíhá</p>
          <h2 id="bz-faze-nadpis" className="bz-sec-nadpis">
            Čtyři metry ke zdolání
          </h2>
          <p className="bz-sec-lead">
            Bazén se rodí odspoda nahoru. Každá fáze má svou hloubku —
            a my ji zvládneme za vás, ať máte na klíč, nebo si chcete
            část zahrady připravit sami.
          </p>
        </div>
        <ol className="bz-hloubky">
          {faze.map((f, i) => (
            <li className="bz-hloubka" key={f.nazev}>
              <div className="bz-hloubka-metr">
                <span className="bz-hloubka-cislo">{f.hloubka}</span>
                <span className="bz-hloubka-poradi">Fáze {i + 1}</span>
              </div>
              <div className="bz-hloubka-text">
                <h3 className="bz-hloubka-nazev">{f.nazev}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="bz-faze-foto">
          <img
            src="/section-1.webp"
            alt="Rozestavěný bazén s betonovým skeletem a rozvody technologie během stavby"
            width={1400}
            height={900}
          />
          <figcaption>Stavba v Praze-Písnici — skelet a prostupy před obkladem.</figcaption>
        </figure>
      </section>

      <section className="bz-nabidka" aria-labelledby="bz-nabidka-nadpis">
        <div className="bz-nabidka-grid">
          <div className="bz-nabidka-uvod">
            <p className="bz-eyebrow">Co pro vás uděláme</p>
            <h2 id="bz-nabidka-nadpis" className="bz-sec-nadpis bz-sec-nadpis-light">
              Bazén, filtrace i chemie z jedněch rukou
            </h2>
            <p className="bz-sec-lead bz-sec-lead-light">
              Nejsme e-shop, který vám pošle krabici. Přijedeme na zahradu,
              poradíme, postavíme a pak se o bazén staráme dál. Na prodejně
              na Libušské si osaháte vysavače, sůl i tepelná čerpadla.
            </p>
            <img
              src="/section-2.webp"
              alt="Bazénová technologie — čerpadlo, filtr a úprava vody připravené k zapojení"
              className="bz-nabidka-foto"
              width={1200}
              height={800}
            />
          </div>
          <ul className="bz-karty">
            {nabidka.map((n) => (
              <li className="bz-karta" key={n.titul}>
                <span className="bz-karta-tag">{n.tag}</span>
                <h3 className="bz-karta-titul">{n.titul}</h3>
                <p className="bz-karta-popis">{n.popis}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bz-duvera">
          <div className="bz-duvera-cislo">
            <strong>27</strong>
            <span>let stavíme bazény v Praze a okolí</span>
          </div>
          <blockquote className="bz-cit">
            „Slíbili konec června, v půlce června jsme plavali. Voda je
            slaná, žádný chlor v očích — přesně jak jsme chtěli.“
            <cite>— rodina Markových, Zbraslav</cite>
          </blockquote>
          <div className="bz-duvera-kde">
            <p><strong>Prodejna a výdej</strong></p>
            <p>Libušská 1001/255, 142 00 Praha 4</p>
            <p>Po–Pá 8–17, So 9–12</p>
            <a className="bz-btn bz-btn-solid bz-btn-sm" href="tel:+420241000255">Zavolat 241 000 255</a>
          </div>
        </div>
      </section>
    </main>
  );
}
