import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rámování obrazů Petr Pavliňák — Ostrava | Výtvarné centrum Chagall",
  description:
    "Ruční rámování a paspartování obrazů, grafik a fotografií v Ostravě. Restaurátorská dílna, prodejna výtvarných potřeb a galerie. Poradíme s výběrem lišty, skla i pasparty.",
  openGraph: {
    title: "Rámování obrazů Petr Pavliňák — Ostrava",
    description:
      "Ruční rámování, paspartování a restaurování obrazů v Ostravě. Vybereme lištu i pasparty přesně k vašemu dílu.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    cislo: "01",
    nazev: "Rámování a paspartování",
    popis:
      "Obraz, grafiku i plakát zarámujeme na míru. Vyberete si z lišt od jemných hliníkových profilů po masivní zlacené dřevo. Pasparta se řeže ručně, s přesahem a okem pro každý formát.",
    detail: "Lišty · pasparty · antireflexní sklo",
  },
  {
    cislo: "02",
    nazev: "Restaurátorská dílna",
    popis:
      "Staré obrazy, poškozené rámy i zežloutlé pasparty vracíme do života. Ošetříme plátno, doplníme štuk, sjednotíme zlacení — tak, aby zásah nebyl vidět.",
    detail: "Plátno · zlacení · konzervace",
  },
  {
    cislo: "03",
    nazev: "Prodejna výtvarných potřeb",
    popis:
      "Plátna, barvy, štětce, skicáky a papíry pro malíře i studenty. Poradíme, co se hodí k technice, na které pracujete. Přijďte si osahat materiál naživo.",
    detail: "Plátna · barvy · papíry",
  },
];

export default function Page() {
  return (
    <main className="pp">
      <header className="pp-nav" aria-label="Hlavní navigace">
        <a className="pp-brand" href="#" aria-label="Petr Pavliňák — rámování obrazů, domů">
          <span className="pp-brand-name">Pavliňák</span>
          <span className="pp-brand-sub">rámování obrazů · Ostrava</span>
        </a>
        <nav className="pp-menu">
          <a href="#sluzby">Co děláme</a>
          <a href="#dilna">Dílna</a>
          <a className="pp-menu-cta" href="tel:+420596000000">Zavolat</a>
        </nav>
      </header>

      <section className="pp-hero" aria-labelledby="hero-nadpis">
        <div className="pp-hero-frame">
          <img
            className="pp-hero-img"
            src="/hero.webp"
            alt="Zarámovaný obraz v profilované liště na stěně výtvarného centra Chagall v Ostravě"
            width={1200}
            height={900}
          />
          <span className="pp-hero-mat" aria-hidden="true" />
        </div>
        <div className="pp-hero-text">
          <p className="pp-eyebrow">Ruční rámařská dílna od roku 1991</p>
          <h1 id="hero-nadpis">
            Kolem každého<br />
            obrazu je<br />
            <em>rám, který drží.</em>
          </h1>
          <p className="pp-lede">
            Vyberete lištu, pasparta se ořízne přesně k formátu, sklo padne bez
            vzduchu. V Ostravě rámujeme obrazy, grafiky i fotografie tak, aby dílo
            vydrželo generace — a vypadalo, že vždycky patřilo přesně sem.
          </p>
          <div className="pp-hero-actions">
            <a className="pp-btn" href="tel:+420596000000">Zavolat do dílny</a>
            <a className="pp-btn pp-btn-ghost" href="mailto:chagall@chagall.cz">
              Napsat e-mail
            </a>
          </div>
          <dl className="pp-hero-facts">
            <div>
              <dt>Kde</dt>
              <dd>Ostrava &amp; Brušperk</dd>
            </div>
            <div>
              <dt>Na míru</dt>
              <dd>Každá pasparta ručně</dd>
            </div>
            <div>
              <dt>Také</dt>
              <dd>Galerie a prodejna</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pp-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pp-section-head">
          <p className="pp-eyebrow">Tři dílny pod jednou střechou</p>
          <h2 id="sluzby-nadpis">Co pro vás uděláme</h2>
        </div>
        <ol className="pp-cards">
          {sluzby.map((s) => (
            <li className="pp-card" key={s.cislo}>
              <span className="pp-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="pp-card-tag">{s.detail}</p>
            </li>
          ))}
        </ol>
        <figure className="pp-sluzby-fig">
          <img
            src="/section-1.webp"
            alt="Detail rámařské práce — profilované lišty a pasparty připravené k zarámování obrazu"
            width={1200}
            height={700}
            loading="lazy"
          />
          <figcaption>
            Vzorník lišt a paspart máme přímo v dílně — přineste obraz a
            přiložíme ho ke každé variantě.
          </figcaption>
        </figure>
      </section>

      <section className="pp-dilna" id="dilna" aria-labelledby="dilna-nadpis">
        <figure className="pp-dilna-fig">
          <img
            src="/section-2.webp"
            alt="Výtvarné centrum Chagall v Ostravě — galerie se zarámovanými díly"
            width={1000}
            height={1200}
            loading="lazy"
          />
        </figure>
        <div className="pp-dilna-text">
          <p className="pp-eyebrow">O nás</p>
          <h2 id="dilna-nadpis">
            Výtvarné centrum <span className="pp-chagall">Chagall</span>
          </h2>
          <p>
            Petr Pavliňák vede v Ostravě rámařskou a restaurátorskou dílnu, dvě
            galerie a prodejnu výtvarných potřeb. Nejsme jen obchod s lištami —
            připravujeme výstavy, vydáváme publikace a známe cenu, kterou má
            obraz pro toho, kdo ho přinese.
          </p>
          <ul className="pp-list">
            <li>
              <span>Galerie Ostrava</span>
              Stálá nabídka i sezónní výstavy českého umění a fotografie.
            </li>
            <li>
              <span>Galerie Brušperk</span>
              Druhý výstavní prostor a odkaz malířky Heleny Salichové.
            </li>
            <li>
              <span>Rámujeme i pro sběratele</span>
              Od jednoho plakátu po celé sbírky — s citem pro dílo i rozpočet.
            </li>
          </ul>
          <p className="pp-note">
            Přijďte se poradit osobně. Obraz vám u nás přiložíme k reálným
            lištám dřív, než cokoli objednáte.
          </p>
        </div>
      </section>
    </main>
  );
}
