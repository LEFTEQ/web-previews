import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dům u parku — catering v secesním domě | Olomouc",
  description:
    "Catering pro svatby, konference a firemní večery v historickém secesním domě na Palackého v Olomouci, s výhledem na Čechovy sady. Vlastní kuchyně, sál, servis.",
  openGraph: {
    title: "Dům u parku — catering v secesním domě v Olomouci",
    description:
      "Svatby, konference a firemní večery ve stoletém domě u Čechových sadů. Kuchyně, sál i obsluha pod jednou střechou.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

const prostory = [
  {
    cislo: "01",
    nazev: "Slavnostní sál",
    popis:
      "Sto let staré štukové stropy a parkety, do kterých se vejde svatba i galavečeře až pro 120 hostů. Zařídíme rozmístění stolů, menu i obsluhu na míru večeru.",
    kapacita: "až 120 hostů",
    hodi_se: "Svatby · galavečeře · plesy",
  },
  {
    cislo: "02",
    nazev: "Konferenční salonek",
    popis:
      "Světlá místnost s výhledem do Čechových sadů pro pracovní snídaně, školení a celodenní jednání. Coffee break i teplý oběd nosíme přímo z domácí kuchyně o patro níž.",
    kapacita: "12–40 osob",
    hodi_se: "Konference · školení · porady",
  },
  {
    cislo: "03",
    nazev: "Catering k vám",
    popis:
      "Když má akce svoje místo, přivezeme kuchyni za vámi — do kanceláře, ateliéru i pod širé nebo. Rauty, koktejly a teplá kuchyně naservírované v Olomouci a okolí.",
    kapacita: "20–300 porcí",
    hodi_se: "Rauty · firemní večírky · oslavy",
  },
];

const duvody = [
  {
    stitek: "Kuchyně v domě",
    text: "Nevozíme jídlo přes půl kraje. Vaří se přímo tady, na Palackého, takže na stůl přijde teplé a čerstvé.",
  },
  {
    stitek: "Sál i servis pohromadě",
    text: "Prostor, menu, obsluha i sklo — domluvíte se na jednom místě s jedním týmem, ne s pěti dodavateli.",
  },
  {
    stitek: "Stoletý dům u parku",
    text: "Secesní adresa u Čechových sadů dává každé akci vážnost i lehkost, kterou konferenční sál v novostavbě nenabídne.",
  },
];

export default function Page() {
  return (
    <main className="du">
      <header className="du-top">
        <a className="du-brand" href="#" aria-label="Dům u parku, domovská stránka">
          <span className="du-brand-mark" aria-hidden="true">u</span>
          <span className="du-brand-name">
            Dům <em>u&nbsp;parku</em>
          </span>
        </a>
        <nav className="du-nav" aria-label="Hlavní">
          <a href="#prostory">Prostory</a>
          <a href="#proc">Proč my</a>
          <a className="du-nav-tel" href="tel:+420602431430">602&nbsp;431&nbsp;430</a>
        </nav>
      </header>

      <section className="du-hero" aria-labelledby="hero-nadpis">
        <div className="du-hero-frame">
          <img
            className="du-hero-img"
            src="/hero.webp"
            alt="Prostřený slavnostní stůl v historickém sále domu u parku v Olomouci"
            width={1600}
            height={1200}
          />
          <span className="du-hero-tag" aria-hidden="true">Palackého 21 · Olomouc</span>
        </div>

        <div className="du-hero-text">
          <p className="du-eyebrow">Catering &amp; slavnostní prostory · od roku 1912</p>
          <h1 id="hero-nadpis">
            Prostřeno ve
            <br />
            <span className="du-hl">stoletém domě</span>
            <br />
            u&nbsp;Čechových sadů
          </h1>
          <p className="du-lead">
            Svatby, konference a firemní večery pod secesními stropy na Palackého
            v&nbsp;Olomouci. Kuchyni, sál i&nbsp;obsluhu máme pod jednou střechou —
            vy si vyberete jen datum a&nbsp;menu.
          </p>
          <div className="du-hero-cta">
            <a className="du-btn" href="tel:+420602431430">Zavolat a&nbsp;rezervovat</a>
            <a className="du-btn du-btn-ghost" href="#prostory">Prohlédnout prostory</a>
          </div>
        </div>
      </section>

      <section className="du-section" id="prostory" aria-labelledby="prostory-nadpis">
        <div className="du-section-head">
          <p className="du-eyebrow">Co u&nbsp;nás uspořádáte</p>
          <h2 id="prostory-nadpis">Tři způsoby, jak dům využít</h2>
          <p className="du-section-lead">
            Ať slavíte, jednáte nebo pořádáte večírek mimo dům — postaráme se
            o&nbsp;jídlo i&nbsp;o&nbsp;to, aby všechno klaplo.
          </p>
        </div>

        <ol className="du-cards">
          {prostory.map((p) => (
            <li className="du-card" key={p.cislo}>
              <span className="du-card-num" aria-hidden="true">{p.cislo}</span>
              <h3>{p.nazev}</h3>
              <p>{p.popis}</p>
              <dl className="du-card-meta">
                <div>
                  <dt>Kapacita</dt>
                  <dd>{p.kapacita}</dd>
                </div>
                <div>
                  <dt>Hodí se na</dt>
                  <dd>{p.hodi_se}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>

        <div className="du-strip">
          <img
            src="/section-1.webp"
            alt="Detail servírovaného pokrmu z domácí kuchyně domu u parku"
            width={1200}
            height={800}
          />
          <img
            src="/section-2.webp"
            alt="Historický interiér slavnostního sálu připravený na akci"
            width={1200}
            height={800}
          />
        </div>
      </section>

      <section className="du-section du-proc" id="proc" aria-labelledby="proc-nadpis">
        <div className="du-section-head">
          <p className="du-eyebrow">Proč právě sem</p>
          <h2 id="proc-nadpis">Adresa, která umí hostit</h2>
          <p className="du-section-lead">
            Dům u&nbsp;parku doprovází olomoucké příběhy přes sto let. Dnes v&nbsp;něm
            vaříme a&nbsp;prostíráme pro ty vaše.
          </p>
        </div>

        <div className="du-reasons">
          {duvody.map((d) => (
            <article className="du-reason" key={d.stitek}>
              <h3>{d.stitek}</h3>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <blockquote className="du-quote">
          <p>
            „O&nbsp;domu u&nbsp;parku psali i&nbsp;v&nbsp;magazínu OL4you — a&nbsp;svatební
            sezona u&nbsp;nás bývá plná až do podzimu. Ptejte se na volné termíny
            včas.“
          </p>
          <cite>Tým Dům u&nbsp;parku, Palackého 75/21, Olomouc</cite>
        </blockquote>
      </section>
    </main>
  );
}
