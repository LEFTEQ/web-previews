import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SANCO FASÁDY — zateplení a fasády v Olomouci",
  description:
    "Prodej a realizace zateplených fasád v Olomouci. Silikátové omítky KEIM, materiály VISCO a Baumit, tónování na počkání, čištění fasád a odstranění graffiti.",
  openGraph: {
    title: "SANCO FASÁDY — zateplení a fasády v Olomouci",
    description:
      "Zateplené fasády, silikátové omítky KEIM a tónování na počkání. Řemeslo z Chválkovic pro celou Olomouc.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const vrstvy = [
  {
    c: "01",
    nazev: "Lepicí stěrka",
    popis: "Nános na očištěnou stěnu — základ, který drží celý systém.",
  },
  {
    c: "02",
    nazev: "Izolant",
    popis: "Fasádní polystyren nebo minerální vata, kotvené a rovné do milimetru.",
  },
  {
    c: "03",
    nazev: "Výztužná vrstva",
    popis: "Stěrka s perlinkou — armování, které fasádu nepustí prasknout.",
  },
  {
    c: "04",
    nazev: "Penetrace + omítka",
    popis: "Silikátová omítka KEIM v odstínu, který si natónujeme sami.",
  },
];

const sluzby = [
  {
    nazev: "Zateplení fasád na klíč",
    popis:
      "Od zaměření po hotovou omítku. Certifikované ETICS systémy, poradenství s podkladem a výběrem odstínu.",
  },
  {
    nazev: "Tónování na počkání",
    popis:
      "Barvu i omítku natónujeme přímo u nás — přijedete s představou, odjedete s kýblem ve správném odstínu.",
  },
  {
    nazev: "Čištění fasád a střech",
    popis:
      "Odstranění řas, mechů a biologického napadení. Ochrana povrchu, aby se špína tak rychle nevracela.",
  },
  {
    nazev: "Odstranění graffiti",
    popis:
      "Profesionální přípravky a preventivní antigraffiti nátěry. Fasáda zpět bez stínů po sprejích.",
  },
  {
    nazev: "Prodej stavebního materiálu",
    popis:
      "Suché maltové směsi, lepidla, penetrace i drobná stavební chemie — pro řemeslníky i kutily.",
  },
  {
    nazev: "Sanace památek",
    popis:
      "Materiály TUBAG a KEIM pro citlivé opravy historických fasád, kde běžná omítka nestačí.",
  },
];

const znacky = ["KEIM", "VISCO", "Baumit", "quick-mix", "PROFI", "TUBAG"];

export default function Page() {
  return (
    <main className="sf">
      <header className="sf-top">
        <a className="sf-mark" href="#" aria-label="SANCO Fasády, úvod">
          <span className="sf-mark-sanco">SANCO</span>
          <span className="sf-mark-fasady">FASÁDY</span>
        </a>
        <span className="sf-locality">Olomouc · Chválkovice</span>
      </header>

      <section className="sf-hero" aria-labelledby="sf-hero-title">
        <div className="sf-hero-media">
          <img
            src="/hero.webp"
            alt="Zateplená fasáda rodinného domu s hladkou silikátovou omítkou realizovaná firmou SANCO"
            className="sf-hero-img"
          />
        </div>
        <div className="sf-hero-copy">
          <p className="sf-eyebrow">Zateplené fasády · od roku po roce</p>
          <h1 id="sf-hero-title">
            Držíme dům v teple<br />
            <em>a v barvě, kterou si vyberete.</em>
          </h1>
          <p className="sf-lede">
            Skládáme fasády vrstvu po vrstvě — od stěrky po silikátovou omítku
            KEIM. Zateplíme, natónujeme na počkání a fasádu i uklidíme od řas a
            graffiti. Celá Olomouc a okolí.
          </p>
          <div className="sf-hero-actions">
            <a className="sf-btn sf-btn-primary" href="tel:+420602717223">
              Zavolat 602&nbsp;717&nbsp;223
            </a>
            <a className="sf-btn sf-btn-ghost" href="mailto:info@sancofasady.cz">
              Napsat e-mail
            </a>
          </div>
          <p className="sf-hours">Po–Pá 7.30–16.00 · Na Zákopě 524, Olomouc</p>
        </div>
      </section>

      <section className="sf-layers" aria-labelledby="sf-layers-title">
        <div className="sf-section-head">
          <p className="sf-eyebrow">Jak vzniká zateplená fasáda</p>
          <h2 id="sf-layers-title">Čtyři vrstvy mezi vámi a zimou</h2>
        </div>
        <ol className="sf-stack">
          {vrstvy.map((v) => (
            <li className="sf-stack-row" key={v.c}>
              <span className="sf-stack-num" aria-hidden="true">
                {v.c}
              </span>
              <div className="sf-stack-body">
                <h3>{v.nazev}</h3>
                <p>{v.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sf-services" aria-labelledby="sf-services-title">
        <div className="sf-services-media">
          <img
            src="/section-1.webp"
            alt="Detail nanášení silikátové omítky na zateplenou fasádu"
            className="sf-media-img"
          />
        </div>
        <div className="sf-services-copy">
          <div className="sf-section-head">
            <p className="sf-eyebrow">Co pro vás uděláme</p>
            <h2 id="sf-services-title">Celá fasáda z jedněch rukou</h2>
          </div>
          <ul className="sf-service-list">
            {sluzby.map((s) => (
              <li className="sf-service" key={s.nazev}>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sf-trust" aria-labelledby="sf-trust-title">
        <div className="sf-trust-copy">
          <p className="sf-eyebrow">O nás</p>
          <h2 id="sf-trust-title">
            Materiál, který známe po značkách — a víme, kdy který sáhnout.
          </h2>
          <p className="sf-trust-text">
            SANCO má v Olomouci dlouholetou tradici jako dodavatel stavebních
            hmot. Nepracujeme s náhodným materiálem z akce — spolupracujeme jen
            s renomovanými výrobci a jejich systémy aplikujeme přesně tak, jak
            mají držet. Poradíme s podkladem, spočítáme spotřebu a odstín
            natónujeme rovnou u nás.
          </p>
          <ul className="sf-brands" aria-label="Značky, se kterými pracujeme">
            {znacky.map((z) => (
              <li className="sf-brand" key={z}>
                {z}
              </li>
            ))}
          </ul>
          <dl className="sf-contact">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Na Zákopě 524, Olomouc-Chválkovice, 779 00</dd>
            </div>
            <div>
              <dt>Kontakt</dt>
              <dd>
                <a href="tel:+420602717223">602 717 223</a> ·{" "}
                <a href="mailto:info@sancofasady.cz">info@sancofasady.cz</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="sf-trust-media">
          <img
            src="/section-2.webp"
            alt="Hotová realizace zateplené fasády od firmy SANCO v Olomouci"
            className="sf-media-img"
          />
        </div>
      </section>
    </main>
  );
}
