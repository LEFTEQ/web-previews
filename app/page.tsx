import type { CSSProperties } from "react";

export const metadata = {
  title: "Penzion u Bláhů — ubytování, restaurace a cukrárna kousek za Olomoucí",
  description:
    "Rodinný penzion U Bláhů v Dolanech u Olomouce, na úpatí Nízkého Jeseníku. Klidné ubytování, česká kuchyně vařená po celý den, vlastní cukrárna a prostor pro svatby i oslavy. Rezervace na +420 603 783 614.",
  openGraph: {
    title: "Penzion u Bláhů — Dolany u Olomouce",
    description:
      "Ubytování, restaurace a cukrárna vlastní výroby na úpatí Nízkého Jeseníku, 10 km z centra Olomouce.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

type Room = {
  cislo: string;
  nazev: string;
  popis: string;
};

const denniChod: Room[] = [
  {
    cislo: "od 10.00",
    nazev: "Restaurace",
    popis:
      "Kuchyně vaří po celý den — polévka, hotovky i jídla na objednávku. Svíčková, řízky, sezónní menu podle toho, co je zrovna na Hané čerstvé.",
  },
  {
    cislo: "celý den",
    nazev: "Cukrárna",
    popis:
      "Zákusky, dezerty a zmrzlinové poháry vlastní výroby. Stylové posezení pro kafe s přáteli, rodinu i klidnou obchodní schůzku.",
  },
  {
    cislo: "na klíč",
    nazev: "Svatby a oslavy",
    popis:
      "Pronájem celého penzionu pro svatbu, rodinnou oslavu nebo firemní večírek. Připravíme jídlo, prostor i program podle vás.",
  },
];

export default function Page() {
  return (
    <main className="pb">
      <header className="pb-nav" aria-label="Hlavní">
        <a className="pb-mark" href="#top" aria-label="Penzion u Bláhů — domů">
          <span className="pb-mark__u">u</span>
          <span className="pb-mark__name">Bláhů</span>
          <span className="pb-mark__sub">penzion &middot; Dolany</span>
        </a>
        <nav className="pb-nav__links">
          <a href="#nabidka">Nabídka</a>
          <a href="#o-nas">O nás</a>
          <a className="pb-nav__tel" href="tel:+420603783614">
            +420 603 783 614
          </a>
        </nav>
      </header>

      <section className="pb-hero" id="top">
        <img
          className="pb-hero__img"
          src="/hero.webp"
          alt="Penzion u Bláhů z ptačí perspektivy — budova s restaurací a zahradou tam, kde Nízký Jeseník přechází do hanácké roviny."
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="pb-hero__panel">
          <p className="pb-hero__eyebrow">Dolany u Olomouce &middot; úpatí Nízkého Jeseníku</p>
          <h1 className="pb-hero__title">
            Tam, kde hory<br />
            přechází <em>do roviny</em>,<br />
            se dobře spí i jí.
          </h1>
          <p className="pb-hero__lead">
            Rodinný penzion s restaurací a cukrárnou, 10 km z centra Olomouce.
            Přijeďte přespat, najíst se u nás po celý den nebo oslavit něco, na
            co se nezapomíná.
          </p>
          <div className="pb-hero__cta">
            <a className="pb-btn" href="tel:+420603783614">
              Zavolat a rezervovat
            </a>
            <a className="pb-btn pb-btn--ghost" href="#nabidka">
              Co u nás najdete
            </a>
          </div>
        </div>
        <p className="pb-hero__caption">Dolany 680 &middot; 783 16 Dolany</p>
      </section>

      <section className="pb-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="pb-section__head">
          <p className="pb-eyebrow">Tři důvody, proč zajet</p>
          <h2 id="nabidka-h" className="pb-h2">
            Ubytování, kuchyně a cukrárna
            <br />
            <span className="pb-h2__thin">pod jednou střechou</span>
          </h2>
        </div>

        <ul className="pb-cards">
          {denniChod.map((r) => (
            <li className="pb-card" key={r.nazev}>
              <span className="pb-card__no">{r.cislo}</span>
              <h3 className="pb-card__title">{r.nazev}</h3>
              <p className="pb-card__text">{r.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="pb-figure">
          <img
            src="/section-1.webp"
            alt="Prostřený stůl v restauraci Penzionu u Bláhů — česká kuchyně vařená čerstvě po celý den."
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption>
            Denní menu i stálá nabídka. Ubytování domluvíte osobně u personálu
            restaurace nebo na telefonu.
          </figcaption>
        </figure>
      </section>

      <section className="pb-about" id="o-nas" aria-labelledby="about-h">
        <div className="pb-about__media">
          <img
            src="/section-2.webp"
            alt="Zahrada a posezení u Penzionu u Bláhů s dětským koutkem a hřištěm, obklopené hanáckou krajinou."
            width={1400}
            height={1000}
            loading="lazy"
          />
        </div>
        <div className="pb-about__text">
          <p className="pb-eyebrow">Něco o nás</p>
          <h2 id="about-h" className="pb-h2">
            Rodinný penzion,
            <br />
            <span className="pb-h2__thin">kde je místo pro každého</span>
          </h2>
          <p className="pb-about__p">
            Najdete nás na úpatí Nízkého Jeseníku, v Dolanech u Olomouce — v
            místě, kde hory přechází do široké hanácké roviny. Kromě komfortního
            ubytování u nás celý den vaří restaurace a láká cukrárna se zákusky
            a poháry vlastní výroby.
          </p>
          <ul className="pb-facts" role="list">
            <li>
              <strong>Bezbariérově</strong>
              <span>přístup do všech prostorů penzionu</span>
            </li>
            <li>
              <strong>Pro děti</strong>
              <span>dětský koutek, hřiště s prolézačkami a houpačkami</span>
            </li>
            <li>
              <strong>Vlastní parkoviště</strong>
              <span>zaparkujete přímo u penzionu, zdarma</span>
            </li>
            <li>
              <strong>10 km z Olomouce</strong>
              <span>kousek za městem, a přesto v klidu a přírodě</span>
            </li>
          </ul>
          <div className="pb-contact">
            <a className="pb-btn" href="tel:+420603783614">
              Zavolat: +420 603 783 614
            </a>
            <a className="pb-btn pb-btn--ghost" href="mailto:penzionublahu@seznam.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="pb-address">
            Penzion u Bláhů &middot; Dolany 680, 783 16 Dolany u Olomouce
          </p>
        </div>
      </section>
    </main>
  );
}
