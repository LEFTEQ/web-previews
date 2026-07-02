// Aplica s. r. o. — rodinné pekařství, Ústí nad Labem (od 1991)
// Náhledový redesign: hero + Dobroty + Prodejny/důvěra. Bez patičky (doplní studio).

export const metadata = {
  title: "Aplica pekařství — rodinné pekařství z Ústí nad Labem od roku 1991",
  description:
    "Rodinné pekařství Aplica z Ústí nad Labem peče od roku 1991. Podmáslový chléb, Andělčiny šátečky a koláčky, čerstvé fresh pečivo. 6 prodejen v Severních Čechách — Ústí, Teplice, Louny, Roudnice, Otvice.",
  openGraph: {
    title: "Aplica pekařství — Ústí nad Labem, od roku 1991",
    description:
      "Podmáslový chléb, Andělčiny šátečky a koláčky, čerstvé fresh pečivo. 6 prodejen v Severních Čechách.",
    locale: "cs_CZ",
    type: "website",
  },
};

const dobroty = [
  {
    tag: "Chléb dne",
    name: "Podmáslový chléb",
    desc: "Pšenično-žitný chléb na podmáslí — naše vlajková loď. Hutná střída, křupavá kůrka, vydrží čerstvý i třetí den.",
    note: "pečeme každý den",
  },
  {
    tag: "Andělčina řada",
    name: "Šátečky a koláčky",
    desc: "Naše specialita podle rodinné receptury. Tvarohové, makové a povidlové — malé, poctivé, z másla.",
    note: "jen u nás",
  },
  {
    tag: "Běžné pečivo",
    name: "Staročeské housky a rohlíky",
    desc: "K tomu veky, bagety a vícezrnné, žitné i pšenično-žitné chleby. Klasika, jak má být.",
    note: "od rána čerstvé",
  },
  {
    tag: "Fresh z prodejny",
    name: "Chlebíčky, bagety, saláty",
    desc: "Připravujeme přímo na prodejnách: chlebíček s vajíčkem a šunkou, dřevorubecká bageta, rohlík s anglickou slaninou.",
    note: "děláno na místě",
  },
  {
    tag: "Sladké",
    name: "Třené koláče a koblihy",
    desc: "Sladké a čajové pečivo ke kávě. Dortíky a zákusky si u nás dáte i s čerstvou kávou nebo čajem.",
    note: "i s kávičkou",
  },
];

const prodejny = [
  {
    city: "Ústí nad Labem",
    place: "OC Fórum",
    addr: "Bílinská 3490/6, 400 01 Ústí nad Labem",
    tel: "+420 603 321 099",
    telHref: "+420603321099",
    hours: "Po–Ne 8:00–20:00",
  },
  {
    city: "Teplice",
    place: "OC Galerie",
    addr: "nám. Svobody 3316, 415 01 Teplice",
    tel: "+420 733 735 199",
    telHref: "+420733735199",
    hours: "Po–Ne 8:00–20:00",
  },
  {
    city: "Teplice",
    place: "OC Olympia",
    addr: "Srbická 464, 415 01 Teplice",
    tel: "+420 734 461 762",
    telHref: "+420734461762",
    hours: "Po–Ne 8:00–20:00",
  },
  {
    city: "Louny",
    place: "Kaufland",
    addr: "Václava Majera 2898, 440 01 Louny",
    tel: "+420 730 515 275",
    telHref: "+420730515275",
    hours: "Po–Ne 7:00–20:00",
  },
  {
    city: "Roudnice n. L.",
    place: "Kaufland",
    addr: "Alej 17. listopadu, Roudnice nad Labem",
    tel: "+420 733 714 315",
    telHref: "+420733714315",
    hours: "Po–Ne 7:00–20:00",
  },
  {
    city: "Otvice",
    place: "Kaufland",
    addr: "Obchodní zóna 260, 431 11 Chomutov–Otvice",
    tel: "+420 730 515 280",
    telHref: "+420730515280",
    hours: "Po–Ne 8:00–20:00",
  },
];

/* Signature prvek: „nářez“ — rytmus šikmých zářezů jako na kůrce chleba,
   který se opakuje v hero, oddělovačích i markerech položek. */
function Skore({ n = 3 }: { n?: number }) {
  return (
    <span className="skore" aria-hidden="true">
      {Array.from({ length: n }).map((_, i) => (
        <i key={i} />
      ))}
    </span>
  );
}

export default function Page() {
  return (
    <main className="apl">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            APLICA<i className="wordmark-dot" aria-hidden="true" />
          </span>
          <span className="hero-since">pekařství · zal. 1991</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            Rodinné pekařství · Ústí nad Labem
          </p>
          <h1 className="hero-title">
            <span className="line line-1">Chléb se u nás</span>
            <span className="line line-2">
              nařezává<Skore n={4} />
            </span>
            <span className="line line-3">už od roku 1991.</span>
          </h1>
          <p className="hero-sub">
            Podmáslový chléb, Andělčiny šátečky a čerstvé pečivo z vlastní pece.
            Pečeme každou noc, prodáváme na šesti místech v Severních Čechách.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#prodejny">
              Kde nakoupíte
            </a>
            <a className="btn btn-line" href="tel:+420472770689">
              Zavolat pekárně
            </a>
          </div>
        </div>

        {/* Kůrka: spodní pruh hero se signature zářezy */}
        <div className="hero-crust" aria-hidden="true">
          <div className="crust-cuts">
            {Array.from({ length: 9 }).map((_, i) => (
              <i key={i} style={{ animationDelay: `${0.55 + i * 0.07}s` }} />
            ))}
          </div>
          <div className="crust-ticker">
            <span>podmáslový chléb</span>
            <span>·</span>
            <span>Andělčiny šátečky</span>
            <span>·</span>
            <span>staročeské housky</span>
            <span>·</span>
            <span>třené koláče</span>
            <span>·</span>
            <span>fresh z prodejny</span>
          </div>
        </div>
      </header>

      {/* ================= DOBROTY ================= */}
      <section className="dobroty" id="dobroty" aria-labelledby="dobroty-h">
        <div className="section-head">
          <Skore n={3} />
          <h2 id="dobroty-h">Co dnes vytáhneme z pece</h2>
          <p>
            Všechno pečeme sami — v noci v pekárně, fresh výrobky ráno přímo na
            prodejnách. Žádné rozmrazování.
          </p>
        </div>

        <ul className="dobroty-list">
          {dobroty.map((d) => (
            <li key={d.name} className="dobrota">
              <div className="dobrota-tag">
                <Skore n={2} />
                {d.tag}
              </div>
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
              <span className="dobrota-note">{d.note}</span>
            </li>
          ))}
          <li className="dobrota dobrota-cta">
            <h3>Nevíte, co vybrat?</h3>
            <p>
              Zeptejte se na prodejně — poradíme, co je dnes nejčerstvější, a
              chléb vám rádi nakrájíme.
            </p>
            <a className="btn btn-solid btn-small" href="#prodejny">
              Najít prodejnu
            </a>
          </li>
        </ul>
      </section>

      {/* ================= PRODEJNY / DŮVĚRA ================= */}
      <section className="prodejny" id="prodejny" aria-labelledby="prodejny-h">
        <div className="section-head section-head-light">
          <Skore n={3} />
          <h2 id="prodejny-h">Šest prodejen, jedna pekárna</h2>
          <p>
            Rodinná firma ze Severních Čech. Od roku 1991 pečeme pořád ve
            stejném kraji — a všude nás najdete sedm dní v týdnu.
          </p>
        </div>

        <ul className="prodejny-list">
          {prodejny.map((p) => (
            <li key={p.place + p.city} className="prodejna">
              <div className="prodejna-city">{p.city}</div>
              <h3>{p.place}</h3>
              <p className="prodejna-addr">{p.addr}</p>
              <p className="prodejna-hours">{p.hours}</p>
              <a className="prodejna-tel" href={`tel:${p.telHref}`}>
                {p.tel}
              </a>
            </li>
          ))}
        </ul>

        <div className="kancelar">
          <div className="kancelar-text">
            <h3>Pekárna a kancelář</h3>
            <p>
              Objednávky pro školy, firmy a oslavy domluvíte přímo s pekárnou.
              Ozveme se do druhého dne.
            </p>
          </div>
          <div className="kancelar-links">
            <a className="btn btn-line-dark" href="tel:+420472770689">
              +420 472 770 689
            </a>
            <a
              className="btn btn-line-dark"
              href="mailto:aplica.kancelar@seznam.cz"
            >
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
