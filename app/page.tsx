import type { CSSProperties } from "react";

export const metadata = {
  title: "Flora Optik — oční optika v Olomouci",
  description:
    "Měření zraku, brýle na míru a kontaktní čočky ve Wolkerově ulici v Olomouci. Vyšetření u optometristů, spolupráce s očním lékařem.",
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "D",
    nazev: "Měření zraku",
    popis:
      "Optometristické vyšetření u našich odborníků. Zjistíme přesné hodnoty a vysvětlíme, co znamenají pro vaše vidění.",
  },
  {
    cislo: "O",
    nazev: "Dětské brýle",
    popis:
      "Společně vybereme obrubu, která dítěti sedne a vydrží. Poradíme s velikostí, materiálem i tím, jak si na brýle zvyknout.",
  },
  {
    cislo: "S",
    nazev: "Sportovní brýle",
    popis:
      "Rádi sportujete a máte dioptrickou vadu? Připravíme brýle, se kterými ostře uvidíte na kole, na běhu i na svahu.",
  },
  {
    cislo: "C",
    nazev: "Kontaktní čočky",
    popis:
      "Vybereme správné čočky, ukážeme aplikaci a péči o ně. Zvládnete to i doma bez obav.",
  },
  {
    cislo: "M",
    nazev: "Zpomalení dětské myopie",
    popis:
      "Krátkozrakost u dětí umíme řešit včas. Postup konzultujeme s očním lékařem a sledujeme vývoj v čase.",
  },
];

export default function Page() {
  return (
    <main className="fl-main">
      <header className="fl-topbar">
        <a className="fl-wordmark" href="#" aria-label="Flora Optik, oční optika Olomouc">
          <span className="fl-wordmark-eye" aria-hidden="true">
            <span className="fl-iris" />
          </span>
          <span className="fl-wordmark-text">
            Flora<span className="fl-wordmark-thin">Optik</span>
          </span>
        </a>
        <div className="fl-topbar-meta">
          <span className="fl-topbar-loc">Wolkerova 22, Olomouc</span>
          <a className="fl-topbar-tel" href="tel:+420725088798">
            725 088 798
          </a>
        </div>
      </header>

      <section className="fl-hero" aria-labelledby="fl-hero-title">
        <div className="fl-hero-copy">
          <p className="fl-eyebrow">Oční optika · Olomouc</p>
          <h1 id="fl-hero-title" className="fl-hero-title">
            Vidět <span className="fl-hero-em">ostře</span> začíná
            <br />
            jedním pořádným měřením.
          </h1>
          <p className="fl-hero-lede">
            Změříme vám zrak, poradíme s obrubami i čočkami a připravíme
            brýle, které opravdu sedí. Ve Wolkerově ulici vás vítá tým
            optometristů ve spolupráci s očním lékařem.
          </p>
          <div className="fl-hero-actions">
            <a className="fl-btn fl-btn-primary" href="tel:+420725088798">
              Objednat měření zraku
            </a>
            <a className="fl-btn fl-btn-ghost" href="#sluzby">
              Prohlédnout služby
            </a>
          </div>
          <dl className="fl-hours">
            <div className="fl-hours-row">
              <dt>Po–Pá</dt>
              <dd>8–17 hod</dd>
            </div>
            <div className="fl-hours-row">
              <dt>So</dt>
              <dd>individuálně</dd>
            </div>
          </dl>
        </div>
        <figure className="fl-hero-figure">
          <img
            className="fl-hero-img"
            src="/hero.webp"
            alt="Optometrista při vyšetření zraku ve Flora Optik v Olomouci"
            width={900}
            height={1100}
          />
          <figcaption className="fl-hero-lens" aria-hidden="true">
            <span className="fl-diopt">−1,25</span>
            <span className="fl-diopt-label">testovaná dioptrie</span>
          </figcaption>
        </figure>
      </section>

      <section className="fl-services" id="sluzby" aria-labelledby="fl-services-title">
        <div className="fl-section-head">
          <p className="fl-eyebrow">Co u nás vyřešíte</p>
          <h2 id="fl-services-title" className="fl-section-title">
            Pět věcí, se kterými za námi lidé chodí
          </h2>
        </div>
        <ol className="fl-cards">
          {sluzby.map((s) => (
            <li className="fl-card" key={s.nazev}>
              <span className="fl-card-glyph" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="fl-card-title">{s.nazev}</h3>
              <p className="fl-card-text">{s.popis}</p>
              <a className="fl-card-link" href="tel:+420725088798">
                Domluvit termín
                <span aria-hidden="true"> →</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="fl-trust" aria-labelledby="fl-trust-title">
        <figure className="fl-trust-figure">
          <img
            className="fl-trust-img"
            src="/section-1.webp"
            alt="Výběr brýlových obrub v prodejně Flora Optik"
            width={900}
            height={700}
            style={{ "--fl-delay": "0ms" } as CSSProperties}
          />
          <img
            className="fl-trust-img fl-trust-img-2"
            src="/section-2.webp"
            alt="Detail brýlových skel a nástrojů optika"
            width={900}
            height={700}
            style={{ "--fl-delay": "120ms" } as CSSProperties}
          />
        </figure>
        <div className="fl-trust-copy">
          <p className="fl-eyebrow">O nás</p>
          <h2 id="fl-trust-title" className="fl-section-title">
            Postará se o vás tým, který vidění bere vážně
          </h2>
          <p className="fl-trust-lede">
            Nejsme řetězec. Jsme optika ve Wolkerově ulici, kde si na vás
            uděláme čas — od měření přes výběr obruby až po servis, když
            brýlím povolí šroubek nebo nožička.
          </p>
          <ul className="fl-trust-list">
            <li>
              <strong>Spolupráce s očním lékařem.</strong> Vaše oční potíže
              nezůstanou jen u optiky — v případě potřeby je konzultujeme.
            </li>
            <li>
              <strong>Měření na moderním přístroji.</strong> Podrobné
              vyšetření, po kterém přesně víme, jaká skla vám sednou.
            </li>
            <li>
              <strong>Servis a opravy.</strong> Brýle vyčistíme, seřídíme a
              opravíme, ať vydrží co nejdéle.
            </li>
          </ul>
          <a className="fl-btn fl-btn-primary" href="tel:+420725088798">
            Zavolat 725 088 798
          </a>
        </div>
      </section>
    </main>
  );
}
