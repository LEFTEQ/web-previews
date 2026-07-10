import type { CSSProperties } from "react";

export default function Page() {
  const rodiny = [
    {
      cislo: "01",
      nazev: "Metrážové koberce",
      popis: "Zátěžové i bytové koberce z role. Doneseme vzorník až k vám domů, změříme místnost a spočítáme, kolik metrů opravdu potřebujete — bez zbytečného odpadu.",
      material: "Vlna · polyamid · polypropylen",
    },
    {
      cislo: "02",
      nazev: "Vinylové podlahy",
      popis: "Kliková i lepená vinylová podlaha, která snese vlhko v kuchyni i těžké židle v kanceláři. Poradíme, jestli dát click, nebo lepit na stěrku.",
      material: "Zámkový systém · lepený dílec",
    },
    {
      cislo: "03",
      nazev: "PVC a lino v metráži",
      popis: "Praktická krytina do dětského pokoje, kuchyně i chodby. Svaříme spoje za tepla, aby pod ně nezatékalo a podlaha vydržela roky.",
      material: "Šíře role 2 · 3 · 4 m",
    },
    {
      cislo: "04",
      nazev: "Kusové koberce",
      popis: "Kousek do obýváku i běhoun na chodbu. Vybíráte podle rozměru, barvy i vlasu — a odnesete si ho hned z prodejny v Komárově.",
      material: "Krátký · vysoký vlas · shaggy",
    },
  ];

  const kroky = [
    {
      cislo: "1",
      titul: "Vyberete si vzor",
      text: "V prodejně v Komárově nebo doma z našeho vzorníku. Řekneme vám na rovinu, co vydrží dětem a psovi.",
    },
    {
      cislo: "2",
      titul: "Přijedeme zaměřit",
      text: "Zdarma změříme podlahu u vás, spočítáme metry i lišty a dohodneme termín pokládky.",
    },
    {
      cislo: "3",
      titul: "Položíme a uklidíme",
      text: "Starou krytinu odvezeme, novou položíme, spoje svaříme a po sobě uklidíme. Vejdete na hotovo.",
    },
  ];

  return (
    <main className="pd">
      <a className="pd-skip" href="#nabidka">Přeskočit na nabídku</a>

      <header className="pd-top">
        <div className="pd-wordmark" aria-label="Koberce Breno">
          <span className="pd-wordmark-k">Koberce</span>
          <span className="pd-wordmark-b">BRENO</span>
        </div>
        <div className="pd-top-meta">
          <span className="pd-top-loc">Prodejna Brno&nbsp;— Komárov</span>
          <a className="pd-top-tel" href="tel:724444247">724&nbsp;444&nbsp;247</a>
        </div>
      </header>

      <section className="pd-hero" aria-labelledby="hero-nadpis">
        <div className="pd-hero-image">
          <img src="/hero.webp" alt="Detail vlasu metrážového koberce rozvinutého z role" />
        </div>
        <div className="pd-hero-body">
          <p className="pd-eyebrow">Podlahářství v Brně od role po hotovou podlahu</p>
          <h1 id="hero-nadpis" className="pd-hero-title">
            Přijedeme,
            <br />
            <span className="pd-hero-accent">zaměříme</span>
            <br />
            a&nbsp;položíme.
          </h1>
          <p className="pd-hero-lead">
            Koberce, vinyl i PVC z prodejny v&nbsp;Komárově. U&nbsp;nás si
            krytinu osaháte naživo — a&nbsp;my ji dovezeme, ustřihneme na míru
            a&nbsp;položíme, ať se do metrů nemusíte pouštět sami.
          </p>
          <div className="pd-hero-actions">
            <a className="pd-btn pd-btn-primary" href="#nabidka">Prohlédnout nabídku</a>
            <a className="pd-btn pd-btn-ghost" href="tel:724444247">Zavolat na prodejnu</a>
          </div>
          <dl className="pd-hero-facts">
            <div>
              <dt>Šíře rolí</dt>
              <dd>2 · 3 · 4 m</dd>
            </div>
            <div>
              <dt>Zaměření u vás</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne 9–19</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pd-nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="pd-sec-head">
          <p className="pd-eyebrow">Co u nás vyberete</p>
          <h2 id="nabidka-nadpis" className="pd-sec-title">
            Čtyři krytiny, jedna prodejna
          </h2>
          <p className="pd-sec-sub">
            Každou z nich máme v Komárově naskladněnou, takže si vzorník
            projedete rukou a poznáte rozdíl mezi vlnou a polyamidem dřív, než
            se rozhodnete.
          </p>
        </div>

        <ol className="pd-grid">
          {rodiny.map((r) => (
            <li className="pd-card" key={r.cislo}>
              <span className="pd-card-num">{r.cislo}</span>
              <h3 className="pd-card-title">{r.nazev}</h3>
              <p className="pd-card-text">{r.popis}</p>
              <p className="pd-card-mat">{r.material}</p>
            </li>
          ))}
        </ol>

        <figure className="pd-band">
          <img
            src="/section-1.webp"
            alt="Srovnané role koberců různých barev připravené k prodeji"
          />
          <figcaption>
            Skladem v Komárově — role rozvineme a ustřihneme přesně na vaše metry.
          </figcaption>
        </figure>
      </section>

      <section className="pd-jak" aria-labelledby="jak-nadpis">
        <div className="pd-jak-media">
          <img
            src="/section-2.webp"
            alt="Podlahář pokládá novou krytinu v prosvětlené místnosti"
          />
        </div>
        <div className="pd-jak-body">
          <p className="pd-eyebrow">Jak to u nás chodí</p>
          <h2 id="jak-nadpis" className="pd-sec-title">
            Od vzorníku po hotovou podlahu
          </h2>
          <ol className="pd-steps">
            {kroky.map((k) => (
              <li className="pd-step" key={k.cislo}>
                <span className="pd-step-num">{k.cislo}</span>
                <div>
                  <h3 className="pd-step-title">{k.titul}</h3>
                  <p className="pd-step-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <blockquote className="pd-quote">
            <p>
              „Po objednávce se mi ozval pán, jestli je vše v pořádku a jestli
              jsem na něco nezapomněla.“
            </p>
            <cite>Ověřená zákaznice</cite>
          </blockquote>

          <address className="pd-adresa">
            <strong>Prodejna Brno — Komárov</strong>
            Hněvkovského 83/A, 617&nbsp;00 Brno · naproti OBI
            <br />
            <a href="tel:724444247">724&nbsp;444&nbsp;247</a>
            <span aria-hidden="true"> · </span>
            <a href="mailto:javor@breno.cz">javor@breno.cz</a>
          </address>
        </div>
      </section>
    </main>
  );
}
