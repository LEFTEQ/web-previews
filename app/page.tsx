import type { CSSProperties } from "react";

export default function Page() {
  const nabidka = [
    {
      cislo: "01",
      nazev: "Hotová teplá jídla",
      popis:
        "Poctivá česká klasika i minutky, uvařené ráno a rozvezené v jednoporcovém balení. Objednávka od tří kusů.",
      detail: "Svíčková · guláš · pečené koleno · kuřecí na tisíc způsobů",
    },
    {
      cislo: "02",
      nazev: "Do várnice a termoportu",
      popis:
        "Pro kanceláře a provozy, kde se vydává na místě. Přivezeme v termoportu nebo várnici, teplé až do oběda.",
      detail: "Ideální pro firemní jídelny bez vlastní kuchyně",
    },
    {
      cislo: "03",
      nazev: "Na akce a oslavy",
      popis:
        "Tábory, svatby, rodinné sešlosti. Uvaříme kotel guláše, polévku, řízečky i bramborový salát pro celou partu.",
      detail: "Domluvíme množství i termín podle vás",
    },
    {
      cislo: "04",
      nazev: "Studená kuchyně",
      popis:
        "Chlebíčky, obložené mísy, bagety a saláty. K obědu, na poradu i k svátku, čerstvě nachystané.",
      detail: "Houskové a bramborové knedlíky i celé, po objednání",
    },
  ];

  const duvera = [
    { velke: "1993", label: "vaříme a rozvážíme bez přerušení" },
    { velke: "8:00", label: "dokdy si objednávku ještě změníte" },
    { velke: "od 3 ks", label: "nejmenší rozvoz do firem i domů" },
  ];

  return (
    <main className="h">
      <header className="h-top">
        <a className="h-mark" href="#" aria-label="Hovorková a spol. — rozvoz jídel Ústí nad Labem">
          <span className="h-mark-name">Hovorková</span>
          <span className="h-mark-sub">a&nbsp;spol. · rozvoz jídel · Ústí n.&nbsp;L.</span>
        </a>
        <nav className="h-nav" aria-label="Hlavní">
          <a href="#nabidka">Co vozíme</a>
          <a href="#duvera">O nás</a>
          <a className="h-nav-cta" href="#objednat">Objednat oběd</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-plate">
          <img
            src="/hero.webp"
            alt="Talíř čerstvě uvařeného oběda z kuchyně Hovorková a spol."
            className="hero-img"
            width={1200}
            height={1200}
          />
          <span className="hero-stamp" aria-hidden="true">
            <span>uvařeno</span>
            <span>dnes ráno</span>
          </span>
        </div>

        <div className="hero-text">
          <p className="hero-eyebrow">Rodinná kuchyně · Ústí nad&nbsp;Labem · od&nbsp;roku 1993</p>
          <h1 id="hero-nadpis" className="hero-nadpis">
            Teplý oběd,
            <br />
            uvařený <em>ráno</em>,
            <br />
            u&nbsp;vás k&nbsp;poledni.
          </h1>
          <p className="hero-lead">
            Rozvážíme čerstvá česká jídla po Ústí nad Labem do firem i domácností.
            Vaříme každý den nanovo — žádné včerejší ohřívání, žádné mražené kastroly.
          </p>
          <div className="hero-akce">
            <a className="btn btn-plna" href="#objednat">
              Objednat na dnešek
            </a>
            <a className="btn btn-lehka" href="#nabidka">
              Prohlédnout jídelníček
            </a>
          </div>
          <p className="hero-pozn">
            Objednávku měníte do&nbsp;<strong>8:00</strong> aktuálního dne. Bereme všechny stravenky.
          </p>
        </div>
      </section>

      <section className="sekce nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Co vám přivezeme</p>
          <h2 id="nabidka-nadpis" className="sekce-nadpis">
            Od jednoho obědu po kotel guláše.
          </h2>
        </div>

        <ol className="menu-list">
          {nabidka.map((p) => (
            <li key={p.cislo} className="menu-radek">
              <span className="menu-cislo" aria-hidden="true">
                {p.cislo}
              </span>
              <div className="menu-obsah">
                <h3 className="menu-nazev">{p.nazev}</h3>
                <p className="menu-popis">{p.popis}</p>
                <p className="menu-detail">{p.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="nabidka-foto">
          <img
            src="/section-1.webp"
            alt="Nachystaná jídla připravená k rozvozu po Ústí nad Labem"
            width={1200}
            height={800}
          />
          <figcaption>Denní várka nachystaná k rozvozu — obědy jedou ještě horké.</figcaption>
        </figure>
      </section>

      <section className="sekce duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <figure className="duvera-foto">
          <img
            src="/section-2.webp"
            alt="Kuchyně firmy Hovorková a spol. při přípravě denního menu"
            width={1200}
            height={900}
          />
        </figure>

        <div className="duvera-text">
          <p className="eyebrow">Kdo vám vaří</p>
          <h2 id="duvera-nadpis" className="sekce-nadpis">
            Rodinná firma, která zná svoje strávníky jménem.
          </h2>
          <p className="duvera-lead">
            Hovorková a&nbsp;spol. vaří v&nbsp;Ústí nad Labem od&nbsp;roku 1993. Za tu dobu jsme
            nakrmili spoustu kanceláří, dílen i&nbsp;domácností. Jídlo je vždy z&nbsp;aktuálního dne —
            tradiční česká kuchyně, cizokrajná jídla i&nbsp;minutkové speciality.
          </p>

          <dl className="cisla">
            {duvera.map((d) => (
              <div className="cislo-blok" key={d.velke}>
                <dt>{d.velke}</dt>
                <dd>{d.label}</dd>
              </div>
            ))}
          </dl>

          <div className="platba" id="objednat">
            <h3 className="platba-nadpis">Jak se objednává a platí</h3>
            <p>
              Ve svém strávnickém kontě si obědy spravujete sami. Přijímáme
              všechny druhy stravovacích poukázek. Platit můžete převodem na účet
              <strong> 2701298726/2010</strong> — jako variabilní symbol uveďte číslo
              z&nbsp;přihlašovacího jména strávníka.
            </p>
            <a className="btn btn-plna" href="#objednat">
              Založit strávnické konto
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
