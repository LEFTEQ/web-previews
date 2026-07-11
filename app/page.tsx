import type { CSSProperties } from "react";

export default function Page() {
  const map: Record<string, string> = {};

  const services = [
    {
      key: "1",
      volume: "1D",
      name: "Klasika řasa na řasu",
      lead: "Na každou vaši přirozenou řasu jedna umělá — čistý, přirozený efekt.",
      detail: "Jemné prodloužení pro ženy, které chtějí probuzené oko bez toho, aby na první pohled bylo poznat, že mají něco navíc.",
      time: "120 min",
    },
    {
      key: "2",
      volume: "2D",
      name: "Objemové řasy 2D",
      lead: "Dvě tenké řasy na jednu vlastní — viditelně hustší linka.",
      detail: "Zaplní mezery, přidá hloubku. Ideální, když máte řídké řasy a chcete výsledek, který vydrží i bez řasenky.",
      time: "150 min",
    },
    {
      key: "3",
      volume: "3D",
      name: "Objemové řasy 3D",
      lead: "Tři pírka na řasu — plný, dramatický objem.",
      detail: "Pro speciální příležitost i pro každý den, když je vaším stylem výrazné oko. Ručně vázané trsy, žádné shluky.",
      time: "180 min",
    },
  ];

  return (
    <main className="eye">
      <header className="eye-nav">
        <a className="eye-mark" href="#uvod" aria-label="Absolut Beauty — úvod">
          <span className="eye-mark-line">Absolut</span>
          <span className="eye-mark-line eye-mark-thin">Beauty</span>
        </a>
        <nav className="eye-links" aria-label="Hlavní navigace">
          <a href="#rasy">Řasy</a>
          <a href="#studio">Studio</a>
          <a className="eye-cta-sm" href="tel:+420725000000">Objednat se</a>
        </nav>
      </header>

      <section className="eye-hero" id="uvod">
        <div className="eye-hero-copy">
          <p className="eye-eyebrow">Prodlužování řas · Brno-Tábor</p>
          <h1 className="eye-title">
            Vstáváte hotová.
            <br />
            <span className="eye-title-em">Řasenku</span> už
            <br />
            nepotřebujete.
          </h1>
          <p className="eye-lede">
            Ručně vázané řasy metodou řasa na řasu i objemové 2D a 3D.
            V klidném studiu na ulici Tábor, tři minuty od tramvaje,
            s parkováním přímo přede dveřmi.
          </p>
          <div className="eye-hero-actions">
            <a className="eye-btn" href="tel:+420725000000">Zavolat a objednat</a>
            <a className="eye-btn-ghost" href="#rasy">Prohlédnout objemy</a>
          </div>
        </div>
        <figure className="eye-hero-fig">
          <img
            className="eye-hero-img"
            src="/hero.webp"
            alt="Detail oka klientky s prodlouženými řasami"
            loading="eager"
          />
          <figcaption className="eye-hero-tag">
            <span className="eye-lash-arc" aria-hidden="true" />
            řasa na řasu
          </figcaption>
        </figure>
      </section>

      <section className="eye-services" id="rasy">
        <div className="eye-sec-head">
          <p className="eye-eyebrow">Tři objemy, jedna volba</p>
          <h2 className="eye-h2">Podle toho, kolik chcete vidět</h2>
          <p className="eye-sec-note">
            Číslo před D říká, kolik pírek posadíme na jednu vaši vlastní řasu.
            Čím vyšší, tím plnější a výraznější linka. Poradíme, co sedí
            k tvaru vašeho oka.
          </p>
        </div>

        <ol className="eye-grid">
          {services.map((s) => (
            <li className="eye-card" key={s.key} style={{ ["--i" as any]: s.key } as CSSProperties}>
              <span className="eye-vol" aria-hidden="true">{s.volume}</span>
              <h3 className="eye-card-name">{s.name}</h3>
              <p className="eye-card-lead">{s.lead}</p>
              <p className="eye-card-detail">{s.detail}</p>
              <p className="eye-card-time">Doba aplikace · {s.time}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="eye-studio" id="studio">
        <div className="eye-studio-grid">
          <figure className="eye-studio-figs">
            <img
              className="eye-studio-img eye-studio-img-a"
              src="/section-1.webp"
              alt="Pracoviště kosmetičky v estetickém studiu Absolut Beauty"
              loading="lazy"
            />
            <img
              className="eye-studio-img eye-studio-img-b"
              src="/section-2.webp"
              alt="Interiér studia Absolut Beauty na ulici Tábor v Brně"
              loading="lazy"
            />
          </figure>
          <div className="eye-studio-copy">
            <p className="eye-eyebrow">O studiu</p>
            <h2 className="eye-h2">Klid, ve kterém se dá zavřít oči na dvě hodiny</h2>
            <p className="eye-studio-text">
              Aplikace řas není spěch. Ležíte pohodlně, nikdo vás neruší —
              dispozice studia je záměrně oddělená od okolního provozu.
              Přijdete-li dřív, počkáte u teplého i studeného nápoje.
            </p>
            <ul className="eye-facts">
              <li>
                <span className="eye-fact-k">Kde</span>
                <span className="eye-fact-v">Tábor 48b, Brno — 3 minuty od zastávky Tábor</span>
              </li>
              <li>
                <span className="eye-fact-k">Parkování</span>
                <span className="eye-fact-v">Zdarma přímo přede dveřmi studia</span>
              </li>
              <li>
                <span className="eye-fact-k">Doplnění</span>
                <span className="eye-fact-v">Držíme plnost — přijďte na doplnění po 3 týdnech</span>
              </li>
            </ul>
            <a className="eye-btn" href="tel:+420725000000">Domluvit termín</a>
          </div>
        </div>
      </section>
    </main>
  );
}
