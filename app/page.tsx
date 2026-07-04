import type { CSSProperties } from "react";

export default function Page() {
  const products = [
    {
      code: "01",
      name: "Markýzy",
      lead: "Kloubová ramena, výsuvná plátna",
      body: "Zastíníme terasu, balkon i výlohu. Plátno se vysune, když pálí slunce, a schová se, když ne. Nabízíme kazetové i polokazetové provedení odolné libereckému větru i deštivým podvečerům.",
      img: "/section-1.webp",
      alt: "Vysunutá markýza stínící terasu za slunečného dne"
    },
    {
      code: "02",
      name: "Předokenní rolety",
      lead: "Hliníkové lamely, zatemnění na míru",
      body: "Ráno je nechte spuštěné a spěte dál, večer stáhněte a máte klid od pohledů z ulice. Rolety zvládají žár, chlad i hluk — a domu přidají tvar, který dřív neměl.",
      img: "/section-2.webp",
      alt: "Předokenní hliníkové rolety s vodorovnými lamelami"
    },
    {
      code: "03",
      name: "Garážová vrata",
      lead: "Sekční i rolovací provedení",
      body: "Vjedete, zmáčknete a je zavřeno. Sekční vrata šetří místo pod stropem, rolovací se schovají do nadpraží. Zvolíte barvu, my zaměříme, vyrobíme a namontujeme.",
      img: null,
      alt: ""
    }
  ];

  const promise = [
    { k: "Zaměření", v: "Přijedeme k vám, změříme okno i terasu na milimetr a poradíme, co dává smysl." },
    { k: "Výroba", v: "Rolety, markýzy i vrata vyrábíme na míru — žádné univerzální rozměry ze skladu." },
    { k: "Montáž", v: "Namontují ji proškolení lidé s mnohaletou praxí. Po nás zůstane jen čisto." },
    { k: "Servis", v: "Záruční i pozáruční servis. Když plátno povolí za pět let, zvednete telefon." }
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="TOMI ROLL — stínící technika Liberec">
          <span className="wordmark__tomi">TOMI</span>
          <span className="wordmark__roll" aria-hidden="true">
            <span className="slat" />
            <span className="slat" />
            <span className="slat" />
            ROLL
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#duvera">O nás</a>
          <a className="topnav__call" href="tel:+420604300500">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__frame">
          <img className="hero__img" src="/hero.webp" alt="Vysunutá markýza stínící terasu rodinného domu" />
          <div className="hero__shade" aria-hidden="true" />
        </div>
        <div className="hero__copy">
          <p className="eyebrow">Stínící technika · Liberec</p>
          <h1 id="hero-title" className="hero__title">
            Vysuneme<br />stín přesně<br />tam, kde pálí.
          </h1>
          <p className="hero__sub">
            Markýzy, předokenní rolety a garážová vrata na míru. Zaměříme, vyrobíme a namontujeme — a slunce si od té chvíle pustíte dovnitř jen tehdy, když ho chcete.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420604300500">Zavolat 604 300 500</a>
            <a className="btn btn--ghost" href="#nabidka">Prohlédnout nabídku</a>
          </div>
        </div>
      </section>

      <section id="nabidka" className="nabidka" aria-labelledby="nabidka-title">
        <div className="section-head">
          <p className="eyebrow">Co pro vás vyrobíme</p>
          <h2 id="nabidka-title" className="section-title">Tři věci, které schovají slunce</h2>
        </div>
        <ul className="cards">
          {products.map((p) => (
            <li key={p.code} className="card">
              {p.img ? (
                <div className="card__media">
                  <img src={p.img} alt={p.alt} loading="lazy" />
                </div>
              ) : (
                <div className="card__media card__media--plain" aria-hidden="true">
                  <span className="card__glyph">{p.code}</span>
                </div>
              )}
              <div className="card__text">
                <span className="card__code">{p.code}</span>
                <h3 className="card__name">{p.name}</h3>
                <p className="card__lead">{p.lead}</p>
                <p className="card__body">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="duvera" className="duvera" aria-labelledby="duvera-title">
        <div className="duvera__intro">
          <p className="eyebrow">Proč zrovna my</p>
          <h2 id="duvera-title" className="section-title">Od zaměření po servis to zůstane v jedněch rukou</h2>
          <p className="duvera__lead">
            TOMI ROLL děláme stínicí techniku v Liberci a okolí už řadu let. Nejsme překupník katalogů — měříme, vyrábíme a montujeme sami, takže víme, proč markýza drží a proč roleta tiše dojede až dolů.
          </p>
        </div>
        <ol className="steps">
          {promise.map((s, i) => (
            <li key={s.k} className="step">
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="step__k">{s.k}</h3>
                <p className="step__v">{s.v}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
