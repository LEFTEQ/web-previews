import type { CSSProperties } from "react";

export default function Page() {
  const kolekce = [
    {
      cislo: "01",
      nazev: "Kolekce měsíce",
      popis:
        "Každý měsíc přivážíme nový výběr obrouček. Rezervujte si je na prodejně na zkoušku — zdarma a bez závazku k nákupu.",
      detail: "Nové modely každý měsíc",
    },
    {
      cislo: "02",
      nazev: "Měření zraku zdarma",
      popis:
        "Optometrista vám změří zrak na moderním přístroji a doporučí čočky přesně podle vašich očí. Bez poplatku, po objednání termínu.",
      detail: "Objednání na konkrétní čas",
    },
    {
      cislo: "03",
      nazev: "Stylistické poradenství",
      popis:
        "Poradíme s tvarem, barvou a materiálem tak, aby obroučky seděly k vašemu obličeji i povaze. Brýle nosíte celý den — mají vám slušet.",
      detail: "Osobně na prodejně",
    },
    {
      cislo: "04",
      nazev: "Servis a čištění zdarma",
      popis:
        "Rozladěné brýle srovnáme, dotáhneme šroubky a vyčistíme ultrazvukem. Pro naše zákazníky trvale a bez poplatku.",
      detail: "Kdykoliv v otevírací době",
    },
  ];

  const zaruky = [
    {
      titulek: "Doživotní záruka na vybrané obroučky",
      text: "U vybraných modelů ručíme za obroučky po celou dobu, co je nosíte. Prasklý pant nebo ulomený stranička vyřešíme.",
    },
    {
      titulek: "Doživotní servis brýlí",
      text: "Seřízení, dotažení, výměna nosníků a čištění — o vaše brýle se staráme tak dlouho, dokud je nosíte.",
    },
    {
      titulek: "Záruka snášenlivosti multifokálních čoček",
      text: "Pokud si na multifokální čočky nezvyknete, vyměníme je nebo vrátíme peníze. Zvykání na ně necháváme na nás, ne na vás.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Doktor Optik Group, oční optika České Budějovice">
          <span className="wordmark-glyph" aria-hidden="true">
            <span className="lens" />
            <span className="bridge" />
            <span className="lens" />
          </span>
          <span className="wordmark-text">
            Doktor Optik
            <span className="wordmark-sub">oční optika — České Budějovice</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#pece">Péče o zrak</a>
          <a href="#duvera">Naše záruky</a>
          <a className="topnav-cta" href="#pece">Objednat měření</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail brýlových obrouček vystavených na prodejně oční optiky"
            className="hero-img"
          />
          <div className="hero-dioptrie" aria-hidden="true">
            <span>SPH −1,25</span>
            <span>CYL −0,50</span>
            <span>AX 180°</span>
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Rodinná oční optika v Českých Budějovicích</p>
          <h1 id="hero-nadpis">
            Zaostřeno na to,
            <br />
            jak <em>vidíte</em> i jak
            <br />
            <span className="hero-accent">vypadáte.</span>
          </h1>
          <p className="hero-lead">
            Nejširší výběr brýlí ve městě, měření zraku od optometristy a stylistické
            poradenství pod jednou střechou. Vyberte si obroučky, které vám opravdu sluší.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#pece">Objednat měření zraku</a>
            <a className="btn btn-ghost" href="#duvera">Prohlédnout záruky</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>1000+</dt>
              <dd>obrouček na prodejně</dd>
            </div>
            <div>
              <dt>Zdarma</dt>
              <dd>měření zraku i servis</dd>
            </div>
            <div>
              <dt>Nová kolekce</dt>
              <dd>každý měsíc</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sekce pece" id="pece" aria-labelledby="pece-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Co u nás vyřešíte</p>
          <h2 id="pece-nadpis">
            Celá cesta k novým brýlím<br />na jednom místě
          </h2>
          <p className="sekce-uvod">
            Od výběru obrouček přes změření zraku až po doživotní servis. Pojďme to vzít
            popořadě — přesně tak, jak to u nás na prodejně proběhne.
          </p>
        </div>

        <div className="pece-grid">
          <ol className="kroky">
            {kolekce.map((k) => (
              <li className="krok" key={k.cislo}>
                <span className="krok-cislo" aria-hidden="true">{k.cislo}</span>
                <div className="krok-obsah">
                  <h3>{k.nazev}</h3>
                  <p>{k.popis}</p>
                  <span className="krok-detail">{k.detail}</span>
                </div>
              </li>
            ))}
          </ol>
          <figure className="pece-obraz">
            <img
              src="/section-1.webp"
              alt="Vyšetření a měření zraku na prodejně oční optiky Doktor Optik"
              className="pece-img"
            />
            <figcaption>
              Měření provádí optometrista na moderním přístroji. Termín si objednáte předem,
              abyste nečekali.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="sekce duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera-inner">
          <figure className="duvera-obraz">
            <img
              src="/section-2.webp"
              alt="Zákazník zkouší brýlové obroučky před zrcadlem na prodejně"
              className="duvera-img"
            />
          </figure>
          <div className="duvera-copy">
            <p className="eyebrow">Proč nám můžete věřit</p>
            <h2 id="duvera-nadpis">Garantujeme, ne slibujeme</h2>
            <p className="sekce-uvod">
              Brýle nekupujete na měsíc, ale na roky. Proto k nim dostáváte záruky, které
              platí tak dlouho, jak dlouho je nosíte.
            </p>
            <ul className="zaruky">
              {zaruky.map((z, i) => (
                <li className="zaruka" key={i}>
                  <span className="zaruka-znak" aria-hidden="true" />
                  <div>
                    <h3>{z.titulek}</h3>
                    <p>{z.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <blockquote className="citace">
              <p>
                „Vybírali jsme brýle celé rodině. Nechali nás v klidu zkoušet, poradili s tvarem
                a zaškolili maminku na multifokály. Servis funguje, kdykoliv se zastavím.“
              </p>
              <cite>Petra H., zákaznice z Českých Budějovic</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
